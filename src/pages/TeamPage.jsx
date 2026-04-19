import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import ProgramHero from '../components/shared/ProgramHero'
import SectionHeading from '../components/ui/SectionHeading'
import { teamMembers } from '../data/team'

const GAP = 20
const VISIBLE = 3       // 3 columns × 2 rows = 6 cards visible

// Group members into column pairs [[m0,m1],[m2,m3],...]
function chunkPairs(arr) {
  const pairs = []
  for (let i = 0; i < arr.length; i += 2) {
    pairs.push(arr.slice(i, i + 2))
  }
  return pairs
}

export default function TeamPage() {
  const pairs = chunkPairs(teamMembers)
  const total = pairs.length
  const [idx, setIdx] = useState(0)
  const trackRef = useRef(null)
  const [colWidth, setColWidth] = useState(0)

  const canPrev = idx > 0
  const canNext = idx + VISIBLE < total

  // Measure track width → derive column width so exactly 3 columns fill the container
  useEffect(() => {
    const measure = () => {
      if (trackRef.current) {
        const w = trackRef.current.clientWidth
        setColWidth((w - GAP * (VISIBLE - 1)) / VISIBLE)
      }
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const translateX = -(idx * (colWidth + GAP))

  return (
    <>
      <ProgramHero
        title="築夢導師"
        subtitle="Our Team — 來自世界頂尖學府與企業的專業團隊"
      />

      <section className="section-padding bg-white">
        <div className="container-max">
          <SectionHeading
            label="知識網絡"
            title="我們的大學升學顧問"
            subtitle="我們的大學升學顧問團隊匯聚了大學招生領域的頂尖人才，包括前招生官和常春藤錄校專業顧問。每位成員都擁有豐富的實務經驗和行之有效的策略，能夠引導您的孩子進入理想的大學。我們擁有業界超高的升學率，以上便是我們使命範疇的一小部分成員。"
            split
          />

          {/* Carousel */}
          <div className="flex items-center gap-4 mt-10">
            {/* Prev */}
            <button
              onClick={() => canPrev && setIdx(i => i - 1)}
              disabled={!canPrev}
              className={`shrink-0 w-10 h-10 rounded-full border flex items-center justify-center text-xl transition-all duration-200 ${canPrev ? 'border-dfa-blue/40 text-dfa-blue hover:bg-dfa-blue/10' : 'border-gray-200 text-gray-300 cursor-default'}`}
            >‹</button>

            {/* Track */}
            <div className="flex-1 overflow-hidden" ref={trackRef}>
              <motion.div
                className="flex"
                style={{ gap: GAP }}
                animate={{ x: translateX }}
                transition={{ type: 'tween', ease: 'easeInOut', duration: 0.45 }}
              >
                {pairs.map((pair, pi) => (
                  <div
                    key={pi}
                    className="shrink-0 flex flex-col gap-5"
                    style={{ width: colWidth || `calc((100% - ${GAP * (VISIBLE - 1)}px) / ${VISIBLE})` }}
                  >
                    {pair.map((member) => (
                      <div
                        key={member.name}
                        className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 min-h-[280px]"
                      >
                        <div className="h-1.5 bg-dfa-blue" />
                        <div className="p-5 h-full">
                          <div className="flex items-center gap-3 mb-3">
                            {/* Avatar */}
                            <div className="w-16 h-16 rounded-full bg-dfa-blue flex items-center justify-center text-white text-xl font-black shrink-0">
                              {member.name.charAt(0)}
                            </div>
                            <div className="min-w-0">
                              <h3 className="text-base font-bold text-txt-primary leading-snug">{member.name}</h3>
                              <p className="text-sm font-semibold text-dfa-blue leading-snug">{member.school}</p>
                              <p className="text-xs text-txt-muted">{member.degree}</p>
                            </div>
                          </div>
                          <p className="text-sm text-txt-secondary leading-relaxed">{member.bio}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Next */}
            <button
              onClick={() => canNext && setIdx(i => i + 1)}
              disabled={!canNext}
              className={`shrink-0 w-10 h-10 rounded-full border flex items-center justify-center text-xl transition-all duration-200 ${canNext ? 'border-dfa-blue/40 text-dfa-blue hover:bg-dfa-blue/10' : 'border-gray-200 text-gray-300 cursor-default'}`}
            >›</button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-1.5 mt-8">
            {Array.from({ length: Math.max(0, total - VISIBLE + 1) }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === idx ? 'bg-dfa-blue w-4' : 'bg-gray-300 w-1.5'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="relative h-[520px] overflow-hidden">
        <img
          src="/images/S__5791784.jpg"
          alt="Campus"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-2">前進夢想，為自己翻轉未來</h2>
          <p className="text-xl md:text-2xl font-bold text-white mb-8">你是下一個嗎？</p>
          <a
            href="https://lin.ee/O1ejJf7"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white text-white font-bold text-lg px-10 py-3 rounded hover:bg-white hover:text-dfa-dark transition-all duration-300"
          >
            立即諮詢
          </a>
        </div>
      </section>
    </>
  )
}
