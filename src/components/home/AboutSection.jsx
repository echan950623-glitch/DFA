import ScrollReveal from '../ui/ScrollReveal'

const PROOF_POINTS = [
  { label: '客製化轉學規劃', sub: '依每位學生背景量身制定升學路徑' },
  { label: '合約保障錄取', sub: '未達標準全額退費，零風險承諾' },
  { label: '加州在地資源', sub: '美國當地顧問與學校直接對接' },
  { label: '台美全程支援', sub: '台北 台中 高雄 加州，全程無斷點' },
]

export default function AboutSection() {
  return (
    <>
      {/* ── 關於我們 ── */}
      <section className="section-padding bg-white">
        <div className="container-max w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left: text */}
            <ScrollReveal>
              <p className="text-xs font-semibold text-dfa-blue uppercase tracking-[0.18em] mb-3">
                Who We Are
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-dfa-dark mb-6 leading-tight">
                關於我們
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                <span className="font-bold text-dfa-dark">夢想家留學 Dream Future Academy</span>{' '}
                成立於高雄市，擁有多年國外升學輔導經驗，並於台北、台中及美國加州設有辦公室據點，
                是一所專注於美國加州大學系統（University of California System）轉學申請規畫
                的留學教育機構。
              </p>
            </ScrollReveal>

            {/* Right: proof-point grid */}
            <ScrollReveal delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {PROOF_POINTS.map((p) => (
                  <div
                    key={p.label}
                    className="rounded-lg border border-dfa-border bg-dfa-surface p-5 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
                  >
                    <div className="text-sm font-bold text-dfa-dark mb-1">{p.label}</div>
                    <div className="text-xs text-dfa-muted leading-relaxed">{p.sub}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ── 願景 ── */}
      <section className="section-padding bg-dfa-dark">
        <div className="container-max w-full">
          <div className="max-w-3xl mx-auto text-center">

            <ScrollReveal>
              <p className="text-xs font-semibold text-dfa-cyan uppercase tracking-[0.18em] mb-4">
                Our Vision
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                願景
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                我們的核心理念是讓學生{' '}
                <strong className="text-white font-bold">
                  不因背景或資源限制而錯失進入世界頂尖大學的機會
                </strong>
                ，透過系統化的升學規畫與申請輔導，協助學生進入加州大學系統及美國頂尖大學。
              </p>
            </ScrollReveal>

            {/* 核心引言 */}
            <ScrollReveal delay={0.25}>
              <blockquote className="my-8 py-6 px-8 rounded-lg bg-white/5 border border-dfa-cyan/30">
                <p className="text-white text-2xl md:text-3xl font-black leading-snug">
                  每一個背景，都值得一條<br className="hidden sm:block" />
                  <span className="text-dfa-cyan">通往頂尖大學的路。</span>
                </p>
              </blockquote>
            </ScrollReveal>

            <ScrollReveal delay={0.35}>
              <div className="space-y-4 text-white/70 text-base leading-relaxed text-left">
                <p>
                  Dream Future Academy 長期關注美國高等教育體系與轉學政策發展，
                  持續與國外教育資源保持交流合作，為學生提供最新且專業的申請資訊與策略建議。
                </p>
                <p>
                  我們提供完整的社區大學轉學規畫輔導，包含{' '}
                  <strong className="text-white font-semibold">
                    Community College Transfer Pathway
                  </strong>
                  、學業規畫建議及申請文件指導，協助學生打造多元且穩定的升學路徑。
                </p>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>
    </>
  )
}
