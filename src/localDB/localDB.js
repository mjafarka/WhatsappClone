import { setUpdate, update } from "../mainComponents/sidebar/main";

class PersonQueue {
    //automatically remove last element if the queue size 
    // is more than 20
    constructor() {
        this.persons = []
        this.compare = (a,b) => a.timeStamp - b.timeStamp;
    }
    
    enqueue(person) {
        this.persons.unshift(person);
        return this.persons;
    }

    moveToFront(person) {
        const index = this.persons.findIndex(p => p.userId === person.userId);

        const element = this.persons.splice(index,1)[0];

        this.persons.unshift(element);

        return this.persons;
    }
}

//we use as local storage
const localPerson = new PersonQueue();

const searchByNameLocal = (substring) => {
    const similarName = []
    //key:  will be number from the class PersonQueue
    if (substring !== '') {
        localPerson.persons.forEach(person => {
            if (person.userName.includes(substring)) {
                similarName.push(person);
            }
        });
    }
    return similarName;
}

//return array of person
const addToLocalPersons = (person) => {
    return localPerson.enqueue(person);
}

//return array of person
const moveToFrontPos = (person) => {
    return localPerson.moveToFront(person);
}


export {localPerson, searchByNameLocal,addToLocalPersons, moveToFrontPos}
