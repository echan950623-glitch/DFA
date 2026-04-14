import ProgramHero from '../components/shared/ProgramHero'
import ScrollReveal from '../components/ui/ScrollReveal'
import SectionHeading from '../components/ui/SectionHeading'
import { partnerSchools, sampleCourses } from '../data/schools'

/* ── UC 系統目標名校 ── */
const UC_SCHOOLS = [
  { tag: 'UCB', name: '加州大學伯克利分校', nameEn: 'UC Berkeley', rank: '#1 Public', note: '全球最頂尖公立大學之一，轉學錄取名額多' },
  { tag: 'UCLA', name: '加州大學洛杉磯分校', nameEn: 'UC Los Angeles', rank: '#1 Public', note: '全美競爭最激烈的公立大學，洛杉磯優質地段' },
  { tag: 'UCSD', name: '加州大學聖地牙哥分校', nameEn: 'UC San Diego', rank: 'Top 10 Public', note: '理工科排名全球前 20，氣候宜人' },
  { tag: 'UCD', name: '加州大學戴維斯分校', nameEn: 'UC Davis', rank: 'Top 40', note: '農業、獸醫與生命科學全美頂尖' },
  { tag: 'UCI', name: '加州大學爾灣分校', nameEn: 'UC Irvine', rank: 'Top 40', note: '計算機科學強勁，位處矽谷南延科技走廊' },
]

/* ── 為何選擇美國大學 ── */
const WHY_USA = [
  {
    icon: '🏆',
    title: '全球學術地位頂尖',
    desc: '美國擁有全球排名最多的頂尖大學，哈佛、MIT、史丹佛等，學歷受全球雇主高度認可。',
  },
  {
    icon: '🔬',
    title: '豐富研究資源',
    desc: '美國大學研究經費充足，有機會直接參與教授實驗室研究，累積科研經歷，強化申請研究所競爭力。',
  },
  {
    icon: '💡',
    title: 'OPT 工作機會',
    desc: '畢業後可申請 OPT（1 年，STEM 最長 3 年），合法在美工作，是進入美國職場的重要跳板。',
  },
  {
    icon: '🌐',
    title: '多元校園文化',
    desc: '國際學生比例高，結交來自全球的同學，拓展視野與人脈，打造全球職涯。',
  },
]

export default function SchoolsPage() {
  return (
    <>
      <ProgramHero
        title="夢校與課程"
        subtitle="精選合作社區大學 × UC 系統目標名校"
      />

      {/* ── 為何選擇美國大學 ── */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <ScrollReveal>
            <SectionHeading label="Why USA" title="為何選擇美國大學？" subtitle="留學美國的核心優勢" split />
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {WHY_USA.map((w, i) => (
              <ScrollReveal key={w.title} delay={i * 0.1}>
                <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-6 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <div
                    className="w-14 h-14 mx-auto mb-4 rounded-lg flex items-center justify-center text-2xl"
                    style={{ background: 'linear-gradient(135deg, #2DD8EE22, #1040CC22)' }}
                  >
                    {w.icon}
                  </div>
                  <h3 className="font-bold text-txt-primary mb-2 text-sm">{w.title}</h3>
                  <p className="text-caption text-txt-secondary leading-relaxed">{w.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── UC 系統目標名校 ── */}
      <section className="section-padding bg-[#F0F7FF]">
        <div className="container-max">
          <ScrollReveal>
            <SectionHeading label="Target Schools" title="UC 系統目標名校" subtitle="DFA 學員成功錄取院校" split />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {UC_SCHOOLS.map((u, i) => (
              <ScrollReveal key={u.tag} delay={i * 0.08}>
                <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-black text-sm shrink-0"
                      style={{ background: 'linear-gradient(135deg, #2DD8EE, #1040CC)' }}
                    >
                      {u.tag}
                    </div>
                    <div>
                      <p className="font-bold text-txt-primary text-sm leading-tight">{u.name}</p>
                      <p className="text-xs text-dfa-blue font-medium">{u.rank}</p>
                    </div>
                  </div>
                  <p className="text-caption text-txt-muted leading-relaxed">{u.note}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 合作社大院校 ── */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <ScrollReveal>
            <SectionHeading label="Partner Colleges" title="合作社大院校" subtitle="Partner Community Colleges" split />
          </ScrollReveal>
          <div className="space-y-8 max-w-4xl mx-auto">
            {partnerSchools.map((school, i) => (
              <ScrollReveal key={school.nameEn} delay={i * 0.1}>
                <div className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden">
                  <div className="h-2" style={{ background: 'linear-gradient(to right, #2DD8EE, #1040CC)' }} />
                  <div className="p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className="w-14 h-14 rounded-lg flex items-center justify-center text-white font-bold text-lg shrink-0"
                        style={{ background: 'linear-gradient(135deg, #2DD8EE, #1040CC)' }}
                      >
                        {school.nameEn.match(/\(([^)]+)\)/)?.[1] || school.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-h3 text-txt-primary">{school.name}</h3>
                        <p className="text-sm text-dfa-blue">{school.nameEn}</p>
                        <p className="text-caption text-txt-secondary">成立於 {school.founded} 年</p>
                      </div>
                    </div>
                    <span className="inline-block text-xs font-medium px-3 py-1 rounded-md bg-dfa-light text-dfa-blue mb-3">
                      {school.highlight}
                    </span>
                    <p className="text-body text-txt-secondary leading-relaxed">{school.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 課表示例 ── */}
      <section className="section-padding bg-[#F0F7FF]">
        <div className="container-max">
          <ScrollReveal>
            <SectionHeading label="Curriculum" title="社大課表示例" subtitle="Sample Course Schedule" split />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {sampleCourses.map((sem, i) => (
              <ScrollReveal key={sem.semester} delay={i * 0.1}>
                <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6">
                  <h3 className="font-bold text-dfa-blue mb-4">{sem.semester}</h3>
                  <ol className="space-y-2">
                    {sem.courses.map((course, j) => (
                      <li key={j} className="flex items-start gap-3 text-body text-txt-secondary">
                        <span className="w-6 h-6 rounded-full bg-dfa-light text-dfa-blue text-xs flex items-center justify-center font-bold shrink-0">
                          {j + 1}
                        </span>
                        {course}
                      </li>
                    ))}
                  </ol>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="section-padding"
        style={{ background: 'linear-gradient(to right, #2DD8EE 0%, #1A9AE6 40%, #1040CC 100%)' }}
      >
        <div className="container-max text-center">
          <ScrollReveal>
            <h2 className="text-h2 text-white mb-3">找到你的夢校</h2>
            <p className="text-white/80 mb-8">讓 DFA 顧問為你量身規劃最佳申請策略</p>
            <a
              href="https://lin.ee/O1ejJf7" target="_blank" rel="noopener noreferrer"
              className="inline-block bg-white text-dfa-dark font-bold rounded-lg px-10 py-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              立即預約免費諮詢
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
