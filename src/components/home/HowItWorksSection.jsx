import ScrollReveal from '../ui/ScrollReveal'
import { motion } from 'framer-motion'

const STEPS = [
  {
    num: '01',
    title: '免費諮詢評估',
    desc: '15 分鐘深度評估，了解你的學術背景與目標院校，給出可行的升學路徑',
    color: '#2DD8EE',
  },
  {
    num: '02',
    title: '客製化規劃',
    desc: '依你的 GPA、修課紀錄、目標，制定 2 年完整規劃表，選課策略一次到位',
    color: '#1A9AE6',
  },
  {
    num: '03',
    title: '全程陪跑申請',
    desc: '個人陳述撰寫、推薦信策略、申請遞交，每個環節顧問同步追蹤',
    color: '#1040CC',
  },
]

export default function HowItWorksSection() {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-max">

        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-dfa-blue uppercase tracking-[0.2em] mb-3">How It Works</p>
            <h2 className="text-4xl md:text-5xl font-black text-dfa-dark leading-tight">
              三步進入<br className="sm:hidden" />美國名校
            </h2>
          </div>
        </ScrollReveal>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-0 max-w-4xl mx-auto relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden md:block absolute top-10 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-[2px] opacity-20"
            style={{ background: 'linear-gradient(to right, #2DD8EE, #1040CC)' }}
          />

          {STEPS.map((step, i) => (
            <ScrollReveal key={step.num} delay={i * 0.15}>
              <div className="flex flex-col items-center text-center px-6 py-8 relative group">
                {/* Big number circle */}
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  className="w-20 h-20 rounded-full flex items-center justify-center text-white font-black text-2xl mb-6 shadow-lg relative z-10"
                  style={{ background: `radial-gradient(circle at 30% 30%, ${step.color}cc, ${step.color})` }}
                >
                  {step.num}
                  {/* Glow */}
                  <div
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-md"
                    style={{ background: step.color }}
                  />
                </motion.div>

                <h3 className="text-lg font-black text-dfa-dark mb-3">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}
