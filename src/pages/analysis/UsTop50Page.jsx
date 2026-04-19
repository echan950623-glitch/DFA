import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import ProgramHero from '../../components/shared/ProgramHero'
import ScrollReveal from '../../components/ui/ScrollReveal'
import SectionHeading from '../../components/ui/SectionHeading'
import StoryCarousel from '../../components/shared/StoryCarousel'
import CTABanner from '../../components/shared/CTABanner'

const GAP = 16
const VISIBLE_UNI_DESKTOP = 5
const VISIBLE_UNI_MOBILE = 2

function UniversityCarousel({ universities }) {
  const [idx, setIdx] = useState(0)
  const trackRef = useRef(null)
  const [cardWidth, setCardWidth] = useState(0)
  const [visible, setVisible] = useState(VISIBLE_UNI_DESKTOP)
  const total = universities.length
  const canPrev = idx > 0
  const canNext = idx + visible < total

  useEffect(() => {
    const measure = () => {
      if (trackRef.current) {
        const w = trackRef.current.clientWidth
        const v = window.innerWidth < 768 ? VISIBLE_UNI_MOBILE : VISIBLE_UNI_DESKTOP
        setVisible(v)
        setCardWidth((w - GAP * (v - 1)) / v)
      }
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  useEffect(() => {
    if (idx + visible > total) setIdx(Math.max(0, total - visible))
  }, [visible, total, idx])

  const translateX = -(idx * (cardWidth + GAP))

  return (
    <div className="flex items-center gap-3 max-w-4xl mx-auto mb-16 border border-gray-200 rounded-2xl bg-white/50 p-4 shadow-sm">
      <button
        onClick={() => canPrev && setIdx(i => i - 1)}
        disabled={!canPrev}
        className={`shrink-0 w-9 h-9 rounded-full border flex items-center justify-center text-xl transition-all duration-200 ${canPrev ? 'border-dfa-blue/40 text-dfa-blue hover:bg-dfa-blue/10' : 'border-gray-200 text-gray-300 cursor-default'}`}
      >‹</button>

      <div className="flex-1 overflow-hidden" ref={trackRef}>
        <motion.div
          className="flex"
          style={{ gap: GAP }}
          animate={{ x: translateX }}
          transition={{ type: 'tween', ease: 'easeInOut', duration: 0.4 }}
        >
          {universities.map((u) => (
            <div
              key={u.tag}
              className="bg-white rounded-lg border border-gray-100 shadow-sm p-4 text-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 shrink-0"
              style={{ width: cardWidth || `calc((100% - ${GAP * (visible - 1)}px) / ${visible})` }}
            >
              <div className="text-2xl font-black text-dfa-blue mb-2">{u.tag}</div>
              <p className="text-sm text-txt-secondary font-medium leading-tight">{u.name}</p>
              <p className="text-xs text-txt-faint mt-1.5">{u.rank}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <button
        onClick={() => canNext && setIdx(i => i + 1)}
        disabled={!canNext}
        className={`shrink-0 w-9 h-9 rounded-full border flex items-center justify-center text-xl transition-all duration-200 ${canNext ? 'border-dfa-blue/40 text-dfa-blue hover:bg-dfa-blue/10' : 'border-gray-200 text-gray-300 cursor-default'}`}
      >›</button>
    </div>
  )
}

const TIERS = [
  {
    id: 'reach', label: '衝刺校', en: 'Reach',
    desc: '目標排名前 10–30，錄取難度高但值得挑戰。背景強化後勝算大幅提升。',
    color: 'bg-sky-50 border-sky-400', badge: 'text-sky-600', pill: 'bg-sky-100 text-sky-800',
    examples: ['UCB', 'UCLA', 'UCSD', 'Michigan', 'UIUC'],
  },
  {
    id: 'target', label: '目標校', en: 'Target',
    desc: '符合背景條件、有合理錄取機率的學校，是申請策略的主力。',
    color: 'bg-indigo-50 border-indigo-400', badge: 'text-indigo-600', pill: 'bg-indigo-100 text-indigo-800',
    examples: ['UC Davis', 'UC Irvine', 'UCSB', 'UNC', 'Purdue'],
  },
  {
    id: 'safety', label: '保底校', en: 'Safety',
    desc: '確保至少有優質錄取結果，讓整體申請策略零風險。',
    color: 'bg-emerald-50 border-emerald-400', badge: 'text-emerald-600', pill: 'bg-emerald-100 text-emerald-800',
    examples: ['UC Riverside', 'UC Santa Cruz', 'UC Merced', 'Arizona State'],
  },
]

const UNIVERSITIES = [
  { name: '加州大學伯克利分校', nameEn: 'UC Berkeley', rank: '#1 Public', tag: 'UCB' },
  { name: '加州大學洛杉磯分校', nameEn: 'UC Los Angeles', rank: '#1 Public', tag: 'UCLA' },
  { name: '加州大學聖地牙哥分校', nameEn: 'UC San Diego', rank: 'Top 10 Public', tag: 'UCSD' },
  { name: '密歇根大學安娜堡分校', nameEn: 'University of Michigan', rank: 'Top 25', tag: 'UMICH' },
  { name: '伊利諾伊大學香檳分校', nameEn: 'UIUC', rank: 'Top 50', tag: 'UIUC' },
  { name: '北卡羅來納大學教堂山分校', nameEn: 'UNC Chapel Hill', rank: 'Top 30', tag: 'UNC' },
  { name: '加州大學戴維斯分校', nameEn: 'UC Davis', rank: 'Top 40', tag: 'UCD' },
  { name: '加州大學爾灣分校', nameEn: 'UC Irvine', rank: 'Top 40', tag: 'UCI' },
  { name: '加州大學聖塔芭芭拉分校', nameEn: 'UC Santa Barbara', rank: 'Top 40', tag: 'UCSB' },
  { name: '加州大學河濱分校', nameEn: 'UC Riverside', rank: 'Top 100', tag: 'UCR' },
]

export default function UsTop50Page() {
  return (
    <>
      <ProgramHero
        title="美國大學排名 Top 50"
        subtitle="不是所有人都應該只申請夢想學校 — 真正會申請的人，會同時布局三個層級"
      />

      {/* ── 三層次策略 ── */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <ScrollReveal>
            <SectionHeading label="Strategy" title="三層次申請策略" subtitle="聰明布局，確保最佳錄取結果" split />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {TIERS.map((tier, i) => (
              <ScrollReveal key={tier.id} delay={i * 0.12} className="h-full">
                <div className={`h-full rounded-lg border-2 p-6 ${tier.color} hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-2xl font-black ${tier.badge}`}>{tier.en}</span>
                    <span className="text-lg font-bold text-txt-primary">{tier.label}</span>
                  </div>
                  <p className="text-body text-txt-secondary leading-relaxed mb-4">{tier.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {tier.examples.map((ex) => (
                      <span key={ex} className={`text-caption px-2 py-1 rounded-md font-medium ${tier.pill}`}>{ex}</span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 美國名校榜單 ── */}
      <section className="section-padding bg-[#F0F7FF]">
        <div className="container-max">
          <ScrollReveal>
            <SectionHeading label="Universities" title="美國名校榜單" subtitle="DFA 學員成功錄取院校一覽" split />
          </ScrollReveal>

          <UniversityCarousel universities={UNIVERSITIES} />

        </div>
      </section>

      {/* ── 學員案例 Carousel ── */}
      <StoryCarousel title="學員成功案例" label="SUCCESS STORIES" />

      <CTABanner
        heading="想進入 US Top 50？"
        subtitle="Reach、Target、Safety 三層布局，讓顧問協助你擬定最佳申請策略"
      />
    </>
  )
}
