const person = function person(){
  
}

const person1 = new person();

console.log(person.name); //person 객체 name 프로퍼티
console.log(person1); //빈 객체 person {}

person.a = '1';
person.b = '2';
person.c = '3';

console.log(person); //객체 출력 [Function: person] { a: '1', b: '2', c: '3' }

//

const person2 = new person();
console.log(person2); //빈 객체 person {}

person2.a = '2';
console.log(person2); //객체 출력 person { a: '2' }
