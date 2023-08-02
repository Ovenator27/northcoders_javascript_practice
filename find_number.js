function findTicketPrices(emailString) {
    const numbers = emailString.match(/\d+/);
    if (numbers === null) {
        console.log(false);
        return false;
    }
    else {
        console.log(true);
        return true
    }
}

const emailString1 = 'This email contains 1 number';
const emailString2 = 'This string contains no numbers';
const emailString3 = 'This string is the 3rd in line and contains 2 numbers';

findTicketPrices(emailString3);