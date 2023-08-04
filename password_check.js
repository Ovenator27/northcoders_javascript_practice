//Checks the validity of input password against criteria object
//Current criteria is must contain letters 'n' and 'c', and must end with 1

function passwordValidation(password) {
    //Turn input password into array
    const passArray = password.toLowerCase().split('');
    //Set password criteria
    const criteria = {
        'contain n' : false,
        'contain c' : false,
        'end with 1' : false
    }

    //Check ends with 1 criteria
    if (passArray[passArray.length - 1] === '1') {
        criteria['end with 1'] = true;
    }
    //Check letter criteria
    for (let i=0 ; i<passArray.length ; i++) {
        if (passArray[i] === 'n') {
            criteria['contain n'] = true;
        }
        if (passArray[i] === 'c') {
            criteria['contain c'] = true
        }
    }

    //Check for false criteria - return invalid if any
    for (const key in criteria) {
        if (criteria[key] === false) {
            console.log(`Your password was invalid, it didn\'t ${key}`);
            return 'invalid'
        }
        }
    //Else return valid
    console.log('That password was valid');
    return 'valid'
    }

    let password = prompt('Enter a password, it must contain the letters n and c, and it must end with 1');
    passwordValidation(password);