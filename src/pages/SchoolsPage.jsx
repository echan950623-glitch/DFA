import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiX, HiChevronDown } from 'react-icons/hi'
import ProgramHero from '../components/shared/ProgramHero'
import ScrollReveal from '../components/ui/ScrollReveal'
import SectionHeading from '../components/ui/SectionHeading'
import { partnerSchools, sampleCourses } from '../data/schools'
import { ADMISSION_CASES } from '../data/cases'
import CTABanner from '../components/shared/CTABanner'
import OfferBoard from '../components/shared/OfferBoard'

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
    tags: ['經濟學', '資訊科學', '工程', '商學', '數學'],
    intro: '加州大學柏克萊分校（UC Berkeley）是全球最頂尖的公立研究型大學之一，創立於 1868 年，是加州大學系統的旗艦校區。學校坐落於舊金山灣區東岸的柏克萊市，毗鄰矽谷科技產業核心區，為學生提供豐富的實習與就業資源。UCB 在經濟學、資訊科學、工程學等領域常年位居世界前五，其哈斯商學院（Haas School of Business）亦為全美頂尖商學院之一。UCB 每年透過 TAG 協議及社區大學轉學管道，接受大量來自加州社區大學的優秀轉學生，是 DFA 學員最多人成功錄取的目標院校。',
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
    tags: ['生物醫學', '資訊科學', '海洋科學', '工程', '認知科學'],
    intro: 'UCSD 是加州大學系統中以理工與生物醫學研究著稱的頂尖學府，校區坐落於聖地牙哥北部的 La Jolla 海岸懸崖上，擁有全美最優美的校園環境之一。學校與世界知名的 Scripps 海洋研究所及 Salk 生物研究所比鄰而立，為生物科技與海洋科學研究提供了獨一無二的資源。UCSD 的資訊科學、工程學與認知科學在全球排名前列，畢業生廣受高通（Qualcomm）等科技企業青睞。',
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
    tags: ['資訊科學', '遊戲設計', '商學', '公共政策', '藥學'],
    intro: 'UCI 坐落於南加州橘郡（Orange County）的爾灣市，是全美公認最安全、最宜居的大學城之一。學校的資訊科學系全美排名前列，在遊戲設計與人機互動領域更是享譽國際。UCI 的商學院（Merage）、藥學院與公共政策學院亦實力強勁。UCI 擁有完善的社區大學轉學 TAG 協議，對國際轉學生十分友善，是進入南加州科技產業圈的絕佳跳板。',
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
    tags: ['物理學', '材料科學', '資訊科學', '傳播學', '經濟學'],
    intro: 'UCSB 坐落於太平洋沿岸，校園三面環海，擁有全美最令人嚮往的校園環境。在學術方面，UCSB 在物理學與材料科學領域居世界頂尖水準，已誕生 6 位諾貝爾獎得主。資訊科學、傳播學與經濟學亦排名全美前列。UCSB 是 UC 系統中國際學生比例最高的校區之一，支持 TAG 社區大學轉學協議，特別適合追求頂尖理工研究環境且喜歡海岸生活的學生。',
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
    tags: ['航太工程', '物理學', '化學', '資訊科學', '生物工程'],
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
    desc: '美國大學研究經費充足，有機會直接參與教授實驗室研究，累積學術研究經歷，強化申請研究所競爭力。',
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
      <div className="px-5 py-4 border-b border-gray-100 shrink-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-bold bg-dfa-blue text-white px-2.5 py-0.5 rounded">{school.type}</span>
        </div>
        <h2 className="text-xl font-black text-dfa-dark leading-tight">{school.nameEn}</h2>
        <p className="text-base text-dfa-blue font-bold">{school.name}</p>
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
            <div key={s.label} className="bg-dfa-light rounded-lg p-3">
              <p className="text-xs text-txt-muted">{s.icon} {s.label}</p>
              <p className="text-sm font-bold text-dfa-dark mt-1 leading-tight">{s.value}</p>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {school.tags.map((t) => (
            <span key={t} className="text-xs font-medium px-3 py-1 rounded-full bg-dfa-light text-dfa-blue">{t}</span>
          ))}
        </div>

        {/* Introduction */}
        <div className="border-t border-gray-100 pt-4 mb-4">
          <h3 className="text-base font-black text-dfa-dark mb-2">{school.name}介紹</h3>
          <p className="text-sm text-txt-secondary leading-[1.8]">{school.intro}</p>
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

/* ── 單一學校卡片內容（carousel slide 用，可展開） ── */
function PartnerSchoolSlide({ school, open }) {
  const abbr = school.nameEn.match(/\(([^)]+)\)/)?.[1] || school.name.charAt(0)
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden h-full">
      <div className="h-2" style={{ background: 'linear-gradient(to right,#2DD8EE,#1040CC)' }} />
      <div className="p-6 md:p-8">
        <div className="flex items-start gap-4 mb-5">
          <div className="w-14 h-14 rounded-lg flex items-center justify-center text-white font-bold text-lg shrink-0"
            style={{ background: 'linear-gradient(135deg,#2DD8EE,#1040CC)' }}>
            {abbr}
          </div>
          <div className="flex-1">
            <h3 className="text-h3 text-txt-primary">{school.name}</h3>
            <p className="text-sm text-dfa-blue font-semibold">{school.nameEn}</p>
          </div>
        </div>

        <span className="inline-block text-sm font-medium px-3 py-1 rounded-md bg-dfa-light text-dfa-blue mb-4">
          {school.highlight}
        </span>

        {/* Quick facts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5 text-sm">
          {school.website && (
            <div className="flex gap-2"><span className="text-txt-muted shrink-0">官網：</span><a href={school.website} target="_blank" rel="noopener noreferrer" className="text-dfa-blue hover:underline truncate">{school.nameEn}</a></div>
          )}
          {school.location && <div className="flex gap-2"><span className="text-txt-muted shrink-0">地點：</span><span className="text-txt-primary">{school.location}</span></div>}
          <div className="flex gap-2"><span className="text-txt-muted shrink-0">建校：</span><span className="text-txt-primary">{school.founded} 年</span></div>
          {school.type && <div className="flex gap-2"><span className="text-txt-muted shrink-0">類型：</span><span className="text-txt-primary">{school.type}</span></div>}
        </div>

        {/* Intro — always visible */}
        {school.intro && (
          <p className="text-body text-txt-secondary leading-relaxed mb-3">{school.intro}</p>
        )}

        {/* Collapsible details */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="overflow-hidden"
            >
              <div className={`pt-4 ${school.campusPhoto ? 'grid grid-cols-1 lg:grid-cols-3 gap-6' : ''}`}>
                {/* Text column */}
                <div className={school.campusPhoto ? 'lg:col-span-2 min-w-0' : ''}>
                  {school.sections && school.sections.map((sec) => (
                    <div key={sec.title} className="mb-5">
                      <h4 className="text-base font-bold text-dfa-blue mb-2">{sec.title}</h4>
                      <ul className="space-y-1.5">
                        {sec.points.map((p, j) => (
                          <li key={j} className="flex gap-2">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-dfa-blue/60 shrink-0" />
                            <span className="text-sm text-txt-secondary leading-relaxed">{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  {school.majors && (
                    <div className="mb-6">
                      <h4 className="text-base font-bold text-dfa-blue mb-3">🔥 熱門科系</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {school.majors.map((m) => (
                          <li key={m.name} className="border-l-2 border-dfa-blue/40 pl-3">
                            <p className="text-sm font-bold text-txt-primary">{m.name}</p>
                            <p className="text-xs text-txt-muted">{m.en}</p>
                            {m.transferTo && (
                              <p className="text-xs text-txt-secondary mt-0.5">{m.transferTo}</p>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {school.englishRequirements && (
                    <div>
                      <h4 className="text-base font-bold text-dfa-blue mb-3">📝 入學英文成績要求</h4>
                      <div className="flex flex-wrap gap-2">
                        {school.englishRequirements.map((r) => (
                          <span key={r} className="text-sm font-semibold px-3 py-1.5 rounded-md bg-dfa-light text-dfa-dark">{r}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Photo column — sticky so it stays in view while scrolling */}
                {school.campusPhoto && (
                  <div className="lg:col-span-1">
                    <div className="lg:sticky lg:top-24 space-y-3">
                      <div className="rounded-xl overflow-hidden shadow-md border border-gray-100">
                        <img src={school.campusPhoto} alt={`${school.name} 校園`} className="w-full h-auto object-cover" />
                      </div>
                      <p className="text-xs text-center text-txt-muted">{school.name} · 校園實景</p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

/* ── 合作社區大學 水平輪播 ── */
function PartnerCarousel({ schools }) {
  const [idx, setIdx] = useState(0)
  const [open, setOpen] = useState(false)
  const topRef = useRef(null)
  const total = schools.length
  const canPrev = idx > 0
  const canNext = idx < total - 1

  const scrollToTop = () => {
    const el = topRef.current
    if (!el) return
    const y = el.getBoundingClientRect().top + window.scrollY - 100
    window.scrollTo({ top: y, behavior: 'smooth' })
  }

  const prev = () => { if (canPrev) { if (open) setTimeout(scrollToTop, 50); setIdx((i) => i - 1); setOpen(false) } }
  const next = () => { if (canNext) { if (open) setTimeout(scrollToTop, 50); setIdx((i) => i + 1); setOpen(false) } }
  const jump = (i) => { if (i !== idx) { if (open) setTimeout(scrollToTop, 50); setIdx(i); setOpen(false) } }
  const toggleOpen = () => {
    const isOpen = open
    setOpen(!isOpen)
    if (isOpen) {
      // collapsing: wait for animation to start, then scroll
      setTimeout(scrollToTop, 50)
    }
  }

  const school = schools[idx]
  const hasExpandable = !!(
    (school.sections && school.sections.length) ||
    (school.majors && school.majors.length) ||
    (school.englishRequirements && school.englishRequirements.length)
  )

  return (
    <div ref={topRef} className="max-w-5xl mx-auto scroll-mt-24">
      {/* Slide */}
      <div className="overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={school.nameEn}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <PartnerSchoolSlide school={school} open={open} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Control row — arrows flanking toggle button */}
      <div className="flex items-stretch gap-2 md:gap-3 mt-4">
        <button
          onClick={prev}
          disabled={!canPrev}
          aria-label="上一所"
          className={`shrink-0 w-12 md:w-14 rounded-md border flex items-center justify-center text-2xl transition-colors duration-200 ${
            canPrev ? 'border-dfa-blue/40 text-dfa-blue hover:bg-dfa-blue hover:text-white' : 'border-gray-200 text-gray-300 cursor-default'
          }`}
        >‹</button>

        {hasExpandable ? (
          <button
            onClick={toggleOpen}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-md font-semibold text-sm transition-all duration-200 ${
              open
                ? 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                : 'bg-dfa-blue text-white hover:bg-dfa-dark shadow-sm'
            }`}
          >
            {open ? '收合' : '查看更多'}
            <HiChevronDown className={`text-base transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
          </button>
        ) : (
          <div className="flex-1" />
        )}

        <button
          onClick={next}
          disabled={!canNext}
          aria-label="下一所"
          className={`shrink-0 w-12 md:w-14 rounded-md border flex items-center justify-center text-2xl transition-colors duration-200 ${
            canNext ? 'border-dfa-blue/40 text-dfa-blue hover:bg-dfa-blue hover:text-white' : 'border-gray-200 text-gray-300 cursor-default'
          }`}
        >›</button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {schools.map((s, i) => (
          <button
            key={s.nameEn}
            onClick={() => jump(i)}
            aria-label={`切換到 ${s.name}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === idx ? 'bg-dfa-blue w-8' : 'bg-gray-300 w-2 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

/* ── 錄取案例 水平輪播 ── */
function CaseCarousel({ cases }) {
  const [idx, setIdx] = useState(0)
  const [dir, setDir] = useState(1) // 1 = forward, -1 = backward
  const topRef = useRef(null)
  const total = cases.length

  const canPrev = idx > 0
  const canNext = idx < total - 1

  const prev = () => {
    if (!canPrev) return
    setDir(-1)
    setIdx((i) => i - 1)
  }
  const next = () => {
    if (!canNext) return
    setDir(1)
    setIdx((i) => i + 1)
  }
  const jump = (i) => {
    if (i === idx) return
    setDir(i > idx ? 1 : -1)
    setIdx(i)
  }

  const c = cases[idx]

  const variants = {
    enter: (d) => ({ opacity: 0, x: d > 0 ? 40 : -40 }),
    center: { opacity: 1, x: 0 },
    exit: (d) => ({ opacity: 0, x: d > 0 ? -40 : 40 }),
  }

  return (
    <div ref={topRef} className="max-w-5xl mx-auto scroll-mt-24">
      {/* Slide */}
      <div className="overflow-hidden">
        <AnimatePresence mode="wait" initial={false} custom={dir}>
          <motion.div
            key={idx}
            custom={dir}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden relative h-auto md:h-[580px] flex flex-col">
              {/* Top gradient bar */}
              <div className="h-2 shrink-0" style={{ background: 'linear-gradient(to right, #2DD8EE, #1040CC)' }} />

              {/* GPA badge — top right */}
              {c.gpa && c.gpa !== '—' && (
                <div
                  className="absolute top-4 right-4 text-white text-xs font-bold px-2.5 py-1 rounded-full z-10"
                  style={{ background: 'linear-gradient(135deg, #2DD8EE, #1040CC)' }}
                >
                  GPA {c.gpa}
                </div>
              )}

              <div className="p-4 md:p-8 flex flex-col md:flex-1 md:min-h-0 md:overflow-hidden">
                {/* Header: avatar + label */}
                <div className="flex items-center gap-4 mb-5 pr-24 shrink-0">
                  {c.avatar && (
                    <img
                      src={c.avatar}
                      alt={c.label}
                      className={`w-12 h-12 md:w-20 md:h-20 rounded-full object-cover border-2 border-white shadow-md shrink-0 ${c.objectPosition || 'object-top'}`}
                      style={{ boxShadow: '0 0 0 3px #2DD8EE40' }}
                    />
                  )}
                  <p className="text-xl md:text-3xl font-black text-dfa-dark">{c.label}</p>
                </div>

                {/* Two-column body: text on left, OFFER on right (when exists) */}
                <div className={c.offer ? 'flex flex-col md:grid md:grid-cols-5 gap-4 md:gap-6 md:flex-1 md:min-h-0' : 'flex-1 flex flex-col min-h-0'}>
                  <div className={c.offer ? 'md:col-span-3 min-w-0 md:overflow-y-auto' : 'md:overflow-y-auto flex-1'}>
                    {/* From → To (skip from when '—') */}
                    <div className="flex flex-wrap items-center gap-2 mb-4 md:sticky md:top-0 bg-white pb-1">
                      {c.from && c.from !== '—' && (
                        <>
                          <span className="text-sm md:text-base font-semibold text-txt-secondary bg-dfa-light px-3 py-1.5 rounded-lg shrink-0">
                            {c.from}
                          </span>
                          <span className="text-dfa-blue font-black text-lg shrink-0">→</span>
                        </>
                      )}
                      <span className="inline-flex items-baseline gap-2 text-sm md:text-base font-bold text-dfa-blue bg-dfa-light px-3 py-1.5 rounded-lg">
                        <span>{c.to}</span>
                        <span className="text-xs font-medium text-txt-muted">{c.toEn}</span>
                      </span>
                    </div>

                    {/* Major tag */}
                    <div className="mb-5">
                      <span className="inline-block text-sm font-medium px-3 py-1 rounded-md bg-dfa-light text-dfa-blue">
                        {c.major}
                      </span>
                    </div>

                    {/* Story */}
                    <p className="text-sm md:text-base text-txt-secondary leading-[1.9]">{c.story}</p>
                  </div>

                  {/* OFFER thumbnail */}
                  {c.offer && (
                    <div className="md:col-span-2 flex flex-col items-center justify-start mt-2 md:mt-0">
                      <p className="text-xs font-bold uppercase tracking-widest text-dfa-blue mb-2 md:mb-3">Official Offer</p>
                      <div
                        className="block rounded-lg overflow-hidden border border-gray-200 shadow-md bg-white w-full max-w-[220px] md:max-w-[280px]"
                      >
                        <img
                          src={c.offer}
                          alt={`${c.label} 錄取通知書`}
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Control row */}
      <div className="flex items-stretch gap-2 md:gap-3 mt-4">
        <button
          onClick={prev}
          disabled={!canPrev}
          aria-label="上一個案例"
          className={`shrink-0 w-12 md:w-14 rounded-md border flex items-center justify-center text-2xl transition-colors duration-200 ${
            canPrev
              ? 'border-dfa-blue/40 text-dfa-blue hover:bg-dfa-blue hover:text-white'
              : 'border-gray-200 text-gray-300 cursor-default'
          }`}
        >‹</button>

        {/* Counter */}
        <div className="flex-1 flex items-center justify-center text-sm text-txt-muted font-medium">
          {idx + 1} / {total}
        </div>

        <button
          onClick={next}
          disabled={!canNext}
          aria-label="下一個案例"
          className={`shrink-0 w-12 md:w-14 rounded-md border flex items-center justify-center text-2xl transition-colors duration-200 ${
            canNext
              ? 'border-dfa-blue/40 text-dfa-blue hover:bg-dfa-blue hover:text-white'
              : 'border-gray-200 text-gray-300 cursor-default'
          }`}
        >›</button>
      </div>

      {/* Dots */}
      <div className="flex flex-wrap justify-center gap-2 mt-5">
        {cases.map((_, i) => (
          <button
            key={i}
            onClick={() => jump(i)}
            aria-label={`切換到案例 ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === idx ? 'bg-dfa-blue w-8' : 'bg-gray-300 w-2 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default function SchoolsPage() {
  const [selectedSchool, setSelectedSchool] = useState(SCHOOLS[0])
  const [modalOpen, setModalOpen] = useState(false)

  // Lock body scroll while modal open
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [modalOpen])

  const openModal = (school) => {
    setSelectedSchool(school)
    // Only open modal on mobile breakpoints
    if (window.innerWidth < 768) setModalOpen(true)
  }

  return (
    <>
      <ProgramHero
        title="夢校與課程"
        subtitle="精選合作社區大學 × 目標名校"
      />

      {/* ── 為何選擇美國大學 ── */}
      <section className="section-padding bg-white">
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
      <section className="section-padding bg-dfa-light">
        <div className="container-max">
          <ScrollReveal>
            <SectionHeading label="Target Schools" title="目標名校" subtitle="點擊學校查看完整介紹" split />
          </ScrollReveal>

          {/* Mobile: grid of school cards → open modal on tap */}
          <div className="md:hidden grid grid-cols-2 gap-3">
            {SCHOOLS.map((school) => (
              <button
                key={school.id}
                onClick={() => openModal(school)}
                className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 text-left hover:shadow-md transition-all duration-200 active:scale-95"
              >
                <span className="inline-block text-xs font-medium px-2 py-0.5 rounded-full bg-dfa-light text-dfa-blue mb-2">
                  {school.type}
                </span>
                <p className="text-sm font-bold text-dfa-dark leading-tight mb-1">{school.name}</p>
                <p className="text-xs text-txt-muted leading-tight line-clamp-2">{school.nameEn}</p>
              </button>
            ))}
          </div>

          {/* Desktop: master-detail side by side */}
          <div className="hidden md:flex rounded-2xl overflow-hidden border border-gray-200 shadow-lg bg-white w-full">
            {/* Left — all schools visible */}
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
                  <p className={`text-xs mt-1 leading-tight ${selectedSchool?.id === school.id ? 'text-white/70' : 'text-txt-muted'}`}>
                    {school.nameEn.length > 36 ? school.nameEn.substring(0, 36) + '…' : school.nameEn}
                  </p>
                  <span className={`inline-block text-xs mt-2 px-2 py-0.5 rounded-full font-medium ${
                    selectedSchool?.id === school.id
                      ? 'bg-white/20 text-white'
                      : 'bg-dfa-light text-dfa-blue'
                  }`}>
                    {school.type}
                  </span>
                </button>
              ))}
            </div>

            {/* Right — scrollable detail */}
            <div className="flex-1 relative">
              <div className="absolute inset-0 overflow-y-auto bg-white">
                <AnimatePresence mode="wait">
                  <SchoolDetail key={selectedSchool?.id} school={selectedSchool} />
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Mobile modal */}
          <AnimatePresence>
            {modalOpen && selectedSchool && (
              <motion.div
                className="fixed inset-0 z-50 md:hidden flex items-end sm:items-center justify-center bg-black/60"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setModalOpen(false)}
              >
                <motion.div
                  className="relative w-full h-[90vh] bg-white rounded-t-2xl sm:rounded-2xl overflow-hidden flex flex-col"
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  exit={{ y: '100%' }}
                  transition={{ type: 'tween', duration: 0.3 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setModalOpen(false)}
                    className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:text-dfa-blue"
                    aria-label="關閉"
                  >
                    <HiX className="text-xl" />
                  </button>
                  <div className="overflow-y-auto flex-1">
                    <SchoolDetail school={selectedSchool} />
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ── 美國社區大學升學指南 ── */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <ScrollReveal>
            <SectionHeading
              label="Transfer Guide"
              title="美國社區大學升學指南"
              subtitle="兩年制社大 + 兩年制大學 = 美國名校學位的聰明路徑"
              split
            />
          </ScrollReveal>

          {/* 2+2 流程示意 */}
          <ScrollReveal>
            <div className="max-w-5xl mx-auto mb-16">
              <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-2">
                {[
                  { title: '2 年社區大學就讀', lines: ['相等於大一及大二', '修滿至少 60 個可轉學學分'] },
                  { title: '轉學至四年制大學', lines: ['就讀大三及大四', '修得剩餘畢業學分'] },
                  { title: '取得大學文憑', lines: ['不用 SAT / ACT', '省錢 + 名校跳板'] },
                ].map((step, i, arr) => (
                  <div key={step.title} className="contents">
                    <div className="flex-1 rounded-xl bg-dfa-light border-2 border-dfa-blue/40 px-5 py-5 text-center min-h-[160px] flex flex-col justify-center">
                      <p className="text-lg md:text-xl font-black text-dfa-blue mb-2">{step.title}</p>
                      {step.lines.map((l) => (
                        <p key={l} className="text-sm text-txt-secondary">{l}</p>
                      ))}
                    </div>
                    {i < arr.length - 1 && (
                      <span className="text-3xl md:text-4xl text-dfa-blue font-black self-center shrink-0 md:rotate-0 rotate-90">→</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* 通往高等教育的橋樑 intro */}
          <ScrollReveal>
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h3 className="text-2xl md:text-3xl font-black text-dfa-blue mb-4">美國社區大學：通往高等教育的橋樑</h3>
              <p className="text-body text-txt-secondary leading-relaxed">
                美國社區大學（Community College）是受美國教育部認可的公立學校，提供兩年制高等教育。國際學生在社大完成大一、大二課程後，可轉學進入四年制大學完成大三大四，最後取得學士學位 — 與直接入學四年制大學的學位完全相同。
              </p>
            </div>
          </ScrollReveal>

          {/* 6 大優勢 */}
          <ScrollReveal>
            <h4 className="text-xl md:text-2xl font-black text-dfa-dark text-center mb-8">6 大優勢，拓展你的美國升學之路</h4>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto mb-16">
            {[
              { num: '01', title: '公立教育部認可', desc: '所有社區大學皆為美國教育部正式認可的公立大學，學分與學位受所有四年制大學承認。' },
              { num: '02', title: '只需 2 年時間', desc: '先在社大學習基礎課程，再轉入大學主修系所，整體修業時間與直升四年制大學相當。' },
              { num: '03', title: '較四年制大學經濟實惠', desc: '學費約為四年制公立大學的三分之一，光前兩年就能省下可觀的學費與生活費。' },
              { num: '04', title: '入學門檻低', desc: '多數學校免 SAT / ACT，英文門檻較寬鬆（TOEFL iBT 約 45–61）；未達標可先上語言課程。' },
              { num: '05', title: '彈性入學時間', desc: '一年有春季、秋季等多次入學機會，不必等一年，錯過一季就能補上。' },
              { num: '06', title: '美國名校跳板', desc: '加州社大與 UC、CSU 系統有成熟轉學協議，提供 TAG 保證錄取管道，是進入名校的最佳跳板。' },
            ].map((adv, i) => (
              <ScrollReveal key={adv.num} delay={i * 0.05} className="h-full">
                <div className="h-full bg-dfa-light rounded-xl p-6 border-l-4 border-dfa-blue">
                  <p className="text-2xl font-black text-dfa-blue mb-2">{adv.num}</p>
                  <p className="text-base font-bold text-dfa-dark mb-2">{adv.title}</p>
                  <p className="text-sm text-txt-secondary leading-relaxed">{adv.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* 社區大學 vs 四年制大學 比較表 */}
          <ScrollReveal>
            <h4 className="text-xl md:text-2xl font-black text-dfa-dark text-center mb-8">社區大學 vs 四年制大學 一覽表</h4>
            <div className="max-w-5xl mx-auto">
              <p className="text-xs text-gray-400 text-right mb-2 sm:hidden">← 左右滑動查看完整比較 →</p>
              <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
              <table className="w-full min-w-[640px] mx-auto border-collapse rounded-xl overflow-hidden text-sm md:text-base border border-gray-200">
                <thead>
                  <tr style={{ background: '#0A2A6E' }}>
                    <th className="text-white font-bold px-5 py-4 text-left w-[20%]">比較項目</th>
                    <th className="text-white font-bold px-5 py-4 text-center">社區大學</th>
                    <th className="text-white font-bold px-5 py-4 text-center">四年制大學</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {[
                    { k: '修業時間', cc: '2 年取得副學士', uni: '4 年取得學士' },
                    { k: '年學費', cc: <span>約 <span className="text-dfa-blue font-bold">US$ 10,000–15,000</span></span>, uni: '約 US$ 30,000–55,000' },
                    { k: '入學門檻', cc: '寬鬆，多數免 SAT / ACT', uni: '較高，通常需 SAT / ACT 與高 GPA' },
                    { k: '英文成績要求', cc: 'TOEFL iBT 約 45–61 / IELTS 5.0–5.5 / Duolingo 75–95', uni: 'TOEFL iBT 約 80+ / IELTS 6.5+ / Duolingo 110+' },
                    { k: '畢業學位', cc: '副學士（Associate\'s）— 可銜接四年制取得學士', uni: '學士（Bachelor\'s）' },
                    { k: '校園氛圍', cc: '小班制、師生比低、顧問關注度高', uni: '大型校園、研究資源豐富' },
                  ].map((row, i) => (
                    <tr key={row.k} className={i % 2 === 0 ? 'bg-white' : 'bg-dfa-light/40'}>
                      <td className="px-5 py-4 font-semibold text-gray-700 border-b border-gray-100">{row.k}</td>
                      <td className="px-5 py-4 text-gray-600 border-b border-gray-100 border-l border-gray-100 text-center">{row.cc}</td>
                      <td className="px-5 py-4 text-gray-600 border-b border-gray-100 border-l border-gray-100 text-center">{row.uni}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>
              <p className="text-xs text-txt-muted mt-3 text-center">* 學費與英文門檻依各校公告為準，以上為一般範圍參考值。</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 合作社大院校 ── */}
      <section className="section-padding bg-dfa-light">
        <div className="container-max">
          <ScrollReveal>
            <SectionHeading label="Partner Colleges" title="合作社區大學" subtitle="Partner Community Colleges" split />
          </ScrollReveal>
          <ScrollReveal>
            <PartnerCarousel schools={partnerSchools} />
          </ScrollReveal>
        </div>
      </section>

      {/* ── 錄取案例 ── */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <ScrollReveal>
            <SectionHeading
              label="Admission Results"
              title="錄取榜單"
              subtitle="部分學員成功錄取案例展示"
              split
            />
          </ScrollReveal>
          <ScrollReveal>
            <CaseCarousel cases={ADMISSION_CASES} />
          </ScrollReveal>

        </div>
      </section>

      {/* ── 錄取 Offer 榜 ── */}
      <OfferBoard />

      {/* ── 課表示例 ── */}
      <section className="section-padding bg-white">
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

      <CTABanner
        heading="鎖定你的夢校了嗎？"
        subtitle="讓顧問協助規劃從社大到名校的完整路徑"
      />
    </>
  )
}