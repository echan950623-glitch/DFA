import { useRef, useEffect, useState } from 'react'
import { useInView } from 'framer-motion'

export default function StatCard({ number, suffix = '', label }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const end = number
    const duration = 1500
    const step = Math.ceil(end / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, number])

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-5xl font-black text-dfa-blue mb-2">
        {count}{suffix}
      </div>
      <div className="text-gray-500 text-sm">{label}</div>
    </div>
  )
}
