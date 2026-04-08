import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: 'linear-gradient(to right, #2DD8EE 0%, #1A9AE6 40%, #1040CC 100%)' }}
    >

      {/* ── Decorative dot grid ── */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />


      {/* ── Bottom cyan accent line ── */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] opacity-60"
        style={{ background: 'linear-gradient(90deg, transparent, #4DD9EC, transparent)' }}
      />

      {/* ── Main content ── */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto w-full pt-24 pb-16">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/40 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold mb-8 tracking-wide"
        >
          🎓 專注 UC 系統轉學 · 深耕美國升學規劃 · 台北 台中 高雄 加州
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-5 drop-shadow-lg"
        >
          社區大學 2 年<br />
          <span className="text-white drop-shadow-lg">轉入美國名校</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/90 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10 tracking-widest drop-shadow"
        >
          入學門檻低 · 費用大幅節省 · 錄取彈性遠高於直申
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#cta"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-block bg-white text-dfa-dark font-bold px-10 py-4 rounded-lg text-base hover:bg-white/90 transition-all duration-200 shadow-lg"
          >
            預約 15 分鐘免費評估
          </a>
          <Link
            to="/programs/community-college"
            className="inline-block bg-transparent text-white font-semibold px-10 py-4 rounded-lg text-base border border-white/20 hover:border-dfa-cyan/50 hover:bg-white/5 transition-all duration-200"
          >
            了解轉學方案 →
          </Link>
        </motion.div>
      </div>

      {/* ── Scroll hint ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="relative z-10 flex justify-center pb-8"
      >
        <div className="flex flex-col items-center gap-1 text-white/30">
          <span className="text-xs tracking-widest">SCROLL</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </motion.div>

    </section>
  )
}
