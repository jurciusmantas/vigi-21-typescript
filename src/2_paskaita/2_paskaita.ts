// console.log('labas');

// // type Person = {
// //   name: string,
// //   surname: string,
// //   age: number,
// //   hobby: string
// // };

// interface Person {
//   name: string,
//   surname: string,
//   age: number,
//   hobby: string,
// }

// const kazkas = "";
// console.log(kazkas);

// const person1: Person = {
//   name: 'Petras',
//   surname: 'Petrauskas',
//   hobby: 'Chess',
//   age: 25,
// };

// // console.log(person1.name);

// const numbers: number[] = [1, 2, 3];
// // console.log('numbers length - ', numbers.length);

// const words: Array<string> = ['Hello', 'world'];
// // console.log(words.join(', '));

// const persons: Person[] = [
//   {
//     name: 'Petras', surname: 'Petraukas', age: 25, hobby: 'Chess',
//   },
//   {
//     name: 'Jonas', surname: 'Jonauskas', age: 52, hobby: 'Cycling',
//   },
// ];

// // console.log(persons.length);

// type Sum = (a: number, b: number) => number;
// const sum: Sum = (a, b) => a + b;
// console.log(sum(6, 4));

// type FindIndexInArray = (array: number[], search: number) => number;
// const findIndex: FindIndexInArray = (array, search) => array.indexOf(search);
// console.log(findIndex([1, 2, 3], 3));

// interface CircleCalculator {
//   (r: number): number,
//   radius: (r: number) => number,
// }

// const circleCalculator: CircleCalculator = Object.assign(
//   (r: number) => Math.PI * (r ** 2),
//   {
//     radius: (r: number) => 2 * Math.PI * r,
//   },
// );

// console.log(circleCalculator(3));
// console.log(circleCalculator.radius(3));

// const join = function (a: number[], b: number[]): number[] {
//   return a.map((x, i) => x + b[i]);
// };

// const newArray = join([1, 2, 3], [3, 2, 1]);
// console.log(newArray.join(', '));
