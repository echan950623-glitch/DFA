import ScrollReveal from '../ui/ScrollReveal'

const TESTIMONIALS = [
  {
    name: '陳同學',
    from: '台北 → Santa Monica College',
    result: '轉入 UCLA 資訊工程系',
    gpa: '3.9',
    quote: '原本以為自己的成績沒希望進 UCLA，顧問幫我選課、寫 PS，最後錄取通知來的那天我哭了。',
    avatar: 'C',
    color: '#1A9AE6',
  },
  {
    name: '林同學',
    from: '高雄 → Diablo Valley College',
    result: '轉入 UC Berkeley 經濟系',
    gpa: '3.85',
    quote: '2+2 路線比直接申請省了將近一半的學費，而且 UCB 的錄取率比我想像的高很多。',
    avatar: '林',
    color: '#0D47A1',
  },
  {
    name: '王同學',
    from: '台中 → 社區大學',
    result: '轉入 UCSD 生物系',
    gpa: '3.7',
    quote: '每週都有顧問追蹤課業狀況，不是交錢然後自己摸索，真的感覺有人在陪你走。',
    avatar: '王',
    color: '#2DD8EE',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-dfa-dark overflow-hidden">
      <div className="container-max">

        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-dfa-cyan uppercase tracking-[0.2em] mb-3">Student Stories</p>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              他們做到了
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.12}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 hover:border-white/20 transition-all duration-300 flex flex-col h-full">

                {/* Quote mark */}
                <div className="text-4xl font-serif leading-none mb-4" style={{ color: t.color }}>"</div>

                {/* Quote text */}
                <p className="text-white/80 text-sm leading-relaxed flex-1 mb-6 italic">
                  {t.quote}
                </p>

                {/* Divider */}
                <div className="h-px bg-white/10 mb-4" />

                {/* Student info */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                    style={{ background: `linear-gradient(135deg, ${t.color}88, ${t.color})` }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-bold text-sm">{t.name}</span>
                      <span
                        className="text-xs font-semibold px-2 py-0.5 rounded-full"
                        style={{ background: `${t.color}22`, color: t.color }}
                      >
                        GPA {t.gpa}
                      </span>
                    </div>
                    <p className="text-white/40 text-xs mt-0.5">{t.from}</p>
                    <p className="text-xs font-semibold mt-0.5" style={{ color: t.color }}>{t.result}</p>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}
