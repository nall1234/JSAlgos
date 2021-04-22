
//iteraivly

function countdown(num){
    for (var i = num; i>=1; i--){
        console.log(i)
    }
}

coundown(5)


//recursively

function countdown(num){
    if (num == 0){
        return "countdown is done"
    }
    console.log(num);
    return countdown(num-1);
}

console.log(countdown(5))


// Recursive Sigma
// Write a recursive function that given a number returns the sum of integers from 1 to that number. Example: rSigma(5) = 15 (1+2+3+4+5); rSigma(2.5) = 3 (1+2); rSigma(-1) = 0.


function rSigma(num){
    num = Math.trunc(num);
    if (num <= 0){
        return 0;
    }
    return num + rSigma(num-1);
}

console.log(rSigma(5))


Recursive Factorial
Given num, return the product of ints from 1 up to num. If less than zero, treat as zero. If not an integer, truncate. Experts tell us 0! is 1. rFact(3) = 6 (1*2*3). Also, rFact(6.5) = 720 (1*2*3*4*5*6).

function Factorial(num){
    num = Math.trunc(num)
    if (num <0){
        return 0;
    }
    if (num == 0){
        return 1;
    }
    return num * Factorial(num-1)
}

console.log(Factorial(-3))