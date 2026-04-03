import ProgramHero from '../../components/shared/ProgramHero'
import ScrollReveal from '../../components/ui/ScrollReveal'
import SectionHeading from '../../components/ui/SectionHeading'

const countries = [
  {
    flag: '🇬🇧',
    name: '英國',
    desc: '提供完整申請服務，助您成功進入牛津、劍橋、帝國理工等英國頂尖學府，涵蓋所有申請流程。',
    schools: ['牛津大學', '劍橋大學', '帝國理工學院', 'UCL'],
  },
  {
    flag: '🇦🇺',
    name: '澳洲',
    desc: '精準輔導澳洲八大名校申請，提供完整的學術規劃與申請指導。',
    schools: ['墨爾本大學', '雪梨大學', '澳洲國立大學', '昆士蘭大學'],
  },
  {
    flag: '🇳🇿',
    name: '紐西蘭',
    desc: '提供入學規劃與全程指導，協助您順利進入紐西蘭優質大學。',
    schools: ['奧克蘭大學', '奧塔哥大學', '維多利亞大學'],
  },
]

const steps = [
  { step: '01', title: '免費諮詢', desc: '了解英澳紐入學要求，為您解答' },
  { step: '02', title: '制定策略', desc: '選校與申請規劃，量身定制方案' },
  { step: '03', title: '文件準備', desc: '個人陳述與推薦信，確保您的成功' },
  { step: '04', title: '送件審查', desc: '完整申請送出，檢查所有細節' },
  { step: '05', title: '簽證準備', desc: '行前輔導與銜接，確保順利入境' },
]

export default function UkAusNzPage() {
  return (
    <>
      <ProgramHero
        title="英、澳、新築夢計畫"
        subtitle="前進英國、澳洲、紐西蘭頂尖學府"
      />

      {/* 三國服務 */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <ScrollReveal>
            <SectionHeading title="服務計畫" />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {countries.map((c, i) => (
              <ScrollReveal key={c.name} delay={i * 0.1}>
                <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
                  <div className="text-5xl mb-4">{c.flag}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{c.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{c.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {c.schools.map((s) => (
                      <span key={s} className="text-xs font-medium px-3 py-1 rounded-md bg-dfa-light text-dfa-blue">{s}</span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 申請流程 */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <ScrollReveal>
            <SectionHeading title="申請流程" />
          </ScrollReveal>
          <div className="flex flex-col md:flex-row gap-4 max-w-5xl mx-auto">
            {steps.map((s, i) => (
              <ScrollReveal key={s.step} delay={i * 0.1} className="flex-1">
                <div className="text-center bg-white rounded-lg p-6 shadow-lg border border-gray-100">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-dfa-blue flex items-center justify-center text-white font-bold text-sm">
                    {s.step}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1 text-sm">{s.title}</h4>
                  <p className="text-xs text-gray-600">{s.desc}</p>
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
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">踏上國際築夢之旅</h2>
            <a href="#contact" className="inline-block bg-white text-dfa-blue font-bold rounded-md px-10 py-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              立即預約免費諮詢
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
