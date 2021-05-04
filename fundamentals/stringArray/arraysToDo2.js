// Reverse
// Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working 'in-place' means that you cannot use a second array – move values within the array that you are given. As always, do not use built-in array functions such as splice().

function reverse(arr){
    let lastIndex = arr.length-1
    for (let i = 0; i < arr.length/2; i++){
        let temp = arr[i];
        arr[i]= arr[lastIndex];
        arr[lastIndex] = temp;
        lastIndex = lastIndex - 1
    }
    return arr
}
console.log(reverse([1,2,3,4,5]))

// Rotate
// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr's values to the right by that amount. 'Wrap-around' any values that shift off array's end to the other side, so that no data is lost. Operate in-place: given ([1,2,3],1), 
// change the array to [3,1,2]. Don't use built-in functions.

function rotateArr(arr, shiftBy){
    if (shiftBy > arr.length){
        shiftBy = shiftBy%arr.length
    }
    let newArr = []
    let shift = shiftBy
    for (let i = 0; i< arr.length- shift; i++){
        newArr[shiftBy] = arr[i];
        shiftBy = shiftBy +1;
    }
    let startVal = 0
    for (let num = arr.length-shift; num < arr.length; num++){
        newArr[startVal] = arr[num]
        startVal = startVal + 1
    }
    return newArr
}

console.log(rotateArr([1,2,3,4,5], 2))


// Second: allow negative shiftBy (shift L, not R).
function rotateArr(arr, shiftBy){
    let t = Math.abs(shiftBy);
    if (t > arr.length){
        t = t%arr.length
    }
    let newArr = []
    let shift = 0
    for (let i = t; i< arr.length; i++){
        newArr[shift] = arr[i];
        shift = shift +1;
    }
    let startVal = arr.length-t
    for (let num = 0; num < t; num++){
        newArr[startVal] = arr[num]
        startVal = startVal + 1
    }
    return newArr
}

console.log(rotateArr([1,2,3,4,5], -2))

// Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
function rotateArrAll(arr, shiftby){
    let t = Math.abs(shiftby);
    if (t > arr.length){
        t = t % arr.length
    }
    while (t > 0){
        if (shiftby > 0){
            let temp = arr[arr.length-1];
            for (let i = arr.length-1; i>0; i--){
                arr[i] = arr[i-1]
            }
            arr[0] = temp
        }
        else{
            let temp = arr[0];
            for (let i = 0; i<arr.length-1; i++){
                arr[i] = arr[i+1]
            }
            arr[arr.length-1] = temp

        }
    t--
    }

    return arr
}
console.log(rotateArrAll([1,2,3,4,5], -9))
}
// Fourth: minimize the touches of each element.


// Filter Range
// Alan is good at breaking secret codes. One method is to eliminate values that lie within a specific known range. Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array you are given, with values in original order. No built-in array functions.

function Filter(arr, min, max){
    for (let i = 0; i<arr.length; i++){
        if (arr[i] > min && arr[i] < max){
            for (let num = i; num < arr.length; num++){
                arr[num] = arr[num+1]
            }
            arr.length = arr.length - 1
            i--
        }
    }
}


// Concat
// Replicate JavaScript's concat(). Create a standalone function that accepts two arrays. Return a new array containing the first array's elements, followed by the second array's elements. Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].

function Concat (arr1, arr2){
    let newArr = []
    for (let i = 0; i < arr1.length; i++){
        newArr.push(arr1[i])
    }
    for (let i = 0; i < arr2.length; i++){
        newArr.push(arr2[i])
    }
    return newArr
}

console.log(Concat([1,2], [3,4]))