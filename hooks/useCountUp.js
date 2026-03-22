import { useEffect, useState } from "react"

export default function useCountUp(end, startAnimation, duration = 2000) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!startAnimation) return

    let start = 0
    const increment = end / (duration / 16)

    const timer = setInterval(() => {
      start += increment

      if (start >= end) {
        setValue(end)
        clearInterval(timer)
      } else {
        setValue(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [end, startAnimation, duration])

  return value
}