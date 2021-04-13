/*var myName = "Evan"
var myNum = 38
var nameTemp = myName
myName = myNum;
myNum = nameTemp;
console.log("Name should be number", myName, "Number should be name", myNum);

// Print -52 to 1066
// Print integers from -52 to 1066 using a FOR loop.

for (var i = -52; i < 1067; i++) {
    console.log(i);
    // }



    // Don’t Worry, Be Happy
    // Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times.

    function beCheerful() {
        for (let i = 0; i < 98; i++) {
            console.log("good Morning")
        }
    }

    // Multiples of Three – but Not All
    // Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.
function timesthree() {
    for (let i = -300; i < 0; i++) {
        if (i == -3|| i == -6){
            continue
        }
        if (i % 3 == 0) {
            console.log(i)
        }
    }
}

timesthree();


// Printing Integers with While
// Print integers from 2000 to 5280, using a WHILE.

function printInt(){
    let i = 2000;
    while(i <= 5280){
        console.log(i)
        i++
    }
}
printInt()

// You Say It’s Your Birthday
// If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day...." 

function isBirthday(x,y){
    if (x == 12 && y == 7){
        console.log('how did you know')
    }
    else{
        console.log('just another day')
    }
}

isBirthday(12,8)
*/
// Leap Year
// Write a function that determines whether a given year is a leap year. If a year is divisible by four, it is a leap year, unless it is divisible by 100. However, if it is divisible by 400, then it is.

function findLeapYear(year){
    if (year % 4 == 0){
        if (year % 100 == 0){
            if(year % 400 == 0){
                console.log('400 year, it is a leap year')
            }
            console.log('100 year, not a leap year')
        }
        console.log('four year, it is a leap year')

    }
    else{
        console.log('nope it isnt')
    }
    
}
findLeapYear()


// Print and Count
// Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.



// Multiples of Six
// Print multiples of 6 up to 60,000, using a WHILE.



// Counting, the Dojo Way
// Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo".



// What Do You Know?
// Your function will be given an input parameter incoming. Please console.log this value.



// Whoa, That Sucker’s Huge…
// Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut?



// Countdown by Fours
// Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop.



// Flexible Countdown
// Based on earlier “Countdown by Fours”, given lowNum, highNum, mult, print multiples of mult from highNum down to lowNum, using a FOR. For (2,9,3), print 9 6 3 (on successive lines).



// The Final Countdown
// This is based on “Flexible Countdown”. The parameter names are not as helpful, but the problem is essentially identical; don’t be thrown off! Given 4 parameters (param1,param2,param3,param4), print the multiples of param1, starting at param2 and extending to param3. One exception: if a multiple is equal to param4, then skip (don’t print) it. Do this using a WHILE. Given (3,5,17,9), print 6,12,15 (which are all of the multiples of 3 between 5 and 17, and excluding the value 9).