# Recent Changes to baolab-site (preserve these!)

## Hero Section
- `<img>` replaced with `<video>` tag — autoplay, loop, muted, playsInline, poster fallback
- Video file: `public/hero-video.mp4` (39MB, do NOT delete)
- CSS: `.hero-video` class added alongside `.hero-bg img` for same styling

## Navbar (Header)
- `position: fixed; top: 0; left: 0; right: 0;` — always visible on screen
- Starts opaque (95%), becomes translucent on scroll (via `.header-scrolled`)
- Liquid glass: SVG refraction (::before), chromatic aberration, specular rim
- SVG filter definitions in layout.tsx (liquid-refract, glass-specular)

## Vehicle Selector
- `onAnimationEnd={e => e.currentTarget.classList.remove("vehicle-reveal")}` on each vehicle card
- This fixes the spotlight hover dim effect — CSS animation fill-mode: both was locking opacity:1
- DO NOT remove this handler or spotlight breaks again

## Footer
- `.footer-logo-img` has `max-width: 140px; object-fit: contain;` — prevents logo stretching

## Film Grain
- `body::after` with z-index: 1 (NOT 9999) — keeps it below interactive elements

## Custom Cursor
- `cursor: none !important` on all elements (via @media pointer: fine)
- Cursor component imported in layout.tsx
- `.cursor-ring` and `.cursor-dot` styles in globals.css

## Liquid Glass (iOS 26 style)
- Applied to: navbar, .btn-primary, .btn-ghost
- Uses SVG feDisplacementMap for refraction (layout.tsx)
- Buttons have ::before (refraction) and ::after (specular rim) pseudo-elements
- `isolation: isolate` on buttons for proper z-index stacking

## Skills Installed
- react-nextjs-development
- css-animation-patterns

## What Claude should ADD (not replace):
1. Extend liquid glass to: vehicle cards, pillar cards, all clickable elements
2. Make navbar a floating rounded-corner pill (not full-width)
3. Keep ALL existing changes above — do not overwrite them
