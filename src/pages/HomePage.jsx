import HeroSection from '../components/home/HeroSection'
import LogoWall from '../components/home/LogoWall'
import StatsSection from '../components/home/StatsSection'
import HowItWorksSection from '../components/home/HowItWorksSection'
import ProgramsOverview from '../components/home/ProgramsOverview'
import SuccessPreview from '../components/home/SuccessPreview'
import TestimonialsSection from '../components/home/TestimonialsSection'
import AboutSection from '../components/home/AboutSection'
import CTASection from '../components/home/CTASection'

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — 青→深藍漸層，全螢幕 */}
      <HeroSection />

      {/* 2. 跑馬燈 — 白底，建立即時信任感 */}
      <LogoWall />

      {/* 3. 數字成果 — 深色底，視覺節奏切換 */}
      <StatsSection />

      {/* 4. 三步流程 — 白底，簡單說清楚怎麼運作 */}
      <HowItWorksSection />

      {/* 5. 三大方案 — 淺灰底，核心服務展示 */}
      <ProgramsOverview />

      {/* 6. 成功案例 — 白底，社會證明 */}
      <SuccessPreview />

      {/* 7. 學員心聲 — 深色底，情感共鳴 */}
      <TestimonialsSection />

      {/* 8. 關於我們 + 願景 — 白→深，品牌故事 */}
      <AboutSection />

      {/* 9. CTA 表單 — 漸層底，結尾召喚行動 */}
      <CTASection />
    </>
  )
}
