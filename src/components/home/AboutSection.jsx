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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left: text */}
            <ScrollReveal>
              <p className="text-xs font-semibold text-dfa-blue uppercase tracking-[0.2em] mb-4">
                Who We Are
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-dfa-dark mb-6 leading-tight">
                關於我們
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                <span className="font-bold text-dfa-dark">夢想家留學 Dream Future Academy</span>{' '}
                成立於高雄市，擁有多年國外升學輔導經驗，並於台北、台中及美國加州設有辦公室據點，
                是一所專注於美國加州大學系統（University of California System）轉學申請規畫
                的留學教育機構。
              </p>
            </ScrollReveal>

            {/* Right: proof-point rows (no card boxes) */}
            <ScrollReveal delay={0.15}>
              <div className="divide-y divide-gray-100">
                {PROOF_POINTS.map((p) => (
                  <div key={p.label} className="flex items-start gap-4 py-5 first:pt-0 last:pb-0">
                    <div className="w-0.5 h-full self-stretch min-h-[2.5rem] shrink-0"
                      style={{ background: 'linear-gradient(to bottom, #2DD8EE, #1040CC)' }}
                    />
                    <div>
                      <div className="font-bold text-dfa-dark text-sm mb-0.5">{p.label}</div>
                      <div className="text-sm text-dfa-muted leading-relaxed">{p.sub}</div>
                    </div>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: heading */}
            <ScrollReveal>
              <p className="text-xs font-semibold text-dfa-cyan uppercase tracking-[0.2em] mb-4">
                Our Vision
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                每一個背景，<br />
                都值得一條<br />
                <span className="text-dfa-cyan">通往頂尖大學的路。</span>
              </h2>
            </ScrollReveal>

            {/* Right: body text */}
            <ScrollReveal delay={0.15}>
              <div className="space-y-5 text-white/70 text-base leading-relaxed">
                <p>
                  我們的核心理念是讓學生{' '}
                  <strong className="text-white font-semibold">
                    不因背景或資源限制而錯失進入世界頂尖大學的機會
                  </strong>
                  ，透過系統化的升學規畫與申請輔導，協助學生進入加州大學系統及美國頂尖大學。
                </p>
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
