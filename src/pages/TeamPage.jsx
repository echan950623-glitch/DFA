import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import ProgramHero from '../components/shared/ProgramHero'
import SectionHeading from '../components/ui/SectionHeading'
import ScrollReveal from '../components/ui/ScrollReveal'
import { teamMembers } from '../data/team'

/* ── 三大服務項目 ── */
const SERVICES = [
  {
    icon: '📋',
    title: '學經歷規劃與申請策略',
    en: 'Academic Profile Development & Admissions Strategy',
    desc: '從學術成績、課外活動到文書策略，顧問團隊依據每位學員的個人背景，量身規劃完整的申請輪廓，協助打造具有競爭力的申請者形象，提升名校錄取機率。',
  },
  {
    icon: '🎯',
    title: '升學路徑規劃與名校申請策略',
    en: 'Pathways Planning & Top-School Admissions Strategy',
    desc: '針對目標學校與科系，進行系統化的選校分析與申請時程規劃。顧問根據轉學協議、TAG 資格、GPA 要求等條件，制定最適合學員的升學路徑，提高申請成功率。',
  },
  {
    icon: '🔬',
    title: '學術研究計畫',
    en: 'Academic Research Program',
    desc: '提供由常春藤教授及矽谷頂尖導師帶領的學術研究與實作專案，協助學員累積具體研究成果、強化學術背景，取得專案完成證書與研究成果發表資格，強化大學申請競爭力。',
  },
]

/* ── 研究計畫項目 ── */
const RESEARCH_PROGRAMS = [
  {
    tag: 'a',
    title: '常春藤教授學術研究專案',
    duration: '4–6 週 ／ 每週 3–5 小時',
    desc: '學員可選擇參與由常春藤大學教授指導之學術研究專案。於專案期間，學員將進行主題研究、資料整理與分析，並完成研究成果整理與發表。透過專案過程，學員可建立具體學術經歷，作為申請大學時之補充素材。',
    highlights: ['專案完成證書', '小組研究成果發表', '常春藤教授指導'],
    examples: [
      {
        title: '化學與材料科學研究',
        subtitle: '多維 NMR 光譜技術在有機化學中的應用',
        areas: '化學・有機化學・分析化學・材料科學・生物化學',
        professor: 'David Zax',
        professorTitle: '布朗大學終身教授',
        credentials: [
          '任教於布朗大學化學與生物分子工程領域',
          '長期從事材料與分析相關研究',
          '具多年指導學生研究經驗',
        ],
      },
      {
        title: '環境工程研究',
        subtitle: '環境保護中的化學原理與應用',
        areas: '環境工程・化學・水處理・環境科學',
        professor: 'Joe Moore',
        professorTitle: '卡內基梅隆大學教授',
        credentials: [
          '卡內基梅隆大學材料與環境相關領域教授',
          '曾獲美國化學學會相關研究獎項',
          '具跨領域研究與教學經驗',
        ],
      },
    ],
  },
  {
    tag: 'b',
    title: '矽谷業界導師實作專案（獨家）',
    duration: '3–5 週 ／ 線上授課 ／ 3 人小班制',
    desc: '學員可參與由科技產業背景之業界導師帶領的實作專案。課程分為入門與進階階段，內容涵蓋機器學習、人工智慧、產品設計與資料分析等領域。透過實際專案操作與指導，協助學員建立作品與應用能力，提升申請競爭力。',
    highlights: ['業界導師指導', '小班密集指導', '專案完成證書'],
    examples: [
      {
        title: '機器學習實作專案',
        subtitle: '深度學習與神經網路實作',
        areas: '回歸分析・損失函數・梯度下降法・卷積神經網路（CNN）・資料處理與建模・模型優化與誤差分析',
        professor: 'Kevin 導師',
        professorTitle: '卡內基梅隆大學 · 電腦科學碩士',
        photo: '/images/team/Kevin.jpg',
        credentials: [
          'Google 人工智慧技術經理',
          '曾任麥肯錫顧問',
          '曾任 Amazon 軟體工程師',
        ],
      },
      {
        title: '電腦視覺實作入門專案',
        subtitle: '電腦視覺應用實作',
        areas: '影像處理・物件偵測與辨識・幾何視覺分析・實務問題解決',
        professor: 'Cady 導師',
        professorTitle: '加州大學柏克萊分校 · 電腦科學碩士',
        photo: '/images/team/Cady.jpg',
        credentials: [
          'Google 機器學習工程師',
          '曾任 Apple 軟體工程師',
        ],
      },
    ],
  },
]

const GAP = 20
const VISIBLE_DESKTOP = 3   // 3 columns (>= 1280px)
const VISIBLE_MD = 2        // 2 columns (1024–1279px)

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
  const [visible, setVisible] = useState(VISIBLE_DESKTOP)

  const canPrev = idx > 0
  const canNext = idx + visible < total

  // Desktop-only carousel: measure runs on lg+ (carousel is hidden below lg)
  useEffect(() => {
    const measure = () => {
      if (trackRef.current) {
        const w = trackRef.current.clientWidth
        const v = window.innerWidth < 1280 ? VISIBLE_MD : VISIBLE_DESKTOP
        setVisible(v)
        setColWidth((w - GAP * (v - 1)) / v)
      }
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  // Clamp idx when visible changes (e.g., rotate orientation)
  useEffect(() => {
    if (idx + visible > total) setIdx(Math.max(0, total - visible))
  }, [visible, total, idx])

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
            title="我們的TOP院校升學顧問"
            subtitle="我們的大學升學顧問團隊匯聚了大學招生領域的頂尖人才，包括前審查委員和常春藤錄校專業顧問。每位成員都擁有豐富的實務經驗和行之有效的策略，能夠引導您的孩子進入理想的大學。我們擁有業界超高的升學率，以上便是我們使命範疇的一小部分成員。"
            split
          />

          {/* ── Mobile / Tablet: pure CSS grid, no JS measurement ── */}
          <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="h-1.5 bg-dfa-blue" />
                <div className="p-4 flex flex-col items-center text-center gap-2">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-dfa-blue/20 shadow-sm mt-1 shrink-0">
                    {member.photo
                      ? <img src={member.photo} alt={member.name} className="w-full h-full object-cover object-top" />
                      : <div className="w-full h-full bg-dfa-blue flex items-center justify-center text-white text-lg font-black">{member.name.charAt(0)}</div>
                    }
                  </div>
                  <div className="w-full">
                    <h3 className="font-bold text-txt-primary leading-snug text-sm sm:text-base">{member.name}</h3>
                    <p className="font-semibold text-dfa-blue leading-snug text-xs sm:text-sm">{member.school}</p>
                    <p className="text-txt-muted leading-snug text-xs">{member.degree}</p>
                  </div>
                  <p className="text-txt-secondary leading-relaxed line-clamp-3 text-xs sm:text-sm w-full">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ── Desktop: carousel (lg+) ── */}
          <div className="hidden lg:block">
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
                      style={{ width: colWidth || `calc((100% - ${GAP * (visible - 1)}px) / ${visible})` }}
                    >
                      {pair.map((member) => (
                        <div
                          key={member.name}
                          className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 h-[300px]"
                        >
                          <div className="h-1.5 bg-dfa-blue" />
                          <div className="p-5 h-full flex flex-col">
                            <div className="flex items-center gap-4 mb-3">
                              <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 border-2 border-dfa-blue/20 shadow-sm">
                                {member.photo
                                  ? <img src={member.photo} alt={member.name} className="w-full h-full object-cover object-top" />
                                  : <div className="w-full h-full bg-dfa-blue flex items-center justify-center text-white text-xl font-black">{member.name.charAt(0)}</div>
                                }
                              </div>
                              <div className="min-w-0">
                                <h3 className="text-base font-bold text-txt-primary leading-snug">{member.name}</h3>
                                <p className="text-sm font-semibold text-dfa-blue leading-snug">{member.school}</p>
                                <p className="text-sm text-txt-muted">{member.degree}</p>
                              </div>
                            </div>
                            <p className="text-sm text-txt-secondary leading-relaxed line-clamp-4">{member.bio}</p>
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
              {Array.from({ length: Math.max(0, total - visible + 1) }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === idx ? 'bg-dfa-blue w-4' : 'bg-gray-300 w-1.5'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 三大服務 ── */}
      <section className="section-padding bg-dfa-light">
        <div className="container-max">
          <ScrollReveal>
            <SectionHeading label="Our Services" title="顧問服務項目" subtitle="專業團隊提供全方位升學規劃" split />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
            {SERVICES.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.12} className="h-full">
                <div className="h-full bg-white rounded-2xl border border-gray-100 shadow-sm p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-4xl mb-6"
                    style={{ background: 'linear-gradient(135deg,#2DD8EE22,#1040CC22)' }}>
                    {s.icon}
                  </div>
                  <h3 className="text-xl font-black text-dfa-dark mb-2 leading-snug">{s.title}</h3>
                  <p className="text-sm text-dfa-blue font-semibold mb-5">{s.en}</p>
                  <p className="text-base text-txt-secondary leading-relaxed flex-1">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 學術研究計畫 ── */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <ScrollReveal>
            <SectionHeading label="Research Program" title="學術研究計畫" subtitle="累積具體研究成果，強化大學申請競爭力" split />
          </ScrollReveal>

          <p className="text-base text-txt-secondary leading-relaxed mt-4 mb-8 max-w-3xl">
            DFA 師資除日常教學外，亦實際參與學生之研究與實作專案指導，協助建立可用於大學申請之學術成果與作品內容。
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {RESEARCH_PROGRAMS.map((prog, i) => (
              <ScrollReveal key={prog.tag} delay={i * 0.1}>
                <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-full flex flex-col">
                  {/* Card header */}
                  <div className="p-7 pb-5" style={{ background: 'linear-gradient(135deg,#0A2A6E08,#2DD8EE10)' }}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-10 h-10 rounded-full text-white text-base font-black flex items-center justify-center shrink-0"
                        style={{ background: 'linear-gradient(135deg,#2DD8EE,#1040CC)' }}>
                        {prog.tag.toUpperCase()}
                      </span>
                      <div>
                        <h3 className="text-xl font-black text-dfa-dark leading-snug">{prog.title}</h3>
                        <p className="text-sm text-dfa-blue font-semibold mt-0.5">{prog.duration}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {prog.highlights.map((h) => (
                        <span key={h} className="text-sm font-semibold px-3 py-1 rounded-full bg-dfa-blue/10 text-dfa-blue">{h}</span>
                      ))}
                    </div>
                  </div>
                  {/* Card body */}
                  <div className="bg-white p-7 pt-5 flex-1 flex flex-col">
                    <p className="text-base text-txt-secondary leading-relaxed mb-6">{prog.desc}</p>
                    {prog.examples && (
                      <div className="space-y-4 mt-auto">
                        <p className="text-sm font-bold text-dfa-dark uppercase tracking-widest">課題示例</p>
                        {prog.examples.map((ex) => (
                          <div key={ex.title} className="bg-dfa-light rounded-xl p-4 border-l-4 border-dfa-blue/40">
                            <p className="text-base font-bold text-dfa-dark mb-1">{ex.title}</p>
                            {ex.subtitle && (
                              <p className="text-sm font-semibold text-dfa-blue mb-2">{ex.subtitle}</p>
                            )}
                            {ex.areas && (
                              <p className="text-xs text-txt-muted mb-3 leading-relaxed">{ex.areas}</p>
                            )}
                            {ex.professor && (
                              <div className="flex gap-3 mt-3 pt-3 border-t border-gray-200">
                                {ex.photo && (
                                  <img src={ex.photo} alt={ex.professor}
                                    className="w-14 h-14 rounded-full object-cover shrink-0 border-2 border-white shadow-sm" />
                                )}
                                <div className="min-w-0 flex-1">
                                  <p className="text-sm font-bold text-dfa-dark">{ex.professor}</p>
                                  <p className="text-xs text-dfa-blue font-semibold mb-1.5">{ex.professorTitle}</p>
                                  {ex.credentials && (
                                    <ul className="space-y-0.5">
                                      {ex.credentials.map((c) => (
                                        <li key={c} className="text-xs text-txt-secondary flex gap-1.5 leading-snug">
                                          <span className="text-dfa-blue mt-0.5 shrink-0">·</span>
                                          <span>{c}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </div>
                              </div>
                            )}
                            {ex.desc && !ex.professor && (
                              <p className="text-sm text-txt-secondary leading-relaxed">{ex.desc}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="relative h-[520px] overflow-hidden">
        <img
          src="/images/campus.jpg"
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
