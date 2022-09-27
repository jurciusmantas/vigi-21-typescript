// // value type - string, boolean, number
// const number1: number = 1;
// let number2 = number1;
// number2 = 2;
// console.log('number1 - ', number1, ' number2 - ', number2);

// const incrementAndPrint = (arg: number): void => {
//   let newArg = arg;
//   newArg += 1;
//   console.log('arg - ', newArg);
// };
// incrementAndPrint(number1);
// console.log(number1);

// // reference
// type Car = {
//   model: string
// };
// const car1: Car = { model: 'Audi' };
// const car2 = car1;
// car2.model = 'BMW';
// console.log('car1 - ', car1);
// console.log('car2 - ', car2);

// class Person {
//   public name: string;
//   protected age: number;
//   private privateSurname: string;

//   constructor(name: string) {
//     this.name = name;
//     this.privateSurname = 'DefaultSurname';
//     this.age = 18;
//   }

//   printName() {
//     console.log(`${this.name} ${this.privateSurname}`);
//   }

//   // getSurname(): string {
//   //   return this.surname;
//   // }

//   get surname(): string {
//     return this.privateSurname;
//   }

//   // setSurname(newSurname: string): void {
//   //   // Validation
//   //   if (newSurname === '') {
//   //     throw new Error('Surname cannot be empty');
//   //   }

//   //   this.surname = newSurname;
//   // }

//   set surname(newSurname: string) {
//     // Validation
//     if (newSurname === '') {
//       throw new Error('Surname cannot be empty');
//     }

//     this.privateSurname = newSurname;
//   }
// }

// class Child extends Person {
//   constructor() {
//     super('DefaultChildName');
//     this.name = 'DefaultName';
//     this.age = 7;
//     // console.log(this.surname);
//   }
// }

// const person1 = new Person('Jonas');
// console.log(person1.name);
// person1.name = '124aaa124';
// console.log(person1.surname);
// // console.log(person1.age);
// person1.printName();

// // console.log(person1.surname);
// // person1.surname = 'Pavardenis';
// // try { person1.setSurname(''); } catch (error) { console.log(error); }

// // person1.setSurname('Pavardenis');
// person1.surname = 'Pavardenis';
// console.log(person1.surname);
// // console.log(person1.getSurname());
