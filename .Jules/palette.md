## 2025-05-15 - [PR Hygiene and Scope Creep]
**Learning:** Even small UX improvements should stay strictly within the requested scope (e.g., "ONE micro-UX improvement") to ensure focused PRs and avoid unnecessary review overhead. Inclusion of environment artifacts like logs or lockfiles (if not needed) significantly degrades PR quality.
**Action:** Always double-check `git status` or equivalent to ensure no unintended files are staged. Adhere strictly to the requested number of enhancements.
