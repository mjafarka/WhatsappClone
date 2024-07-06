class PersonQueue {
    //automatically remove last element if the queue size 
    // is more than 20
    constructor() {
        this.persons = {}
        this.frontIndex = 0
        this.backIndex = 0
    }

    enqueue(person) {
        this.persons[this.backIndex] = person;
        this.backIndex ++
        while (Object.keys(this.persons).length > 20) {
            this.dequeue()
        }
    }

    dequeue() {
        const person = this.persons[this.frontIndex]
        delete this.persons[this.frontIndex]
        this.frontIndex ++
        return person
    }
}

//we use as local storage
const localPerson = new PersonQueue();

export const searchByNameLocal = (substring) => {
    const similarName = []

    //key:  will be number from the class PersonQueue
    for (const key of  Object.keys(localPerson.persons)) {
        if (localPerson.persons[key].name.includes(substring)) {
            similarName.push({...localPerson.persons[key], queueId: key})
        }
    }
    return similarName;
}

export const addToLocalPersons = (person) => {
    localPerson.enqueue(person);
}