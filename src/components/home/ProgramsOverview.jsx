import { useState } from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../ui/ScrollReveal'
import ApplicationProcessModal from '../ui/ApplicationProcessModal'
import { programs } from '../../data/programs'

// Per-program accent gradient (brand colours only)
const CARD_STYLES = [
  { gradient: 'from-dfa-dark to-dfa-blue', badge: '最熱門', icon: '🏫' },
  { gradient: 'from-dfa-blue to-dfa-cyan', badge: '精英方案', icon: '🎓' },
  { gradient: 'from-[#005599] to-dfa-cyan', badge: '多元選擇', icon: '🌏' },
]

export default function ProgramsOverview() {
  const [processOpen, setProcessOpen] = useState(false)

  return (
    <>
      <section id="programs" className="section-padding bg-dfa-surface">
        <div className="container-max">

          {/* Header */}
          <ScrollReveal className="mb-12">
            <p className="text-xs font-semibold text-dfa-blue uppercase tracking-[0.18em] mb-3">
              Study Abroad Programs
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-dfa-dark mb-4 leading-snug">
              留學方案
            </h2>
            <p className="text-dfa-muted text-base max-w-xl leading-relaxed">
              針對不同需求與目標，提供三大核心留學方案，全程一對一陪跑。
            </p>
          </ScrollReveal>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programs.map((program, i) => {
              const style = CARD_STYLES[i]
              const isIvy = program.id === 'ivy-league'

              return (
                <ScrollReveal key={program.id} delay={i * 0.12}>
                  <div className="group rounded-2xl border border-dfa-border bg-white overflow-hidden shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col h-full">

                    {/* Image / colour band */}
                    <div className={`relative h-44 bg-gradient-to-br ${style.gradient} flex flex-col items-center justify-center overflow-hidden gap-2`}>
                      {/* Dot pattern overlay */}
                      <div
                        className="absolute inset-0 opacity-[0.08]"
                        style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}
                      />
                      <span className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20">
                        {style.badge}
                      </span>
                      {/* Large readable icon */}
                      <span className="text-5xl relative z-10 drop-shadow-md">{style.icon}</span>
                      <p className="text-white/90 text-sm font-bold relative z-10 tracking-wide">
                        {program.subtitle.split(' ').slice(0, 2).join(' ')}
                      </p>
                    </div>

                    {/* Body */}
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-xl font-bold text-dfa-dark mb-2 leading-snug">
                        {program.title}
                      </h3>
                      <p className="text-base text-dfa-muted leading-relaxed mb-4 flex-1">
                        {program.description}
                      </p>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {program.highlights.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-medium px-2.5 py-1 rounded-md bg-dfa-light text-dfa-blue border border-dfa-border"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* CTA buttons */}
                      <div className={`flex gap-2 ${isIvy ? 'flex-col' : ''}`}>
                        {/* 5-step process button — only on Ivy card */}
                        {isIvy && (
                          <button
                            onClick={() => setProcessOpen(true)}
                            className="w-full text-center bg-dfa-dark text-white font-semibold text-sm py-2.5 rounded-lg hover:bg-dfa-blue transition-colors duration-200"
                          >
                            查看申請流程 →
                          </button>
                        )}
                        <Link
                          to={program.path}
                          className="inline-block w-full text-center bg-dfa-blue text-white font-semibold text-sm py-2.5 rounded-lg hover:bg-dfa-dark transition-colors duration-200"
                        >
                          了解更多 →
                        </Link>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>

        </div>
      </section>

      {/* 5-step Process Modal */}
      <ApplicationProcessModal
        isOpen={processOpen}
        onClose={() => setProcessOpen(false)}
      />
    </>
  )
}
