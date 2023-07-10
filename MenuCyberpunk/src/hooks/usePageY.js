import { useState, useEffect } from 'react'

const scrollOffset = 10

export function usePageY() {
  const [isPageTop, setIsPageTop] = useState(true)

  function checkPageY() {
    if(window.scrollY < scrollOffset) {
      setIsPageTop(true)
    } else {
      setIsPageTop(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', checkPageY)

    return () => window.removeEventListener('scroll', checkPageY)
  }, [])

  return isPageTop
}