/**
 * SectionHeading — Crimson-style typography hierarchy
 *
 * 3 modes:
 *  default  → eyebrow + H2 + subtitle below
 *  split    → eyebrow + H2 left  |  subtitle right (desktop)
 *  center   → everything centered (for CTA sections)
 */
export default function SectionHeading({
  label,
  title,
  subtitle,
  light = false,
  split = false,
  center = false,
}) {
  const h2Color   = light ? 'text-white' : 'text-txt-primary'
  const eyeColor  = light ? 'text-white' : 'text-dfa-blue'
  const subColor  = light ? 'text-white' : 'text-txt-muted'

  const eyebrow = label && (
    <p className={`text-eyebrow uppercase mb-3 ${eyeColor}`}>{label}</p>
  )

  /* ── Split: title left, subtitle right ── */
  if (split && subtitle) {
    return (
      <div className="mb-heading-gap">
        {eyebrow}
        <div className="flex flex-col md:flex-row md:items-baseline gap-3 md:gap-10">
          <h2 className={`text-h2 shrink-0 ${h2Color}`}>{title}</h2>
          <p className={`text-body leading-relaxed ${subColor}`}>{subtitle}</p>
        </div>
      </div>
    )
  }

  /* ── Center ── */
  if (center) {
    return (
      <div className="mb-heading-gap text-center">
        {eyebrow}
        <h2 className={`text-h2 mb-3 ${h2Color}`}>{title}</h2>
        {subtitle && <p className={`text-body max-w-xl mx-auto ${subColor}`}>{subtitle}</p>}
      </div>
    )
  }

  /* ── Default: left-aligned, vertical stack ── */
  return (
    <div className="mb-heading-gap">
      {eyebrow}
      <h2 className={`text-h2 mb-3 ${h2Color}`}>{title}</h2>
      {subtitle && <p className={`text-body max-w-xl ${subColor}`}>{subtitle}</p>}
    </div>
  )
}
