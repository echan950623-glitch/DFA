export default function SectionHeading({ title, subtitle, light = false, center = false }) {
  return (
    <div className={`mb-10 ${center ? 'text-center' : ''}`}>
      <h2 className={`text-3xl md:text-4xl font-black leading-tight mb-3 ${light ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base ${light ? 'text-white/60' : 'text-gray-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
