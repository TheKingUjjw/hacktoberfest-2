import { useState, useEffect } from 'react'

export const breakpoints = {
  up: {
    mobile: '(min-width: 0px)',
    tablet: '(min-width: 768px)',
    desktop: '(min-width: 1024x)',
  },
  down: {
    mobile: '(max-width: 0px)',
    tablet: '(max-width: 768px)',
    desktop: '(max-width: 1024x)',
  },
}

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState<boolean>(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => setMatches(media.matches)
    window.addEventListener('resize', listener)
    return () => window.removeEventListener('resize', listener)
  }, [matches, query])

  return matches
}
