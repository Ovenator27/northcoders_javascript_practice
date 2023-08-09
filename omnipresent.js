function isItemOmnipresent(arrayOfArrays, item) {
    console.log(arrayOfArrays);
    console.log(`Checking to ensure each nested array contains ${item}`);
    //Create variable to check for item
    let omnipresent = true;
    //Iterate through array of arrays
    for (let i=0 ; i<arrayOfArrays.length ; i++) {
        //Reset omnipresent to false
        omnipresent = false;
        //Check each item in nested array for item
        for (let n=0 ; n<arrayOfArrays[i].length ; n++) {
            //Update omnipresent if item found
            if (arrayOfArrays[i][n] === item) {
                console.log(`${item} is found in nested array ${i} at position ${n}`)
                omnipresent = true;
            }
        }
        //If omnipresent remains false at end of nested array return false
        if (omnipresent === false) {
            console.log(`${item} was missing from one of the nested arrays`);
            return false;
        }
    }
    //Return true if item was found in all nested arrays
    console.log(`${item} was present in all nested arrays`)
    return true
}

    const arrayOfArrays = [ [ 9, 2, 3 ], [ 4, 5, 2, 9 ], [ 2, 9, -1 ], [ 1, 2, 3, 4, 5, 9 ]];

    isItemOmnipresent(arrayOfArrays, 2);