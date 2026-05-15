## 2025-05-15 - [Mobile Menu Accessibility & Animation]
**Learning:** Icon-only toggles like mobile menus must have `aria-label`, `aria-expanded`, and `aria-controls` for screen reader compatibility. Adding `tailwindcss-animate` utility classes (`animate-in`, `fade-in`, `slide-in-from-top-X`) provides a polished UX with minimal code.
**Action:** Always check mobile navigation components for missing ARIA attributes and apply consistent animation patterns across all dropdowns/modals.
