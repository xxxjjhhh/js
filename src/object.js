const person = {
    age: '16',
    tall: '177'
}

person.weight = 50;
console.log(person); //{ age: '16', tall: '177', weight: 50 }

const person2 = person;
console.log(person2); //{ age: '16', tall: '177', weight: 50 }
