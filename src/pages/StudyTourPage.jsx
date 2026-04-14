import ProgramHero from '../components/shared/ProgramHero'
import ScrollReveal from '../components/ui/ScrollReveal'

export default function StudyTourPage() {
  return (
    <>
      <ProgramHero
        title="遊學四海"
        subtitle="探索世界，拓展視野"
      />

      <section className="section-padding bg-white">
        <div className="container-max text-center">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto py-16">
              <div className="text-6xl mb-6">✈️</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">服務即將推出</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                我們正在規劃多元化的海外遊學體驗方案，涵蓋美國、英國、澳洲等熱門目的地的短期遊學、暑期課程與文化體驗行程。更多詳情敬請期待，或立即聯繫我們了解最新動態。
              </p>
              <a href="https://lin.ee/O1ejJf7" target="_blank" rel="noopener noreferrer" className="btn-gradient inline-block">
                預約諮詢了解更多
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
