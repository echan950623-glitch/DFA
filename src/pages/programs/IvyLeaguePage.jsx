import { useState, useEffect } from 'react'
import ProgramHero from '../../components/shared/ProgramHero'
import ScrollReveal from '../../components/ui/ScrollReveal'
import SectionHeading from '../../components/ui/SectionHeading'

/* ─── 服務計畫 ─────────────────────────────────────────────── */
const plans = [
  {
    title: '藤校旗艦計畫',
    desc: '提供完整的申請服務，幫助學生進入頂尖學府如哈佛、耶魯、普林斯頓等。',
    highlights: ['哈佛', '耶魯', '普林斯頓', 'MIT', '史丹佛'],
  },
  {
    title: '美加精英計畫',
    desc: '專注於 UC 系統及加拿大頂尖大學的轉學計畫，助您實現學業目標。',
    highlights: ['UCLA', 'UCB', '多倫多大學', 'UBC'],
  },
  {
    title: '2+2 快速通道',
    desc: '提供社區大學至藤校的轉學計畫，幫助學生兩年內完成學業。',
    highlights: ['社區大學', '2年轉學', '名校學位'],
  },
]

/* ─── 美國 vs 加拿大比較 ─────────────────────────────────── */
const COMPARE_ROWS = [
  { label: '頂尖大學', us: 'MIT、史丹佛、UCLA、UCB', ca: '多倫多大學、UBC、麥基爾' },
  { label: '畢業工作簽', us: 'OPT 1 年（STEM 延長 3 年）', ca: 'PGWP 最長 3 年' },
  { label: '移民路徑', us: 'H-1B 工作簽→綠卡（競爭激烈）', ca: '聯邦快速移民 Express Entry' },
  { label: '學費水準', us: '私立 $5–8 萬美元/年', ca: '$2.5–4 萬加幣/年（較低）' },
  { label: '語言環境', us: '純英語，競爭激烈', ca: '英語為主（魁北克法語）' },
  { label: '申請難度', us: '整體申請複雜，重視課外活動', ca: '以學術成績為主，相對直接' },
]

/* ─── 5 步申請流程 ─────────────────────────────────────────── */
const steps = [
  {
    id: 1,
    num: '01',
    title: '初步諮詢',
    position: 'top',          // zigzag: top row
    icon: '🎯',
    shortDesc: '免費深度評估，了解背景與目標',
    detail: {
      heading: '免費諮詢及學生評估',
      points: [
        '免費一對一深度評估，了解學術背景與夢想院校',
        '個人競爭力分析與申請可行性評估',
        '初步提供量身訂做的升學路徑建議',
        '釐清申請時間表與準備事項',
      ],
    },
  },
  {
    id: 2,
    num: '02',
    title: '策略規劃',
    position: 'bottom',       // zigzag: bottom row
    icon: '📋',
    shortDesc: '簽約啟動，制定客製化申請策略',
    detail: {
      heading: '簽約啟動 × 留學策略制定',
      points: [
        '正式簽約，啟動全程服務',
        '確定目標院校清單（涵蓋衝刺 / 適中 / 保底）',
        '制定 2 年詳細學業規劃表格',
        '選課策略設計（IGETC 等官方轉學框架）',
      ],
    },
  },
  {
    id: 3,
    num: '03',
    title: '文件備戰',
    position: 'top',
    icon: '📝',
    shortDesc: '撰寫文書、規劃背景提升活動',
    detail: {
      heading: '申請文件精準備戰',
      points: [
        '個人陳述（Personal Statement）專業撰寫與多輪精修',
        '推薦信策略規劃，協助與教授溝通',
        '課外活動清單優化與背景提升規劃',
        '英語標化考試輔導（Duolingo / TOEFL）',
      ],
    },
  },
  {
    id: 4,
    num: '04',
    title: '申請衝刺',
    position: 'bottom',
    icon: '🚀',
    shortDesc: '遞交申請、科研加持、面試準備',
    detail: {
      heading: '申請遞交 × 科研背景加持',
      points: [
        '全程輔導申請材料遞交，確保零失誤',
        '持續追蹤申請狀態，即時回應學校要求',
        '矽谷導師實戰項目（Google / Apple 導師，獨家）',
        '常春藤教授科研項目，強化申請背景',
      ],
    },
  },
  {
    id: 5,
    num: '05',
    title: '夢校錄取',
    position: 'top',
    icon: '🎓',
    shortDesc: '保證錄取頂尖院校，全程陪伴入學',
    detail: {
      heading: '美國目標院校錄取 × 順利入學',
      points: [
        '保證錄取美國頂尖院校',
        '協助評估錄取結果，提供最佳選擇建議',
        '獎學金申請、學生簽證及行前準備全指引',
        '入學後持續關懷，確保學生順利適應美國校園生活',
      ],
    },
  },
]

/* ─── Modal ─────────────────────────────────────────────────── */
function StepModal({ step, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
      onClick={onClose}
      style={{ backgroundColor: 'rgba(0,30,60,0.55)', backdropFilter: 'blur(4px)' }}
    >
      {/* Panel — slide up on mobile, scale in on desktop */}
      <div
        className="relative w-full max-w-lg bg-white rounded-lg shadow-2xl overflow-hidden"
        style={{ animation: 'modalIn 0.32s cubic-bezier(0.34,1.56,0.64,1) both' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Gradient top bar */}
        <div className="h-2 bg-dfa-gradient" />

        {/* Header */}
        <div className="px-8 pt-7 pb-4 flex items-start gap-4">
          <div
            className="w-14 h-14 rounded-lg flex items-center justify-center text-3xl flex-shrink-0 shadow-md"
            style={{ background: 'linear-gradient(135deg,#4DD9EC,#0066CC)' }}
          >
            {step.icon}
          </div>
          <div>
            <p className="text-eyebrow text-dfa-blue uppercase mb-0.5">
              STEP {step.num}
            </p>
            <h3 className="text-h3 text-txt-primary leading-tight">
              {step.detail.heading}
            </h3>
          </div>
        </div>

        {/* Points */}
        <ul className="px-8 pb-8 space-y-3 mt-2">
          {step.detail.points.map((pt, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span
                className="mt-0.5 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold"
                style={{ background: 'linear-gradient(135deg,#4DD9EC,#0066CC)' }}
              >
                {i + 1}
              </span>
              <span className="text-body text-txt-secondary leading-relaxed">{pt}</span>
            </li>
          ))}
        </ul>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 transition-colors"
          aria-label="關閉"
        >
          ✕
        </button>
      </div>

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.88) translateY(24px); }
          to   { opacity: 1; transform: scale(1)    translateY(0); }
        }
      `}</style>
    </div>
  )
}

/* ─── Single Diamond Button ──────────────────────────────────── */
function DiamondStep({ step, index, onClick }) {
  const isTop = step.position === 'top'
  const isLast = index === steps.length - 1

  return (
    <div className="relative flex flex-col items-center" style={{ flex: '1 1 0' }}>

      {/* Dashed connector line — except after last */}
      {!isLast && (
        <div
          className="absolute hidden md:block"
          style={{
            top: isTop ? '3.5rem' : 'auto',
            bottom: isTop ? 'auto' : '3.5rem',
            left: '55%',
            right: '-50%',
            height: '2px',
            backgroundImage: 'repeating-linear-gradient(90deg,#4DD9EC 0,#4DD9EC 8px,transparent 8px,transparent 16px)',
            zIndex: 0,
          }}
        />
      )}

      {/* Top spacer for bottom-row diamonds */}
      {!isTop && <div className="hidden md:block" style={{ height: '7rem' }} />}

      {/* Diamond Button */}
      <button
        onClick={() => onClick(step)}
        className="group relative z-10 focus:outline-none"
        aria-label={`了解更多：${step.title}`}
      >
        {/* Outer diamond (dashed border, shown on hover) */}
        <div
          className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            transform: 'rotate(45deg) scale(1.18)',
            border: '2px dashed #4DD9EC',
            borderRadius: '10px',
          }}
        />

        {/* Inner filled diamond */}
        <div
          className="w-28 h-28 md:w-32 md:h-32 rounded-lg flex items-center justify-center
                     bg-dfa-blue hover:bg-dfa-dark
                     transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl shadow-lg"
          style={{ transform: 'rotate(45deg)' }}
        >
          {/* Text counter-rotated */}
          <div style={{ transform: 'rotate(-45deg)' }} className="text-center text-white px-1">
            <p className="text-[10px] font-semibold opacity-80 tracking-widest mb-0.5">STEP {step.num}</p>
            <p className="text-sm font-black leading-tight">{step.title}</p>
            <p className="text-[9px] opacity-70 mt-0.5 leading-tight hidden md:block">{step.icon}</p>
          </div>
        </div>

      </button>

      {/* Bottom spacer for top-row diamonds */}
      {isTop && <div className="hidden md:block" style={{ height: '7rem' }} />}

      {/* Label below the whole column (mobile) */}
      <p className="md:hidden mt-4 text-xs font-bold text-dfa-dark text-center">{step.title}</p>
    </div>
  )
}

/* ─── Main Page ──────────────────────────────────────────────── */
export default function IvyLeaguePage() {
  const [activeStep, setActiveStep] = useState(null)

  return (
    <>
      <ProgramHero
        title="美加藤校築夢計畫"
        subtitle="進入世界頂尖學府的最佳途徑"
      />

      {/* ── 服務計畫 ── */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <ScrollReveal>
            <SectionHeading label="Our Programs" title="服務計畫" subtitle="確保您成功的多元化選擇" split />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <ScrollReveal key={plan.title} delay={i * 0.1}>
                <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
                  <div className="h-1.5 bg-dfa-blue mb-6 w-16" />
                  <h3 className="text-h3 text-txt-primary mb-3">{plan.title}</h3>
                  <p className="text-body text-txt-secondary leading-relaxed mb-4">{plan.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {plan.highlights.map((h) => (
                      <span key={h} className="text-xs font-medium px-3 py-1 rounded-md bg-dfa-light text-dfa-blue">{h}</span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 美國 vs 加拿大比較 ── */}
      <section className="section-padding bg-[#F0F7FF]">
        <div className="container-max">
          <ScrollReveal>
            <SectionHeading label="Comparison" title="美國 vs 加拿大" subtitle="找到最適合你的留學目的地" split />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-md border border-gray-100">
              {/* Header row */}
              <div className="grid grid-cols-3 text-center">
                <div className="bg-gray-50 py-3 px-4 border-b border-gray-100">
                  <span className="text-eyebrow text-txt-muted uppercase">比較項目</span>
                </div>
                <div className="py-3 px-4 border-b border-blue-100" style={{ background: 'linear-gradient(135deg, #2DD8EE22, #1040CC22)' }}>
                  <span className="text-sm font-black text-dfa-blue">🇺🇸 美國</span>
                </div>
                <div className="bg-red-50 py-3 px-4 border-b border-red-100">
                  <span className="text-sm font-black text-red-700">🇨🇦 加拿大</span>
                </div>
              </div>
              {/* Data rows */}
              {COMPARE_ROWS.map((row, i) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-3 border-b border-gray-50 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/40'}`}
                >
                  <div className="px-4 py-3 flex items-center">
                    <span className="text-caption text-txt-secondary">{row.label}</span>
                  </div>
                  <div className="px-4 py-3 border-l border-blue-100">
                    <span className="text-caption text-txt-secondary leading-relaxed">{row.us}</span>
                  </div>
                  <div className="px-4 py-3 border-l border-red-100">
                    <span className="text-caption text-txt-secondary leading-relaxed">{row.ca}</span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 5 步申請流程（鑽石動畫）── */}
      <section className="section-padding bg-dfa-surface overflow-hidden">
        <div className="container-max">
          <ScrollReveal>
            <SectionHeading
              label="Application Process"
              title="申請流程"
              subtitle="五個關鍵步驟，帶你從起點直達夢校"
              split
            />
          </ScrollReveal>

          {/* Hint */}
          <ScrollReveal delay={0.1}>
            <p className="text-center text-sm text-dfa-muted mb-10">
              點擊每個步驟，查看詳細說明 ↓
            </p>
          </ScrollReveal>

          {/* ── Diamond Zigzag ── */}
          <ScrollReveal delay={0.15}>
            {/* Desktop: horizontal zigzag */}
            <div className="hidden md:flex items-stretch justify-between px-4" style={{ minHeight: '280px' }}>
              {steps.map((step, i) => (
                <DiamondStep key={step.id} step={step} index={i} onClick={setActiveStep} />
              ))}
            </div>

            {/* Mobile: vertical list */}
            <div className="flex md:hidden flex-col gap-6 items-center">
              {steps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step)}
                  className="w-full max-w-xs rounded-lg p-4 text-left shadow-md hover:shadow-lg bg-dfa-blue hover:bg-dfa-dark transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{step.icon}</span>
                    <div>
                      <p className="text-[10px] font-semibold text-white/70 tracking-widest">STEP {step.num}</p>
                      <p className="text-base font-black text-white leading-tight">{step.title}</p>
                      <p className="text-[11px] text-white/80 mt-0.5">{step.shortDesc}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Step summary cards below zigzag */}
          <div className="hidden md:grid grid-cols-5 gap-3 mt-6">
            {steps.map((step, i) => (
              <ScrollReveal key={step.id} delay={i * 0.08}>
                <button
                  onClick={() => setActiveStep(step)}
                  className="w-full text-center group"
                >
                  <p className="text-[11px] font-bold text-dfa-dark group-hover:text-dfa-blue transition-colors">
                    {step.title}
                  </p>
                  <p className="text-[10px] text-dfa-muted mt-0.5 leading-snug">{step.shortDesc}</p>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-dfa-gradient section-padding">
        <div className="container-max text-center">
          <ScrollReveal>
            <h2 className="text-h2 text-white mb-6">
              準備好踏入世界頂尖學府了嗎？
            </h2>
            <a
              href="#contact"
              className="inline-block bg-white text-dfa-blue font-bold rounded-md px-10 py-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              立即預約免費諮詢
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Popup Modal ── */}
      {activeStep && (
        <StepModal step={activeStep} onClose={() => setActiveStep(null)} />
      )}
    </>
  )
}
