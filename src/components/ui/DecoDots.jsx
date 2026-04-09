/**
 * DecoDots — DFA 品牌點陣裝飾
 *
 * 從 PDF 提取的風格：小圓點陣列作為背景紋理
 *
 * Props:
 *  position  – CSS position classes (default: 'top-8 left-8')
 *  cols/rows – grid size (default: 5x5)
 */
export default function DecoDots({
  position = 'top-8 left-8',
  cols = 5,
  rows = 5,
  color = '#1A75F5',
  opacity = 0.15,
}) {
  return (
    <div
      className={`absolute ${position} pointer-events-none`}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, 8px)`,
        gridTemplateRows: `repeat(${rows}, 8px)`,
        gap: '6px',
        opacity,
      }}
    >
      {Array.from({ length: cols * rows }).map((_, i) => (
        <div
          key={i}
          className="w-[3px] h-[3px] rounded-full"
          style={{ background: color }}
        />
      ))}
    </div>
  )
}
