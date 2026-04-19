import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProgramHero from '../components/shared/ProgramHero'
import ScrollReveal from '../components/ui/ScrollReveal'
import SectionHeading from '../components/ui/SectionHeading'
import { partnerSchools, sampleCourses } from '../data/schools'

/* ── 目標名校資料 ── */
const SCHOOLS = [
  {
    id: 'ucb',
    name: '加州大學柏克萊分校',
    nameEn: 'University of California, Berkeley',
    location: '加州柏克萊市',
    address: 'Berkeley, CA 94720, USA',
    mapQuery: 'University+of+California+Berkeley',
    type: 'UC 系統',
    ranking: 'US News #1 公立 / QS 全球 #10',
    founded: '1868 年',
    students: '約 45,000 名',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Berkeley_glade_afternoon.jpg',
    tags: ['經濟學', '計算機科學', '工程', '商學', '數學'],
    intro: '加州大學柏克萊分校（UC Berkeley）是全球最頂尖的公立研究型大學之一，創立於 1868 年，是加州大學系統的旗艦校區。學校坐落於舊金山灣區東岸的柏克萊市，毗鄰矽谷科技產業核心區，為學生提供豐富的實習與就業資源。UCB 在經濟學、計算機科學、工程學等領域常年位居世界前五，其哈斯商學院（Haas School of Business）亦為全美頂尖商學院之一。UCB 每年透過 TAG 協議及社區大學轉學管道，接受大量來自加州社區大學的優秀轉學生，是 DFA 學員最多人成功錄取的目標院校。',
  },
  {
    id: 'ucla',
    name: '加州大學洛杉磯分校',
    nameEn: 'University of California, Los Angeles',
    location: '加州洛杉磯市 Westwood',
    address: '405 Hilgard Ave, Los Angeles, CA 90095',
    mapQuery: 'University+of+California+Los+Angeles',
    type: 'UC 系統',
    ranking: 'US News #1 公立（並列）/ QS 全球 #29',
    founded: '1919 年',
    students: '約 46,000 名',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Royce_Hall_post_rain.jpg',
    tags: ['電影', '傳播學', '商學', '生命科學', '心理學'],
    intro: 'UCLA 是全美申請人數最多、競爭最為激烈的頂尖公立大學。校園坐落於洛杉磯市西區的 Westwood 社區，緊鄰好萊塢、比佛利山莊與矽灘（Silicon Beach），在娛樂、科技與媒體產業享有得天獨厚的地理優勢。UCLA 的電影學院（TFT）全美排名第一，安德森管理學院（Anderson）為全球頂尖 MBA 學程，生命科學與心理學研究實力亦居世界前列。UCLA 每年接受超過 5,000 名社區大學轉學生，是加州社區大學轉學制度中最具吸引力的目標院校之一。',
  },
  {
    id: 'ucsd',
    name: '加州大學聖地牙哥分校',
    nameEn: 'University of California, San Diego',
    location: '加州聖地牙哥市 La Jolla',
    address: '9500 Gilman Dr, La Jolla, CA 92093',
    mapQuery: 'University+of+California+San+Diego',
    type: 'UC 系統',
    ranking: 'US News Top 10 公立 / QS 全球 #62',
    founded: '1960 年',
    students: '約 42,000 名',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/UCSD-Warren_Pano.jpg',
    tags: ['生物醫學', '計算機科學', '海洋科學', '工程', '認知科學'],
    intro: 'UCSD 是加州大學系統中以理工與生物醫學研究著稱的頂尖學府，校區坐落於聖地牙哥北部的 La Jolla 海岸懸崖上，擁有全美最優美的校園環境之一。學校與世界知名的 Scripps 海洋研究所及 Salk 生物研究所比鄰而立，為生物科技與海洋科學研究提供了獨一無二的資源。UCSD 的計算機科學、工程學與認知科學在全球排名前列，畢業生廣受高通（Qualcomm）等科技企業青睞。',
  },
  {
    id: 'ucd',
    name: '加州大學戴維斯分校',
    nameEn: 'University of California, Davis',
    location: '加州戴維斯市',
    address: 'One Shields Ave, Davis, CA 95616',
    mapQuery: 'University+of+California+Davis',
    type: 'UC 系統',
    ranking: 'US News Top 40 / QS 全球 #130',
    founded: '1905 年',
    students: '約 40,000 名',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Mrak_Hall_%28UC_Davis%29_Across_Lake_Spafford.jpg',
    tags: ['農業科學', '獸醫學', '生命科學', '環境科學', '食品科學'],
    intro: 'UC Davis 的農業與獸醫科學連年穩居全美第一、全球前三，是該領域當之無愧的學術殿堂。校園佔地超過 5,300 英畝，是 UC 系統中面積最大的校區，距離加州首府薩克拉曼多僅 15 分鐘車程。除農業相關學科外，UCD 在生命科學、環境科學、食品科學等領域亦表現出色。UCD 的轉學接受率在 UC 系統中相對較高，TAG 協議涵蓋範圍廣泛，特別適合對生命科學與環境科學有興趣的學生。',
  },
  {
    id: 'uci',
    name: '加州大學爾灣分校',
    nameEn: 'University of California, Irvine',
    location: '加州爾灣市',
    address: 'Irvine, CA 92697, USA',
    mapQuery: 'University+of+California+Irvine',
    type: 'UC 系統',
    ranking: 'US News Top 35 / QS 全球 #235',
    founded: '1965 年',
    students: '約 36,000 名',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Campus_of_the_University_of_California%2C_Irvine_%28aerial_view%2C_circa_2006%29.jpg',
    tags: ['計算機科學', '遊戲設計', '商學', '公共政策', '藥學'],
    intro: 'UCI 坐落於南加州橘郡（Orange County）的爾灣市，是全美公認最安全、最宜居的大學城之一。學校的計算機科學系全美排名前列，在遊戲設計與人機互動領域更是享譽國際。UCI 的商學院（Merage）、藥學院與公共政策學院亦實力強勁。UCI 擁有完善的社區大學轉學 TAG 協議，對國際轉學生十分友善，是進入南加州科技產業圈的絕佳跳板。',
  },
  {
    id: 'ucsb',
    name: '加州大學聖塔芭芭拉分校',
    nameEn: 'University of California, Santa Barbara',
    location: '加州聖塔芭芭拉郡 Goleta',
    address: 'Santa Barbara, CA 93106, USA',
    mapQuery: 'University+of+California+Santa+Barbara',
    type: 'UC 系統',
    ranking: 'US News Top 35 / QS 全球 #149',
    founded: '1891 年',
    students: '約 26,000 名',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/de/UCSB_University_Center_and_Storke_Tower.jpg',
    tags: ['物理學', '材料科學', '計算機科學', '傳播學', '經濟學'],
    intro: 'UCSB 坐落於太平洋沿岸，校園三面環海，擁有全美最令人嚮往的校園環境。在學術方面，UCSB 在物理學與材料科學領域居世界頂尖水準，已誕生 6 位諾貝爾獎得主。計算機科學、傳播學與經濟學亦排名全美前列。UCSB 是 UC 系統中國際學生比例最高的校區之一，支持 TAG 社區大學轉學協議，特別適合追求頂尖理工研究環境且喜歡海岸生活的學生。',
  },
  {
    id: 'caltech',
    name: '加州理工學院',
    nameEn: 'California Institute of Technology (Caltech)',
    location: '加州帕薩迪納市',
    address: '1200 E California Blvd, Pasadena, CA 91125',
    mapQuery: 'California+Institute+of+Technology',
    type: '頂尖私立',
    ranking: 'QS 全球 #10 / US News #9',
    founded: '1891 年',
    students: '約 2,200 名',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Caltech_from_the_air.jpg',
    tags: ['航太工程', '物理學', '化學', '計算機科學', '生物工程'],
    intro: '加州理工學院（Caltech）是全球最負盛名的理工類大學之一，雖然規模極小（全校僅約 2,200 名學生），但學術影響力巨大——校友與教授中已誕生超過 40 位諾貝爾獎得主。學校管理著美國太空總署（NASA）的噴射推進實驗室（JPL），在航太工程、天體物理學、量子計算等前沿領域處於世界領先地位。師生比約 1:3，是全美最低之一，學生能獲得頂級教授的密切指導。錄取率約 3%，是全球理工菁英的最高殿堂。',
  },
  {
    id: 'usc',
    name: '南加州大學',
    nameEn: 'University of Southern California (USC)',
    location: '加州洛杉磯市中心',
    address: 'Los Angeles, CA 90089, USA',
    mapQuery: 'University+of+Southern+California',
    type: '頂尖私立',
    ranking: 'US News #28 / QS 全球 #116',
    founded: '1880 年',
    students: '約 49,000 名',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Bovard_Auditorium_at_dusk%2C_University_of_Southern_California.jpg',
    tags: ['電影', '傳播', '商學', '工程', '建築'],
    intro: 'USC 是美國西岸最古老的頂尖私立研究型大學，校園位於洛杉磯市中心，與好萊塢、矽灘及洛杉磯科技園區形成緊密的產學合作網絡。USC 的電影藝術學院（SCA）被譽為「電影人的搖籃」，馬歇爾商學院（Marshall）、維特比工程學院（Viterbi）與安能堡傳播學院（Annenberg）亦為全美頂尖學院。USC 校友網絡（Trojan Network）遍布全球，在洛杉磯地區的產業影響力尤為深遠。',
  },
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

/* ── 學校詳情面板（右側） ── */
function SchoolDetail({ school }) {
  if (!school) {
    return (
      <div className="flex items-center justify-center h-full text-center p-8">
        <div>
          <div className="text-5xl mb-4">🏫</div>
          <p className="text-lg font-bold text-dfa-dark mb-2">請選擇一所學校</p>
          <p className="text-sm text-txt-muted">點擊左側學校名稱查看詳細介紹</p>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      key={school.id}
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -8 }}
      transition={{ duration: 0.25 }}
      className="flex flex-col"
    >
      {/* Header */}
      <div className="px-5 py-3 border-b border-gray-100 shrink-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[10px] font-bold bg-dfa-blue text-white px-2 py-0.5 rounded">{school.type}</span>
        </div>
        <h2 className="text-lg font-black text-dfa-dark leading-tight">{school.nameEn}</h2>
        <p className="text-sm text-dfa-blue font-bold">{school.name}</p>
      </div>

      {/* Image + Map — always side by side */}
      <div className="grid grid-cols-2 shrink-0" style={{ height: '220px' }}>
        <div className="overflow-hidden border-r border-gray-100">
          <img
            src={school.image}
            alt={school.nameEn}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none'
              e.target.parentElement.style.background = 'linear-gradient(135deg,#2DD8EE22,#1040CC22)'
            }}
          />
        </div>
        <div className="bg-gray-100">
          <iframe
            title={`${school.name} 地圖`}
            src={`https://maps.google.com/maps?q=${school.mapQuery}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* Stats + content */}
      <div className="px-5 py-4 flex-1">
        {/* Quick stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-4">
          {[
            { icon: '📍', label: '地點', value: school.location },
            { icon: '🏆', label: '排名', value: school.ranking },
            { icon: '📅', label: '創校', value: school.founded },
            { icon: '👥', label: '學生數', value: school.students },
          ].map((s) => (
            <div key={s.label} className="bg-dfa-light rounded-lg p-2">
              <p className="text-[10px] text-txt-muted">{s.icon} {s.label}</p>
              <p className="text-[11px] font-bold text-dfa-dark mt-0.5 leading-tight">{s.value}</p>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {school.tags.map((t) => (
            <span key={t} className="text-[10px] font-medium px-2.5 py-0.5 rounded-full bg-dfa-light text-dfa-blue">{t}</span>
          ))}
        </div>

        {/* Introduction */}
        <div className="border-t border-gray-100 pt-3 mb-4">
          <h3 className="text-xs font-black text-dfa-dark mb-2">{school.name}介紹</h3>
          <p className="text-xs text-txt-secondary leading-[1.8]">{school.intro}</p>
        </div>

        <a
          href="https://lin.ee/O1ejJf7"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-dfa-blue text-white font-bold py-2.5 rounded-lg hover:bg-dfa-dark transition-colors duration-200 text-sm"
        >
          免費諮詢申請策略 →
        </a>
      </div>
    </motion.div>
  )
}

export default function SchoolsPage() {
  const [selectedSchool, setSelectedSchool] = useState(SCHOOLS[0])

  return (
    <>
      <ProgramHero
        title="夢校與課程"
        subtitle="精選合作社區大學 × 目標名校"
      />

      {/* ── 為何選擇美國大學 ── */}
      <section className="py-12 bg-white">
        <div className="container-max">
          <ScrollReveal>
            <SectionHeading label="Why USA" title="為何選擇美國大學？" subtitle="留學美國的核心優勢" split />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-8">
            {WHY_USA.map((w, i) => (
              <ScrollReveal key={w.title} delay={i * 0.1} className="h-full">
                <div className="h-full bg-white rounded-xl border border-gray-100 shadow-sm p-8 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div
                    className="w-16 h-16 mx-auto mb-5 rounded-xl flex items-center justify-center text-3xl"
                    style={{ background: 'linear-gradient(135deg, #2DD8EE22, #1040CC22)' }}
                  >
                    {w.icon}
                  </div>
                  <h3 className="font-bold text-txt-primary mb-3 text-lg">{w.title}</h3>
                  <p className="text-sm text-txt-secondary leading-relaxed">{w.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 目標名校 — 左列表 + 右詳情 ── */}
      <section className="py-12 bg-dfa-light">
        <div className="container-max">
          <ScrollReveal>
            <SectionHeading label="Target Schools" title="目標名校" subtitle="點擊左側學校查看完整介紹" split />
          </ScrollReveal>

          {/* Master-detail: left sets height, right fills via absolute */}
          <div className="flex rounded-2xl overflow-hidden border border-gray-200 shadow-lg bg-white w-full">
            {/* Left — all schools visible, natural height */}
            <div className="w-[220px] xl:w-[260px] shrink-0 border-r border-gray-200 bg-white">
              {SCHOOLS.map((school) => (
                <button
                  key={school.id}
                  onClick={() => setSelectedSchool(school)}
                  className={`w-full text-left px-4 py-3.5 border-b border-gray-100 last:border-b-0 transition-all duration-150 ${
                    selectedSchool?.id === school.id
                      ? 'bg-dfa-blue text-white'
                      : 'hover:bg-dfa-light'
                  }`}
                >
                  <p className={`text-sm font-bold leading-tight ${selectedSchool?.id === school.id ? 'text-white' : 'text-dfa-dark'}`}>
                    {school.name}
                  </p>
                  <p className={`text-[10px] mt-0.5 leading-tight ${selectedSchool?.id === school.id ? 'text-white/70' : 'text-txt-muted'}`}>
                    {school.nameEn.length > 36 ? school.nameEn.substring(0, 36) + '…' : school.nameEn}
                  </p>
                  <span className={`inline-block text-[9px] mt-1.5 px-1.5 py-0.5 rounded-full font-medium ${
                    selectedSchool?.id === school.id
                      ? 'bg-white/20 text-white'
                      : 'bg-dfa-light text-dfa-blue'
                  }`}>
                    {school.type}
                  </span>
                </button>
              ))}
            </div>

            {/* Right — absolutely fills the flex space, scrollable */}
            <div className="flex-1 relative">
              <div className="absolute inset-0 overflow-y-auto bg-white">
              <AnimatePresence mode="wait">
                <SchoolDetail key={selectedSchool?.id} school={selectedSchool} />
              </AnimatePresence>
              </div>
            </div>
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
      <section className="section-padding bg-dfa-light">
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
    </>
  )
}
