## 2025-05-14 - [Navbar Accessibility and Animation]
**Learning:** Standard mobile menu toggles often lack proper ARIA attributes (`aria-expanded`, `aria-controls`), making them difficult for screen reader users to navigate. Adding simple `tailwindcss-animate` entrance animations significantly improves the perceived quality of the interaction.
**Action:** Always include ARIA attributes on toggle buttons and use `animate-in` with subtle transitions for dynamic UI elements.
