/**
 * DecoBlob — DFA 品牌藍色弧形裝飾色塊
 *
 * 從 PDF 提取的風格：底部右側大弧形藍色形狀，填補空白空間
 *
 * Props:
 *  position  – 'bottom-right' (default) | 'bottom-left' | 'top-right'
 *  color     – hex color (default: DFA blue #1A75F5)
 *  opacity   – 0-1 (default: 0.08)
 *  size      – 'sm' | 'md' | 'lg' (default: 'lg')
 */
export default function DecoBlob({
  position = 'bottom-right',
  color = '#1A75F5',
  opacity = 0.08,
  size = 'lg',
}) {
  const sizes = {
    sm: 'w-48 h-48 md:w-72 md:h-72',
    md: 'w-64 h-64 md:w-96 md:h-96',
    lg: 'w-80 h-80 md:w-[500px] md:h-[500px]',
  }

  const positions = {
    'bottom-right': 'bottom-0 right-0 translate-x-1/4 translate-y-1/4',
    'bottom-left': 'bottom-0 left-0 -translate-x-1/4 translate-y-1/4',
    'top-right': 'top-0 right-0 translate-x-1/4 -translate-y-1/4',
    'top-left': 'top-0 left-0 -translate-x-1/4 -translate-y-1/4',
  }

  return (
    <div
      className={`absolute ${positions[position]} ${sizes[size]} rounded-full pointer-events-none`}
      style={{ background: color, opacity }}
    />
  )
}
