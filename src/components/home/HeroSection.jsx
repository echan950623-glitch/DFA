import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const STATS = [
  { num: '300+', label: '輔導學員' },
  { num: '95%', label: '錄取率' },
  { num: '8年', label: '專業經驗' },
]

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #2DD8EE 0%, #1A9AE6 30%, #1040CC 100%)' }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* ── Two-column layout ── */}
      <div className="container-max relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[85vh] section-padding pt-28 md:pt-32">

        {/* Left: text content */}
        <div>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md border border-white/30 bg-white/10 backdrop-blur-sm text-white text-caption mb-8"
          >
            🎓 專注 UC 系統轉學 · 台北 台中 高雄 加州
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-h1 lg:text-display text-white leading-[1.08] mb-6"
          >
            社區大學 2 年<br />
            轉入美國名校
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-body-lg text-white/70 max-w-md leading-relaxed mb-10"
          >
            透過 2+2 轉學路徑，以更低門檻、更省學費的方式，成功轉入 UC 系統名校。全程一對一顧問陪跑。
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#cta"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-block bg-white text-dfa-dark font-bold px-8 py-4 rounded-md text-body hover:bg-white/90 transition-all duration-200 shadow-lg"
            >
              預約 15 分鐘免費評估
            </a>
            <Link
              to="/programs/community-college"
              className="inline-block text-white font-semibold px-8 py-4 rounded-md text-body border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-200"
            >
              了解轉學方案 →
            </Link>
          </motion.div>
        </div>

        {/* Right: stats + decorative */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:flex flex-col items-center justify-center"
        >
          {/* Stats card */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-10 w-full max-w-sm">
            <p className="text-eyebrow text-white/50 uppercase mb-8">Our Results</p>
            <div className="space-y-8">
              {STATS.map((s) => (
                <div key={s.label}>
                  <div className="text-display text-white leading-none mb-1">{s.num}</div>
                  <div className="text-caption text-white/50">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] opacity-60"
        style={{ background: 'linear-gradient(90deg, transparent, #4DD9EC, transparent)' }}
      />
    </section>
  )
}
