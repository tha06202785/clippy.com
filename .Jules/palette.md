## 2026-05-19 - [Accessibility and Feedback Polish]
**Learning:** For mobile menu transitions, use `animate-in slide-in-from-top-5 fade-in duration-200` to provide a polished entry effect for the user. Always include `aria-label`, `aria-expanded`, and `aria-controls` for icon-only toggles.
**Action:** When creating mobile menus or any toggleable UI, apply these standard accessibility attributes and subtle animations by default. Ensure `Toaster` is globally rendered in `RootLayout`.
