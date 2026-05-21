## 2025-05-14 - Mobile Navbar Accessibility and Animation
**Learning:** Mobile menu toggles often lack the necessary ARIA attributes (aria-label, aria-expanded, aria-controls) to be fully accessible to screen reader users. Additionally, adding a subtle entrance animation (slide and fade) makes the interaction feel more intentional and less jarring.
**Action:** Always include ARIA attributes for mobile menu toggles and use `tailwindcss-animate` for smooth state transitions in the Navbar component.
