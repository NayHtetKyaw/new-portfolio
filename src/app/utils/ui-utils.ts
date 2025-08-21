// UI Utilities - Design system helpers

export const uiColors = {
  background: 'rgba(255, 255, 255, 0.95)',
  gray: {
    200: 'rgba(107, 114, 128, 0.2)',
    400: 'rgba(156, 163, 175, 0.3)',
  },
  blue: '#007aff',
  foreground: '#1d1d1f',
} as const;

// Animation utility function
export const createTransition = (
  property: string = 'all',
  duration: string = '300ms',
  easing: string = 'cubic-bezier(0.33, 1, 0.68, 1)'
) => {
  return `${property} ${duration} ${easing}`;
};
