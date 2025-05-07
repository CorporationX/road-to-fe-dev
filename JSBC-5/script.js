console.log("--- Задача: Потерянный контекст ---");

const person = {
    firstName: 'Алекс',
    lastName: 'Иванов',
    greet: function () {
        console.log(`Привет, меня зовут ${this.firstName} ${this.lastName}!`);
    },
    greetArrow: () => {
        console.log(`Привет, меня зовут ${this.firstName} ${this.lastName}!`);
    }
};

person.greet();

const greetCopy = person.greet;
greetCopy(); 

const newPerson = { firstName: 'Ирина', lastName: 'Смирнова' };

greetCopy.call(newPerson);   
greetCopy.apply(newPerson);  

const boundGreet = greetCopy.bind(newPerson);
boundGreet(); 

person.greetArrow();