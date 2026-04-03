import ProgramHero from '../components/shared/ProgramHero'
import ScrollReveal from '../components/ui/ScrollReveal'

export default function ImmigrationPage() {
  return (
    <>
      <ProgramHero
        title="移夢他國 / 技術移民"
        subtitle="從留學到移民，一站式規劃"
      />

      <section className="section-padding bg-white">
        <div className="container-max text-center">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto py-16">
              <div className="text-6xl mb-6">🌍</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">服務即將推出</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                我們正在規劃完整的技術移民與海外定居服務方案，協助學員在完成學業後，順利在海外發展職涯並取得居留身份。更多詳情敬請期待，或立即聯繫我們了解最新動態。
              </p>
              <a href="#contact" className="btn-gradient inline-block">
                預約諮詢了解更多
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
