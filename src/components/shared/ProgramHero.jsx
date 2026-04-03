import { motion } from 'framer-motion'

export default function ProgramHero({ title, subtitle }) {
  return (
    <section className="relative min-h-[40vh] flex items-center justify-center bg-dfa-gradient overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white/5" />
      <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-white/5" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center px-4 relative z-10"
      >
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">{title}</h1>
        {subtitle && (
          <p className="text-lg text-white/80 max-w-2xl mx-auto">{subtitle}</p>
        )}
      </motion.div>
    </section>
  )
}
