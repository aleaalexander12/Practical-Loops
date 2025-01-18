// Part 1: Fizz Buzz

// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number

// Create a variable that is less than or equal to 100
// Increase number by 1 after each loop
for (let f = 1; f <= 100; f++)
    // Number is divisible by both 3 and 5
    if (f % 3 === 0 && f % 5 === 0) {
        console.log(`Fizz Buzz`)
    // Number is divisible by 3
    } else if (f % 3 === 0) {
        console.log(`Fizz`)
    // Number is divisible by 5
    } else if (f % 5 === 0) {
        console.log(`Buzz`)
    // Number is not divisible by either 3 or 5
    } else {
        console.log(f)
    }

// Part 2: Prime Time

// Declare an arbitrary number, n.
// Create a loop that searches for the next prime number, starting at n and incrementing from there.
// As soon as you find the prime number, log that number and exit the loop

// User inputs a random number that is less than 100
// The lopp is checking the next number to see whether or not it's prime
// Create a variable to represent the following number (by adding 1 to the original)

let num = 3;
let limit = 50; 
let nextPrime = num+1

while(num<=limit){
    let isPrime = true
    for (let i=2; i<=nextPrime; i++){
        // checks every number between 2 and 7
        if(nextPrime%i ===0){
            isPrime = false
            console.log(`Your ${num} is not prime`);
            break
        } 
     }

     if (isPrime){
        console.log(num);
        break;
        }
        num++
    }

// Part 3: Feeling Loopy

// Loop through the characters of a given CSV string.
// Store each “cell” of data in a variable.
// When you encounter a comma, move to the next cell.
// When you encounter the “\r\n” sequence, move to the next “row.”
// Log each row of data
    // There will only be 4 cells per row.
    // There will be no escaped characters other than “\n”.

//let csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let csv = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"

let cell1= ""
let cell2= ""
let cell3= ""
let cell4= ""
let currentCell = 1

for ( let i=0; i<=csv.length; i++){
    // this will log each letter individually on a different line
    //console.log(csv[i]);
    let char =csv[i];
    //console.log(char);
    if(char===","){
        currentCell++ 
    } else if (char==="\n"|| i ===csv.length){
        console.log(cell1,cell2,cell3,cell4);
        cell1="";
        cell2="";
        cell3="";
        cell4="";
        currentCell= 1
    } else { 
        if(currentCell ===1){
            cell1+=char;
        } else if(currentCell ===2){
            cell2+=char;
        }else if(currentCell ===3){
            cell2+=char;
        }else if(currentCell ===4){
            cell2+=char;
        }
    }
}
//console.log(cell1);
//console.log(cell2);
//console.log(cell3);
//console.log(cell4);


