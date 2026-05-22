import ScrollReveal from '../ui/ScrollReveal'

/**
 * Shared bottom-of-page CTA banner.
 * variant:
 *   'campus'   — campus photo background with dark overlay (default for sub-pages)
 *   'gradient' — brand-blue gradient (used on home page)
 *   'plain'    — solid white / light, dark text
 */
export default function CTABanner({
  heading = '準備好開始築夢了嗎？',
  subtitle = '一對一顧問免費諮詢，為你規劃最適合的升學路徑',
  buttonText = '立即預約免費諮詢',
  href = 'https://lin.ee/O1ejJf7',
  variant = 'campus',
}) {
  const isDark = variant === 'campus' || variant === 'gradient'

  if (variant === 'campus') {
    return (
      <section className="relative overflow-hidden min-h-[420px] md:min-h-[520px] flex items-center">
        <img
          src="/images/campus.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 container-max text-center px-4 py-16">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl md:text-h2 font-black mb-4 leading-tight text-white">
              {heading}
            </h2>
            {subtitle && (
              <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto text-white/90">
                {subtitle}
              </p>
            )}
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-bold rounded-md px-10 py-4 bg-white text-dfa-blue hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {buttonText}
            </a>
          </ScrollReveal>
        </div>
      </section>
    )
  }

  const bgClass = variant === 'gradient' ? 'bg-dfa-gradient' : 'bg-white'
  return (
    <section className={`${bgClass} section-padding`}>
      <div className="container-max text-center">
        <ScrollReveal>
          <h2 className={`text-3xl sm:text-4xl md:text-h2 font-black mb-4 leading-tight ${isDark ? 'text-white' : 'text-txt-primary'}`}>
            {heading}
          </h2>
          {subtitle && (
            <p className={`text-base md:text-lg mb-8 max-w-2xl mx-auto ${isDark ? 'text-white/90' : 'text-txt-secondary'}`}>
              {subtitle}
            </p>
          )}
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block font-bold rounded-md px-10 py-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
              isDark ? 'bg-white text-dfa-blue' : 'bg-dfa-blue text-white'
            }`}
          >
            {buttonText}
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
