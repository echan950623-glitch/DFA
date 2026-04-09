/**
 * SectionHeading
 *
 * Props:
 *  label     – small eyebrow text above title (optional)
 *  title     – main heading (big, bold)
 *  subtitle  – description; if `split` is true, shown beside title on desktop
 *  light     – white variant (dark bg sections)
 *  split     – title left + subtitle right on md+ screens
 */
export default function SectionHeading({
  label,
  title,
  subtitle,
  light = false,
  split = false,
}) {
  const headingColor = light ? 'text-white' : 'text-gray-900'
  const labelColor   = light ? 'text-dfa-cyan' : 'text-dfa-blue'
  const subColor     = light ? 'text-white/50' : 'text-gray-400'

  if (split && subtitle) {
    return (
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
        <div>
          {label && (
            <p className={`text-xs font-semibold uppercase tracking-[0.2em] mb-2 ${labelColor}`}>
              {label}
            </p>
          )}
          <h2 className={`text-4xl md:text-5xl font-black leading-tight ${headingColor}`}>
            {title}
          </h2>
        </div>
        <p className={`text-base max-w-sm leading-relaxed ${subColor}`}>
          {subtitle}
        </p>
      </div>
    )
  }

  return (
    <div className="mb-10">
      {label && (
        <p className={`text-xs font-semibold uppercase tracking-[0.2em] mb-2 ${labelColor}`}>
          {label}
        </p>
      )}
      <h2 className={`text-4xl md:text-5xl font-black leading-tight mb-3 ${headingColor}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base max-w-xl ${subColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
