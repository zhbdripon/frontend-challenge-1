import { useEffect, useState } from 'react';

export const SCREEN_BREAKPOINTS = {
  lg: 1024,
  md: 768,
  sm: 640,
  xs: 0,
};

export function useScreenSize() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isLargeScreen = width >= SCREEN_BREAKPOINTS.lg;
  const isMediumScreen =
    width >= SCREEN_BREAKPOINTS.md && width < SCREEN_BREAKPOINTS.lg;
  const isSmallScreen =
    width >= SCREEN_BREAKPOINTS.sm && width < SCREEN_BREAKPOINTS.md;
  const isXSmallScreen =
    width > SCREEN_BREAKPOINTS.xs && width < SCREEN_BREAKPOINTS.sm;

  return {
    width,
    height,
    isLargeScreen,
    isMediumScreen,
    isSmallScreen,
    isXSmallScreen,
  };
}
