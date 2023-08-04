//Takes array of strings as input, returns an array containing only the even length strings

function findEvenLengthStrings(items) {
    //create return array
    const evenStrings = [];
    //loop through input array
    for (let i=0 ; i<items.length ; i++) {
        //If value is string and even length, add to return array
        if (typeof items[i] === 'string' && items[i].length % 2 === 0) {
            evenStrings.push[items[i]];
        }
    }
    //print and return array
    console.log(evenStrings);
    return evenStrings;
    }