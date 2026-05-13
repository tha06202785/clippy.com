# Palette's Journal - NestAI UX Learnings

## 2024-05-23 - Navbar Accessibility & Interaction
**Learning:** Mobile menus often lack proper ARIA attributes, making them difficult for screen reader users to understand the state of the toggle. Standardizing `aria-expanded`, `aria-controls`, and `aria-label` on the trigger button, and providing a matching `id` on the menu container, significantly improves accessibility. Additionally, subtle animations (like those from `tailwindcss-animate`) provide visual affordance for state changes, making the UI feel more responsive and polished.
**Action:** Always include ARIA attributes for togglable UI elements and consider subtle entry/exit animations for better visual feedback.
