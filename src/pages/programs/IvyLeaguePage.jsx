import ProgramHero from '../../components/shared/ProgramHero'
import ScrollReveal from '../../components/ui/ScrollReveal'
import SectionHeading from '../../components/ui/SectionHeading'

/* ─── 美 vs 加 比較資料 ─────────────────────────────────────── */
const US_POINTS = [
  {
    title: '世界最多頂尖大學',
    desc: '美國擁有最多世界排名前列的學校，包含 Harvard、Stanford、MIT 等全球頂尖學府。',
  },
  {
    title: '高度彈性的教育制度',
    desc: '可跨領域修課、轉換科系、甚至轉學進入名校（如 UC 系統轉學制度）。',
    note: '讓學生有重新規劃人生的機會',
  },
  {
    title: '就業與產業資源集中',
    desc: '矽谷、華爾街、好萊塢等產業核心都在美國。',
    note: '留學期間即可接觸實習與職涯機會',
  },
  {
    title: 'OPT 工作機會',
    desc: '畢業後可留美工作（STEM 最長可達 3 年）。',
  },
]

const CA_POINTS = [
  {
    title: '世界級教育品質',
    desc: '多倫多大學、UBC、McGill 等皆為全球知名學校。',
  },
  {
    title: '相對合理的留學成本',
    desc: '學費與生活費普遍低於美國。',
    note: '投資報酬率更穩定',
  },
  {
    title: '友善移民與工作政策',
    desc: '畢業後可申請工作簽證（PGWP）。',
    note: '有機會轉為長期發展',
  },
  {
    title: '安全與生活品質高',
    desc: '適合希望穩定、長期發展的學生。',
  },
]

/* ─── 申請流程 6 步 ─────────────────────────────────────────── */
const STEPS = [
  {
    num: '01',
    title: '諮詢',
    points: [
      '免費一對一深度評估，了解學術背景與夢想院校',
      '個人競爭力分析與申請可行性評估',
      '初步提供量身訂做的升學路徑建議',
    ],
  },
  {
    num: '02',
    title: '初選學校',
    note: '建議在入學前 7 年開始',
    points: [
      '提供全面升學建議（學生生活、學校知名度、住宿、主修選擇、課外活動）',
      '科系比較與申請入學分析',
      '初選最適合學校清單',
    ],
  },
  {
    num: '03',
    title: '文件準備',
    points: [
      '準備申請文件：成績單、推薦信、作品集（藝術科系）',
      '公証文件、財力證明等整備',
      '分析各校錄取條件，制定文書策略',
    ],
  },
  {
    num: '04',
    title: '風險管控策略佈局',
    note: '建議入學前 5–9 個月確認',
    points: [
      '決定最終申請學校清單（衝刺 / 目標 / 保底）',
      '專業秘書協助填寫申請表格',
      '顧問協助整理所有書面文件',
      '顧問協助留學考試成績送出與校譯服務',
    ],
  },
  {
    num: '05',
    title: '與學校聯絡 / 導師',
    points: [
      '代為與學校書信 / E-mail 聯絡指導',
      '追蹤申請進度，即時回應學校需求',
    ],
  },
  {
    num: '06',
    title: '準備出國手續',
    points: [
      '收到入學許可後，分析比較各校 Offer，協助決定入學',
      '辦理出國手續：簽證申請、護照、機票安排',
      '行前指導：住宿、保險、生活準備全指引',
    ],
  },
]

export default function IvyLeaguePage() {
  return (
    <div style={{ background: 'linear-gradient(135deg, #2DD8EE 0%, #1A9AE6 30%, #0A2A6E 100%)' }}>
      <div
        className="fixed inset-0 opacity-[0.04] pointer-events-none z-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <ProgramHero title="美加藤校築夢計畫" subtitle="進入世界頂尖學府的最佳途徑" transparent />

      {/* ── 引言 ── */}
      <section className="relative z-10 section-padding">
        <div className="container-max">
          <ScrollReveal>
            <div className="max-w-3xl">
              <blockquote className="text-h2 text-white leading-snug mb-6">
                <span className="block whitespace-nowrap">那些被淘汰的學生並不是成績能力差，</span>
                <span className="block whitespace-nowrap">而是沒有一份讓你展翅飛翔的申請資料</span>
              </blockquote>
              <p className="text-caption text-white/50">— 前哈佛專業申請人 Emerald Macreen</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 說明段落 ── */}
      <section className="relative z-10 section-padding">
        <div className="container-max">
          <ScrollReveal>
            <p className="text-body-lg text-white/80 leading-relaxed max-w-3xl">
              美國與加拿大長期被視為全球高等教育的核心。<br />
              從常春藤聯盟（Ivy League）到頂尖公立大學與研究型學校，<br />
              這兩個國家提供的不只是學歷，<br />
              而是一整套完整的資源、生態與機會。
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 美 vs 加 比較 ── */}
      <section className="relative z-10 section-padding">
        <div className="container-max">
          <ScrollReveal>
            <SectionHeading label="Comparison" title="美國 vs 加拿大" subtitle="找到最適合你的留學目的地" split light />
          </ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <ScrollReveal delay={0.1}>
              <div className="rounded-xl border-2 border-blue-300 overflow-hidden h-full flex flex-col">
                <div className="px-6 py-5 flex items-center gap-4 bg-blue-50">
                  <span className="text-xs font-black px-2 py-1 rounded bg-dfa-blue text-white tracking-widest">US</span>
                  <div>
                    <p className="text-base font-black text-dfa-blue">美國</p>
                    <p className="text-sm text-txt-muted">世界頂尖教育與機會中心</p>
                  </div>
                </div>
                <div className="p-6 space-y-5 bg-white flex-1">
                  {US_POINTS.map((p, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="text-dfa-blue font-black text-xl shrink-0 mt-0.5">✓</span>
                      <div>
                        <p className="font-bold text-txt-primary text-base">{p.title}</p>
                        <p className="text-body text-txt-secondary leading-relaxed mt-1">{p.desc}</p>
                        {p.note && <p className="text-body text-dfa-blue mt-1"><span className="mr-1">👉</span>{p.note}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="rounded-xl border-2 border-red-300 overflow-hidden h-full flex flex-col">
                <div className="px-6 py-5 flex items-center gap-4 bg-red-50">
                  <span className="text-xs font-black px-2 py-1 rounded bg-red-600 text-white tracking-widest">CA</span>
                  <div>
                    <p className="text-base font-black text-red-700">加拿大</p>
                    <p className="text-sm text-txt-muted">高品質教育 + 高性價比選擇</p>
                  </div>
                </div>
                <div className="p-6 space-y-5 bg-white flex-1">
                  {CA_POINTS.map((p, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="text-red-500 font-black text-xl shrink-0 mt-0.5">✓</span>
                      <div>
                        <p className="font-bold text-txt-primary text-base">{p.title}</p>
                        <p className="text-body text-txt-secondary leading-relaxed mt-1">{p.desc}</p>
                        {p.note && <p className="text-body text-red-600 mt-1"><span className="mr-1">👉</span>{p.note}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── DFA 聲明 ── */}
      <section className="relative z-10 section-padding">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mx-auto">
              <p className="text-h2 text-white leading-snug">
                <span className="block whitespace-nowrap">在 DFA，我們不只幫你申請學校，</span>
                <span className="block whitespace-nowrap">而是幫你選擇最適合的國家與路徑</span>
              </p>
              <div className="my-6 h-px max-w-xs mx-auto bg-white/30" />
              <p className="text-body-lg text-white/80 leading-relaxed">
                因為留學的關鍵<br />
                從來不是去哪一間<br />
                <span className="text-white font-bold">而是你未來要走哪一條路</span>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 申請流程 ── */}
      <section className="relative z-10 section-padding">
        <div className="container-max">
          <ScrollReveal>
            <SectionHeading label="Application Process" title="申請流程" subtitle="六個關鍵步驟，帶你從起點直達夢校" split light />
          </ScrollReveal>
          <div className="max-w-3xl mx-auto">
            {STEPS.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 0.07}>
                <div className="flex gap-0">
                  <div className="flex flex-col items-center w-16 shrink-0">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-sm shrink-0 z-10 bg-white/20">
                      {step.num}
                    </div>
                    {i < STEPS.length - 1 && (
                      <div className="w-0.5 flex-1 min-h-[2rem] bg-white/20 my-1" />
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 ml-2">
                      <p className="font-black text-txt-primary text-lg mb-1">{step.title}</p>
                      {step.note && <p className="text-caption text-dfa-blue mb-3">{step.note}</p>}
                      <ul className="space-y-2 mt-3">
                        {step.points.map((pt, j) => (
                          <li key={j} className="flex gap-3 items-start">
                            <span className="mt-1 w-1.5 h-1.5 rounded-full bg-dfa-blue shrink-0" />
                            <span className="text-body text-txt-secondary leading-relaxed">{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
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
            <h2 className="text-h2 text-white">準備好踏入世界頂尖學府了嗎？</h2>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
