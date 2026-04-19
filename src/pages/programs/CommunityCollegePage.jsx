import { motion } from 'framer-motion'
import ProgramHero from '../../components/shared/ProgramHero'
import ScrollReveal from '../../components/ui/ScrollReveal'
import SectionHeading from '../../components/ui/SectionHeading'
import StoryCarousel from '../../components/shared/StoryCarousel'

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
      {/* ── Hero ── */}
      <ProgramHero
        title="社區大學轉學名校"
        subtitle="不是備案，是更聰明的策略"
      />

      {/* ── 2+2 Flow + Transfer Requirements ── */}
      <section className="relative z-10 section-padding bg-dfa-light">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-16"
          >
            {[
              { title: '2年社區大學', sub: '大一大二課程' },
              { title: '2年綜合大學', sub: '大三大四課程' },
              { title: '目標院校', sub: '學士學位' },
            ].map((item, i) => (
              <div key={i} className="contents">
                {i > 0 && (
                  <span className="text-5xl md:text-6xl font-black text-dfa-blue leading-none">
                    {i === 1 ? '+' : '='}
                  </span>
                )}
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full flex items-center justify-center text-center p-4 shrink-0 border-2 border-dfa-blue/30 bg-dfa-blue/10">
                  <div>
                    <p className="text-lg md:text-xl font-bold text-dfa-dark leading-snug">{item.title}</p>
                    <p className="text-sm text-gray-700 mt-1">{item.sub}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <h2 className="text-eyebrow text-dfa-blue uppercase mb-6">Transfer Requirements</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TRANSFER_REQS.map((r) => (
                <div
                  key={r.unit}
                  className="rounded-lg border border-gray-200 bg-dfa-light p-6 hover:bg-gray-100 transition-all duration-300"
                >
                  <div className="text-h1 font-black mb-2 leading-none text-dfa-blue">
                    {r.num}
                  </div>
                  <p className="text-h3 text-dfa-dark mb-1">{r.unit}</p>
                  <p className="text-body text-gray-700">{r.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 什麼是社區大學 + 特點 ── */}
      <section className="relative z-10 section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollReveal>
              <h3 className="text-h3 text-dfa-dark mb-4">什麼是美國社區大學</h3>
              <p className="text-body text-gray-700 leading-relaxed">
                美國社區大學是美國高等教育體系的重要組成部分，是美國政府為了普及高等教育而設立的正規學校。國際生可以在完成社區大學大一大二的課程學習後，轉學入名校繼續讀大三大四，畢業取得名校的學士學位。
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h3 className="text-h3 text-dfa-dark mb-4">美國社區大學的特點</h3>
              <p className="text-body text-gray-700 leading-relaxed">
                入學條件簡單、學費較低 CP 值高、小班教學有助於融入美國當地文化。越來越多的社區學院和本州名校簽訂轉學協議或保送協議，名校大三優先錄取社區學院轉學生。
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 四年制 vs 社區大學比較表 ── */}
      <section className="relative z-10 section-padding pt-0 bg-white">
        <div className="container-max">
          <ScrollReveal>
            <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
              <table className="w-full min-w-[640px] border-collapse rounded-xl overflow-hidden text-sm md:text-base">
                <thead>
                  <tr style={{ background: '#0A2A6E' }}>
                    <th className="text-white font-bold px-6 py-4 text-left w-[22%]">比較項目</th>
                    <th className="text-white font-bold px-6 py-4 text-center">四年制大學<br /><span className="font-normal text-sm">(University / Liberal Arts)</span></th>
                    <th className="text-white font-bold px-6 py-4 text-center">社區大學<br /><span className="font-normal text-sm">(Community College)</span></th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {[
                    {
                      label: '入學門檻',
                      uni: '較高，通常需 SAT/ACT、托福 90+、高 GPA。',
                      cc: '極具彈性，多數免 SAT，托福約 61-80 即可。',
                    },
                    {
                      label: '學費支出',
                      uni: '每年約 40,000 - 65,000 美金。',
                      cc: <span>每年約 10,000 - 15,000 美金 <span className="text-dfa-blue font-bold">(省 70%)</span>。</span>,
                    },
                    {
                      label: '畢業學位',
                      uni: '四年完成學士學位。',
                      cc: '兩年副學士，轉學後兩年拿學士（畢業證書與直接入學者相同）。',
                    },
                    {
                      label: '校園氛圍',
                      uni: '大型校園、豐富的研究與社圃資源。',
                      cc: <span className="text-dfa-blue font-medium">小班教學、師生比低，顧問關注度高。</span>,
                    },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-dfa-light/50'}>
                      <td className="px-6 py-4 font-semibold text-gray-700 border-b border-gray-100">{row.label}</td>
                      <td className="px-6 py-4 text-gray-600 border-b border-gray-100 border-l border-gray-100">{row.uni}</td>
                      <td className="px-6 py-4 text-gray-600 border-b border-gray-100 border-l border-gray-100">{row.cc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 引言 ── */}
      <section className="relative z-10 section-padding bg-dfa-light">
        <div className="container-max">
          <ScrollReveal>
            <div className="max-w-3xl">
              <blockquote className="text-h2 text-dfa-dark leading-snug mb-6">
                那些被淘汰的學生並不是成績能力差，而是沒有一份讓你展翅飛翔的申請資料
              </blockquote>
              <p className="text-caption text-gray-500">— 前哈佛專業申請人 Emerald Macreen</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 項目介紹 ── */}
      <section className="relative z-10 section-padding bg-white">
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
            <p className="text-body text-gray-700 leading-relaxed max-w-4xl">
              「夢想家留學」提供的留學服務包含學生轉學評估規劃方案書、兩年課程規劃方案、實時專業諮詢、每周學術跟進與規劃、學術輔導、背景提升方案、專項背景提升項目、每學期定期溝通與規劃、美國社區大學轉學申請。導師均畢業於美國名校，借助過往經驗及本機構的資源配置全程指導學生，讓學生順利就讀名校。
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 破除迷思 ── */}
      <section className="relative z-10 section-padding bg-dfa-light">
        <div className="container-max">
          <ScrollReveal>
            <SectionHeading label="Myth Busting" title="破除轉學迷思" />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MYTHS.map((m, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="border-t-2 border-gray-200 pt-6">
                  <p className="text-h3 text-dfa-dark mb-3">{m.myth}</p>
                  <p className="text-body text-gray-700 leading-relaxed">{m.truth}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 成功案例 Carousel ── */}
      <StoryCarousel title="學員成功案例" label="SUCCESS STORIES" />

      {/* ── CTA ── */}
      <section className="relative z-10 section-padding bg-white">
        <div className="container-max text-center">
          <motion.div
            initial={{ scale: 0.2, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ type: 'spring', stiffness: 180, damping: 16 }}
          >
            <h2 className="text-h1 md:text-display text-dfa-dark leading-tight mb-3">
              申請名校，是硬碰硬
            </h2>
            <h2 className="text-h1 md:text-display text-dfa-dark leading-tight">
              轉學名校，是換一條更聰明的路
            </h2>
          </motion.div>
        </div>
      </section>
    </>
  )
}
