function greetGuest(name) {
    //Turn string into array
    const nameStr = name.split('')
    //Capitalise first entry in array
    nameStr[0] = nameStr[0].toUpperCase()
    //Convert array to string
    name = nameStr.join('').toString();
    //Return string
    console.log(`Hello ${name}!`);
    return `Hello ${name}!`;
    }

    greetGuest('');