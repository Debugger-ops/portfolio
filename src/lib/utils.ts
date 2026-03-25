// src/lib/utils.ts

/**
 * Utility to conditionally join class names
 */
export const cn = (...classes: (string | undefined | null | false)[]) => {
  return classes.filter(Boolean).join(' ');
};

// You can add more utilities here later
// export const anotherUtil = () => { ... }