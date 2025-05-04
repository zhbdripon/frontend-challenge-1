import { useState, useRef, useEffect } from 'react';

type Placement = 'top' | 'bottom' | 'left' | 'right' | 'bottom-left';

interface PopConfirmProps {
  title: string;
  onConfirm: () => void;
  onCancel?: () => void;
  children: React.ReactNode;
  placement?: Placement;
}

export const PopConfirm = ({
  title,
  onConfirm,
  onCancel,
  children,
  placement = 'bottom',
}: PopConfirmProps) => {
  const [visible, setVisible] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setVisible(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Dynamic placement
  const getPositionClasses = () => {
    switch (placement) {
      case 'top':
        return 'bottom-full mb-2 left-1/2 -translate-x-1/2';
      case 'bottom':
        return 'top-full mt-2 left-1/2 -translate-x-1/2';
      case 'left':
        return 'right-full mr-2 top-1/2 -translate-y-1/2';
      case 'right':
        return 'left-full ml-2 top-1/2 -translate-y-1/2';
      case 'bottom-left':
        return 'top-1/3 mt-2 right-1/2';
      default:
        return '';
    }
  };

  return (
    <div className="relative inline-block" ref={wrapperRef}>
      <span onClick={() => setVisible(!visible)} className="cursor-pointer">
        {children}
      </span>

      {visible && (
        <div
          className={`absolute z-10 w-64 rounded-lg shadow-lg bg-white border-1 p-4 transform ${getPositionClasses()}`}
        >
          <p className="text-gray-700 mb-4">{title}</p>
          <div className="flex justify-end gap-2">
            <button
              className="px-3 py-1 text-sm rounded bg-gray-200 hover:bg-gray-300"
              onClick={() => {
                onCancel?.();
                setVisible(false);
              }}
            >
              Cancel
            </button>
            <button
              className="px-3 py-1 text-sm rounded bg-red-500 text-white hover:bg-red-600"
              onClick={() => {
                onConfirm();
                setVisible(false);
              }}
            >
              Yes
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
