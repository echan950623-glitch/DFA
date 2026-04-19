import HeroSection from '../components/home/HeroSection'
import AboutSection from '../components/home/AboutSection'
import CTABanner from '../components/shared/CTABanner'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CTABanner
        heading="你也能成為下一個轉學成功案例"
        subtitle="不確定自己適合哪條升學路徑？和我們聊聊，讓專業顧問協助你找到方向"
      />
    </>
  )
}
