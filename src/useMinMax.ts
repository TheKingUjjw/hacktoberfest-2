const useMinMax = ( ) => {
    const findMin = (numbers: number[])=>{
        let minNumber = numbers[0];
        for(let i =0 ; i<numbers.length;i++ ){
            if(numbers[i] < minNumber){
                minNumber = numbers[i]
            }
        }
        return minNumber;
    }
    const findMax= (numbers: number[])=>{
        let maxNumber = numbers[0];
        for(let i =0 ; i<numbers.length;i++ ){
            if(numbers[i] > maxNumber){
                maxNumber = numbers[i]
            }
        }
        return maxNumber;
    }
    return { findMin , findMax }
}

export default useMinMax
