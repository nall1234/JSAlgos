// Push Front
// Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.

/*var myArr = [2,3,4,5]
myArr[myArr.length] = 1
var temp = []

for (var i = myArr.length-1; i>= 1; i-=1) 
{
    temp[0] = myArr[i];
    myArr[i] = myArr[i-1];
    myArr[i-1] = temp[0]
    console.log(myArr); 
}

console.log(myArr)

function pushFront(arr, value) {
    // move all values in array over
    for(let i = arr.length; i > 0; i--)
        arr[i] = arr[i-1]
	
    arr[0] = value;
}


// Pop Front
// Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().


function popFront(arr){
const val = arr[0]
for (let i = 0; i<arr.length; i++){
    arr[i] = arr[i+1]
}
    arr.length = arr.length-1
    return [val, arr]
}


console.log (popFront([1,2,3,4,5]))

// Insert At
// Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).

function inserAt(arr, index, val){
    for(let i = arr.length; i>index; i--){
        arr[i] = arr[i-1]
    }
    arr[index] = val
    return arr
}


// Remove At
// Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).

function removeAt(arr, index){
    const removedValue = arr[index];
    for (let i = index; i<arr.length-1; i++){
        arr[i] = arr[i+1]
    }
    arr.length = arr.length-1
    return removedValue
}


// Swap Pairs
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, do this without using any built-in array methods.

function swapPairs(arr){
    for (let i = 0; i < arr.length-1; i+=2){
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
    }
    return arr
}

console.log(swapPairs([1,2,3,4,5]))

*/
// Remove Duplicates
// Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods.

function removeDups1(arr){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == arr[i+1]){
            for (let num = i+1; num < arr.length-1; num++){
                arr[num] = arr[num+1]
            }
            arr.length = arr.length-1
        }
    }
    return arr
}

console.log(removeDups1([1,2,3,3,4,4,5,5]))


// Second: Solve this without using any nested loops.

function removeDups2(arr) {
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1])
            newarr.push(arr[i])
    }
    return newarr
}