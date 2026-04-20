import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

/**
 * First-visit splash animation: fades in, holds, then fades out revealing the page.
 * Uses sessionStorage so it only shows once per browser session.
 */
export default function IntroSplash() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined') return false
    return !sessionStorage.getItem('dfa-intro-seen')
  })

  useEffect(() => {
    if (!visible) return
    const t = setTimeout(() => {
      setVisible(false)
      sessionStorage.setItem('dfa-intro-seen', '1')
    }, 2800)
    return () => clearTimeout(t)
  }, [visible])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #2DD8EE 0%, #1A9AE6 40%, #0A2A6E 100%)' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="flex flex-col items-center gap-6 px-6 text-center"
          >
            {/* Chinese title */}
            <h1
              className="text-white font-black tracking-wider select-none"
              style={{
                fontSize: 'clamp(3rem, 9vw, 6.5rem)',
                lineHeight: 1.1,
                textShadow: '0 6px 30px rgba(0,0,0,0.25)',
              }}
            >
              夢想家留學
            </h1>

            {/* Divider line */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
              className="h-px w-32 md:w-48 bg-white/70 origin-center"
            />

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="text-white tracking-[0.2em]"
              style={{ fontSize: 'clamp(1rem, 2vw, 1.4rem)' }}
            >
              留學不僅是夢想
            </motion.p>

            {/* Logo — below, smaller */}
            <motion.img
              src="/logos/logo-white-nobg.png"
              alt="Dream Future Academy"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.75 }}
              className="h-10 md:h-14 lg:h-16 w-auto mt-4 drop-shadow-[0_4px_20px_rgba(0,0,0,0.25)]"
              style={{ filter: 'brightness(0) invert(1)' }}
            />

            {/* English tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.75 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-white tracking-[0.25em] uppercase mt-1"
              style={{ fontSize: 'clamp(0.65rem, 1vw, 0.85rem)' }}
            >
              Turning Global Education into Reality
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
