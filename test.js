function sortTheKitchen(kitchen) {
    console.log('The kitchen before sorting is:');
    console.log(kitchen);
    delete kitchen.hoover;
    kitchen.totalShelves = 0
    console.log('Sorting will now begin')
    for (const key in kitchen) {
        if (typeof kitchen[key] === 'string'){
            console.log(`the item ${key} has been changed from ${kitchen[key]} to `)
            kitchen[key] = kitchen[key].toLowerCase();
            console.log(kitchen[key])
        }
        if (key === 'shelvesInCupboards' || key === 'shelvesNotInCupboards') {
            kitchen.totalShelves += kitchen[key];
            delete kitchen[key];
            console.log(`The number of shelves in ${key} has been added to totalShelves and ${key} has been removed, totalShelves is now ${kitchen.totalShelves}`)
        }
    }
    // Don't change the code below this line
    console.log('The kitchen after sorting is')
    console.log(kitchen);
    return kitchen;
}

const exampleKitchen = {
    hasFridge: true,
    favouriteAppliance: 'KeTtlE',
    food: 'eGgS',
    shelvesInCupboards: 3,
    shelvesNotInCupboards: 2,
    petName: 'RhuBarB',
    hoover: 'DysOn'
  };

sortTheKitchen(exampleKitchen);