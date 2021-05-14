
//iteraivly

// function countdown(num){
//     for (var i = num; i>=1; i--){
//         console.log(i)
//     }
// }

// coundown(5)


//recursively

// function countdown(num){
//     if (num == 0){
//         return "countdown is done"
//     }
//     console.log(num);
//     return countdown(num-1);
// }

// console.log(countdown(5))


// Recursive Sigma
// Write a recursive function that given a number returns the sum of integers from 1 to that number. Example: rSigma(5) = 15 (1+2+3+4+5); rSigma(2.5) = 3 (1+2); rSigma(-1) = 0.


// function rSigma(num){
//     num = Math.trunc(num);
//     if (num <= 0){
//         return 0;
//     }
//     return num + rSigma(num-1);
// }

// console.log(rSigma(5))


// Recursive Factorial
// Given num, return the product of ints from 1 up to num. If less than zero, treat as zero. If not an integer, truncate. Experts tell us 0! is 1. rFact(3) = 6 (1*2*3). Also, rFact(6.5) = 720 (1*2*3*4*5*6).

// function Factorial(num){
//     num = Math.trunc(num)
//     if (num <0){
//         return 0;
//     }
//     if (num == 0){
//         return 1;
//     }
//     return num * Factorial(num-1)
// }

// console.log(Factorial(-3))


// flood fill to fill in all the same color of what is clicked on  floodFill(canvas2D,startXY,newColor)!
// this requires a helper function bc we need to establish constant variables that would change when done recursively
function floodFill(arr, startxy, newcolor) {
    let x = startxy[1];
    let y = startxy[0];
    const current = arr[x][y]
    // call the helper funcion which will become the recursive function
    Fill(arr, x, y, newcolor, current); 
    return arr
}

function Fill(arr, x, y, newcolor, current) {
    // variable were already established now need make sure they dont go off the grid by making sure they arent less than zero or more than the length of the array
    if(x<0){
        return arr
    }
    if(y<0){
        return arr
    }
    if(x>arr.length-1){
        return arr
    }
    if(y>arr.length-1){
        return arr
    }

    // checking to see if it needs to be changed or not
    if (arr[x][y]!=current){
        return arr
    }

    // then change it
    if (arr[x][y]==current){
        arr[x][y] = newcolor;
    }
    // then check the surrounding numbers recursively, be careful that it goes in a circle and not all over the place or it will mess up
    Fill(arr, x-1, y, newcolor, current);
    Fill(arr, x+1, y, newcolor, current);
    Fill(arr, x, y-1, newcolor, current);
    Fill(arr, x, y+1, newcolor, current);
    return arr
}


console.log(floodFill([[3,2,3,4,3],[2,3,3,4,0],[7,3,3,5,3],[6,5,3,4,1],[1,2,3,3,3]],[2,2],1))