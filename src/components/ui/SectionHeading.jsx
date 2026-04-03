export default function SectionHeading({ title, subtitle, light = false, center = true }) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${light ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg ${light ? 'text-white/70' : 'text-gray-500'}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-16 bg-dfa-blue ${center ? 'mx-auto' : ''}`} />
    </div>
  )
}
