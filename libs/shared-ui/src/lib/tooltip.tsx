import React, { ReactNode, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

type TooltipProps = {
  children: ReactNode;
  text: string;
};

const Tooltip: React.FC<TooltipProps> = ({ children, text }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [style, setStyle] = useState<React.CSSProperties>({
    position: 'absolute',
    top: `0px`,
    left: `0px`,
    zIndex: 9000,
  });
  const tooltipRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isVisible || !tooltipRef.current || !triggerRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tooltipEl = tooltipRef.current;

    const offset = 8;
    const top = triggerRect.top - tooltipEl.offsetHeight - offset;
    const left =
      triggerRect.left + triggerRect.width / 2 - tooltipEl.offsetWidth / 2;

    setStyle({
      position: 'absolute',
      top: `${top + window.scrollY}px`,
      left: `${left + window.scrollX}px`,
      zIndex: 9000,
    });
  }, [isVisible]);

  return (
    <div
      ref={triggerRef}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      className="inline-block"
    >
      {children}
      {ReactDOM.createPortal(
        <div
          ref={tooltipRef}
          style={{ ...style, display: isVisible ? 'block' : 'none' }}
          className="bg-gray-700 text-white text-xs rounded py-1 px-2 "
        >
          {text}
        </div>,
        document.body
      )}
    </div>
  );
};

export default Tooltip;
