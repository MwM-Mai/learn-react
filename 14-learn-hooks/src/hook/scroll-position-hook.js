import { useEffect, useState } from "react"

export default function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      // console.log(window.scrollY);
      setScrollPosition(window.scrollY)
    }

    document.addEventListener("scroll", handleScroll)

    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return scrollPosition
}