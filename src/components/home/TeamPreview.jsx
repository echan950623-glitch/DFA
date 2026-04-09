import { Link } from 'react-router-dom'
import ScrollReveal from '../ui/ScrollReveal'
import { teamMembers } from '../../data/team'

// Per-card left accent color (cycling through brand colors)
const ACCENTS = ['#4DD9EC', '#0066CC', '#003366', '#2BC3DB']

export default function TeamPreview() {
  const featured = teamMembers.slice(0, 4)

  return (
    <section className="section-padding bg-dfa-surface">
      <div className="container-max">

        {/* ── Header ── */}
        <ScrollReveal className="mb-12">
          <p className="text-xs font-semibold text-dfa-blue uppercase tracking-[0.18em] mb-3">
            Our Team
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-dfa-dark mb-4 leading-snug">
            築夢導師
          </h2>
          <p className="text-dfa-muted text-base max-w-xl leading-relaxed">
            顧問團隊全數畢業於美國頂尖大學，擁有 Google、Apple、Microsoft、McKinsey 一線企業實戰背景。
          </p>
        </ScrollReveal>

        {/* ── Cards — horizontal layout ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((member, i) => {
            const accent = ACCENTS[i % ACCENTS.length]
            return (
              <ScrollReveal key={member.name} delay={i * 0.1}>
                <div
                  className="bg-white rounded-lg border border-dfa-border overflow-hidden
                             hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                  style={{ borderLeftColor: accent, borderLeftWidth: '4px' }}
                >
                  {/* Top: avatar + name */}
                  <div className="flex items-center gap-4 px-5 pt-5 pb-4 border-b border-dfa-border">
                    {/* Avatar circle — gradient per member */}
                    <div
                      className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center text-white text-lg font-black shadow-md"
                      style={{ background: `linear-gradient(135deg, ${accent}, #003366)` }}
                    >
                      {member.name.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-bold text-dfa-dark text-base leading-snug truncate">
                        {member.name}
                      </h3>
                      <span
                        className="inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full mt-0.5"
                        style={{ background: `${accent}18`, color: accent }}
                      >
                        {member.school}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="px-5 py-4 flex flex-col flex-1">
                    <p className="text-xs font-semibold text-dfa-muted mb-2 uppercase tracking-wide">
                      {member.degree}
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-4 flex-1">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* ── View all ── */}
        <ScrollReveal>
          <div className="text-center mt-12">
            <Link
              to="/team"
              className="inline-block bg-dfa-blue text-white font-semibold px-8 py-3 rounded-lg text-sm hover:bg-dfa-dark transition-colors duration-200"
            >
              查看全部導師
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
