//Takes an object with key 'name' and converts into two properties 'firstName' and 'lastName' 

function makeGuestList(person) {
    //Convert string into array
    const names = person.name.split(' ');
    //Put array into object
    person.firstName = names[0];
    person.lastName = names[1];
    //delete name property
    delete person.name;
    //Return object
    return person
    }

const Hannah = { name: "Hannah Fry", age: 46 }

makeGuestList(Hannah);