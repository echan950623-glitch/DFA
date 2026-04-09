import ScrollReveal from '../ui/ScrollReveal'
import DecoBlob from '../ui/DecoBlob'
import DecoDots from '../ui/DecoDots'

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
      <section className="section-padding bg-white relative overflow-hidden">
        {/* DFA 裝飾 blob */}
        <DecoBlob position="bottom-right" size="lg" opacity={0.06} />
        <DecoDots position="top-8 right-12" cols={6} rows={6} opacity={0.1} />

        <div className="container-max relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left */}
            <ScrollReveal>
              <p className="text-eyebrow text-dfa-blue uppercase mb-4">Who We Are</p>
              <h2 className="text-h2 text-txt-primary mb-6">關於我們</h2>
              <p className="text-body text-txt-secondary leading-relaxed">
                <span className="font-bold text-txt-primary">夢想家留學 Dream Future Academy</span>{' '}
                成立於高雄市，擁有多年國外升學輔導經驗，並於台北、台中及美國加州設有辦公室據點，
                是一所專注於美國加州大學系統（University of California System）轉學申請規畫
                的留學教育機構。
              </p>
            </ScrollReveal>

            {/* Right: proof-point rows with cyan accent */}
            <ScrollReveal delay={0.15}>
              <div className="space-y-0">
                {PROOF_POINTS.map((p) => (
                  <div key={p.label} className="flex items-start gap-5 py-6 border-b border-gray-100 last:border-0">
                    <div className="w-1 self-stretch min-h-[3rem] shrink-0 rounded-full"
                      style={{ background: 'linear-gradient(to bottom, #22D4EC, #1A75F5)' }}
                    />
                    <div>
                      <div className="text-h3 text-txt-primary mb-1">{p.label}</div>
                      <div className="text-body text-txt-muted">{p.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ── 願景 ── 用 DFA 漸層背景，跟 PDF page 1-2 一致 */}
      <section className="section-padding relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #2DD8EE 0%, #1A9AE6 30%, #1040CC 100%)' }}
      >
        {/* Dot grid overlay like Hero */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        <div className="container-max relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <ScrollReveal>
              <p className="text-eyebrow text-white/60 uppercase mb-4">Our Vision</p>
              <h2 className="text-h1 text-white leading-tight">
                每一個背景，<br />
                都值得一條<br />
                <span className="text-dfa-cyan">通往頂尖大學的路。</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="space-y-5 text-body text-white/70 leading-relaxed">
                <p>
                  我們的核心理念是讓學生{' '}
                  <strong className="text-white font-semibold">
                    不因背景或資源限制而錯失進入世界頂尖大學的機會
                  </strong>
                  ，透過系統化的升學規畫與申請輔導，協助學生進入加州大學系統及美國頂尖大學。
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
