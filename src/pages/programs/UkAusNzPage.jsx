import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProgramHero from '../../components/shared/ProgramHero'
import ScrollReveal from '../../components/ui/ScrollReveal'
import SectionHeading from '../../components/ui/SectionHeading'

/* ─── 三國資料 ─────────────────────────────────────────────── */
const COUNTRIES = [
  {
    id: 'uk',
    code: 'GB',
    name: '英國',
    tagline: 'G5 菁英大學 × 3 年學制',
    desc: '英國 G5 大學（牛津、劍橋、帝國理工、UCL、LSE）位居全球頂尖。3 年本科學制縮短就讀時間，學費與生活成本相對美國更具競爭力，且畢業後可申請 2 年 Graduate Route 工作簽證。',
    schools: ['牛津大學', '劍橋大學', '帝國理工學院', 'UCL', 'LSE', '愛丁堡大學', '曼徹斯特大學'],
    highlights: [
      { label: '學制', value: '3 年本科' },
      { label: '畢業簽證', value: 'Graduate Route 2 年' },
      { label: '代表名校', value: 'G5 聯盟' },
    ],
    color: 'border-blue-500',
    badge: 'bg-blue-50 text-blue-700',
    accent: '#1D4ED8',
  },
  {
    id: 'aus',
    code: 'AU',
    name: '澳洲',
    tagline: '八大名校 × 彈性申請',
    desc: '澳洲八大（Group of Eight）是國際公認的頂尖研究型大學聯盟。澳洲學制彈性，接受高中直入，申請視窗多。畢業後依學歷可申請 2–4 年 Post-Study Work Visa，留澳發展機會豐富。',
    schools: ['墨爾本大學', '雪梨大學', '澳洲國立大學', '昆士蘭大學', '莫納什大學', '西澳大學'],
    highlights: [
      { label: '學制', value: '3 年本科' },
      { label: '工作簽', value: 'PSW 2–4 年' },
      { label: '代表名校', value: 'Group of Eight' },
    ],
    color: 'border-blue-500',
    badge: 'bg-blue-50 text-blue-700',
    accent: '#1D4ED8',
  },
  {
    id: 'sg',
    code: 'SG',
    name: '新加坡',
    tagline: 'NUS / NTU × 亞洲就業核心',
    desc: '新加坡國立大學（NUS）與南洋理工大學（NTU）長期位居亞洲前兩名、全球前 20。以英語授課、華語環境適應快，是進入東南亞與大中華商業圈的最佳跳板，就業競爭力極強。',
    schools: ['新加坡國立大學 (NUS)', '南洋理工大學 (NTU)', '新加坡管理大學 (SMU)'],
    highlights: [
      { label: '授課語言', value: '全英文' },
      { label: 'NUS 全球排名', value: 'Top 20' },
      { label: '就業優勢', value: '亞太金融中心' },
    ],
    color: 'border-blue-500',
    badge: 'bg-blue-50 text-blue-700',
    accent: '#1D4ED8',
  },
]

/* ─── 選擇此路徑的理由 ────────────────────────────────────── */
const WHY_REASONS = [
  {
    icon: '🎯',
    title: '錄取更可控',
    desc: '英、澳、新的申請制度相對透明，以學術成績為主要依據，不像美國申請需要大量課外活動包裝，錄取結果更可預測。',
  },
  {
    icon: '⏱️',
    title: '時間成本更低',
    desc: '英國 3 年制本科可節省 1 年時間與費用。新加坡學費遠低於美國，整體留學預算更精準可控。',
  },
  {
    icon: '🌏',
    title: '高性價比',
    desc: '以較低的總體成本取得世界頂尖大學學歷，對有意在亞太地區發展的學生而言，性價比極高。',
  },
  {
    icon: '💼',
    title: '就業優勢明顯',
    desc: '英國 Graduate Route、澳洲 PSW 簽證提供畢業後實習機會；新加坡更是直接進入全球金融與科技就業市場。',
  },
]

/* ─── 適合族群 ─────────────────────────────────────────────── */
const TARGET_PROFILES = [
  '希望以相對穩定的路徑進入世界頂尖大學的高中應屆生',
  '對亞太地區就業市場感興趣、希望留學與職涯緊密連結的學生',
  '預算有限但目標院校排名要求高的學生',
  '有意在英語環境求學、並維持與華語圈連結的學生',
]

/* ─── Main Page ──────────────────────────────────────────────── */
export default function UkAusNzPage() {
  const [activeTab, setActiveTab] = useState(null)
  const active = COUNTRIES.find((c) => c.id === activeTab)

  return (
    <div style={{ background: 'linear-gradient(135deg, #2DD8EE 0%, #1A9AE6 30%, #0A2A6E 100%)' }}>
      <div
        className="fixed inset-0 opacity-[0.04] pointer-events-none z-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      {/* ── Hero ── */}
      <ProgramHero
        title="英、澳、新築夢計畫"
        subtitle="穩定進入世界名校的另一條路 — 英國・澳洲・新加坡"
        transparent
      />

      {/* ── 目的地選擇 ── */}
      <section className="relative z-10 section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-white/60 text-sm uppercase tracking-widest mb-4">選擇你的目的地</p>
            <div className="flex gap-3 flex-wrap">
              {COUNTRIES.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveTab(activeTab === c.id ? null : c.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-md font-bold text-sm transition-all duration-200 border-2 ${
                    activeTab === c.id
                      ? 'bg-white shadow-lg scale-105'
                      : 'bg-white/10 text-white border-white/30 hover:bg-white/20'
                  }`}
                  style={activeTab === c.id ? { color: c.accent, borderColor: 'white' } : {}}
                >
                  <span className="text-xs font-black px-1.5 py-0.5 rounded"
                    style={activeTab === c.id
                      ? { background: c.accent, color: 'white' }
                      : { background: '#ffffff', color: '#374151' }
                    }
                  >{c.code}</span>
                  {c.name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Inline content panel */}
          <AnimatePresence mode="wait">
            {active && (
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.35 }}
                className="mt-8 bg-white rounded-xl p-6 md:p-8 max-w-4xl overflow-hidden"
              >
                {/* Top accent bar */}
                <div className="h-1 rounded-full mb-6" style={{ background: active.accent }} />

                <div className="mb-4">
                  <h3 className="text-h3 text-txt-primary">{active.name}</h3>
                  <p className="text-sm font-semibold mt-0.5" style={{ color: active.accent }}>{active.tagline}</p>
                </div>

                <p className="text-body text-txt-secondary leading-relaxed mb-6">{active.desc}</p>

                {/* Highlight pills */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {active.highlights.map((h) => (
                    <div key={h.label} className="rounded-lg px-4 py-2.5 bg-blue-50 border border-blue-100">
                      <p className="text-xs text-txt-muted">{h.label}</p>
                      <p className="text-sm font-black text-txt-primary">{h.value}</p>
                    </div>
                  ))}
                </div>

                {/* Schools */}
                <div>
                  <p className="text-xs uppercase tracking-widest text-txt-muted mb-2">代表院校</p>
                  <div className="flex flex-wrap gap-2">
                    {active.schools.map((s) => (
                      <span key={s} className="text-caption font-medium px-3 py-1.5 rounded-md bg-gray-100 text-txt-secondary">{s}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </section>

      {/* ── 為什麼選擇這條路 ── */}
      <section className="relative z-10 section-padding">
        <div className="container-max">
          <ScrollReveal>
            <SectionHeading label="Why This Path" title="為什麼選擇這條路？" subtitle="英澳新路徑的核心優勢" split light />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {WHY_REASONS.map((r, i) => (
              <ScrollReveal key={r.title} delay={i * 0.1}>
                <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex gap-4">
                  <span className="text-3xl shrink-0">{r.icon}</span>
                  <div>
                    <h4 className="text-h3 text-txt-primary mb-1">{r.title}</h4>
                    <p className="text-body text-txt-secondary leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 適合族群 ── */}
      <section className="relative z-10 section-padding">
        <div className="container-max">
          <ScrollReveal>
            <SectionHeading label="Who It's For" title="誰適合這個計畫？" subtitle="以下族群尤其推薦" split light />
          </ScrollReveal>
          <div className="max-w-3xl mx-auto space-y-4">
            {TARGET_PROFILES.map((p, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="flex items-start gap-4 bg-white/10 rounded-lg p-5 border border-white/15">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5 bg-white/20">
                    {i + 1}
                  </div>
                  <p className="text-body text-white/80 leading-relaxed">{p}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative z-10 section-padding">
        <div className="container-max text-center">
          <ScrollReveal>
            <h2 className="text-h2 text-white mb-3">找到屬於你的築夢路徑</h2>
            <p className="text-white/80">英國・澳洲・新加坡，讓顧問幫你找出最適合的方向</p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
