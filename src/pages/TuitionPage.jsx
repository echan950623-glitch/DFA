import ProgramHero from '../components/shared/ProgramHero'
import ScrollReveal from '../components/ui/ScrollReveal'
import SectionHeading from '../components/ui/SectionHeading'
import { HiCash, HiAcademicCap, HiUserGroup, HiClipboardCheck, HiCheck } from 'react-icons/hi'

const advantages = [
  { icon: HiCash, title: '學費便宜', desc: '社區大學每學分費用遠低於四年制大學，整體就讀預算相當親民，是留學性價比最高的選擇。' },
  { icon: HiUserGroup, title: '小班制', desc: '社區大學一般是小班制，師生互動多，老師更能注意學生的個別發展，相較四年制大學更易融入。' },
  { icon: HiClipboardCheck, title: '入學門檻低', desc: '國際學生申請社區學院只需繳交 TOEFL 成績，不需要 SAT 或 ACT 等入學試。部分學校甚至能豁免 TOEFL。' },
  { icon: HiAcademicCap, title: '轉入名校機率高', desc: '大學每年接受一定數量的社區學院學生，社區學院畢業生面臨較低的競爭，轉學錄取率比新生錄取率更高。' },
]

/* ── VIP 方案比較表資料（來自官方報價文件）── */
const VIP_PLANS = [
  {
    id: 'basic',
    name: 'VIP 基礎',
    sub: '規劃方案',
    target: '申請國外院校的同學',
    color: 'border-sky-400',
    headerBg: 'bg-sky-50',
    headerText: 'text-sky-700',
    badgeColor: 'bg-sky-100 text-sky-700',
  },
  {
    id: 'advanced',
    name: 'VIP 進階',
    sub: '申請方案',
    target: '申請國外名校（TOP 100）',
    color: 'border-blue-500',
    headerBg: 'bg-blue-50',
    headerText: 'text-blue-700',
    badgeColor: 'bg-blue-100 text-blue-700',
    featured: true,
  },
  {
    id: 'flagship',
    name: 'VIP 旗艦',
    sub: '全程託管計畫',
    target: '目標頂尖名校（TOP30 / UC 前六）',
    color: 'border-dfa-blue',
    headerBg: 'bg-dfa-dark',
    headerText: 'text-white',
    badgeColor: 'bg-dfa-cyan/20 text-dfa-cyan',
    dark: true,
  },
]

const VIP_ROWS = [
  {
    category: '升學規劃',
    items: [
      {
        label: '升學整體策略',
        basic: '個人化升學方向分析',
        advanced: '完整申請策略與路徑設計',
        flagship: '長期升學戰略規劃（提升競爭力）',
      },
      {
        label: '科系定位與職涯規劃',
        basic: '興趣與能力分析',
        advanced: '專業與申請方向整合',
        flagship: '結合產業趨勢之職涯導向規劃',
      },
      {
        label: '留學國家與申請路徑',
        basic: '基礎建議',
        advanced: '多國申請策略',
        flagship: '全球升學配置（美國前 50）',
      },
      {
        label: '選校策略',
        basic: '初步選校建議',
        advanced: '分梯度選校',
        flagship: '名校衝刺策略（提升錄取機率）',
      },
    ],
  },
  {
    category: '申請文件',
    items: [
      {
        label: '履歷優化',
        basic: '方向建議',
        advanced: '完整履歷優化',
        flagship: '多輪深度優化（名校導向）',
      },
      {
        label: '申請文書（SOP / PS）',
        basic: '—',
        advanced: '文書撰寫與修改',
        flagship: '深度打造（故事線與差異化）',
      },
      {
        label: '推薦信策略',
        basic: '—',
        advanced: '推薦人與內容指導',
        flagship: '教授導向推薦信策略規劃',
      },
    ],
  },
  {
    category: '背景提升',
    items: [
      {
        label: '科研 / 暑期學術計畫',
        basic: '建議方向',
        advanced: '申請輔導',
        flagship: '精準資源匹配與履歷整合',
      },
      {
        label: '背景提升規劃',
        basic: '—',
        advanced: '系統性規劃',
        flagship: '完整履歷打造（科研 / 競賽）',
      },
    ],
  },
  {
    category: '申請管理',
    items: [
      {
        label: '申請流程管理',
        basic: '系統性規劃',
        advanced: '全流程追蹤與提醒',
        flagship: '全程托管（時間與進度控管）',
      },
      {
        label: '面試輔導',
        basic: '—',
        advanced: '模擬面試',
        flagship: '高強度面試訓練與回饋',
      },
      {
        label: '導師一對一輔導',
        basic: '—',
        advanced: '定期顧問指導',
        flagship: '專屬顧問＋名校導師雙軌',
      },
    ],
  },
  {
    category: '學業規劃',
    items: [
      {
        label: 'GPA 與選課策略',
        basic: '—',
        advanced: 'GPA 優化與選課策略（核心）',
        flagship: '長期學業規劃與追蹤',
      },
      {
        label: '科研成果 / 論文指導',
        basic: '—',
        advanced: '申請輔導',
        flagship: '研究成果與論文產出規劃',
      },
    ],
  },
  {
    category: '進度追蹤',
    items: [
      {
        label: '每月進度管理',
        basic: '—',
        advanced: '—',
        flagship: '每月檢核與策略調整',
      },
      {
        label: '家長定期回報',
        basic: '—',
        advanced: '—',
        flagship: '定期進度報告與溝通',
      },
      {
        label: '升學結果優化',
        basic: '—',
        advanced: 'Offer 分析與選擇建議',
        flagship: '最終申請結果優化與決策策略',
      },
    ],
  },
]

function CellContent({ text }) {
  if (text === '—') return <span className="text-gray-300 text-lg">—</span>
  return (
    <span className="flex items-start gap-1.5 text-left">
      <HiCheck className="text-dfa-blue shrink-0 mt-0.5 text-base" />
      <span className="text-gray-700 text-sm leading-relaxed">{text}</span>
    </span>
  )
}

export default function TuitionPage() {
  return (
    <>
      <ProgramHero
        title="經濟入夢"
        subtitle="透過 2+2 路徑節省留學成本，搭配三階段 VIP 方案全程護航"
      />

      {/* ── CC 4大優勢 ── */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <ScrollReveal>
            <SectionHeading title="美國社區大學轉學優勢" subtitle="為什麼選擇 2+2 路徑？" />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv, i) => (
              <ScrollReveal key={adv.title} delay={i * 0.1}>
                <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-lg flex items-center justify-center text-white"
                    style={{ background: 'linear-gradient(135deg, #2DD8EE, #1040CC)' }}>
                    <adv.icon className="text-2xl" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{adv.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{adv.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TAG ── */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <ScrollReveal>
            <SectionHeading title="TAG 轉學優勢" />
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-gray-600 leading-relaxed">
                透過 CC（如 Santa Monica College、Diablo Valley College）可申請 TAG（Transfer Admission Guarantee），以較低門檻進入 UC 系統名校。TAG 提供保證錄取，大幅降低申請不確定性。
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── VIP 方案比較表 ── */}
      <section className="section-padding bg-white">
        <div className="container-max w-full">
          <ScrollReveal>
            <SectionHeading
              title="VIP 升學服務方案"
              subtitle="美國社區大學轉學 2+2 — 三階段專業輔導計畫"
            />
            <p className="text-center text-gray-500 text-sm mb-12 -mt-4">
              透過夢想家完善升學規劃與轉學機制，在確保升學品質的同時有效控制留學預算
            </p>
          </ScrollReveal>

          {/* Plan headers */}
          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-4 gap-3 mb-0 max-w-5xl mx-auto overflow-x-auto">
              <div /> {/* empty for row label col */}
              {VIP_PLANS.map((plan) => (
                <div
                  key={plan.id}
                  className={`rounded-t-2xl border-2 ${plan.color} ${plan.dark ? 'bg-dfa-dark text-white' : plan.headerBg} p-5 text-center relative`}
                >
                  {plan.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-dfa-blue text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                      推薦方案
                    </div>
                  )}
                  <p className={`text-lg font-black ${plan.dark ? 'text-white' : plan.headerText}`}>{plan.name}</p>
                  <p className={`text-xs font-medium mt-0.5 ${plan.dark ? 'text-white/70' : 'text-gray-500'}`}>{plan.sub}</p>
                  <p className={`mt-2 text-xs rounded-full px-2 py-0.5 inline-block ${plan.badgeColor}`}>{plan.target}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Table rows */}
          <ScrollReveal delay={0.2}>
            <div className="max-w-5xl mx-auto border border-gray-100 rounded-b-2xl overflow-x-auto shadow-md" style={{ minWidth: 0 }}>
              {VIP_ROWS.map((group, gi) => (
                <div key={group.category}>
                  {/* Category header */}
                  <div className="grid grid-cols-4 bg-gray-50 border-b border-gray-100">
                    <div className="col-span-4 px-4 py-2">
                      <span className="text-xs font-bold text-dfa-blue uppercase tracking-widest">{group.category}</span>
                    </div>
                  </div>
                  {/* Rows */}
                  {group.items.map((row, ri) => (
                    <div
                      key={row.label}
                      className={`grid grid-cols-4 border-b border-gray-50 ${ri % 2 === 0 ? 'bg-white' : 'bg-gray-50/40'}`}
                    >
                      <div className="px-4 py-3 flex items-start">
                        <span className="text-xs font-semibold text-gray-700 leading-relaxed">{row.label}</span>
                      </div>
                      <div className="px-3 py-3 border-l border-gray-100"><CellContent text={row.basic} /></div>
                      <div className="px-3 py-3 border-l border-blue-100 bg-blue-50/30"><CellContent text={row.advanced} /></div>
                      <div className="px-3 py-3 border-l border-gray-200 bg-slate-50/60"><CellContent text={row.flagship} /></div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Contact CTA under table */}
          <ScrollReveal delay={0.3}>
            <p className="text-center text-gray-500 text-sm mt-6">
              如需了解各方案詳細費用，請
              <a href="#contact" className="text-dfa-blue font-semibold hover:underline mx-1">聯絡我們</a>
              進行免費評估
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-padding"
        style={{ background: 'linear-gradient(to right, #2DD8EE 0%, #1A9AE6 40%, #1040CC 100%)' }}>
        <div className="container-max text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-black text-white mb-3">用更聰明的方式，實現留學夢想</h2>
            <p className="text-white/80 mb-8">透過完整升學規劃與轉學策略，在提升升學品質的同時，有效控制留學成本</p>
            <a href="#contact" className="inline-block bg-white text-dfa-dark font-bold rounded-lg px-10 py-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              立即預約免費諮詢
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
