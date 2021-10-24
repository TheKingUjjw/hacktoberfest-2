export const useMajority = () => {
  /**
   * find always known element (majority) in array by using Boyer-Moore algorithm
   **/ 
   const majority = (members: number[]): [candidate: number, frequency: number, isMajority: boolean] => {
    let candidate = members[0]
    let c = 1
    
    for (let elem of members) {
      if( c === 0 ) {
        candidate = elem
      } else {
        if(candidate === elem) {
          c++
        } else {
          c--
        }
      }
    }

    let freq = 0
    for (let elem of members) {
      if(elem === candidate) {
        freq += 1
      }
    }

     const isMajority = freq >= members.length/2

     return [candidate, freq, isMajority]
  }

  return { majority }
}