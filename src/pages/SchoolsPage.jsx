import ProgramHero from '../components/shared/ProgramHero'
import ScrollReveal from '../components/ui/ScrollReveal'
import SectionHeading from '../components/ui/SectionHeading'
import { partnerSchools, sampleCourses } from '../data/schools'

export default function SchoolsPage() {
  return (
    <>
      <ProgramHero
        title="夢校與課程"
        subtitle="合作社大院校與課程規劃示例"
      />

      {/* 合作院校 */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <ScrollReveal>
            <SectionHeading title="合作社大院校" subtitle="Partner Community Colleges" />
          </ScrollReveal>
          <div className="space-y-8 max-w-4xl mx-auto">
            {partnerSchools.map((school, i) => (
              <ScrollReveal key={school.nameEn} delay={i * 0.1}>
                <div className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden">
                  <div className="h-2 bg-dfa-blue" />
                  <div className="p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 rounded-lg bg-dfa-blue flex items-center justify-center text-white font-bold text-lg shrink-0">
                        {school.nameEn.match(/\(([^)]+)\)/)?.[1] || school.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{school.name}</h3>
                        <p className="text-sm text-dfa-blue">{school.nameEn}</p>
                        <p className="text-sm text-gray-600">成立於 {school.founded} 年</p>
                      </div>
                    </div>
                    <span className="inline-block text-xs font-medium px-3 py-1 rounded-md bg-dfa-light text-dfa-blue mb-3">
                      {school.highlight}
                    </span>
                    <p className="text-gray-700 text-base leading-relaxed">{school.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 課表示例 */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <ScrollReveal>
            <SectionHeading title="社大課表示例" subtitle="Sample Course Schedule" />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {sampleCourses.map((sem, i) => (
              <ScrollReveal key={sem.semester} delay={i * 0.1}>
                <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6">
                  <h3 className="font-bold text-dfa-blue mb-4">{sem.semester}</h3>
                  <ol className="space-y-2">
                    {sem.courses.map((course, j) => (
                      <li key={j} className="flex items-start gap-3 text-base text-gray-700">
                        <span className="w-6 h-6 rounded-full bg-dfa-light text-dfa-blue text-xs flex items-center justify-center font-bold shrink-0">
                          {j + 1}
                        </span>
                        {course}
                      </li>
                    ))}
                  </ol>
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
            <h2 className="text-3xl font-black text-white mb-6">了解更多合作院校</h2>
            <a href="#contact" className="inline-block bg-white text-dfa-blue font-bold rounded-md px-10 py-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              立即預約免費諮詢
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
