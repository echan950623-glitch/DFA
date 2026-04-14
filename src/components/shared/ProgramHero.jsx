import { motion } from 'framer-motion'

export default function ProgramHero({ title, subtitle, transparent = false }) {
  return (
    <section
      className="relative min-h-[40vh] md:min-h-[60vh] flex items-start overflow-hidden"
      style={transparent ? {} : { background: 'linear-gradient(to right, #2DD8EE 0%, #1A9AE6 40%, #1040CC 100%)' }}
    >
      {/* Decorative circles */}
      <div className="absolute top-10 right-20 w-72 h-72 rounded-full bg-white/5" />
      <div className="absolute top-32 right-48 w-40 h-40 rounded-full bg-white/5" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-white/[0.03] -translate-x-1/3 translate-y-1/3" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="container-max w-full relative z-10 px-6 md:px-8 xl:px-[75px] pt-28 md:pt-32 pb-10 md:pb-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-[2.5rem] md:text-h1 xl:text-display text-white leading-[1.1] mb-4 md:whitespace-nowrap">{title}</h1>
          {subtitle && (
            <p className="text-body md:text-h3 text-white md:whitespace-nowrap">{subtitle}</p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
