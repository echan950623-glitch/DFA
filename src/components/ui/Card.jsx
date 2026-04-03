import { Link } from 'react-router-dom'

export default function Card({ title, subtitle, description, path, highlights, icon }) {
  return (
    <Link
      to={path}
      className="group block bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-gray-100"
    >
      {/* Top accent bar */}
      <div className="h-1.5 bg-dfa-blue" />

      <div className="p-6 md:p-8">
        {icon && <div className="text-4xl mb-4">{icon}</div>}

        <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-dfa-blue transition-colors">
          {title}
        </h3>
        {subtitle && (
          <p className="text-sm text-dfa-blue/60 font-medium mb-3">{subtitle}</p>
        )}
        <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>

        {highlights && (
          <div className="flex flex-wrap gap-2">
            {highlights.map((h) => (
              <span
                key={h}
                className="text-xs font-medium px-3 py-1 rounded-md bg-dfa-light text-dfa-blue"
              >
                {h}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  )
}
