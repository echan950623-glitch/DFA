import ScrollReveal from '../components/ui/ScrollReveal'

/* ── 名校卡片資料 ── */
const SCHOOLS = [
  {
    abbr: 'UCLA',
    name: 'University of California, Los Angeles',
    zh: '加州大學洛杉磯分校',
    tag: 'UC 系統指標名校',
    desc: 'UC 系統指標名校，每年大量轉學生申請目標，全美公立大學排名頂尖。',
    img: '/images/study-tour/ucla.jpg',
    color: '#2563EB',
  },
  {
    abbr: 'UCSD',
    name: 'University of California, San Diego',
    zh: '加州大學聖地牙哥分校',
    tag: '理工 & 生醫強校',
    desc: '理工、生醫領域強勢，學術環境穩定，轉學錄取機會相對可預期。',
    img: '/images/study-tour/ucsd.jpg',
    color: '#006A96',
  },
  {
    abbr: 'UCI',
    name: 'University of California, Irvine',
    zh: '加州大學爾灣分校',
    tag: 'TAG 路徑友好',
    desc: '適合 TAG 路徑申請，環境安全、生活品質高，轉學路徑成熟可控。',
    img: '/images/study-tour/uci.jpg',
    color: '#0891b2',
  },
  {
    abbr: 'UC Berkeley',
    name: 'University of California, Berkeley',
    zh: '加州大學柏克萊分校',
    tag: '頂尖公立大學',
    desc: '頂尖公立大學，學術強度與競爭最高，理工、商科、法律全美頂尖。',
    img: '/images/study-tour/ucb.jpg',
    color: '#003262',
  },
  {
    abbr: 'UCSB',
    name: 'University of California, Santa Barbara',
    zh: '加州大學聖芭芭拉分校',
    tag: '海景名校',
    desc: '海景校園代表名校，生活與學術兼具，為轉學熱門目標校。',
    img: '/images/study-tour/ucsb.jpg',
    color: '#0284c7',
  },
  {
    abbr: 'USC',
    name: 'University of Southern California',
    zh: '南加州大學',
    tag: '頂尖私立大學',
    desc: '美西最古老頂尖私立研究型大學，電影藝術學院、馬歇爾商學院與安能堡傳播學院均為全美頂尖，Trojan 校友網絡影響力深遠。',
    img: '/images/study-tour/usc.jpg',
    color: '#9f1239',
  },
]

/* ── 相簿照片 ── */
const GALLERY = [
  { src: '/images/study-tour/gallery-ucla-group.jpg',  alt: 'UCLA 校園導覽', label: 'UCLA' },
  { src: '/images/study-tour/gallery-ucb-aerial.jpg',  alt: 'UCB 空拍夕陽',  label: 'UC Berkeley' },
  { src: '/images/study-tour/gallery-ucsd-walk.jpg',   alt: 'UCSD 校園漫步', label: 'UC San Diego' },
  { src: '/images/study-tour/gallery-ucb-gate.jpg',    alt: 'UCB Sather Gate', label: 'UC Berkeley' },
  { src: '/images/study-tour/gallery-ucla-aerial.jpg', alt: 'UCLA 空拍全景', label: 'UCLA' },
  { src: '/images/study-tour/gallery-ucsd-sea.jpg',    alt: 'UCSD 海岸景觀', label: 'UC San Diego' },
  { src: '/images/study-tour/gallery-ucsd-center.jpg', alt: 'UCSD Price Center', label: 'UC San Diego' },
  { src: '/images/study-tour/gallery-socal-beach.jpg', alt: '南加州海灘',    label: 'SoCal' },
]

const BENEFITS = [
  {
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 004 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: '美國大學學習模式體驗',
    desc: '親身體驗美式大學課堂文化與校園生活節奏',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6}
          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    ),
    title: '世界頂尖名校課程與教學邏輯',
    desc: '深度了解 世界頂尖名校 科系設置、選課規則與轉學要求',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: '校園與生活環境實地觀察',
    desc: '走進宿舍、圖書館、社團空間，感受真實學生生活',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6}
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    title: '升學方向初步確認',
    desc: '在申請前確認目標校，避免盲目申請浪費時間與資源',
  },
]

const WHO = [
  '計畫申請世界頂尖名校（Harvard / Stanford / Berkeley 等）',
  'GPA 有基礎，或正在規劃提升成績',
  '對升學路徑感到迷茫、想提前確認方向',
  '想提前了解美國學習環境，建立留學信心',
]

const HOW = [
  { title: '小班制 · 限額招收', desc: '確保每位學員都能獲得顧問一對一的升學解析與資源' },
  { title: '升學導向 · 非旅遊行程', desc: '行程聚焦在「理解升學路徑」，而非觀光打卡' },
  { title: '可銜接 DFA 完整升學顧問服務', desc: '遊學結束後可直接銜接 DFA 的完整升學顧問服務' },
]

export default function StudyTourPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[65vh] flex flex-col overflow-hidden" style={{ paddingTop: 88 }}>
        {/* Background photo */}
        <div className="absolute inset-0">
          <img
            src="/images/study-tour/hero-global.jpg"
            alt="全球名校遊學"
            className="w-full h-full object-cover object-center"
          />
          {/* Left-to-right dark gradient */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, rgba(8,14,28,0.97) 0%, rgba(8,14,28,0.90) 35%, rgba(8,14,28,0.55) 60%, rgba(8,14,28,0.10) 100%)',
            }}
          />
          {/* Bottom fade for feature bar */}
          <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        {/* Main content — grows to fill screen, centres vertically */}
        <div className="relative z-10 flex-1 flex items-center">
          <div className="container-max section-padding w-full py-16">
            <div className="max-w-[600px]">
              {/* Giant title */}
              <h1 className="text-[clamp(2.5rem,8vw,5.5rem)] font-black text-white leading-none tracking-tight mb-5">
                名校探索遊學
              </h1>

              {/* Subtitle */}
              <p className="text-2xl sm:text-3xl font-bold text-white leading-snug mb-2">
                在申請之前，
              </p>
              <p className="text-2xl sm:text-3xl font-bold text-white leading-snug mb-6">
                先確認你是否{' '}
                <span
                  className="relative inline-block text-[#4FC8E8]"
                  style={{ textDecoration: 'underline', textDecorationColor: '#4FC8E8', textUnderlineOffset: '6px' }}
                >
                  名校校園
                </span>
              </p>

              {/* Body */}
              <p className="text-white/65 text-base sm:text-lg leading-relaxed mb-10">
                實地走訪 UCLA、UCSD、UCI 等名校，<br className="hidden sm:block" />
                了解美國大學學習模式與轉學路徑。
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                {/* Primary */}
                <a
                  href="https://lin.ee/O1ejJf7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-md font-bold text-[15px] bg-white text-dfa-blue hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  預約遊學說明會
                </a>

                {/* Secondary — LINE */}
                <a
                  href="https://lin.ee/O1ejJf7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-md border-2 border-white/40 text-white font-bold text-[15px] hover:bg-white/10 transition-colors duration-300"
                >
                  LINE 諮詢
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Feature bar — pinned to bottom */}
        <div className="relative z-10 container-max section-padding pb-8">
          <div className="flex flex-wrap gap-x-5 md:gap-x-10 gap-y-3 md:gap-y-4">
            {[
              {
                icon: (
                  <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                      d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11m16-11v11M8 10v11m4-11v11m4-11v11" />
                  </svg>
                ),
                line1: '全球頂尖名校',
                line2: '名校實地參訪',
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                line1: '升學導向設計',
                line2: '非一般遊學',
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                line1: '可銜接',
                line2: '頂尖名校規劃',
              },
            ].map((f, i) => (
              <div key={i} className="flex items-center gap-3">
                {f.icon}
                <div>
                  <p className="text-white text-sm font-bold leading-none">{f.line1}</p>
                  <p className="text-white/55 text-sm leading-none mt-0.5">{f.line2}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 2: 這不是一般的遊學體驗 ── */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-14">
              <p className="text-xs font-black tracking-[0.25em] text-dfa-blue/70 uppercase mb-3">WHY DFA STUDY TOUR</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-5">
                這不是一般的遊學體驗
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed">
                多數遊學提供短期體驗，但 DFA 更重視的是「升學決策」。<br />
                透過實地觀察與專業解析，幫助你在申請前確認方向。
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { icon: '門檻', title: 'UC 系統轉學門檻', desc: '了解各校 GPA 要求、必修課程與申請時間節點' },
              { icon: '路徑', title: '社區大學到 UC 路徑', desc: '社大 → UC 的轉學機制、TAG 協議與申請策略' },
              { icon: '差異', title: '不同校區與科系差異', desc: '各校區優勢科系、競爭程度與錄取分析' },
              { icon: '方向', title: '在申請前，先確認方向', desc: '避免盲目選校，帶著清晰的升學地圖回家規劃' },
            ].map((item) => (
              <ScrollReveal key={item.title}>
                <div className="flex gap-5 p-6 rounded-2xl border border-gray-100 hover:border-dfa-blue/30 hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-dfa-blue/10 flex items-center justify-center shrink-0">
                    <span className="text-dfa-blue font-black text-sm leading-none">{item.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-black text-gray-900 text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: 名校探索卡片 ── */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-xs font-black tracking-[0.25em] text-dfa-blue/70 uppercase mb-3">CAMPUS EXPLORATION</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">名校探索</h2>
              <p className="text-gray-500 text-lg">親訪頂尖校園，直擊轉學路徑</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SCHOOLS.map((school) => (
              <ScrollReveal key={school.abbr}>
                <div className="group rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={school.img}
                      alt={school.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span
                      className="absolute top-3 right-3 text-xs font-bold text-white px-2.5 py-1 rounded-full"
                      style={{ background: school.color }}
                    >
                      {school.tag}
                    </span>
                    <div className="absolute bottom-3 left-4">
                      <p className="text-white font-black text-2xl">{school.abbr}</p>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-gray-400 mb-1">{school.name}</p>
                    <p className="font-black text-gray-800 text-base mb-2">{school.zh}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{school.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: 校園實景相簿 ── */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-xs font-black tracking-[0.25em] text-dfa-blue/70 uppercase mb-3">CAMPUS LIFE</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">校園實景</h2>
              <p className="text-gray-500 text-lg">名校的樣子，先親眼看見</p>
            </div>
          </ScrollReveal>

          {/* Masonry-style photo grid */}
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
            {GALLERY.map((photo, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="group relative break-inside-avoid rounded-xl overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 inset-x-0 p-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-xs font-bold text-white bg-dfa-blue/80 px-2 py-0.5 rounded-full">
                      {photo.label}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: 你將獲得 ── */}
      <section className="relative section-padding bg-dfa-dark overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 50%, #2DD8EE 0%, transparent 50%), radial-gradient(circle at 80% 50%, #1A75F5 0%, transparent 50%)',
          }}
        />
        <div className="container-max relative">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-xs font-black tracking-[0.25em] text-dfa-blue/70 uppercase mb-3">WHAT YOU GAIN</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">你將獲得</h2>
              <p className="text-white/60 text-lg">這趟遊學，帶你建立真實的升學決策能力</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS.map((b) => (
              <ScrollReveal key={b.title}>
                <div className="text-center px-4 py-6">
                  <div className="flex justify-center mb-5">{b.icon}</div>
                  <h3 className="text-white font-black text-base mb-3 leading-snug">{b.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 6: 適合對象 ── */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <p className="text-xs font-black tracking-[0.25em] text-dfa-blue/70 uppercase mb-3">WHO IS THIS FOR</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900">適合對象</h2>
              </div>
            </ScrollReveal>
            <div className="space-y-4">
              {WHO.map((item, i) => (
                <ScrollReveal key={i}>
                  <div className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 hover:border-dfa-blue/30 hover:bg-blue-50/30 transition-all duration-300">
                    <div className="w-8 h-8 rounded-full bg-dfa-blue flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700 font-medium text-lg leading-snug">{item}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 7: 參與方式 ── */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-xs font-black tracking-[0.25em] text-dfa-blue/70 uppercase mb-3">HOW TO JOIN</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">參與方式</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {HOW.map((h) => (
              <ScrollReveal key={h.title} className="h-full">
                <div className="h-full bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <h3 className="font-black text-gray-900 text-xl mb-3">{h.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{h.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 8: 全球名校遊學 Banner ── */}
      <section className="bg-dfa-dark w-full">
        <ScrollReveal>
          <div className="md:max-w-7xl md:mx-auto md:px-8 xl:px-[75px] md:py-16">
            <img
              src="/images/study-tour/banner-global.jpg"
              alt="全球名校遊學"
              className="w-full h-auto block md:rounded-2xl"
            />
          </div>
        </ScrollReveal>
      </section>

      {/* ── Section 9: CTA ── */}
      <section className="section-padding bg-dfa-dark">
        <div className="container-max text-center">
          <ScrollReveal>
            <p className="text-xs font-black tracking-[0.25em] text-dfa-blue/70 uppercase mb-4">RESERVE YOUR SPOT</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
              預約升學評估
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-md mx-auto leading-relaxed">
              了解你是否適合前進名校<br />建立屬於你的專屬升學策略
            </p>
            <a
              href="https://lin.ee/O1ejJf7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-md bg-white text-dfa-blue font-black text-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.02 2 11c0 2.87 1.35 5.43 3.47 7.14L4.5 22l4.1-1.36C9.6 20.87 10.77 21 12 21c5.52 0 10-4.02 10-9S17.52 2 12 2z"/>
              </svg>
              LINE 立即諮詢
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
