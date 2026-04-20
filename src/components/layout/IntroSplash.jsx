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
    }, 2000)
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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="flex flex-col items-center gap-6 px-6"
          >
            <img
              src="/logos/logo-white-nobg.png"
              alt="Dream Future Academy"
              className="h-20 md:h-28 lg:h-32 w-auto drop-shadow-[0_4px_24px_rgba(255,255,255,0.15)]"
            />
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-white/80 text-sm md:text-base tracking-[0.3em] uppercase"
            >
              Turning Global Education into Reality
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
