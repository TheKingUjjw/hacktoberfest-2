import { useEffect, useState } from 'react'

function useDebounce<T>(value: T, delay?: number): T {
  const [value, setValue] = useState<T>(value)

  useEffect(() => {
    const time = setTimeout(() => setDebouncedValue(value), delay || 500)

    return () => {
      clearTimeout(time)
    }
  }, [value, delay])

  return value
}

export default useDebounce