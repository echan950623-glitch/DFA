import { useState, useEffect } from 'react'

/**
 * 網頁入場動畫
 * - 每個 session 只播一次（sessionStorage）
 * - 顯示 2.4s → 淡出 0.6s → 移除
 */
export default function EntryAnimation() {
  const [visible, setVisible] = useState(false)
  const [phase, setPhase] = useState('enter') // 'enter' | 'fadeout'

  useEffect(() => {
    if (sessionStorage.getItem('dfa_intro_seen')) return

    setVisible(true)

    const t1 = setTimeout(() => setPhase('fadeout'), 2400)
    const t2 = setTimeout(() => {
      setVisible(false)
      sessionStorage.setItem('dfa_intro_seen', '1')
    }, 3000)

    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (!visible) return null

  return (
    <div className={`dfa-entry-overlay${phase === 'fadeout' ? ' dfa-entry-fade-out' : ''}`}>

      {/* Logo — top */}
      <img
        src="/logos/logo-white.png"
        alt="Dream Future Academy"
        className="dfa-entry-logo"
      />

      {/* 主標題 + 副標（兩行） */}
      <div className="dfa-entry-title">
        <span className="dfa-entry-title-main">夢想家留學</span>
        <span className="dfa-entry-title-sub">留學不只是探索</span>
      </div>

      {/* 英文 tagline */}
      <div className="dfa-entry-tagline">Turning Global Education into Reality</div>
    </div>
  )
}
