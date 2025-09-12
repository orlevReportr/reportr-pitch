Visual Standards

- Typography: Use `.h1`, `.h2`, `.h3`, `.h4` for headings; `.lead`, `.body`, `.body-sm`, `.overline` for body text. `.font-display` applies the Playfair display font to headings.
- Spacing: Use `.section-y` for vertical section padding and `.container-px` for consistent horizontal padding alongside `container mx-auto`.
- Colors: Use semantic tokens; treat brand green as `text-primary` for text/icons and `bg-primary` for fills. Use `text-success`/`bg-success` for semantic success, and reserve `accent` mostly for subtle surfaces (e.g., `bg-accent/5`) rather than text. Avoid raw hex values.
- Buttons: Keep using `components/ui/button.tsx` variants (`default`, `outline`, `secondary`, `ghost`, `destructive`, `link`) and sizes (`sm`, `default`, `lg`, `icon`).
- Cards: Prefer semantic tokens (`bg-card`, `border`, `text-foreground`) and subtle accents with `/5`–`/20` opacities.
- Gradients: Use `.gradient-text` for brand gradient headings only.

Implementation Notes

- All utilities are defined in `app/globals.css` under `@layer utilities`.
- Section components have been refactored to these utilities for consistency.
- Removed unused `styles/globals.css` to avoid conflicting tokens.
- Added `--success`/`--warning` tokens and mapped as `text-success`, `bg-success`, `text-warning`, `bg-warning`.

Next Steps

- Success and warning tokens already added; use semantic classes instead of raw colors.
- Optionally refactor remaining inline sizes in cards/lists to `.body`, `.body-sm`.
