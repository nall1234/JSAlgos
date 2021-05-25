// Remove Negatives
// Implement removeNegatives() that accepts an array, removes negative values, and returns the same array (not a copy), preserving non-negatives’ order. As always, do not use built-in array functions.


function RemoveNegitives(arr) {
    for (var i = arr.length -1; i>=0; i--){
        if (arr[i]<0){
            var j = i
            while (j < arr.length){
                arr[j]= arr[j+1]
                j++
            }
            arr.pop()
            arr.length-1
        }
    }
    return arr    
}

console.log(RemoveNegitives([1,2,3,4,-3,-5,6,7]))

// trying to get it so it will not have to have a while within a loop

function RemovingNegitivesPart2(arr) {
    for (var i = -1; i<arr.length; i++){
        var count = 0;
        var j = i+1;
        if (arr[j]<0){
            while (arr[j]<0){
                j++
                count++
            }
            arr[i]= arr[j]
        }
        j++
    }
    
}

console.log(RemovingNegitivesPart2([1,2,3,4,-3,-5,6,7]))

// Second-to-Last
// Return the second-to-last element of an array. Given [42,true,4,"Kate",7], return "Kate". If array is too short, return null.


function SecondToLast(arr) {
    if (arr.length <2){
        return null
    }
    else{
        return arr[arr.length-2]
    }
    
}

console.log(SecondToLast([42,true,4,"Kate",7]))


// Second-Largest
// Return the second-largest element of an array. Given [42,1,4,Math.PI,7], return 7. If the array is too short, return null.

function SecondLargest(arr) {
    let max = null;
    let second = null;
    if (arr.length < 2){
        return second
    }
    if(arr[0]>arr[1]){
        max = arr[0];
        second = arr[1]
    }
    if(arr[0]<arr[1]){
        max = arr[1];
        second = arr[0]
    }
    for (let i = 2; i<arr.length; i++){
        if (arr[i]>max){
            second = max;
            max = arr[i];
        }
        if(arr[i]>second){
            second = arr[i];
        }
    }
    return second
}

console.log(SecondLargest([42,46, Math.PI, 4,7]))






// Nth-to-Last
// Return the element that is N-from-array’s-end. Given ([5,2,3,6,4,9,7],3), return 4. If the array is too short, return null.


function NThToLast(arr, n) {
    return arr[arr.length-n]
    
}
console.log(NThToLast( [5,2,3,6,4,9,7],3))

// Nth-Largest
// Liam has "N" number of Green Belt stickers for excellent Python projects. Given arr and N, return the Nth-largest element, where (N-1) elements are larger. Return null if needed.

// sort the array N times to find the Nth biggest


function NthLargest(arr, n) {
    let NewArr = [];
    for (let i = 0; i < n; i++){
        let j = 0
        let max = 0
        while(arr[j]< arr.length){
            if(arr[j]>arr[j+1]){
                max = arr[j];
            }
            j++
        }
        NewArr.push(max)
    }
    return NewArr[n-1]
    
}
console.log(NthLargest([5,2,3,6,4,9,7],3))

// Skyline Heights
// Lovely Burbank has a breathtaking view of the Los Angeles skyline. Let’s say you are given an array with heights of consecutive buildings, starting closest to you and extending away. Array [-1,7,3] would represent three buildings: first is actually out of view below street level, behind it is second at 7 stories high, third is 3 stories high (hidden behind the 7-story). You are situated at street level. Return array containing heights of buildings you can see, in order. Given [-1,1,1,7,3] return [1,7]. Given [0,4] return [4]. As always with challenges, do not use built-in array functions such as unshift().

function Skyline(arr) {
    let newarr = [];
    for (let i = 0; i<arr.length; i++){
        if(arr[i]<=0){
        }
        else{
            if (newarr[0]==null){
                newarr.push(arr[i])
            }
            else if (arr[i]> newarr[newarr.length-1]){
                newarr.push(arr[i])
            }
        }
    }
    return newarr
    
}


console.log(Skyline([-1,1,1,7,3]))