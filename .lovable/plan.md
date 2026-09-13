# Portfolio polish plan

## Changes
- Add a compact light/dark mode control to the existing header, with saved preference and system-theme fallback.
- Extend the current color tokens with a coordinated dark palette while preserving the existing editorial visual style.
- Add restrained Framer Motion entrances to section headings and content, including staggered project rows and a smoother project hover response.
- Keep the existing anchor navigation and improve smooth scrolling with sticky-header offset and accessible focus/active states.
- Tighten narrow-screen grids, text wrapping, controls, and spacing without changing the current file or section structure.

## Validation
- Check the live page at mobile, tablet, and desktop widths for overflow, overlap, and broken navigation.
- Verify theme switching, section links, animations, reduced-motion behavior, and current build diagnostics.

## Technical details
- Continue using the installed `motion/react` package for Framer Motion behavior.
- Apply theme state by toggling the existing `.dark` class on the document root after hydration.
- Use semantic design tokens in the shared stylesheet rather than hardcoded component colors.
