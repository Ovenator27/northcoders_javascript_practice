//Capitalises first letter of a string and greets

function greetGuest(name) {
    //Capitalise first letter in string
    const capName = name.charAt(0).toUpperCase() + name.slice(1);
    //Print and return capitalised string
    console.log(`Hello ${capName}!`)
    return `Hello ${capName}!`
    }

    const guest = 'jason';

    greetGuest(guest);