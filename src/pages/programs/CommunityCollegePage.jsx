import { motion } from 'framer-motion'
import ScrollReveal from '../../components/ui/ScrollReveal'
import SectionHeading from '../../components/ui/SectionHeading'
import DecoBlob from '../../components/ui/DecoBlob'
import DecoDots from '../../components/ui/DecoDots'

/* ── Data ── */
const TRANSFER_REQS = [
  { num: '60', unit: '可轉學分', desc: '完成 60 學分可轉移課程，直接銜接目標院校大三' },
  { num: 'IGETC', unit: '通識框架', desc: '完成 IGETC 通識課程框架，滿足 UC/CSU 系統轉學要求' },
  { num: '3.5+', unit: 'GPA 門檻', desc: '達到目標院校所需 GPA，搭配顧問規劃確保穩定維持' },
]

const MYTHS = [
  {
    myth: '社區大學學歷不被認可？',
    truth: '錯！UC 和 CSU 系統都有完善的轉學協議，社區大學是進入名校的絕佳跳板。',
  },
  {
    myth: '轉學錄取率很低？',
    truth: '事實上，許多 UC 分校的轉學錄取率比新生錄取率更高，機會更多。',
  },
  {
    myth: '只有成績差的學生才讀社區大學？',
    truth: '許多優秀學生選擇社區大學是為了省錢並獲得更好的轉學機會。',
  },
]

export default function CommunityCollegePage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════
          HERO — 全版藍色漸層背景（模仿 PDF 報價方案風格）
          ══════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #2DD8EE 0%, #1A9AE6 30%, #0A2A6E 100%)' }}
      >
        {/* Dot grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        <div className="container-max relative z-10 section-padding pt-32 md:pt-40 pb-20 md:pb-28">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md border border-white/20 bg-white/10 backdrop-blur-sm text-white text-caption mb-6"
          >
            Community College Transfer
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-h1 xl:text-display text-white leading-[1.08] mb-2"
          >
            夢想家留學
          </motion.h1>

          {/* Sub-title line */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-h3 text-white/90 font-semibold mb-5"
          >
            美國社區大學轉學 2+2 服務方案
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-body text-white/80 leading-relaxed mb-3 max-w-2xl"
          >
            透過完善升學規劃與轉學機制，在確保升學品質的同時有效控制整體留學支出，最高可節省百萬以上學費負擔。
          </motion.p>

          {/* English */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="text-caption text-white/40 italic leading-relaxed max-w-xl mb-16"
          >
            Through comprehensive academic planning and transfer pathways, students can maintain strong academic outcomes while effectively managing overall study costs, with potential savings of over one million NTD in tuition.
          </motion.p>

          {/* ── 2+2 Flow ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-16"
          >
            {[
              { title: '2年社區大學', sub: '大一大二課程' },
              { title: '2年綜合大學', sub: '大三大四課程' },
              { title: '目標院校', sub: '學士學位' },
            ].map((item, i) => (
              <div key={i} className="contents">
                {i > 0 && (
                  <span className="text-5xl md:text-6xl font-black text-white/60 leading-none">
                    {i === 1 ? '+' : '='}
                  </span>
                )}
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full flex items-center justify-center text-white text-center p-4 shrink-0 border-2 border-white/20 bg-white/10 backdrop-blur-sm">
                  <div>
                    <p className="text-lg md:text-xl font-bold text-white leading-snug">{item.title}</p>
                    <p className="text-sm text-white/60 mt-1">{item.sub}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* ── 轉學三大要件 — 玻璃卡片 ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <h2 className="text-eyebrow text-white/50 uppercase mb-6">Transfer Requirements</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TRANSFER_REQS.map((r) => (
                <div
                  key={r.unit}
                  className="rounded-lg border border-white/15 bg-white/10 backdrop-blur-sm p-6 hover:bg-white/15 transition-all duration-300"
                >
                  <div
                    className="text-h1 font-black mb-2 leading-none"
                    style={{ background: 'linear-gradient(to bottom, #fff, rgba(255,255,255,0.6))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                  >
                    {r.num}
                  </div>
                  <p className="text-h3 text-white mb-1">{r.unit}</p>
                  <p className="text-body text-white/60">{r.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] opacity-60"
          style={{ background: 'linear-gradient(90deg, transparent, #4DD9EC, transparent)' }}
        />
      </section>

      {/* ══════════════════════════════════════════════════════════
          什麼是社區大學 + 特點
          ══════════════════════════════════════════════════════════ */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollReveal>
              <h3 className="text-h3 text-txt-primary mb-4">什麼是美國社區大學</h3>
              <p className="text-body text-txt-secondary leading-relaxed">
                美國社區大學是美國高等教育體系的重要組成部分，是美國政府為了普及高等教育而設立的正規學校。國際生可以在完成社區大學大一大二的課程學習後，轉學入名校繼續讀大三大四，畢業取得名校的學士學位。
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h3 className="text-h3 text-txt-primary mb-4">美國社區大學的特點</h3>
              <p className="text-body text-txt-secondary leading-relaxed">
                入學條件簡單、學費較低 CP 值高、小班教學有助於融入美國當地文化。越來越多的社區學院和本州名校簽訂轉學協議或保送協議，名校大三優先錄取社區學院轉學生。
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          引言
          ══════════════════════════════════════════════════════════ */}
      <section className="section-padding relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #2DD8EE 0%, #1A9AE6 30%, #0A2A6E 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="container-max relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <blockquote className="text-h2 text-white leading-snug mb-6">
                那些被淘汰的學生並不是成績能力差，而是沒有一份讓你展翅飛翔的申請資料
              </blockquote>
              <p className="text-caption text-white/50">— 前哈佛專業申請人 Emerald Macreen</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          項目介紹
          ══════════════════════════════════════════════════════════ */}
      <section className="section-padding bg-[#F0F7FF]">
        <div className="container-max">
          <ScrollReveal>
            <SectionHeading
              label="Community College Transfer"
              title="2+2 陪跑項目"
              subtitle="從課程規劃到申請輔導，全程一對一導師制"
              split
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-body text-txt-secondary leading-relaxed max-w-4xl">
              「夢想家留學」提供的留學服務包含學生轉學評估規劃方案書、兩年課程規劃方案、實時專業諮詢、每周學術跟進與規劃、學術輔導、背景提升方案、專項背景提升項目、每學期定期溝通與規劃、美國社區大學轉學申請。導師均畢業於美國名校，借助過往經驗及本機構的資源配置全程指導學生，讓學生順利就讀名校。
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          破除迷思
          ══════════════════════════════════════════════════════════ */}
      <section className="section-padding bg-white relative overflow-hidden">
        <DecoBlob position="bottom-left" size="lg" opacity={0.05} />
        <div className="container-max relative z-10">
          <ScrollReveal>
            <SectionHeading label="Myth Busting" title="破除轉學迷思" />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MYTHS.map((m, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="border-t-2 border-dfa-blue pt-6">
                  <p className="text-h3 text-txt-primary mb-3">{m.myth}</p>
                  <p className="text-body text-txt-secondary leading-relaxed">{m.truth}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CTA
          ══════════════════════════════════════════════════════════ */}
      <section className="section-padding overflow-hidden">
        <div className="container-max text-center">
          <motion.div
            initial={{ scale: 0.2, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ type: 'spring', stiffness: 180, damping: 16 }}
          >
            <h2 className="text-h1 md:text-display text-txt-primary leading-tight mb-3">
              申請名校，是硬碰硬
            </h2>
            <h2 className="text-h1 md:text-display text-txt-primary leading-tight">
              轉學名校，是換一條更聰明的路
            </h2>
          </motion.div>
          <ScrollReveal delay={0.4}>
            <a
              href="https://lin.ee/O1ejJf7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-12 text-white font-bold rounded-md px-12 py-4 text-body-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              style={{ background: 'linear-gradient(to right, #2DD8EE, #1040CC)' }}
            >
              立即預約免費諮詢
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
