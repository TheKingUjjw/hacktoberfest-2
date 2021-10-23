export const useShuffle = () => {
  const shuffle = (arr: any[]) => {
    let n = arr.length
    for (let i = n; i > 1; i--) {
      let r = Math.floor((Math.random() * (i-1)))
      let swap = arr[r]
      arr[r] = arr[i-1]
      arr[i-1] = swap
    }
    return arr
  }

  return { shuffle }
}