function minToFront(arr){
    let minVal = arr[0]
    let minValIndex = 0
    for (let i = 0; i < arr.length; i++){
        if(arr[i+1]<arr[i]){
            minVal = arr[i+1]
            minValIndex = i+1
        }
        
    }
    
    for (let num = minValIndex; num >0; num--){
        arr[num] = arr[num-1]
    }
    arr[0] = minVal
    return arr  
}

console.log(minToFront([9,7,3,2,3,1,4,5]))