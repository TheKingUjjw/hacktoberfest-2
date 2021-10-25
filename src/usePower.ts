import { Dispatch, SetStateAction, useState } from 'react'

interface ReturnType {
  count: number
  setCount: Dispatch<SetStateAction<number>>
  powerUp: (data: number) => void
}

function usePower(initialValue?: number): ReturnType {
  const [count, setCount] = useState(initialValue || 0)

  const powerUp = (data: number) => setCount(count ^ data)

  return {
    count,
    setCount,
    powerUp,
  }
}

export default usePower