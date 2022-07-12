const person = {
  
  name: 'Kim',
  address: 'Seoul',
  __proto__: { age: 20}
};

console.log(Object.keys(person)); //["name", "address"]
console.log(Object.value(person)); //["Kim", "Seoul"]

//entire

console.log(Object.entries(person));
