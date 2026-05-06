import { useRef, useEffect, useState } from 'react'
import ScrollReveal from '../ui/ScrollReveal'

/* ── 僅顯示多張榜單 offer 組合圖（橫向滑動輪播）── */
const OFFERS = [
  {
    school: 'Purdue / UC Berkeley / UF / NYU',
    schoolZh: '普渡大學 · 柏克萊 · 佛大 Warrington · 紐約大學 Tandon',
    major: '傳播 / 資工 / 商管碩 / 電腦工程碩',
    offer: '/images/cases/new-offers-a.jpg',
    color: '#C28422',
  },
  {
    school: 'UC Davis / UCSB / UCSD / UW-Madison',
    schoolZh: '加大戴維斯 · 聖芭芭拉 · 聖地牙哥 · 威斯康辛',
    major: '管理經濟 / 會計 / 政治學 / 理學',
    offer: '/images/cases/new-offers-b.jpg',
    color: '#002855',
  },
  {
    school: 'UCSB / Minnesota / Alberta / UCSD',
    schoolZh: '加大聖芭芭拉 · 明尼蘇達 · 亞伯達 · 加大聖地牙哥',
    major: '統計 / 資料科學 / 商管 / 國際關係',
    offer: '/images/cases/new-offers-c.jpg',
    color: '#1a5276',
  },
]

/* ── 跑馬燈學校名單 ── */
const TICKER_SCHOOLS = [
  'UCLA', 'UC Berkeley', 'UCSD', 'UCI', 'UCSB', 'UC Davis',
  'Columbia University', 'NYU', 'USC', 'Michigan', 'UNC Chapel Hill',
  'Purdue', 'UW-Madison', 'Boston University', 'UIUC',
]

export default function OfferBoard() {
  const tickerRef = useRef(null)
  const [current, setCurrent] = useState(0)
  const total = OFFERS.length

  /* ── Ticker animation ── */
  useEffect(() => {
    const el = tickerRef.current
    if (!el) return
    let frame
    let pos = 0
    const speed = 0.5
    const step = () => {
      pos += speed
      if (pos >= el.scrollWidth / 2) pos = 0
      el.scrollLeft = pos
      frame = requestAnimationFrame(step)
    }
    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [])

  const prev = () => setCurrent(i => (i - 1 + total) % total)
  const next = () => setCurrent(i => (i + 1) % total)

  return (
    <section className="section-padding bg-dfa-dark overflow-hidden">
      {/* subtle glow */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 15% 60%, #2DD8EE 0%, transparent 45%), radial-gradient(circle at 85% 40%, #1A75F5 0%, transparent 45%)',
        }}
      />

      <div className="container-max relative">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-xs font-black tracking-[0.25em] text-dfa-blue/70 uppercase mb-3">
              OFFER BOARD
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-3">
              部分錄取成果
            </h2>
            <p className="text-white/50 text-base">
              持續更新中 · 以下為 DFA 學員歷年部分錄取通知書
            </p>
          </div>
        </ScrollReveal>

        {/* Ticker */}
        <div
          ref={tickerRef}
          className="overflow-x-hidden whitespace-nowrap mb-12 cursor-default"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {[...TICKER_SCHOOLS, ...TICKER_SCHOOLS].map((s, i) => (
            <span
              key={i}
              className="inline-block mx-3 px-4 py-1.5 rounded-full border border-white/15 text-white/60 text-sm font-semibold"
            >
              {s}
            </span>
          ))}
        </div>

        {/* Carousel */}
        <ScrollReveal>
          <div className="relative flex items-center gap-4 max-w-3xl mx-auto">
            {/* Prev */}
            <button
              onClick={prev}
              className="shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:border-white/50 hover:text-white transition-all duration-200 text-base md:text-xl"
            >‹</button>

            {/* Slide */}
            <div className="flex-1 overflow-hidden rounded-2xl">
              {OFFERS.map((o, i) => (
                <div
                  key={i}
                  className={`transition-all duration-500 ${i === current ? 'block' : 'hidden'}`}
                >
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 group cursor-default">
                    <img
                      src={o.offer}
                      alt={`${o.school} 錄取信`}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Next */}
            <button
              onClick={next}
              className="shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:border-white/50 hover:text-white transition-all duration-200 text-base md:text-xl"
            >›</button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {OFFERS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'bg-dfa-blue w-6' : 'bg-white/20 w-2'}`}
              />
            ))}
          </div>
        </ScrollReveal>

        {/* Footer note */}
        <ScrollReveal>
          <p className="text-center text-white/25 text-xs mt-10">
            * 以上為部分代表性案例，詳細案例資料請洽顧問
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
