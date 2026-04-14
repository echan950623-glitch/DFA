import { motion } from 'framer-motion'

export default function ProgramHero({ title, subtitle }) {
  return (
    <section className="relative min-h-[40vh] flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(to right, #2DD8EE 0%, #1A9AE6 40%, #1040CC 100%)' }}
    >
      {/* Decorative circles */}
      <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white/5" />
      <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-white/5" />

      <div className="container-max w-full relative z-10 section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-h1 text-white mb-4 max-w-3xl">{title}</h1>
          {subtitle && (
            <p className="text-h3 text-white/90 whitespace-nowrap">{subtitle}</p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
