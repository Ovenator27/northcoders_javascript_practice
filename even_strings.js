function findEvenLengthStrings(items) {
    //create return array
    const evenStrings = [];
    //loop through array
    for (let i=0 ; i<items.length ; i++) {
        //If string and even length string add to array
        if (typeof items[i] === 'string' && items[i].length % 2 === 0) {
            evenStrings.push[items[i]];
        }
    }
    //return array
    return evenStrings;
    }