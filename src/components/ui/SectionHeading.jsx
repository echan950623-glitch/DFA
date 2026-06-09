/**
 * SectionHeading — typography hierarchy
 *
 * 3 modes:
 *  default  → eyebrow + H2 + subtitle below
 *  split    → eyebrow + H2 left | subtitle right (xl grid), stacked below
 *  center   → everything centered (for CTA sections)
 *
 * H2 uses restrained fluid sizing so Chinese headings stay readable without awkward wraps.
 */
export default function SectionHeading({
  label,
  title,
  subtitle,
  light = false,
  split = false,
  center = false,
}) {
  const h2Color  = light ? 'text-white' : 'text-txt-primary'
  const eyeColor = light ? 'text-white' : 'text-dfa-blue'
  const subColor = light ? 'text-white' : 'text-txt-muted'

  const h2Style = { fontSize: 'clamp(1.5rem, 0.95rem + 1.8vw, 2.75rem)' }

  const eyebrow = label && (
    <p className={`text-eyebrow uppercase mb-3 ${eyeColor}`}>{label}</p>
  )

  /* ── Split: stacked → xl side-by-side via grid (no flex shrink issues) ── */
  if (split && subtitle) {
    return (
      <div className="mb-heading-gap">
        {eyebrow}
        <div className="flex flex-col gap-3 xl:grid xl:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] xl:items-baseline xl:gap-12">
          <h2 className={`leading-tight font-black xl:max-w-[560px] min-w-0 ${h2Color}`} style={h2Style}>
            {title}
          </h2>
          <p className={`text-sm md:text-body leading-relaxed min-w-0 ${subColor}`}>
            {subtitle}
          </p>
        </div>
      </div>
    )
  }

  /* ── Center ── */
  if (center) {
    return (
      <div className="mb-heading-gap text-center">
        {eyebrow}
        <h2 className={`leading-tight font-black mb-3 ${h2Color}`} style={h2Style}>
          {title}
        </h2>
        {subtitle && (
          <p className={`text-sm md:text-body max-w-xl mx-auto ${subColor}`}>{subtitle}</p>
        )}
      </div>
    )
  }

  /* ── Default: left-aligned, vertical stack ── */
  return (
    <div className="mb-heading-gap">
      {eyebrow}
      <h2 className={`leading-tight font-black mb-3 ${h2Color}`} style={h2Style}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-sm md:text-body max-w-xl ${subColor}`}>{subtitle}</p>
      )}
    </div>
  )
}
