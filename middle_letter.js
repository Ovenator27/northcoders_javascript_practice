function getMiddle(string) {
    console.log(string);
    if (string.length % 2 !== 0) {
        console.log (string.charAt(Math.floor(string.length / 2)));
    }
    else {
        console.log (string.charAt((string.length / 2) - 1) + string.charAt(string.length / 2));
    }
    }

    getMiddle('umbrellas');