import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProgramHero from '../../components/shared/ProgramHero'
import ScrollReveal from '../../components/ui/ScrollReveal'
import SectionHeading from '../../components/ui/SectionHeading'
import CTABanner from '../../components/shared/CTABanner'

/* ─── 三國資料 ─────────────────────────────────────────────── */
const COUNTRIES = [
  {
    id: 'uk',
    code: 'GB',
    name: '英國',
    tagline: 'G5 菁英大學 × 1–2 年碩士學制',
    desc: '英國 G5 大學（牛津、劍橋、帝國理工、UCL、LSE）位居全球頂尖。碩士學制基本為 1–2 年，總花費較低、CP值高；申請方式多元（直升碩士／碩士預科／碩士先修課程），對不同背景學生都有合適路徑。',
    schools: ['牛津大學', '劍橋大學', '帝國理工學院', 'UCL', 'LSE', '愛丁堡大學', '曼徹斯特大學'],
    highlights: [
      { label: '學制', value: '碩士 1–2 年' },
      { label: '畢業簽證', value: 'Graduate Route 2 年' },
      { label: '代表名校', value: 'G5 聯盟' },
    ],
    universities: [
      { name: '劍橋大學', en: 'Cambridge', qs: 2, majors: '數學・工程・化學工程・計算機科學・經濟學・歷史・建築學・醫學・自然科學・地理・法律' },
      { name: '牛津大學', en: 'Oxford', qs: 3, majors: '經濟與管理・計算機科學・醫學・數學・生物醫學・哲學政治經濟・歷史與政治・物理・法律' },
      { name: '帝國理工學院', en: 'Imperial College London', qs: 6, majors: '航空航天工程・分子生物工程・機械工程・材料科學・電子電氣工程・人工智慧・化學工程・生物科技' },
      { name: '倫敦大學學院 UCL', en: 'University College London', qs: 9, majors: '人類學・建築學・化學工程・土木工程・計算機科學・經濟學・心理學・地理學・法學・教育學・哲學' },
      { name: '倫敦政經學院 LSE', en: 'London School of Economics', qs: 45, majors: '經濟學・法律・管理學・會計與金融・金融・數據科學・政治學' },
    ],
    pathways: [
      { tag: '01', title: '直升碩士', target: '大學畢業', requirement: '平均成績 80・雅思 6.5（G5 需 90）' },
      { tag: '02', title: '碩士預科', target: '大學成績未達標', requirement: '平均成績 60・雅思 5.0–5.5' },
      { tag: '03', title: '碩士先修課程', target: '專科學生', requirement: '雅思 5.5–6.0・專科 70 分以上' },
    ],
    advantages: [
      { icon: '💷', title: '費用低 · 時間短', desc: '碩士 1–2 年學制節省時間與費用，總花費低、CP值高。' },
      { icon: '🎯', title: '申請方式多元', desc: '直升碩士／碩士預科／碩士先修課程，對不同背景都有合適路徑。' },
      { icon: '🏛️', title: '名校資源豐富', desc: '世界前 100 約 15 所，除 G5 外還有愛丁堡、曼大、KCL 等。' },
      { icon: '🚄', title: '旅遊便利', desc: '毗鄰歐洲大陸，假期可暢遊北歐、東歐、中歐不同城市。' },
    ],
    timeline: [
      { period: '3–5 月', items: ['準備雅思、履歷', '部分專業準備 GRE / GMAT', '提升學業成績 GPA'] },
      { period: '6–7 月', items: ['雅思一刷', '暑期實習', '聯絡教授／實習推薦人'] },
      { period: '8 月', items: ['完善履歷、撰寫文書', '雅思二刷、確定推薦人名單', '初步確定目標學校'] },
      { period: '9 月', items: ['完善文書撰寫', '準備其他申請資料', '申請季開始：網申開始'] },
      { period: '10 月', items: ['文書定稿', '寄送材料並提交申請', '確認推薦信全部提交'] },
      { period: '11–12 月', items: ['熱門院校開始發放 OFFER', '部分熱門專業申請截止'] },
      { period: '次年 1–3 月', items: ['語言班申請開放', '確定入學學校與課程、繳留位費', '雅思未達標續考'] },
      { period: '次年 4–5 月', items: ['雅思未達標申語言班', '準備 IELTS for UKVI'] },
      { period: '次年 6 月', items: ['換 Unconditional Offer', '存款證明、體檢、疫苗', 'CAS letter、辦理簽證'] },
    ],
    masterImage: '/images/uk-aus-nz/uk-master.png',
    advantagesImage: '/images/uk-aus-nz/uk-advantages.png',
    plan: {
      title: '英國碩士',
      subtitle: '以英國 G5 院校為申請目標，提供從備考到入學的全方位一站式服務',
      guarantee: '升學成果保障條款',
      items: [
        { num: '01', title: '名校保錄', desc: '以英國 G5 院校為主要申請目標，專業評估背景、制定策略，協助提升名校錄取機率。' },
        { num: '02', title: '國際優勢', desc: '擁有豐富海外人脈網絡，協助學生對接知名院校資源，360° 全方位留學規劃服務。' },
        { num: '03', title: '一站服務', desc: '選校申請、面試輔導、文書修改、簽證指導等全流程一站式協助，省時省力。' },
        { num: '04', title: '獨到經驗', desc: '與數十位海外院校教授及業界導師長期合作，掌握第一手申請資訊與評審標準。' },
      ],
    },
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
      { label: '學制', value: '3 年學士課程' },
      { label: '工作簽', value: 'PSW 2–4 年' },
      { label: '代表名校', value: 'Group of Eight' },
    ],
    universities: [
      { name: '墨爾本大學', en: 'University of Melbourne', qs: 14, majors: '商科・醫學與生命科學・工程與資訊・人文社科・法學・藝術與文化・教育學' },
      { name: '雪梨大學', en: 'University of Sydney', qs: 19, majors: '商科・工程學・醫學・法學・教育學・資訊科技・傳媒・環境科學' },
      { name: '新南威爾士大學 UNSW', en: 'University of New South Wales', qs: 19, majors: '電子電氣工程・機械工程・土木工程・法律學・會計與金融' },
      { name: '澳洲國立大學 ANU', en: 'Australian National University', qs: 34, majors: '社會科學與人文・自然科學與工程・醫學與生命科學・商學與經濟學・法律與政策' },
    ],
    advantages: [
      { icon: '🎓', title: '高品質教育體系', desc: '澳洲教育體系全球公認頂尖，多所大學位列 QS 全球前 50。' },
      { icon: '🌅', title: '優越的生活條件', desc: '安全、宜居、氣候溫和，墨爾本／雪梨常居全球宜居榜前列。' },
      { icon: '🇬🇧', title: '英語環境', desc: '英語為官方語言，可同步提升英語並接觸專業學術內容。' },
      { icon: '🔬', title: '現代化教育設施', desc: '實驗室、圖書館、多媒體教室齊全，研究資源豐富。' },
    ],
    timeline: [
      { period: '3–5 月', items: ['參加雅思', '部分專業準備 GRE / GMAT', '提升 GPA、準備履歷'] },
      { period: '6–7 月', items: ['Summer 實習', '聯絡教授／實習推薦人'] },
      { period: '8 月', items: ['完善履歷、撰寫文書', '確定推薦人名單', '網申開放、確認推薦信提交'] },
      { period: '9–11 月', items: ['語言成績衝刺', '跟進申請狀態', '多數學校開始發放 Offer'] },
      { period: '12 月', items: ['遞交澳洲簽證申請與材料'] },
      { period: '次年 1–2 月', items: ['拿到簽證', '準備入學研究生課程'] },
    ],
    materials: [
      { title: '學歷證明', desc: '學士學位證明與成績單；若已獲得碩士學位，需提交碩士學位證明與成績單。' },
      { title: '語言能力證明', desc: '托福或雅思成績單，一般要求雅思總分 6.5 以上。' },
      { title: '推薦信', desc: '一般需要兩封，由教授或主管撰寫，說明學術與研究方面表現。' },
      { title: '個人陳述／研究計畫', desc: '向學校介紹自己、展示研究計畫與個人背景，800–1000 字之間。' },
      { title: '履歷', desc: '包含學術背景、研究經歷、實習經歷、工作經歷等。' },
      { title: '其他證明材料', desc: '依學校與專業要求補充：獎學金證明、實習證明、工作經驗證明等。' },
    ],
    masterImage: '/images/uk-aus-nz/aus-master.png',
    advantagesImage: '/images/uk-aus-nz/aus-advantages.png',
    plan: {
      title: '澳洲碩士',
      subtitle: '以澳洲八大 G8 院校為申請目標，提供從備考到入學的全方位一站式服務',
      items: [
        { num: '01', title: '名校保錄', desc: '以澳洲八大 G8 院校為主要申請目標，分析各校評審標準，協助優化錄取成果。' },
        { num: '02', title: '國際優勢', desc: '廣泛海外合作網絡，協助學生對接名校資源與師資，打造具競爭力的申請背景。' },
        { num: '03', title: '一站服務', desc: '選校申請、審查輔導、職業規劃、簽證指導等全流程一站式協助，全程陪跑。' },
        { num: '04', title: '獨到經驗', desc: '與數十位海外院校教授及留學業界合作，累積多年實務申請經驗，取得第一手資源。' },
      ],
    },
    color: 'border-blue-500',
    badge: 'bg-blue-50 text-blue-700',
    accent: '#1D4ED8',
  },
  {
    id: 'sg',
    code: 'SG',
    name: '新加坡',
    tagline: 'NUS / NTU × 亞洲就業核心',
    desc: '新加坡國立大學（NUS）與南洋理工大學（NTU）長期位居亞洲前兩名、全球前 30。英語授課、華語環境適應快，是進入東南亞與大中華商業圈的最佳跳板，留學費用相較英美澳更具CP值。',
    schools: ['新加坡國立大學 (NUS)', '南洋理工大學 (NTU)', '新加坡管理大學 (SMU)'],
    highlights: [
      { label: '授課語言', value: '全英文' },
      { label: 'NUS 全球排名', value: 'Top 8' },
      { label: '就業優勢', value: '亞太金融中心' },
    ],
    universities: [
      { name: '新加坡國立大學 NUS', en: 'National University of Singapore', qs: 8, majors: '工商管理・資訊與新媒體・計算生物學・機械電子學・藝術設計' },
      { name: '南洋理工大學 NTU', en: 'Nanyang Technological University', qs: 26, majors: '宇航工程・生物工程・化學與分子生物工程・土木工程・環境工程・資訊工程' },
    ],
    pathways: [
      { tag: '01', title: '學位要求', target: '學士學位或同等資格', requirement: 'GPA 3.0 以上' },
      { tag: '02', title: '英語水平', target: '非英語母語申請人', requirement: '托福 90+ 或雅思 6.5+' },
      { tag: '03', title: '學術成績', target: '所有申請人', requirement: '學士成績單 + 學位證書' },
    ],
    advantages: [
      { icon: '💰', title: '留學費用適中', desc: '公立大學每年約 23–24 萬新幣，較英美澳 40 萬起更具CP值。' },
      { icon: '🌏', title: '亞太就業核心', desc: '亞太金融與科技樞紐，畢業生易接軌全球頂尖企業與華語商業圈。' },
      { icon: '🇬🇧', title: '全英文授課', desc: '官方語言為英語，學術環境與國際接軌，同時華語生活便利。' },
      { icon: '⭐', title: '亞洲頂尖排名', desc: 'NUS 全球第 8、NTU 全球第 26，亞洲常年排名第一第二。' },
    ],
    timeline: [
      { period: '3–5 月', items: ['準備雅思', '部分專業準備 GRE / GMAT', '提升 GPA、準備履歷'] },
      { period: '6–7 月', items: ['雅思一刷', 'Summer 實習', '聯絡教授／實習推薦人'] },
      { period: '8 月', items: ['完善履歷、撰寫文書', '雅思二刷', '初步確定目標學校'] },
      { period: '9–10 月', items: ['網申開放、填寫申請', '確認推薦信提交'] },
      { period: '11–12 月', items: ['語言成績衝刺、跟進狀態', '部分科系需要面試'] },
      { period: '次年 1–4 月', items: ['多數學校開始發放 Offer', '確定入讀學校、繳留位費'] },
      { period: '次年 5–7 月', items: ['補充成績單、存款證明', '辦理簽證、租房'] },
      { period: '次年 8 月', items: ['入讀碩士課程'] },
    ],
    masterImage: '/images/uk-aus-nz/sg-master.png',
    advantagesImage: '/images/uk-aus-nz/sg-advantages.png',
    plan: {
      title: '新加坡碩士',
      subtitle: '以新加坡 TOP2 院校（NUS/NTU）為申請目標，提供從備考到入學的全方位服務',
      items: [
        { num: '01', title: '名校保錄', desc: '以新加坡 NUS、NTU 為主要申請目標，分析各院校評審標準，協助提升頂尖院校錄取機率。' },
        { num: '02', title: '國際優勢', desc: '廣泛海外人脈網絡，協助學生對接知名院校師資，提供 5 比 1 以上的精英導師服務。' },
        { num: '03', title: '一站服務', desc: '選校申請、面試輔導、職業規劃、簽證指導等全流程一站式協助，全程陪伴。' },
        { num: '04', title: '獨到經驗', desc: '與數十位海外院校教授及留學業界長期合作，掌握第一手申請資訊與評審標準。' },
      ],
    },
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
    desc: '英國 3 年制學士課程可節省 1 年時間與費用。新加坡學費遠低於美國，整體留學預算更精準可控。',
  },
  {
    icon: '🌏',
    title: '高CP值',
    desc: '以較低的總體成本取得世界頂尖大學學歷，對有意在亞太地區發展的學生而言，CP值極高。',
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
    <>
      {/* ── Hero + 目的地選擇 ── */}
      <ProgramHero
        title="英、澳、新築夢計畫"
        subtitle="穩定進入世界名校的另一條路 — 英國・澳洲・新加坡"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-white text-sm uppercase tracking-widest mb-4">選擇你的目的地</p>
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
              className="mt-6 bg-white rounded-xl p-6 md:p-8 max-w-4xl overflow-hidden"
            >
              {/* Top accent bar — DFA gradient */}
              <div className="h-1.5 rounded-full mb-6" style={{ background: 'linear-gradient(to right,#2DD8EE,#1040CC)' }} />

              <div className="mb-4">
                <h3 className="text-h3 text-txt-primary">{active.name}</h3>
                <p className="text-sm font-semibold mt-0.5 text-dfa-blue">{active.tagline}</p>
              </div>

              <p className="text-body text-txt-secondary leading-relaxed mb-6">{active.desc}</p>

              {/* Highlight pills */}
              <div className="flex flex-wrap gap-3 mb-6">
                {active.highlights.map((h) => (
                  <div key={h.label} className="rounded-lg px-4 py-2.5 bg-dfa-light border border-dfa-blue/15">
                    <p className="text-xs text-txt-muted">{h.label}</p>
                    <p className="text-sm font-black text-txt-primary">{h.value}</p>
                  </div>
                ))}
              </div>

              {/* Schools tags */}
              <div>
                <p className="text-xs uppercase tracking-widest text-txt-muted mb-2">代表院校</p>
                <div className="flex flex-wrap gap-2">
                  {active.schools.map((s) => (
                    <span key={s} className="text-caption font-medium px-3 py-1.5 rounded-md bg-gray-100 text-txt-secondary">{s}</span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 text-center">
                <p className="text-xs text-txt-muted">↓ 向下捲動查看 <span className="font-bold text-dfa-blue">{active.name}</span> 詳細資訊</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </ProgramHero>

      {/* ── 國家詳細資訊（依選擇切換） ── */}
      <AnimatePresence mode="wait">
        {active && (
          <motion.div
            key={active.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* DFA 計畫服務 */}
            {active.plan && (
              <section className="section-padding bg-dfa-light">
                <div className="container-max">
                  {active.masterImage && (
                    <ScrollReveal>
                      <div className="max-w-5xl mx-auto">
                        {active.plan.guarantee && (
                          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border-2 border-dfa-blue/40 bg-white mb-6">
                            <span className="w-2 h-2 rounded-full bg-dfa-blue shrink-0" />
                            <span className="text-sm font-bold text-dfa-blue">{active.plan.guarantee}</span>
                          </div>
                        )}
                        <img
                          src={active.masterImage}
                          alt={active.plan.title}
                          className="w-full rounded-2xl shadow-lg"
                        />
                      </div>
                    </ScrollReveal>
                  )}
                </div>
              </section>
            )}

            {/* 名校與優勢專業 */}
            {active.universities && (
              <section className="section-padding bg-white">
                <div className="container-max">
                  <ScrollReveal>
                    <SectionHeading
                      label="Popular Majors"
                      title={`${active.name}名校與優勢專業`}
                      subtitle={`${active.tagline}`}
                      split
                    />
                  </ScrollReveal>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
                    {active.universities.map((u, i) => (
                      <ScrollReveal key={u.name} delay={i * 0.06}>
                        <div className="h-full rounded-2xl border border-gray-100 p-6 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                          <div className="flex items-start gap-3 mb-3">
                            <div className="px-2.5 py-1 rounded-md text-white text-xs font-black shrink-0"
                              style={{ background: 'linear-gradient(135deg,#2DD8EE,#1040CC)' }}>
                              QS #{u.qs}
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="text-base font-black text-dfa-dark leading-tight">{u.name}</p>
                              <p className="text-xs font-semibold text-dfa-blue mt-0.5">{u.en}</p>
                            </div>
                          </div>
                          <div className="pt-3 border-t border-gray-100">
                            <p className="text-xs text-txt-muted font-bold uppercase tracking-widest mb-1.5">優勢專業</p>
                            <p className="text-sm text-txt-secondary leading-relaxed">{u.majors}</p>
                          </div>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* 留學優勢 */}
            {active.advantagesImage && (
              <section className="section-padding bg-white">
                <div className="container-max">
                  <ScrollReveal>
                    <div className="max-w-5xl mx-auto">
                      <img
                        src={active.advantagesImage}
                        alt={`${active.name}留學優勢`}
                        className="w-full rounded-2xl shadow-lg"
                      />
                    </div>
                  </ScrollReveal>
                </div>
              </section>
            )}

            {/* 申請方案 / 申請條件 */}
            {active.pathways && (
              <section className="section-padding bg-white">
                <div className="container-max">
                  <ScrollReveal>
                    <SectionHeading
                      label={active.id === 'sg' ? 'Application Requirements' : 'Application Programs'}
                      title={active.id === 'sg' ? '申請條件' : '申請方案'}
                      subtitle={active.id === 'sg' ? '符合以下條件即可申請' : '依個人背景選擇合適路徑'}
                      split
                    />
                  </ScrollReveal>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
                    {active.pathways.map((p, i) => (
                      <ScrollReveal key={p.title} delay={i * 0.1}>
                        <div className="h-full rounded-2xl p-6 border-2 border-dfa-blue/25 bg-dfa-light/40 hover:border-dfa-blue/50 hover:-translate-y-1 transition-all duration-300">
                          <p className="text-3xl font-black mb-2 text-dfa-blue">{p.tag}</p>
                          <p className="text-lg font-black text-dfa-dark mb-3">{p.title}</p>
                          <div className="space-y-2 text-sm">
                            <div>
                              <span className="text-xs font-bold uppercase tracking-widest text-dfa-blue">適用對象</span>
                              <p className="text-txt-secondary mt-0.5">{p.target}</p>
                            </div>
                            <div className="pt-2 border-t border-dfa-blue/15">
                              <span className="text-xs font-bold uppercase tracking-widest text-dfa-blue">申請條件</span>
                              <p className="text-txt-secondary mt-0.5">{p.requirement}</p>
                            </div>
                          </div>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* 申請資料（澳洲） */}
            {active.materials && (
              <section className="section-padding bg-dfa-light">
                <div className="container-max">
                  <ScrollReveal>
                    <SectionHeading
                      label="Application Materials"
                      title="申請資料"
                      subtitle="申請所需的文件清單"
                      split
                    />
                  </ScrollReveal>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
                    {active.materials.map((m, i) => (
                      <ScrollReveal key={m.title} delay={i * 0.06}>
                        <div className="h-full rounded-2xl p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                          <p className="text-4xl font-black mb-2 text-dfa-blue/40 leading-none">{String(i + 1).padStart(2, '0')}</p>
                          <p className="text-base font-black text-dfa-dark mb-2">{m.title}</p>
                          <p className="text-sm text-txt-secondary leading-relaxed">{m.desc}</p>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* 申請時間軸規劃 */}
            {active.timeline && (
              <section className="section-padding bg-white">
                <div className="container-max">
                  <ScrollReveal>
                    <SectionHeading
                      label="Application Timeline"
                      title="申請時間軸規劃"
                      subtitle="從準備到入學的完整時程"
                      split
                    />
                  </ScrollReveal>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
                    {active.timeline.map((t, i) => (
                      <ScrollReveal key={i} delay={i * 0.05}>
                        <div className="h-full rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                          <div className="px-5 py-3 flex items-center gap-3"
                            style={{ background: 'linear-gradient(135deg,#2DD8EE,#1040CC)' }}>
                            <span className="text-white/80 text-xs font-bold">{String(i + 1).padStart(2, '0')}</span>
                            <span className="text-white text-base font-black">{t.period}</span>
                          </div>
                          <ul className="p-5 space-y-2">
                            {t.items.map((it) => (
                              <li key={it} className="text-sm text-txt-secondary flex gap-2 leading-relaxed">
                                <span className="text-dfa-cyan font-bold mt-0.5 shrink-0">◆</span>
                                <span>{it}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>
                </div>
              </section>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── 為什麼選擇這條路 ── */}
      <section className="relative z-10 section-padding bg-dfa-light">
        <div className="container-max">
          <ScrollReveal>
            <SectionHeading label="Why This Path" title="為什麼選擇這條路？" subtitle="英澳新路徑的核心優勢" split />
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
      <section className="relative z-10 section-padding bg-white">
        <div className="container-max">
          <ScrollReveal>
            <SectionHeading label="Who It's For" title="誰適合這個計畫？" subtitle="以下族群尤其推薦" split />
          </ScrollReveal>
          <div className="max-w-3xl mx-auto space-y-4">
            {TARGET_PROFILES.map((p, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="flex items-start gap-4 bg-dfa-light rounded-lg p-5 border border-gray-200 shadow-sm">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5 bg-dfa-blue">
                    {i + 1}
                  </div>
                  <p className="text-body text-gray-700 leading-relaxed">{p}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="找到屬於你的築夢路徑"
        subtitle="英國・澳洲・新加坡，讓顧問幫你找出最適合的方向"
      />
    </>
  )
}
