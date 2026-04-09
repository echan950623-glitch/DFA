import { Link } from 'react-router-dom'
import ScrollReveal from '../ui/ScrollReveal'
import { allStories } from '../../data/successStories'

export default function SuccessPreview() {
  const featured = allStories.slice(0, 3)

  return (
    <section className="section-padding bg-white">
      <div className="container-max">

        {/* ── Header — centered for variety ── */}
        <ScrollReveal className="mb-14 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-dfa-dark mb-4 leading-tight">
            夢想<span style={{ background: 'linear-gradient(135deg,#4DD9EC,#0066CC)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>榜單</span>
          </h2>
          <p className="text-dfa-muted text-base leading-relaxed">
            來自真實學員的轉學故事，見證每一個夢想成真的時刻。
          </p>
        </ScrollReveal>

        {/* ── Story cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((story, i) => (
            <ScrollReveal key={`${story.name}-${story.university}`} delay={i * 0.12}>
              <div className="bg-white rounded-lg border border-dfa-border p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full relative overflow-hidden">

                {/* Large background quote — purely decorative, gradient */}
                <div
                  className="absolute top-2 right-4 text-8xl font-black leading-none select-none pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg,#4DD9EC22,#0066CC22)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontFamily: 'Georgia, serif',
                  }}
                >
                  "
                </div>

                {/* Transfer path */}
                <div className="flex items-center gap-2 flex-wrap mb-4">
                  <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-dfa-surface text-dfa-muted border border-dfa-border">
                    {story.college}
                  </span>
                  <span
                    className="font-bold text-sm"
                    style={{ background: 'linear-gradient(135deg,#4DD9EC,#0066CC)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                  >
                    →
                  </span>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-dfa-light text-dfa-blue border border-dfa-border">
                    {story.university}
                  </span>
                </div>

                {/* Story text */}
                <p className="text-base text-gray-600 leading-relaxed line-clamp-4 flex-1 mb-5 relative z-10">
                  {story.story}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-3 pt-4 border-t border-dfa-border">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                    style={{ background: 'linear-gradient(135deg,#4DD9EC,#0066CC)' }}
                  >
                    {story.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-dfa-dark">{story.name}</p>
                    <p className="text-xs text-dfa-muted">
                      {story.major} · GPA {story.gpa}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* ── View more ── */}
        <ScrollReveal>
          <div className="text-center mt-12">
            <Link
              to="/success/ucb"
              className="inline-block bg-dfa-blue text-white font-semibold px-8 py-3 rounded-lg text-sm hover:bg-dfa-dark transition-colors duration-200"
            >
              查看更多案例
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
