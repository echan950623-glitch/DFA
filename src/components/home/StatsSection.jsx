import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from '../ui/ScrollReveal'
import { stats } from '../../data/stats'

function AnimatedNumber({ number, suffix, started }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!started) return
    let startTime = null
    const duration = 1600
    const step = (ts) => {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.floor(number * eased))
      if (progress < 1) requestAnimationFrame(step)
      else setValue(number)
    }
    requestAnimationFrame(step)
  }, [number, started])

  return (
    <span>
      {value}
      {suffix}
    </span>
  )
}

export default function StatsSection() {
  const ref = useRef(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-20 md:py-28 bg-dfa-dark">
      <div className="container-max px-4">

        {/* Header */}
        <ScrollReveal className="text-center mb-14">
          <p className="text-xs font-semibold text-dfa-cyan uppercase tracking-[0.18em] mb-3">
            Our Results
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-snug">
            我們的學生成果
          </h2>
          <p className="text-white/75 text-base max-w-xl mx-auto leading-relaxed">
            超過十年，協助 500 位以上的學生成功轉入美國頂尖大學。
          </p>
        </ScrollReveal>

        {/* Stat cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 text-center hover:-translate-y-1 hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-extrabold text-dfa-cyan font-['Inter'] leading-none mb-2">
                  <AnimatedNumber
                    number={stat.number}
                    suffix={stat.suffix}
                    started={started}
                  />
                </div>
                <p className="text-white/75 text-sm font-medium mt-2">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}
