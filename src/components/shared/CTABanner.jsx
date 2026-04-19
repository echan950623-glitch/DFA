import ScrollReveal from '../ui/ScrollReveal'

/**
 * Shared bottom-of-page CTA banner.
 * Renders a gradient-blue (or white) section with heading, subtitle and a
 * LINE consultation button. Use across pages that need a consistent CTA.
 */
export default function CTABanner({
  heading = '準備好開始築夢了嗎？',
  subtitle = '一對一顧問免費諮詢，為你規劃最適合的升學路徑',
  buttonText = '立即預約免費諮詢',
  href = 'https://lin.ee/O1ejJf7',
  variant = 'gradient',
}) {
  const isGradient = variant === 'gradient'
  return (
    <section className={isGradient ? 'bg-dfa-gradient section-padding' : 'section-padding bg-white'}>
      <div className="container-max text-center">
        <ScrollReveal>
          <h2 className={`text-4xl sm:text-5xl md:text-h2 font-black mb-4 leading-tight ${isGradient ? 'text-white' : 'text-txt-primary'}`}>
            {heading}
          </h2>
          {subtitle && (
            <p className={`text-base md:text-lg mb-8 max-w-2xl mx-auto ${isGradient ? 'text-white/90' : 'text-txt-secondary'}`}>
              {subtitle}
            </p>
          )}
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block font-bold rounded-md px-10 py-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
              isGradient ? 'bg-white text-dfa-blue' : 'bg-dfa-blue text-white'
            }`}
          >
            {buttonText}
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
