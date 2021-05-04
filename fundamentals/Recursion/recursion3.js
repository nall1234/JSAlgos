// Recursive Binary Search
// Given a sorted array and a value, recursively determine whether value is found within array. 

// rBinarySearch([1,3,5,6],4) = false; 

// rBinarySearch([4,5,6,8,12],5) = true.

// function rBinary(arr, num){
//     n = arr.length;
//     if (arr[0] != num){
//         return false;
//     }    
//     if (arr[n] == num){
//         return true
//     }    
//     return rBinary(arr.pop(), num)
// }

// console.log(rBinary([4,5,6,8,12],5))


// Greatest Common Factor
// Given two integers, create rGCF(num1,num2) to recursively determine Greatest Common Factor (the largest integer dividing evenly into both). Greek mathematician Euclid demonstrated these facts:

// gcf(a,b) == a, if a == b;
// gcf(a,b) == gcf(a-b,b), if a>b;
// gcf(a,b) == gcf(a,b-a), if b>a.
// Second: rework facts #2 and #3 to reduce stack consumption and expand rGCF’s reach. You should  be able to compute rGCF(123456,987654).

// function gcf (a,b){
//     if (a == b){
//         return a;
//     }
//     if (a > b){
//         a = a -b;
//         return gcf(a, b)
//     }
//     if (a < b){
//         b = b -a;
//         return gcf (a, b)

//     }
// }

// console.log(gcf(123456,987654))

function GCF(a, b) {
    if (a == b) {
        return a;
    }
    if (a > b) {
        if ((a/b) % 1 === 0) {
            return b;
        } else {
            return GCF(a-b, b);
        }
    }
    if (a < b) {
        if ((a/b) % 1 === 0) {
            return b;
        } else {
            return GCF(a, b-a);
        }
    }
}
console.log(GCF(123456, 987654));