//1.
// const a = {b: 1},
//     c = Object.create(a);
//
// console.log(c.b); // 1
// delete c.b;
// console.log(c.b); // 1
// delete a.b;
// console.log(c.b); // undefined
// a.z = 2;
// console.log(c.z); // 2
// c.z = 3;
// console.log(a.z); // 2

// 2.

// const promise = new Promise(() => {
// })
// promise.prototype === Promise.__proto__ // false (undefined === Function.prototype)
//
// const obj = {}
// obj.__proto__ === Object.prototype // true
//
// new Array([]).__proto__ === Array.prototype // true
//
// function Fn1 () {}
// function Fn2 () {}
// Fn1.constructor === Fn2.constructor // true (оба Function)
//
// Fn1.prototype === Fn2.prototype // false
//3.

// У вас есть два конструктора, Animal и Bird.
// Каждый объект типа Bird должен наследовать метод speak от Animal.
// Однако, Bird также должен иметь свой собственный метод fly.

// Создайте конструктор Animal, который принимает параметр name и устанавливает его как свойство объекта.
// Добавьте метод speak в Animal, который выводит в консоль звук, издаваемый животным (например, "Some generic sound").
// Создайте конструктор Bird, который принимает параметр name и вызывает конструктор Animal с тем же именем.
// Добавьте метод fly в Bird, который выводит в консоль сообщение о том, что птица летит (например, "Flying high!").
// Создайте объекты animal и bird с использованием соответствующих конструкторов и вызовите их методы speak и fly.
// Решите задачу, используя прототипное наследование, чтобы Bird наследовал от Animal.

// Должно быть такое поведение:
// const animal = new Animal("Дженни");
// const bird = new Bird("Воробей");
//
// animal.speak(); // "Some generic sound"
// bird.speak();   // "Some generic sound"
// bird.fly();     // "Flying high!"

//* Solution

// 1. С использованием функций-конструкторов:

// function Animal(name) {
//   this.name = name;
// }

// Animal.prototype.speak = function() {
//   console.log('Some generic sound');
// }

// function Bird(name) {
//   Animal.call(this, name)
// }
// Object.setPrototypeOf(Bird.prototype, Animal.prototype)

// Bird.prototype.fly = function() {
//   console.log('Flying high!');
// }

// 2. С использованием синтаксиса классов:

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   speak() {
//     console.log('Some generic sound');
//   }
// }

// class Bird extends Animal {
//   constructor(name) {
//     super(name)
//   }

//   fly() {
//     console.log('Flying high!');
//   }
// }