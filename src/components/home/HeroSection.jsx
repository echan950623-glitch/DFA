import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'


export default function HeroSection() {

  return (
    <section className="relative min-h-screen flex flex-col bg-dfa-gradient overflow-hidden">
      {/* Dot-pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto w-full pt-20 pb-10">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/25 bg-white/15 backdrop-blur-sm text-white text-sm font-semibold mb-6"
        >
          🎓 專注 UC 系統轉學 · 深耕美國升學規劃 · 台北 台中 高雄 加州
        </motion.div>

        {/* H1 — the clearest possible value prop */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-5"
        >
          社區大學 2 年<br />
          <span className="text-dfa-cyan">轉入美國名校</span>
        </motion.h1>

        {/* Subtitle — why transfer is smarter than direct apply */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/80 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10 tracking-wide"
        >
          入學門檻低 · 費用大幅節省 · 錄取彈性遠高於直申
        </motion.p>

        {/* CTAs — solid, no gradient */}
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
            className="inline-block bg-white text-dfa-dark font-bold px-10 py-4 rounded-lg text-base hover:bg-dfa-light transition-colors duration-200 shadow-lg"
          >
            預約 15 分鐘免費評估
          </a>
          <Link
            to="/programs/community-college"
            className="inline-block bg-transparent text-white font-semibold px-10 py-4 rounded-lg text-base border border-white/40 hover:bg-white/10 transition-colors duration-200"
          >
            了解轉學方案 →
          </Link>
        </motion.div>
      </div>

    </section>
  )
}
