/**
 * 辦公室環境照片牆 — 自動無限橫向捲動（marquee）
 * 動畫使用 tailwind.config 內建的 `animate-marquee`（30s 線性無限）。
 * 照片陣列複製兩份串接，搭配 translateX(-50%) 達成無縫循環。
 * 滑鼠移入時暫停捲動。
 */
const OFFICE_PHOTOS = Array.from({ length: 8 }, (_, i) => `/images/office/office-${i + 1}.jpg`)

export default function OfficeMarquee() {
  const loop = [...OFFICE_PHOTOS, ...OFFICE_PHOTOS]

  return (
    <div className="group relative overflow-hidden">
      {/* 兩側淡出遮罩 */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 md:w-24 bg-gradient-to-r from-dfa-light to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 md:w-24 bg-gradient-to-l from-dfa-light to-transparent" />

      <div className="flex w-max gap-5 animate-marquee group-hover:[animation-play-state:paused]">
        {loop.map((src, i) => (
          <div
            key={i}
            className="shrink-0 w-[280px] h-[186px] md:w-[380px] md:h-[253px] rounded-2xl overflow-hidden shadow-md"
          >
            <img
              src={src}
              alt="DFA 辦公室環境"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
