import ScrollReveal from '../ui/ScrollReveal'

const STATS = [
  { num: '300+', label: '輔導學員' },
  { num: '95%', label: '目標校錄取率' },
  { num: '8', label: '年專業經驗' },
  { num: '4', label: '城市服務據點' },
]

export default function StatsBar() {
  return (
    <section className="bg-dfa-dark py-12">
      <div className="container-max">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 0.08}>
              <div className="text-center">
                <div
                  className="text-5xl md:text-6xl font-black mb-2 leading-none"
                  style={{
                    background: 'linear-gradient(to right, #2DD8EE, #60A5FA)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {s.num}
                </div>
                <div className="text-white/60 text-sm font-medium tracking-wide">{s.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
