import ScrollReveal from '../ui/ScrollReveal'

const STEPS = [
  { num: '01', title: '免費諮詢', desc: '學生測試與學術評估' },
  { num: '02', title: '項目簽約', desc: '確認目標方案與規劃' },
  { num: '03', title: '制定規劃', desc: '學業計畫 + 選校策略' },
  { num: '04', title: '社大錄取', desc: '申請美國社區大學' },
  { num: '05', title: '課程輔導', desc: '兩年全科作業 & 考試' },
  { num: '06', title: '背景提升', desc: '科研 / 實習 / 課外活動' },
  { num: '07', title: '轉學申請', desc: '文書 / 面試 / 選校' },
  { num: '08', title: '名校錄取', desc: '目標大學 Offer 到手 🎉' },
]

// Gradient stops: cyan → blue across 8 steps
const STEP_COLORS = [
  '#4DD9EC', '#3DCEE4', '#2DC3DB', '#1DB8D2',
  '#0DADC9', '#009FC0', '#0088AD', '#0066CC',
]

export default function ProcessTimeline() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">

        {/* ── Header — centered, no label tag ── */}
        <ScrollReveal className="mb-14 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-dfa-dark mb-4 leading-tight">
            從諮詢到<span style={{ background: 'linear-gradient(135deg,#4DD9EC,#0066CC)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>拿到 Offer</span>
          </h2>
          <p className="text-dfa-muted text-base leading-relaxed">
            全程 8 個步驟，每一步都有顧問陪你走完。
          </p>
        </ScrollReveal>

        {/* ── Grid ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {STEPS.map((step, i) => {
            const color = STEP_COLORS[i]
            const isLast = i === STEPS.length - 1
            return (
              <ScrollReveal key={step.num} delay={i * 0.06}>
                <div
                  className="relative rounded-lg bg-white border border-dfa-border p-5 pt-6
                             hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full"
                  style={{ borderTopColor: color, borderTopWidth: '3px' }}
                >
                  {/* Step circle */}
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-xs font-black mb-4 shadow-sm"
                    style={{ background: `linear-gradient(135deg, ${color}, ${STEP_COLORS[Math.min(i + 2, 7)]})` }}
                  >
                    {step.num}
                  </div>

                  <h4 className="font-bold text-dfa-dark text-base mb-1.5 leading-snug">
                    {step.title}
                  </h4>
                  <p className="text-dfa-muted text-sm leading-relaxed">
                    {step.desc}
                  </p>

                  {/* Connector dot (desktop, not on last of each row or last step) */}
                  {!isLast && i % 4 !== 3 && (
                    <div
                      className="hidden md:flex absolute top-[1.85rem] -right-3 z-10
                                 w-6 h-6 rounded-full border-2 border-white shadow-sm
                                 items-center justify-center"
                      style={{ background: color }}
                    >
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M1.5 4h5M4.5 1.5L7 4l-2.5 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* ── Bottom progress bar ── */}
        <ScrollReveal delay={0.5}>
          <div className="mt-10 flex items-center gap-3 max-w-sm mx-auto">
            <span className="text-xs text-dfa-muted font-medium whitespace-nowrap">開始</span>
            <div className="flex-1 h-1.5 rounded-full overflow-hidden bg-dfa-border">
              <div className="h-full bg-dfa-gradient rounded-full w-full" />
            </div>
            <span className="text-xs text-dfa-blue font-bold whitespace-nowrap">🎉 拿到 Offer</span>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
