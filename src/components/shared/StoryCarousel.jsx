import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

/* ── 成功案例資料（來源：DFA 成功案例 PPT） ── */
export const SUCCESS_STORIES = [
  {
    id: 1,
    name: 'Zoe',
    year: '2024',
    from: 'Santa Monica College',
    to: 'UCLA ／ USC',
    major: '經濟學',
    gpa: '3.31',
    quote: 'GPA 3.31、完全沒有課外活動，很多人說我根本沒有機會。但 DFA 幫我找到突破口——完整課業規劃搭配「逆境重生」的文書策略，把弱點變成了最打動招生官的故事。最終同時拿到 UCLA 和 USC 的錄取，我自己都難以置信。',
  },
  {
    id: 2,
    name: 'Mike',
    year: '2024',
    from: '台灣大學（三年）',
    to: 'UCSD ／ UCI ／ UCD ／ UCSB',
    major: '商科',
    gpa: '3.63',
    quote: '在台灣念了三年大學後決定出國，轉學學分只有 8 個，壓力非常大。DFA 設計了快速累積學分的方案，同時幫我把過去求學的挫折重新包裝成文書亮點。一年內就成功轉進 UCSD，完全超出了我的預期。',
  },
  {
    id: 3,
    name: '張同學',
    year: '2024',
    from: '加州社區大學',
    to: 'UCLA ／ UC Berkeley',
    major: '經濟學',
    gpa: '4.0',
    quote: 'UCLA 經濟系的錄取率只有 9%，我從沒想過自己能同時拿到 UCB 和 UCLA 的 Offer。DFA 從選課規劃到文書全程陪跑，文書更由 UCLA 榮譽生（現芝加哥大學博士生）一對一打磨，讓我的申請在激烈競爭中脫穎而出。',
  },
  {
    id: 4,
    name: 'Mike Chen',
    year: '2023',
    from: 'Broward College（佛羅里達）',
    to: 'UC Berkeley ／ NYU',
    major: '傳播學／媒體',
    gpa: '—',
    quote: '我在佛羅里達州念社大，完全不在 TAG 協議範圍內，轉進 UCB 幾乎是不可能的事。DFA 建議我創立媒體相關 startup 來強化背景，文書由 UMass 英語寫作教授一對一指導，最終同時拿到 UC Berkeley 和 NYU 的錄取。',
  },
  {
    id: 5,
    name: '王同學',
    year: '2024',
    from: 'Santa Monica College',
    to: 'UCLA ／ UCSD ／ UCI ／ UCD',
    major: '資料科學',
    gpa: '2.8 → 3.8',
    quote: '第一學期 GPA 只有 2.8，沒有任何社團或研究經歷，方向感也很迷糊。DFA 幫我制定補救計畫、加入 SMC 統計研究組並擔任數學社副社長。一年後 GPA 提升至 3.8，成功錄取 UCLA、UCSD、UCI、UCD 四所名校。',
  },
  {
    id: 6,
    name: 'Louis',
    year: '2023',
    from: '加州社區大學',
    to: 'UCLA（候補）／ UCSD ／ UCI ／ UCD ／ UCSB',
    major: '經濟學',
    gpa: '3.31',
    quote: 'GPA 只有 3.31 又毫無課外活動，申請經濟系本來毫無勝算。DFA 幫我找到公益實習機會，文書透過兩小時一對一腦力激盪，挖掘出了打動招生官的故事。最終拿到 UCSD、UCI、UCD、UCSB，甚至被 UCLA 列為候補。',
  },
  {
    id: 7,
    name: 'Lin',
    year: '2022',
    from: 'Santa Monica College',
    to: 'UCSD（大學）→ Columbia University（研究所）',
    major: '地理學 → 都市規劃',
    gpa: '—',
    quote: '成績單上有不少 C 和 F，申請時間又極度緊迫。DFA 幫我選擇地理系作為突破口，輔助我加入榮譽生組織和 CSSA，成功轉進 UCSD。後來在 UCSD 發現了對都市規劃的熱情，最終申請到哥倫比亞大學研究所。',
  },
  {
    id: 8,
    name: '施同學',
    year: '2024',
    from: '加州社區大學',
    to: 'UCLA ／ UC Berkeley',
    major: '經濟學',
    gpa: '優秀',
    quote: '學術成績很好，但完全沒有課外活動。DFA 幫我在最後關頭快速建立課外背景，同時由 UCLA 榮譽生量身打磨文書，在 9% 的超低錄取率下同時拿到了 UCLA 和 UC Berkeley 的 Offer，真的非常感謝 DFA 的全力支持。',
  },
  {
    id: 9,
    name: 'Linda',
    year: '2024',
    from: 'Santa Monica College',
    to: 'UCLA ／ UCSD ／ UCSB',
    major: '電腦科學',
    gpa: '3.2 → 3.7',
    quote: 'STEM 成績 3.2、完全沒有專案或實習經驗，對 CS 申請幾乎不抱希望。DFA 幫我制定補課計畫，從零完成第一個 app 專案並參與開源社群，GPA 提升至 3.7，最終拿到 UCLA、UCSD、UCSB 三所學校的錄取通知。',
  },
  {
    id: 10,
    name: '唐同學',
    year: '2023',
    from: '中國高中（赴美轉學）',
    to: 'UC Davis ／ UCI ／ UCSB ／ UCR',
    major: '數學 ／ STEM',
    gpa: '優秀',
    quote: '11 月中才找到 DFA，距離 UC 申請截止只剩不到三週。DFA 老師全力衝刺，幫我在一週內完成全部四篇文書，以自學 AP 的數學專長和移民故事打動招生官，成功錄取 UCD、UCI、UCSB、UCR，UCLA 和 UCB 也進了候補名單。',
  },
  {
    id: 11,
    name: 'Shawn',
    year: '2023',
    from: 'UC Davis',
    to: 'UC Berkeley ／ UCSD ／ 密歇根大學',
    major: '全球研究 ／ 經濟',
    gpa: '3.75',
    quote: '有兩學期微積分用 P/NP 修課，這是轉學的大紅旗。DFA 建議我改修統計並拿了 A+，同時幫我梳理了組建多元文化足球隊、北極科學探險等獨特亮點，再請前 UCB 招生官打磨文書。最終錄取 UC Berkeley、UCSD 和密歇根大學。',
  },
]

const GAP = 20 // px — matches gap-5

/* ── 共用 Carousel 元件 ── */
export default function StoryCarousel({ title = '學員成功案例', label = 'SUCCESS STORIES' }) {
  const stories = SUCCESS_STORIES
  const [idx, setIdx] = useState(0)
  const trackRef = useRef(null)
  const [cardWidth, setCardWidth] = useState(0)

  const VISIBLE = 3
  const total = stories.length
  const canPrev = idx > 0
  const canNext = idx + VISIBLE < total

  // Measure track width → derive card width
  useEffect(() => {
    const measure = () => {
      if (trackRef.current) {
        const w = trackRef.current.clientWidth
        setCardWidth((w - GAP * (VISIBLE - 1)) / VISIBLE)
      }
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const prev = () => { if (canPrev) setIdx(i => i - 1) }
  const next = () => { if (canNext) setIdx(i => i + 1) }

  const translateX = -(idx * (cardWidth + GAP))

  return (
    <section className="relative z-10 section-padding bg-dfa-dark overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #2DD8EE 0%, transparent 50%), radial-gradient(circle at 80% 50%, #1A75F5 0%, transparent 50%)' }} />

      <div className="container-max relative">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-black tracking-[0.25em] text-dfa-blue/70 uppercase mb-3">{label}</p>
          <h2 className="text-h2 text-white">{title}</h2>
        </div>

        {/* Carousel */}
        <div className="flex items-center gap-4">
          {/* Prev */}
          <button
            onClick={prev}
            disabled={!canPrev}
            className={`shrink-0 w-10 h-10 rounded-full border flex items-center justify-center text-xl transition-all duration-200 ${
              canPrev ? 'border-white/30 text-white hover:bg-white/10' : 'border-white/10 text-white/20 cursor-default'
            }`}
          >‹</button>

          {/* Track */}
          <div className="flex-1 overflow-hidden" ref={trackRef}>
            <motion.div
              className="flex"
              style={{ gap: GAP }}
              animate={{ x: translateX }}
              transition={{ type: 'tween', ease: 'easeInOut', duration: 0.45 }}
            >
              {stories.map((s) => (
                <div
                  key={s.id}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col hover:bg-white/10 transition-colors duration-200 shrink-0"
                  style={{ width: cardWidth || `calc((100% - ${GAP * (VISIBLE - 1)}px) / ${VISIBLE})` }}
                >
                  {/* Name + year */}
                  <div className="text-center mb-4">
                    <p className="text-white font-black text-lg leading-tight">{s.year} {s.name}</p>
                  </div>

                  {/* School */}
                  <div className="mb-4 text-center">
                    <p className="text-[11px] font-bold tracking-widest text-dfa-blue/80 uppercase mb-0.5">{s.from}</p>
                    <p className="text-white/50 text-xs mb-0.5">↓</p>
                    <p className="text-sm font-black text-white tracking-wide uppercase">{s.to}</p>
                  </div>

                  {/* Major + GPA */}
                  <div className="flex justify-center gap-2 mb-4">
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-dfa-blue/20 text-white font-medium">{s.major}</span>
                    {s.gpa !== '—' && s.gpa !== '優秀' && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white font-medium">GPA {s.gpa}</span>
                    )}
                  </div>

                  {/* Quote */}
                  <p className="text-white text-[13px] leading-relaxed flex-1">
                    {s.quote}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Next */}
          <button
            onClick={next}
            disabled={!canNext}
            className={`shrink-0 w-10 h-10 rounded-full border flex items-center justify-center text-xl transition-all duration-200 ${
              canNext ? 'border-white/30 text-white hover:bg-white/10' : 'border-white/10 text-white/20 cursor-default'
            }`}
          >›</button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-1.5 mt-8">
          {Array.from({ length: total - VISIBLE + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === idx ? 'bg-dfa-blue w-4' : 'bg-white/20 w-1.5'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
