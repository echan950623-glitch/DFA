// LogoWall — 院校 Logo 跑馬燈（純文字版，等有圖檔再換 <img>）
const SCHOOLS = [
  'UC Berkeley',
  'UCLA',
  'UC San Diego',
  'USC',
  'Cornell',
  'Columbia',
  'NYU',
  'UC Davis',
  'UC Irvine',
  'UNC Chapel Hill',
  'University of Michigan',
  'Illinois Urbana-Champaign',
]

export default function LogoWall() {
  // Double the list so the marquee loops seamlessly
  const doubled = [...SCHOOLS, ...SCHOOLS]

  return (
    <div className="bg-white border-b border-dfa-border py-10 overflow-hidden">
      <p className="text-center text-xs font-semibold text-dfa-muted uppercase tracking-[0.2em] mb-6">
        歷屆學員錄取院校
      </p>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div
          className="flex gap-12 whitespace-nowrap"
          style={{ animation: 'marquee 28s linear infinite' }}
        >
          {doubled.map((school, i) => (
            <span
              key={i}
              className="text-lg font-bold text-dfa-border hover:text-dfa-blue transition-colors duration-300 cursor-default select-none font-['Inter']"
            >
              {school}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
