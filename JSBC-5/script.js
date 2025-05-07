
const person = {
    firstName: 'Миша',
    lastName: 'Иванов',
    greet: function () {
    console.log(`Привет.`);
  }
};
person.greet(); 
const greetFn = person.greet;
greetFn(); 
const anotherPerson = {
    firstName: 'Аня',
    lastName: 'Петрова'
};
person.greet.call(undefined);
person.greet.apply(null);
const notReallyBoundGreet = person.greet.bind(anotherPerson);
const boundFn = function () { console.log(`Bound this: ${this.firstName}`); }.bind(anotherPerson);
