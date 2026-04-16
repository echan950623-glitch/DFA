import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import ProgramHero from '../components/shared/ProgramHero'
import SectionHeading from '../components/ui/SectionHeading'
import { teamMembers } from '../data/team'

const GAP = 20
const VISIBLE = 3   // 3 columns visible, each column has 2 rows = 6 teachers per view

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
          <SectionHeading label="Our Team" title="築夢導師" subtitle="來自世界頂尖學府，陪你走每一步" split />

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
                        className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                      >
                        <div className="h-1.5 bg-dfa-blue" />
                        <div className="p-5">
                          <div className="flex items-center gap-4 mb-3">
                            {/* Avatar — bigger */}
                            <div className="w-20 h-20 rounded-full bg-dfa-blue flex items-center justify-center text-white text-2xl font-black shrink-0">
                              {member.name.charAt(0)}
                            </div>
                            <div>
                              <h3 className="text-lg font-bold text-txt-primary">{member.name}</h3>
                              <p className="text-sm font-semibold text-dfa-blue">{member.school}</p>
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
            {Array.from({ length: total - VISIBLE + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === idx ? 'bg-dfa-blue w-4' : 'bg-gray-300 w-1.5'}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
