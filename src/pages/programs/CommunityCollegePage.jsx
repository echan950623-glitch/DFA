import { motion } from 'framer-motion'
import { FaBookmark, FaQuestionCircle, FaGraduationCap, FaLightbulb } from 'react-icons/fa'
import ProgramHero from '../../components/shared/ProgramHero'
import ScrollReveal from '../../components/ui/ScrollReveal'
import SectionHeading from '../../components/ui/SectionHeading'

const myths = [
  {
    Icon: FaQuestionCircle,
    label: '迷思一：',
    myth: '社區大學學歷不被認可？',
    truth: '錯！UC 和 CSU 系統都有完善的轉學協議，社區大學是進入名校的絕佳跳板。',
  },
  {
    Icon: FaGraduationCap,
    label: '迷思二：',
    myth: '轉學錄取率很低？',
    truth: '事實上，許多 UC 分校的轉學錄取率比新生錄取率更高，機會更多。',
  },
  {
    Icon: FaLightbulb,
    label: '迷思三：',
    myth: '只有成績差的學生才讀社區大學？',
    truth: '許多優秀學生選擇社區大學是為了省錢並獲得更好的轉學機會。',
  },
]

const TRANSFER_REQS = [
  { num: '60', unit: '可轉學分', desc: '完成 60 學分可轉移課程，直接銜接目標院校大三' },
  { num: 'IGETC', unit: '通識框架', desc: '完成 IGETC 通識課程框架，滿足 UC/CSU 系統轉學要求' },
  { num: '3.5+', unit: 'GPA 門檻', desc: '達到目標院校所需 GPA，搭配顧問規劃確保穩定維持' },
]

export default function CommunityCollegePage() {
  return (
    <>
      <ProgramHero
        title="社區大學轉學名校"
        subtitle="不是備案，是更聰明的策略 — 2+2 路徑讓你以更低門檻進入美國頂尖名校"
      />

      {/* Section 1: 2+2 圖解 + 什麼是社區大學 + 特點 */}
      <section className="section-padding bg-white">
        <div className="container-max">

          {/* 3 大圓圈 */}
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mb-16">
              <div className="w-52 h-52 rounded-full bg-dfa-gradient flex items-center justify-center text-white text-center p-6 shrink-0 shadow-lg">
                <div>
                  <p className="font-bold text-lg leading-snug">2年社區大學</p>
                  <p className="text-sm text-white/80 mt-2">大一大二課程</p>
                </div>
              </div>
              <span className="text-5xl font-black text-dfa-blue leading-none">+</span>
              <div className="w-52 h-52 rounded-full bg-dfa-gradient flex items-center justify-center text-white text-center p-6 shrink-0 shadow-lg">
                <div>
                  <p className="font-bold text-lg leading-snug">2年綜合大學</p>
                  <p className="text-sm text-white/80 mt-2">大三大四課程</p>
                </div>
              </div>
              <span className="text-5xl font-black text-dfa-blue leading-none">=</span>
              <div className="w-52 h-52 rounded-full bg-dfa-gradient flex items-center justify-center text-white text-center p-6 shrink-0 shadow-lg">
                <div>
                  <p className="font-bold text-lg leading-snug">目標院校</p>
                  <p className="text-sm text-white/80 mt-2">大學學位</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* 什麼是美國社區大學 */}
          <ScrollReveal>
            <div className="flex items-start gap-4 mb-10">
              <FaBookmark className="text-dfa-blue text-3xl shrink-0 mt-1" />
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-4">什麼是美國社區大學</h2>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  美國社區大學是美國高等教育體系的重要組成部分，社區大學是美國政府為了普及高等教育而設立的、明確被美國和國內認可的正規學校。在美國，許多本地學生在進入四年制大學前曾就讀社區大學。國際生可以在完成社區大學大一大二的課程學習後，轉學入名校繼續讀大三大四，畢業取得名校的學士學位。
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* 美國社區大學的特點 */}
          <ScrollReveal>
            <div className="flex items-start gap-4">
              <FaBookmark className="text-dfa-blue text-3xl shrink-0 mt-1" />
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-4">美國社區大學的特點</h2>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  美國社區學院優勢很多，入學條件簡單、學費較低 CP 值高、小班教學有助於融入美國當地文化，是通往名校的跳板。越來越多的社區學院和本州或者臨近州的美國名校簽訂轉學協議或者保送協議，名校大三優先錄取社區學院轉學生。
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 專家引言 ── */}
      <section className="section-padding">
        <div className="container-max">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <div className="text-6xl text-dfa-blue opacity-20 font-serif leading-none mb-2">"</div>
              <blockquote className="text-xl md:text-2xl font-bold text-gray-800 leading-relaxed mb-6">
                那些被淘汰的學生並不是成績能力差，而是沒有一份讓你展翅飛翔的申請資料
              </blockquote>
              <p className="text-sm text-gray-500 font-medium">— 前哈佛專業申請人 Emerald Macreen</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 轉學三大要件 ── */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <ScrollReveal>
            <SectionHeading
              label="Transfer Requirements"
              title="轉學三大要件"
              subtitle="達成這三個條件，名校錄取機率大幅提升"
              split
            />
          </ScrollReveal>
          <div className="divide-y divide-gray-100 max-w-3xl">
            {TRANSFER_REQS.map((r, i) => (
              <ScrollReveal key={r.unit} delay={i * 0.1}>
                <div className="flex items-start gap-8 py-8 first:pt-0">
                  {/* 大數字 */}
                  <div className="shrink-0 w-28 text-right">
                    <span
                      className="text-5xl md:text-6xl font-black leading-none"
                      style={{ background: 'linear-gradient(to bottom, #2DD8EE, #1040CC)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                    >
                      {r.num}
                    </span>
                  </div>
                  {/* 說明 */}
                  <div className="pt-1">
                    <p className="text-xl font-bold text-gray-900 mb-1">{r.unit}</p>
                    <p className="text-base text-gray-500 leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: 項目介紹 */}
      <section className="section-padding">
        <div className="container-max">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <div className="bg-dfa-gradient py-4 px-6 text-center">
                <p className="text-white font-semibold tracking-[0.2em] text-sm md:text-base">
                  ◆ &nbsp; C o m m u n i t y &nbsp; C o l l e g e &nbsp; T r a n s f e r &nbsp; ◆
                </p>
              </div>
              <div className="p-8 md:p-12">
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  「夢想家留學」現推出美國社區大學 <span className="text-dfa-blue font-semibold">2+2 陪跑項目</span>，相比於傳統留學機構的項目，本項目提供的留學服務更為細緻專業，包含學生轉學評估規劃方案書、兩年課程規劃方案、實時專業諮詢、每周學術跟進 &amp; 規劃、學術輔導、背景提升方案、專項背景提升項目、每學期定期溝通 &amp; 規劃、美國社區大學轉學申請，真正從學生的利益出發，與美國各大院校密切合作，幫助學生入讀理想院校，同時為學生順利完成學業保駕護航。本項目針對每位學生的特點，量身定制赴美留學規劃，採取導師制一對一教學輔導。導師均畢業於美國名校，借助過往經驗及本機構的資源配置全程指導學生，讓學生順利就讀名校，獲取優秀學歷。
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 3: 破除迷思 */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-black text-dfa-blue text-center mb-16">
              破除加州社區大學轉學迷思
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
            {myths.map((m, i) => (
              <ScrollReveal key={i} delay={i * 0.12}>
                <div className="relative pt-10">
                  {/* Floating icon above card */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-white px-3">
                    <m.Icon className="text-5xl text-dfa-blue" />
                  </div>
                  <div className="bg-white rounded-lg border-2 border-dfa-cyan p-6 pt-10 shadow-sm min-h-[160px]">
                    <p className="font-bold text-gray-900 text-sm mb-1">{m.label}</p>
                    <p className="font-semibold text-gray-800 text-sm mb-3">{m.myth}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{m.truth}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: CTA 彈出動畫 */}
      <section className="section-padding overflow-hidden">
        <div className="container-max text-center">
          <motion.div
            initial={{ scale: 0.2, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ type: 'spring', stiffness: 180, damping: 16 }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-3">
              申請名校，是硬碰硬
            </h2>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
              轉學名校，是換一條更聰明的路
            </h2>
          </motion.div>
          <ScrollReveal delay={0.4}>
            <a
              href="#contact"
              className="inline-block mt-12 bg-dfa-gradient text-white font-bold rounded-md px-12 py-4 text-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              立即預約免費諮詢
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
