import { useEffect, useState } from 'react'

type ReturnType = {
  screenSize: number
  isMobile: boolean
}

export const useScreenSize = (): ReturnType => {
  const [screenSize, setScreenSize] = useState(window.innerWidth)
  const isMobile = screenSize < 650

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return { screenSize, isMobile }
}
