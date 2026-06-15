import { useState } from 'react'
import ProgramHero from '../components/shared/ProgramHero'
import ScrollReveal from '../components/ui/ScrollReveal'
import SectionHeading from '../components/ui/SectionHeading'

// ── Data ────────────────────────────────────────────────────────────────────

const quickCompare = [
  { label: '費用', det: '約 USD $59（約 NT$1,900）', ielts: '約 USD $245（約 NT$7,800）', toefl: '約 USD $245（約 NT$7,800）' },
  { label: '考試地點', det: '在家線上考', ielts: '實體考場（全台多點）', toefl: '實體考場 / 線上兩種' },
  { label: '考試時長', det: '約 1 小時', ielts: '約 2 小時 45 分', toefl: '約 2 小時（加上等待約 3 小時）' },
  { label: '成績等待', det: '約 2 天', ielts: '約 13 天', toefl: '約 4–8 天' },
  { label: '成績有效期', det: '2 年', ielts: '2 年', toefl: '2 年' },
  { label: '滿分', det: '160 分', ielts: '9 分', toefl: '120 分' },
  { label: '接受學校範圍', det: '逐漸增加，部分社區大學尚未接受', ielts: '全球大多數英語系大學接受', toefl: '美國大學普遍接受，社區大學幾乎全部接受' },
  { label: '適合對象', det: '申請時間緊迫、預算有限者', ielts: '申請澳洲、英國、加拿大留學者', toefl: '申請美國大學的主流選擇' },
]

const examCards = [
  {
    id: 'det',
    name: '多鄰國英語測驗',
    abbr: 'DET',
    tagline: '最快、最便宜、在家就能考',
    desc: '多鄰國英語測驗是近年快速崛起的英語能力認證，最大優勢是在家用電腦考試，不需要跑到考場，費用也只有托福或雅思的四分之一。成績最快 2 天內就能出爐，適合申請時間緊迫的學生。考試內容涵蓋閱讀、寫作、聽力、口說，採用自適應題型，會根據你的答題表現動態調整難度。',
    notes: [
      '部分加州社區大學目前尚未接受多鄰國成績，申請前務必確認目標學校的政策',
      '線上監考環境有嚴格規定，考試途中需全程開啟鏡頭',
      '成績單可無限次免費寄送給學校',
    ],
    fits: [
      '你申請時間緊迫，需要快速取得成績',
      '你預算有限',
      '你確認目標學校接受多鄰國成績',
    ],
  },
  {
    id: 'ielts',
    name: '雅思',
    abbr: 'IELTS',
    tagline: '英國體系留學的首選，台灣接受度高',
    desc: '雅思（International English Language Testing System）是英國、澳洲、加拿大留學的主流英語考試。若你的留學目的地不只是美國，雅思是通用性最高的選擇。考試分為學術組（Academic）和移民組（General Training），申請大學需選擇學術組。考試在指定實體考場進行，分聽力、閱讀、寫作、口說四個部分，其中口說為與真人考官面對面進行。',
    notes: [
      '部分加州社區大學接受雅思，但門檻可能高於托福',
      '雅思口說為真人對話，對於不習慣電腦考試的學生較友善',
      '台灣考場集中在台北、台中、高雄等地',
    ],
    fits: [
      '你有計畫申請英國、澳洲、加拿大的學校',
      '你偏好與真人互動的口說考試形式',
      '你所申請的美國學校接受雅思成績',
    ],
  },
  {
    id: 'toefl',
    name: '托福',
    abbr: 'TOEFL iBT',
    tagline: '申請美國大學的標準選擇，最被廣泛接受',
    desc: '托福（Test of English as a Foreign Language）是申請美國大學最主流、接受度最高的英語考試。幾乎所有美國四年制大學和加州社區大學都接受托福成績，是最穩定保險的選擇。考試形式為電腦作答，分閱讀、聽力、口說、寫作四個部分，口說需對著麥克風錄音回答。',
    notes: [
      '考試費用較高，備考時間通常需要 2–3 個月',
      '可選擇在實體考場或居家線上考試（TOEFL iBT Home Edition）',
      '轉學申請 UC/CSU 時，托福是最普遍被接受的成績類型',
    ],
    fits: [
      '你的目標是申請美國大學（社區大學、UC、CSU）',
      '你希望選擇最被廣泛接受、風險最低的考試',
      '你有充足的備考時間（建議至少 2–3 個月）',
    ],
  },
]

const scoreConversion = [
  { level: '基礎入門', toefl: '45–59', ielts: '4.5–5.0', det: '85–95' },
  { level: '初級（可申請部分社區大學免修英文）', toefl: '60–78', ielts: '5.5–6.0', det: '100–110' },
  { level: '中級（多數社區大學免修英文門檻）', toefl: '79–93', ielts: '6.5', det: '115–120' },
  { level: '中高級（UC 轉學申請基本門檻）', toefl: '94–101', ielts: '7.0', det: '125–130' },
  { level: '高級（競爭力強的 UC 申請成績）', toefl: '102–110', ielts: '7.5', det: '135–140' },
  { level: '頂尖（UCLA、UCB 競爭力水準）', toefl: '111–120', ielts: '8.0–9.0', det: '145–160' },
]

const situationRecommend = [
  { situation: '申請時間只剩 1 個月', exam: '多鄰國 DET', reason: '報名快、2 天出成績、在家可考' },
  { situation: '預算有限（想省考試費）', exam: '多鄰國 DET', reason: '費用僅約 NT$1,900，是最省錢的選擇' },
  { situation: '申請加州社區大學（保守穩定）', exam: '托福 TOEFL', reason: '幾乎所有社區大學都接受，風險最低' },
  { situation: '申請 UC 轉學（確保資格）', exam: '托福 TOEFL', reason: 'UC 系統對托福接受度最穩定' },
  { situation: '同時申請美國 + 英國/澳洲', exam: '雅思 IELTS', reason: '跨英語系國家最通用' },
  { situation: '想一次考完不想重考', exam: '托福 TOEFL', reason: '最被廣泛接受，降低重考機率' },
  { situation: '對電腦口說不自在，偏好真人對話', exam: '雅思 IELTS', reason: '口說部分為與真人考官面試' },
]

const ccScores = [
  { school: 'De Anza College', toefl: '61', ielts: '6.0', det: '105' },
  { school: 'Santa Monica College', toefl: '61', ielts: '6.0', det: '105（部分課程接受）' },
  { school: 'Foothill College', toefl: '61', ielts: '6.0', det: '請洽學校確認' },
  { school: 'Diablo Valley College', toefl: '61', ielts: '6.0', det: '請洽學校確認' },
]

const ucScores = [
  { school: 'UC Berkeley', toefl: '80（建議 90+）', ielts: '6.5（建議 7.0+）', det: '115（建議 120+）' },
  { school: 'UCLA', toefl: '87', ielts: '7.0', det: '120' },
  { school: 'UC San Diego', toefl: '83', ielts: '7.0', det: '115' },
  { school: 'UC Davis', toefl: '80', ielts: '7.0', det: '115' },
  { school: 'UC Santa Barbara', toefl: '80', ielts: '7.0', det: '115' },
  { school: 'UC Irvine', toefl: '80', ielts: '7.0', det: '115' },
  { school: 'UC Santa Cruz', toefl: '75', ielts: '6.5', det: '110' },
]

const csuScores = [
  { school: 'San Jose State University', toefl: '61', ielts: '6.0', det: '105' },
  { school: 'Cal Poly SLO', toefl: '71', ielts: '6.0', det: '110' },
  { school: 'CSU Long Beach', toefl: '61', ielts: '6.0', det: '105' },
  { school: 'SFSU', toefl: '61', ielts: '6.0', det: '105' },
]

const faqs = [
  {
    q: '社區大學入學需要英文成績嗎？',
    a: '大多數加州社區大學要求國際學生提供英語能力證明，但門檻相對較低（托福約 61 分）。部分社區大學也接受「英語分級測驗」代替，讓你入學後根據程度選課。建議在申請前向目標學校確認最新要求。',
  },
  {
    q: '多鄰國成績，加州的社區大學真的接受嗎？',
    a: '目前越來越多學校開始接受多鄰國，但並非全部。以 De Anza、Santa Monica 等知名社區大學為例，部分已明確接受，但政策仍在更新中。DFA 顧問會幫你確認目標學校的最新政策，避免白考一場。',
  },
  {
    q: '準備申請 UC，要考幾分才有競爭力？',
    a: '托福建議至少達到 80 分（部分熱門科系需要 90 分以上）；雅思建議 7.0 以上；多鄰國建議 115 以上。但要注意，英文成績只是申請條件之一，GPA 和修課內容同樣重要。',
  },
  {
    q: '考試成績多久內要寄出？',
    a: '托福和雅思成績有效期為 2 年，多鄰國也是 2 年。申請社區大學和 UC 時，請確保成績在申請截止日前仍在有效期內。',
  },
  {
    q: '可以同時考多個考試嗎？',
    a: '可以，且有些學生選擇先考多鄰國快速取得資格，之後再考托福提升競爭力。DFA 顧問可以幫你根據申請時程規劃最有效率的備考策略。',
  },
  {
    q: '考試費用太高，有沒有辦法減少重考次數？',
    a: '建議先做好充分備考再報名，不要「試水溫」式地考試。多鄰國費用最低，適合作為初步測試；若目標是申請 UC，最終仍建議以托福成績為主。',
  },
]

// ── Sub-components ───────────────────────────────────────────────────────────

function ScoreTable({ rows, note }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-dfa-border">
      <table className="w-full text-sm text-left">
        <thead>
          <tr className="bg-dfa-blue text-white">
            <th className="px-4 py-3 font-semibold min-w-[140px]">學校</th>
            <th className="px-4 py-3 font-semibold">托福 TOEFL</th>
            <th className="px-4 py-3 font-semibold">雅思 IELTS</th>
            <th className="px-4 py-3 font-semibold">多鄰國 DET</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={r.school} className={i % 2 === 0 ? 'bg-white' : 'bg-dfa-surface'}>
              <td className="px-4 py-3 font-medium text-dfa-dark">{r.school}</td>
              <td className="px-4 py-3 text-txt-secondary">{r.toefl}</td>
              <td className="px-4 py-3 text-txt-secondary">{r.ielts}</td>
              <td className="px-4 py-3 text-txt-secondary">{r.det}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {note && (
        <p className="px-4 py-3 text-xs text-txt-muted bg-dfa-surface border-t border-dfa-border">{note}</p>
      )}
    </div>
  )
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-dfa-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold text-txt-primary hover:bg-dfa-surface transition-colors duration-200"
      >
        <span>{q}</span>
        <span className={`ml-4 shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-dfa-light text-dfa-blue transition-transform duration-300 ${open ? 'rotate-45' : ''}`}>
          ＋
        </span>
      </button>
      {open && (
        <div className="px-6 pb-5 text-txt-secondary text-body leading-relaxed border-t border-dfa-border pt-4">
          {a}
        </div>
      )}
    </div>
  )
}

// ── Page ────────────────────────────────────────────────────────────────────

export default function TutoringPage() {
  return (
    <>
      <ProgramHero
        title="三大英文考試，哪一個最適合你？"
        subtitle="多鄰國、雅思、托福全面比較——幫你選對考試，少走冤枉路"
      />

      {/* Hero CTA */}
      <section className="bg-dfa-light py-8">
        <div className="container-max text-center px-4">
          <p className="text-body-lg text-txt-secondary mb-4">
            <span className="block">準備赴美留學，第一關就是英文成績。</span>
            <span className="block">托福、雅思、多鄰國到底有什麼差別？<br className="md:hidden" />哪一個比較好考？哪一個美國大學接受？</span>
            <span className="block">這篇完整比較，讓你一次搞清楚。</span>
          </p>
          <a
            href="https://lin.ee/O1ejJf7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-bold rounded-md px-8 py-3 bg-dfa-blue text-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            預約免費諮詢，讓顧問幫你選最適合的考試
          </a>
        </div>
      </section>

      {/* Quick Comparison Table */}
      <section className="section-padding bg-white">
        <div className="container-max px-4">
          <ScrollReveal>
            <SectionHeading title="三大考試一眼看清楚" />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="overflow-x-auto rounded-xl border border-dfa-border">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="bg-dfa-blue text-white">
                    <th className="px-4 py-3 font-semibold min-w-[120px]">比較項目</th>
                    <th className="px-4 py-3 font-semibold min-w-[160px]">多鄰國 DET</th>
                    <th className="px-4 py-3 font-semibold min-w-[160px]">雅思 IELTS</th>
                    <th className="px-4 py-3 font-semibold min-w-[160px]">托福 TOEFL iBT</th>
                  </tr>
                </thead>
                <tbody>
                  {quickCompare.map((r, i) => (
                    <tr key={r.label} className={i % 2 === 0 ? 'bg-white' : 'bg-dfa-surface'}>
                      <td className="px-4 py-3 font-semibold text-dfa-dark">{r.label}</td>
                      <td className="px-4 py-3 text-txt-secondary">{r.det}</td>
                      <td className="px-4 py-3 text-txt-secondary">{r.ielts}</td>
                      <td className="px-4 py-3 text-txt-secondary">{r.toefl}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Individual Exam Cards */}
      <section className="section-padding bg-dfa-surface">
        <div className="container-max px-4">
          <ScrollReveal>
            <SectionHeading title="每一個考試，你都需要了解這些" />
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {examCards.map((exam, i) => (
              <ScrollReveal key={exam.id} delay={i * 0.1}>
                <div className="bg-white rounded-2xl shadow-sm border border-dfa-border overflow-hidden flex flex-col h-full">
                  <div className="h-1.5 bg-dfa-gradient" />
                  <div className="p-6 flex flex-col flex-1">
                    <div className="mb-4">
                      <span className="text-xs font-bold tracking-widest text-dfa-blue uppercase">{exam.abbr}</span>
                      <h3 className="text-xl font-black text-dfa-dark mt-1">{exam.name}</h3>
                      <p className="text-sm text-dfa-blue font-medium mt-1">{exam.tagline}</p>
                    </div>
                    <p className="text-txt-secondary text-sm leading-relaxed mb-5">{exam.desc}</p>

                    <div className="mb-5">
                      <p className="text-xs font-bold text-txt-muted uppercase tracking-wider mb-2">注意事項</p>
                      <ul className="space-y-1.5">
                        {exam.notes.map((n) => (
                          <li key={n} className="flex gap-2 text-sm text-txt-secondary">
                            <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-dfa-blue" />
                            {n}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto">
                      <p className="text-xs font-bold text-dfa-blue uppercase tracking-wider mb-2">適合你，如果</p>
                      <ul className="space-y-1.5">
                        {exam.fits.map((f) => (
                          <li key={f} className="flex gap-2 text-sm text-txt-secondary">
                            <span className="shrink-0 text-dfa-blue font-bold">✓</span>
                            {f}
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

      {/* Score Conversion Table */}
      <section className="section-padding bg-white">
        <div className="container-max px-4">
          <ScrollReveal>
            <SectionHeading title="三大考試分數怎麼換算？" />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-txt-secondary text-sm mb-6 max-w-2xl">
              以下對照表為各考試官方或業界常用的能力等級換算，供參考用途。實際申請時，學校要求的是各考試的獨立分數門檻，非換算後的分數。
            </p>
            <div className="overflow-x-auto rounded-xl border border-dfa-border">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="bg-dfa-blue text-white">
                    <th className="px-4 py-3 font-semibold min-w-[200px]">英語能力等級</th>
                    <th className="px-4 py-3 font-semibold">托福 TOEFL</th>
                    <th className="px-4 py-3 font-semibold">雅思 IELTS</th>
                    <th className="px-4 py-3 font-semibold">多鄰國 DET</th>
                  </tr>
                </thead>
                <tbody>
                  {scoreConversion.map((r, i) => (
                    <tr key={r.level} className={i % 2 === 0 ? 'bg-white' : 'bg-dfa-surface'}>
                      <td className="px-4 py-3 font-medium text-txt-primary">{r.level}</td>
                      <td className="px-4 py-3 text-txt-secondary">{r.toefl}</td>
                      <td className="px-4 py-3 text-txt-secondary">{r.ielts}</td>
                      <td className="px-4 py-3 text-txt-secondary">{r.det}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Situation-Based Recommendations */}
      <section className="section-padding bg-dfa-surface">
        <div className="container-max px-4">
          <ScrollReveal>
            <SectionHeading title="依你的情況，選擇最適合的考試" />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="overflow-x-auto rounded-xl border border-dfa-border">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="bg-dfa-blue text-white">
                    <th className="px-4 py-3 font-semibold min-w-[200px]">你的情況</th>
                    <th className="px-4 py-3 font-semibold">建議考試</th>
                    <th className="px-4 py-3 font-semibold min-w-[200px]">原因</th>
                  </tr>
                </thead>
                <tbody>
                  {situationRecommend.map((r, i) => (
                    <tr key={r.situation} className={i % 2 === 0 ? 'bg-white' : 'bg-dfa-surface'}>
                      <td className="px-4 py-3 text-txt-primary">{r.situation}</td>
                      <td className="px-4 py-3 font-semibold text-dfa-blue">{r.exam}</td>
                      <td className="px-4 py-3 text-txt-secondary">{r.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* School Score Requirements */}
      <section className="section-padding bg-white">
        <div className="container-max px-4">
          <ScrollReveal>
            <SectionHeading title="加州社區大學、UC、CSU 的英文成績門檻" />
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <p className="text-txt-secondary text-sm mb-8 max-w-2xl">
              以下為各學校常見門檻參考值，實際要求依各校政策而異，建議申請前至各學校官網確認最新規定。
            </p>
          </ScrollReveal>

          <div className="space-y-10">
            <ScrollReveal delay={0.1}>
              <h3 className="text-lg font-bold text-dfa-dark mb-4">加州社區大學（English Placement / 免修英文門檻）</h3>
              <ScoreTable
                rows={ccScores}
                note="⚠️ 多鄰國成績：部分社區大學仍在評估接受政策，申請前請務必向各校 International Admissions Office 確認。"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <h3 className="text-lg font-bold text-dfa-dark mb-4">加州大學（UC 系統）轉學申請英語要求</h3>
              <ScoreTable rows={ucScores} />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h3 className="text-lg font-bold text-dfa-dark mb-4">加州州立大學（CSU 系統）轉學申請英語要求</h3>
              <ScoreTable
                rows={csuScores}
                note="📌 完成 60 學分以上的社區大學課程且 GPA 達標者，部分 CSU 學校可申請英語豁免（English Proficiency Waiver）。"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-dfa-surface">
        <div className="container-max px-4">
          <ScrollReveal>
            <SectionHeading title="學生最常問的問題" />
          </ScrollReveal>
          <div className="max-w-3xl mx-auto mt-8 space-y-3">
            {faqs.map((faq, i) => (
              <ScrollReveal key={faq.q} delay={i * 0.05}>
                <FaqItem q={faq.q} a={faq.a} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden min-h-[420px] md:min-h-[520px] flex items-center">
        <img
          src="/images/campus.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container-max text-center px-4 py-16">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl md:text-h2 font-black mb-4 leading-tight text-white">
              不確定該考哪個？讓顧問幫你決定
            </h2>
            <p className="text-base md:text-lg mb-6 max-w-2xl mx-auto text-white/90">
              每個學生的情況不同——申請時程、目標學校、備考時間、預算都會影響你的最佳選擇。DFA 夢想家留學的顧問擁有豐富的留美申請經驗，可以幫你：
            </p>
            <ul className="inline-block text-left space-y-2 mb-8 text-white/90 text-base md:text-lg">
              <li className="flex gap-2"><span className="text-dfa-cyan font-bold shrink-0">✓</span>分析你的目標學校是否接受你想考的考試</li>
              <li className="flex gap-2"><span className="text-dfa-cyan font-bold shrink-0">✓</span>根據申請截止日規劃備考時程</li>
              <li className="flex gap-2"><span className="text-dfa-cyan font-bold shrink-0">✓</span>提供針對性的備考建議與資源</li>
            </ul>
            <div>
              <a
                href="https://lin.ee/O1ejJf7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-bold rounded-md px-10 py-4 bg-white text-dfa-blue hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                預約免費諮詢（限時開放）
              </a>
              <p className="text-white/70 text-sm mt-4">每週名額有限，歡迎提早預約</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SEO footer text */}
      <section className="py-8 bg-white border-t border-dfa-border">
        <div className="container-max px-4">
          <p className="text-xs text-txt-muted max-w-3xl mx-auto text-center leading-relaxed">
            多鄰國（Duolingo English Test, DET）、雅思（IELTS）、托福（TOEFL iBT）是目前申請美國大學最常見的三大英語能力考試。本文由 DFA 夢想家留學整理，專為有意赴美就讀加州社區大學、申請 UC（加州大學）或 CSU（加州州立大學）轉學的台灣學生提供參考。如有任何申請相關問題，歡迎預約我們的免費顧問諮詢。
          </p>
        </div>
      </section>
    </>
  )
}
