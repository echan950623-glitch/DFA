export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[85vh] flex items-center bg-gradient-to-br from-cyan-500 via-blue-600 to-blue-900">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/intro.mp4" type="video/mp4" />
      </video>

      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 section-padding pt-28 md:pt-32">
        {/* H1 — left aligned */}
        <h1 className="text-h1 text-white leading-[1.1] mb-4">
          社區大學 2 年<br />
          轉入美國名校
        </h1>

        {/* Subtitle */}
        <p className="text-body-lg text-white leading-relaxed">
          透過 2+2 轉學路徑，以更低門檻、更省學費的方式，<br />
          成功轉入 UC 系統名校。全程一對一顧問陪跑。
        </p>
      </div>
    </section>
  )
}
