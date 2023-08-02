function checkIsPrime(num) {
    //Check if num is 1, if true not prime
    if (num === 1){
        console.log(`The number ${num} is not prime`)
        return false
    }
    //Create counter i where 1 < n < num
    for (let i=2 ; i<num ; i++){
        //Check if remainder num/i = 0
        if (num % i === 0) {
            //If remainder = 0 not prime else prime
            console.log(`The number ${num} is not prime`)
            return false
        }
    }
    console.log(`The number ${num} is prime`)
    return true    
}

let num = prompt('Enter a positive integer');
checkIsPrime(num);