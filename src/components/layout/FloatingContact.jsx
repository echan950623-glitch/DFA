import { FaLine, FaWhatsapp, FaEnvelope } from 'react-icons/fa'

const contactButtons = [
  { icon: FaLine, label: 'Line', href: '#', color: 'bg-green-500 hover:bg-green-600' },
  { icon: FaWhatsapp, label: 'WhatsApp', href: '#', color: 'bg-emerald-500 hover:bg-emerald-600' },
  { icon: FaEnvelope, label: 'Email', href: 'mailto:info@dreamfuture.academy', color: 'bg-blue-500 hover:bg-blue-600' },
]

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {contactButtons.map((btn) => (
        <a
          key={btn.label}
          href={btn.href}
          target={btn.href.startsWith('mailto') ? undefined : '_blank'}
          rel="noopener noreferrer"
          className={`w-12 h-12 rounded-full text-white shadow-lg flex items-center justify-center ${btn.color} transition-all hover:scale-110 hover:shadow-xl`}
          title={btn.label}
        >
          <btn.icon size={20} />
        </a>
      ))}
    </div>
  )
}
