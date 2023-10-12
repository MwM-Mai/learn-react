import { useEffect, useState } from "react"

export default function useLocalStorage(key) {
  const [name, setName] = useState(() => {
    const name = JSON.parse(localStorage.getItem(key))
    return name
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(name))
  }, [name])

  return [name, setName]
}