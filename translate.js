function translateKey(student, keyToChange, translation) {
    console.log(student);
    const newObj = {};
    for (let key in student) {
        newObj[key] = student[key]
    }
    newObj[translation] = newObj[keyToChange];
    delete newObj[keyToChange];
    console.log(newObj);
    return newObj;
    }

const student = {
    prénom: 'Carla',
    surname: 'Bruni',
    job: 'Artist'
}
const keyToChange = 'prénom'
const translation = 'firstName'

translateKey(student, keyToChange, translation);