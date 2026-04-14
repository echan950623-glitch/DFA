import ProgramHero from '../../components/shared/ProgramHero'
import ScrollReveal from '../../components/ui/ScrollReveal'
import SectionHeading from '../../components/ui/SectionHeading'

const QS_UNIVERSITIES = [
  { rank: 1, name: '麻省理工學院', nameEn: 'MIT', country: '🇺🇸', field: '理工 / 商學' },
  { rank: 2, name: '劍橋大學', nameEn: 'University of Cambridge', country: '🇬🇧', field: '綜合' },
  { rank: 3, name: '牛津大學', nameEn: 'University of Oxford', country: '🇬🇧', field: '綜合' },
  { rank: 4, name: '哈佛大學', nameEn: 'Harvard University', country: '🇺🇸', field: '綜合' },
  { rank: 5, name: '史丹佛大學', nameEn: 'Stanford University', country: '🇺🇸', field: '理工 / 商學' },
  { rank: 6, name: '帝國理工學院', nameEn: 'Imperial College London', country: '🇬🇧', field: '理工 / 醫學' },
  { rank: 7, name: '蘇黎世聯邦理工學院', nameEn: 'ETH Zurich', country: '🇨🇭', field: '理工' },
  { rank: 8, name: '新加坡國立大學', nameEn: 'NUS', country: '🇸🇬', field: '綜合' },
  { rank: 9, name: 'UCL', nameEn: 'University College London', country: '🇬🇧', field: '綜合' },
  { rank: 10, name: '加州大學伯克利分校', nameEn: 'UC Berkeley', country: '🇺🇸', field: '理工 / 人文' },
  { rank: 11, name: '芝加哥大學', nameEn: 'University of Chicago', country: '🇺🇸', field: '經濟 / 社科' },
  { rank: 12, name: '賓州大學', nameEn: 'University of Pennsylvania', country: '🇺🇸', field: '商學 / 法律' },
  { rank: 13, name: '康奈爾大學', nameEn: 'Cornell University', country: '🇺🇸', field: '理工 / 農學' },
  { rank: 14, name: '墨爾本大學', nameEn: 'University of Melbourne', country: '🇦🇺', field: '綜合' },
  { rank: 15, name: '加州理工學院', nameEn: 'Caltech', country: '🇺🇸', field: '理工' },
  { rank: 16, name: '耶魯大學', nameEn: 'Yale University', country: '🇺🇸', field: '法律 / 人文' },
  { rank: 17, name: '北京大學', nameEn: 'Peking University', country: '🇨🇳', field: '綜合' },
  { rank: 18, name: '普林斯頓大學', nameEn: 'Princeton University', country: '🇺🇸', field: '理工 / 人文' },
  { rank: 19, name: '新南威爾士大學', nameEn: 'UNSW Sydney', country: '🇦🇺', field: '工程 / 商學' },
  { rank: 20, name: '雪梨大學', nameEn: 'University of Sydney', country: '🇦🇺', field: '綜合' },
  { rank: 21, name: '多倫多大學', nameEn: 'University of Toronto', country: '🇨🇦', field: '綜合' },
  { rank: 22, name: '愛丁堡大學', nameEn: 'University of Edinburgh', country: '🇬🇧', field: '綜合' },
  { rank: 23, name: '哥倫比亞大學', nameEn: 'Columbia University', country: '🇺🇸', field: '商學 / 新聞' },
  { rank: 24, name: '巴黎科學與文學大學', nameEn: 'PSL University', country: '🇫🇷', field: '理工 / 人文' },
  { rank: 25, name: '清華大學', nameEn: 'Tsinghua University', country: '🇨🇳', field: '理工' },
  { rank: 26, name: '南洋理工大學', nameEn: 'NTU Singapore', country: '🇸🇬', field: '理工 / 商學' },
  { rank: 27, name: '香港大學', nameEn: 'University of Hong Kong', country: '🇭🇰', field: '綜合' },
  { rank: 28, name: '約翰霍普金斯大學', nameEn: 'Johns Hopkins University', country: '🇺🇸', field: '醫學 / 公衛' },
  { rank: 29, name: '東京大學', nameEn: 'University of Tokyo', country: '🇯🇵', field: '綜合' },
  { rank: 30, name: '加州大學洛杉磯分校', nameEn: 'UCLA', country: '🇺🇸', field: '綜合' },
  { rank: 31, name: '麥吉爾大學', nameEn: 'McGill University', country: '🇨🇦', field: '醫學 / 綜合' },
  { rank: 32, name: '曼徹斯特大學', nameEn: 'University of Manchester', country: '🇬🇧', field: '理工 / 商學' },
  { rank: 33, name: '密歇根大學安娜堡', nameEn: 'University of Michigan', country: '🇺🇸', field: '綜合' },
  { rank: 34, name: '澳洲國立大學', nameEn: 'ANU', country: '🇦🇺', field: '政治 / 人文' },
  { rank: 35, name: '英屬哥倫比亞大學', nameEn: 'UBC', country: '🇨🇦', field: '綜合' },
  { rank: 36, name: '倫敦政經學院', nameEn: 'LSE', country: '🇬🇧', field: '社科 / 經濟' },
  { rank: 37, name: '首爾國立大學', nameEn: 'Seoul National University', country: '🇰🇷', field: '綜合' },
  { rank: 38, name: '昆士蘭大學', nameEn: 'University of Queensland', country: '🇦🇺', field: '生科 / 工程' },
  { rank: 39, name: '京都大學', nameEn: 'Kyoto University', country: '🇯🇵', field: '理工' },
  { rank: 40, name: '西北大學', nameEn: 'Northwestern University', country: '🇺🇸', field: '商學 / 新聞' },
  { rank: 41, name: '香港中文大學', nameEn: 'CUHK', country: '🇭🇰', field: '商學 / 人文' },
  { rank: 42, name: '復旦大學', nameEn: 'Fudan University', country: '🇨🇳', field: '綜合' },
  { rank: 43, name: '上海交通大學', nameEn: 'SJTU', country: '🇨🇳', field: '理工' },
  { rank: 44, name: '莫納什大學', nameEn: 'Monash University', country: '🇦🇺', field: '藥學 / 商學' },
  { rank: 45, name: '浙江大學', nameEn: 'Zhejiang University', country: '🇨🇳', field: '理工' },
  { rank: 46, name: '杜克大學', nameEn: 'Duke University', country: '🇺🇸', field: '醫學 / 商學' },
  { rank: 47, name: 'KTH 皇家理工學院', nameEn: 'KTH Royal Institute', country: '🇸🇪', field: '理工' },
  { rank: 48, name: '倫敦國王學院', nameEn: "King's College London", country: '🇬🇧', field: '法律 / 醫學' },
  { rank: 49, name: '香港科技大學', nameEn: 'HKUST', country: '🇭🇰', field: '理工 / 商學' },
  { rank: 50, name: '卡耐基梅隆大學', nameEn: 'Carnegie Mellon', country: '🇺🇸', field: 'CS / 理工' },
]

export default function QsTop50Page() {
  return (
    <>
      <ProgramHero
        title="QS 世界大學排名 Top 50"
        subtitle="全球頂尖學府一覽 — 了解你的夢校在世界的位置"
      />

      {/* ── 三層次策略 ── */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <ScrollReveal>
            <SectionHeading
              label="Strategy"
              title="三層次申請策略"
              subtitle="不是所有人都應該只申請夢想學校 — 真正會申請的人，會同時布局三個層級"
              split
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { en: 'Reach', label: '衝刺校', desc: '目標 QS 前 20，錄取難度高但值得挑戰', color: 'bg-sky-50 border-sky-400', badge: 'text-sky-600' },
              { en: 'Target', label: '目標校', desc: '符合背景條件，有合理錄取機率的世界名校', color: 'bg-indigo-50 border-indigo-400', badge: 'text-indigo-600' },
              { en: 'Safety', label: '保底校', desc: '確保至少有優質錄取結果，零風險', color: 'bg-emerald-50 border-emerald-400', badge: 'text-emerald-600' },
            ].map((tier, i) => (
              <ScrollReveal key={tier.en} delay={i * 0.12}>
                <div className={`rounded-lg border-2 p-6 ${tier.color} hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg`}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-2xl font-black ${tier.badge}`}>{tier.en}</span>
                    <span className="text-lg font-bold text-txt-primary">{tier.label}</span>
                  </div>
                  <p className="text-body text-txt-secondary leading-relaxed">{tier.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── QS Top 50 排名表 ── */}
      <section className="section-padding bg-[#F0F7FF]">
        <div className="container-max">
          <ScrollReveal>
            <SectionHeading label="QS World Rankings" title="QS 世界大學排名 Top 50" subtitle="涵蓋美、英、澳、新加坡、加拿大等國頂尖學府" split />
          </ScrollReveal>

          <div className="overflow-x-auto">
            <table className="w-full max-w-5xl mx-auto text-left">
              <thead>
                <tr className="border-b-2 border-dfa-blue">
                  <th className="py-3 px-4 text-eyebrow text-dfa-blue">排名</th>
                  <th className="py-3 px-4 text-eyebrow text-dfa-blue">學校</th>
                  <th className="py-3 px-4 text-eyebrow text-dfa-blue hidden sm:table-cell">英文名稱</th>
                  <th className="py-3 px-4 text-eyebrow text-dfa-blue">國家</th>
                  <th className="py-3 px-4 text-eyebrow text-dfa-blue hidden md:table-cell">強勢領域</th>
                </tr>
              </thead>
              <tbody>
                {QS_UNIVERSITIES.map((u) => (
                  <tr key={u.rank} className="border-b border-gray-100 hover:bg-white transition-colors">
                    <td className="py-3 px-4 font-black text-dfa-blue">{u.rank}</td>
                    <td className="py-3 px-4 font-semibold text-txt-primary">{u.name}</td>
                    <td className="py-3 px-4 text-txt-muted text-sm hidden sm:table-cell">{u.nameEn}</td>
                    <td className="py-3 px-4 text-lg">{u.country}</td>
                    <td className="py-3 px-4 text-txt-secondary text-sm hidden md:table-cell">{u.field}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-padding" style={{ background: 'linear-gradient(to right, #2DD8EE 0%, #1A9AE6 40%, #1040CC 100%)' }}>
        <div className="container-max text-center">
          <ScrollReveal>
            <h2 className="text-h2 text-white mb-3">讓顧問幫你分析最佳落點</h2>
            <p className="text-white mb-8">依據你的背景量身制定衝刺校・目標校・保底校清單</p>
            <a href="https://lin.ee/O1ejJf7" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-dfa-dark font-bold rounded-lg px-10 py-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              預約免費落點分析
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
