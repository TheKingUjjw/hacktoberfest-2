import { useState, useEffect } from 'react'

type Navigator = {
  appCodeName: string
  appName: string
  appVersion: string
  cookieEnabled: boolean
  language: string
  onLine: boolean
  platform: string
  userAgent: string
}

const useUserAgent = () => {
  const [navigator, setNavigator] = useState<Navigator>({
    appCodeName: '',
    appName: '',
    appVersion: '',
    cookieEnabled: false,
    language: '',
    onLine: false,
    platform: '',
    userAgent: '',
  })

  useEffect(() => {
    setNavigator(navigator)
  }, [])

  return navigator
}

export default useUserAgent
