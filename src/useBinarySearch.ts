export const useBinarySearch = (arr: number[] | string[]) => {

  const find = (x: number | string): number => {
    if(arr.length >= 1) {
      let numbers = arr.sort((a,b) => +a - +b)
      let low = 0
      let high = numbers.length - 1
      let mid = Math.floor((low + high) / 2)

      while (low <= high) {
        if(numbers[mid] < x) {
          low = mid + 1
        } else if(numbers[mid] === x) {
          return mid
        } else {
          high = mid - 1
        }

        mid = Math.floor((low + high) / 2)
      }
    }

    return -1
  }

  return { find }
}