function isThisAPalindrome(str) {
    //Write string in reverse
    const reverse = str.split('').reverse().join('')
    //Compare reverse string to original
    if (reverse === str) {
        //If reverse = original return true
        console.log(true);
        return true;
    }
    else {
        //Return false if different
        console.log(false);
        return false
    }
    }
isThisAPalindrome('hannah');