import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

type HorizontalPosition = 'left' | 'right' | 'center';
type VerticalPosition = 'top' | 'bottom' | 'center';

interface PopoverProps {
  triggerRef: React.RefObject<HTMLElement>;
  isOpen: boolean;
  onClose: () => void;
  horizontalPosition?: HorizontalPosition;
  verticalPosition?: VerticalPosition;
  children: React.ReactNode;
}

const Popover: React.FC<PopoverProps> = ({
  triggerRef,
  isOpen,
  onClose,
  horizontalPosition = 'left',
  verticalPosition = 'bottom',
  children,
}) => {
  const popoverRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({
    position: 'absolute',
    visibility: 'hidden',
    top: '0px',
    left: '0px',
    zIndex: 9999,
  });

  // Positioning
  useLayoutEffect(() => {
    if (!isOpen || !triggerRef.current || !popoverRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const popoverEl = popoverRef.current;

    const offset = 8;
    let top = 0;
    let left = 0;

    // Vertical position
    if (verticalPosition === 'top') {
      top = triggerRect.top - popoverEl.offsetHeight - offset;
    } else if (verticalPosition === 'bottom') {
      top = triggerRect.bottom + offset;
    } else {
      // center
      top =
        triggerRect.top + triggerRect.height / 2 - popoverEl.offsetHeight / 2;
    }

    if (horizontalPosition === 'left') {
      left = triggerRect.left - popoverEl.offsetWidth; // shift popover to the left
    } else if (horizontalPosition === 'right') {
      left = triggerRect.right; // shift popover to the right
    } else {
      // center
      left =
        triggerRect.left + triggerRect.width / 2 - popoverEl.offsetWidth / 2;
    }

    setStyle({
      position: 'absolute',
      top: `${top + window.scrollY}px`,
      left: `${left + window.scrollX}px`,
      visibility: 'visible',
      zIndex: 9999,
    });
  }, [isOpen, triggerRef, horizontalPosition, verticalPosition]);

  // Outside click detection
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const popoverEl = popoverRef.current;
      const triggerEl = triggerRef.current;
      if (
        popoverEl &&
        !popoverEl.contains(event.target as Node) &&
        triggerEl &&
        !triggerEl.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose, triggerRef]);



  return ReactDOM.createPortal(
    <div
      ref={popoverRef}
      style={{ ...style, display: isOpen ? 'block' : 'none' }}
    >
      {children}
    </div>,
    document.body
  );
};

export default Popover;
