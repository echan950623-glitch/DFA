import ProgramHero from '../components/shared/ProgramHero'
import ScrollReveal from '../components/ui/ScrollReveal'
import SectionHeading from '../components/ui/SectionHeading'
import { teamMembers } from '../data/team'

export default function TeamPage() {
  return (
    <>
      <ProgramHero
        title="築夢導師"
        subtitle="Our Team — 來自世界頂尖學府與企業的專業團隊"
      />

      <section className="section-padding bg-white">
        <div className="container-max">
          <ScrollReveal>
            <SectionHeading label="Our Team" title="築夢導師" subtitle="來自世界頂尖學府，陪你走每一步" split />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.05}>
                <div className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
                  <div className="h-2 bg-dfa-blue" />
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-dfa-blue flex items-center justify-center text-white text-xl font-bold shrink-0">
                        {member.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-txt-primary">{member.name}</h3>
                        <p className="text-sm font-semibold text-dfa-blue">{member.school}</p>
                        <p className="text-sm text-txt-muted">{member.degree}</p>
                      </div>
                    </div>
                    <p className="text-body text-txt-secondary leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dfa-gradient section-padding">
        <div className="container-max text-center">
          <ScrollReveal>
            <h2 className="text-h2 text-white mb-6">與我們的專業導師對話</h2>
            <a href="#contact" className="inline-block bg-white text-dfa-blue font-bold rounded-md px-10 py-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              立即預約免費諮詢
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
