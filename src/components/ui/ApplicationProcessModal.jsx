import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  HiChat,
  HiLightBulb,
  HiDocumentText,
  HiPaperAirplane,
  HiGlobe,
  HiX,
} from 'react-icons/hi'

const STEPS = [
  {
    number: '01',
    icon: HiChat,
    title: '免費諮詢',
    desc: '與專業顧問進行一對一評估，了解你的學術背景、目標學校與申請時程。',
  },
  {
    number: '02',
    icon: HiLightBulb,
    title: '制定策略',
    desc: '根據個人條件量身打造選校清單、課程規劃與背景提升方向。',
  },
  {
    number: '03',
    icon: HiDocumentText,
    title: '文件準備',
    desc: '全程輔助撰寫個人陳述、申請文書，並協助準備所有所需申請資料。',
  },
  {
    number: '04',
    icon: HiPaperAirplane,
    title: '送件審查',
    desc: '提交申請前多輪審核，確保每份文件符合目標學校要求，準時完成送件。',
  },
  {
    number: '05',
    icon: HiGlobe,
    title: '簽證準備',
    desc: '錄取後協助學生完成 F-1 學生簽證申請、赴美前說明與後續安置規劃。',
  },
]

// Animation variants
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
}

const panelVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 280, damping: 26, delay: 0.05 },
  },
  exit: { opacity: 0, scale: 0.95, y: 24, transition: { duration: 0.18 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.92 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 22,
      delay: 0.22 + i * 0.1,
    },
  }),
}

export default function ApplicationProcessModal({ isOpen, onClose }) {
  // Close on Escape
  useEffect(() => {
    if (!isOpen) return
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isOpen, onClose])

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.22 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Panel */}
          <motion.div
            key="panel"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl pointer-events-auto"
              style={{
                background: 'linear-gradient(135deg, #003366 0%, #0066CC 60%, #4DD9EC 100%)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-colors duration-200 z-10"
                aria-label="關閉"
              >
                <HiX className="text-lg" />
              </button>

              {/* Header */}
              <div className="px-8 pt-10 pb-6 text-center">
                <p className="text-xs font-semibold text-white uppercase tracking-[0.2em] mb-2">
                  Application Process
                </p>
                <h2 className="text-2xl md:text-3xl font-black text-white leading-snug">
                  美加藤校築夢計畫
                  <br />
                  <span className="text-white/80 font-bold text-xl md:text-2xl">五步驟申請流程</span>
                </h2>
              </div>

              {/* Steps grid */}
              <div className="px-6 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {STEPS.map((step, i) => (
                  <motion.div
                    key={step.number}
                    custom={i}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-5 flex flex-col items-center text-center hover:bg-white/15 transition-colors duration-200"
                  >
                    {/* Connector arrow (hidden on mobile, last card) */}
                    {i < STEPS.length - 1 && (
                      <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                        <span className="text-white text-xl font-bold">›</span>
                      </div>
                    )}

                    {/* Step number */}
                    <span className="text-[10px] font-bold text-white/80 tracking-widest mb-3">
                      STEP {step.number}
                    </span>

                    {/* Icon circle */}
                    <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mb-4 shrink-0">
                      <step.icon className="text-2xl text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-white text-base mb-2 leading-snug">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white text-xs leading-relaxed">
                      {step.desc}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Footer CTA */}
              <div className="px-8 pb-10 text-center">
                <a
                  href="https://lin.ee/O1ejJf7"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="inline-block bg-white text-dfa-dark font-bold px-8 py-3 rounded-lg text-sm hover:bg-dfa-blue hover:text-white transition-colors duration-200"
                >
                  立即預約免費評估 →
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
