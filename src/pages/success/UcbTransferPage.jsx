import ProgramHero from '../../components/shared/ProgramHero'
import ScrollReveal from '../../components/ui/ScrollReveal'
import SectionHeading from '../../components/ui/SectionHeading'
import { successStories } from '../../data/successStories'

export default function UcbTransferPage() {
  return (
    <>
      <ProgramHero
        title="社大轉 UCB 錄取榜單"
        subtitle="加州大學伯克利分校 — University of California, Berkeley"
      />

      <section className="section-padding bg-white">
        <div className="container-max">
          <ScrollReveal>
            <SectionHeading title="錄取學員案例" />
          </ScrollReveal>
          <div className="space-y-8 max-w-4xl mx-auto">
            {successStories.ucb.map((story, i) => (
              <ScrollReveal key={`${story.name}-${i}`} delay={i * 0.1}>
                <div className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden">
                  <div className="h-2 bg-dfa-blue" />
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Student info */}
                      <div className="md:w-1/3">
                        <div className="w-20 h-20 rounded-full bg-dfa-blue flex items-center justify-center text-white text-2xl font-bold mb-4">
                          {story.name.charAt(0)}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{story.name}</h3>
                        <div className="space-y-1.5 text-sm">
                          <p className="text-gray-600">社大院校：<span className="text-gray-800">{story.college}</span></p>
                          <p className="text-gray-600">錄取院校：<span className="text-dfa-blue font-medium">{story.university}</span></p>
                          <p className="text-gray-600">錄取專業：<span className="text-gray-800">{story.major}</span></p>
                          <p className="text-gray-600">GPA：<span className="text-dfa-blue font-bold text-lg">{story.gpa}</span></p>
                        </div>
                      </div>
                      {/* Story */}
                      <div className="md:w-2/3">
                        <p className="text-gray-700 text-base leading-relaxed">{story.story}</p>
                      </div>
                    </div>
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
            <h2 className="text-3xl font-black text-white mb-6">你也能成為下一個 UCB 學生</h2>
            <a href="https://lin.ee/O1ejJf7" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-dfa-blue font-bold rounded-md px-10 py-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              立即預約免費諮詢
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
