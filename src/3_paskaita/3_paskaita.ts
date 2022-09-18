// console.log('labas');

// type Person1 = {
//   name: string,
//   surname: string,
//   age: number
// };

// const person1: Person1 = {
//   name: 'petras',
//   surname: 'Petrauskas',
//   age: 31,
// };

// console.log(person1.name);

// interface Person2 {
//   name: string,
//   age: number,
// }

// interface Person2 {
//   surname: string
// }

// const person2: Person2 = {
//   name: 'Jonas',
//   surname: 'Jonauskas',
//   age: 29,
// };

// console.log(person2.name);

// const numbers: number[] = [1, 2, 3];
// console.log(numbers.length);

// const words: string[] = ['Hello', 'world'];
// console.log(words.join(','));

// const persons: Array<Person1> = [
//   { name: 'Jonas', surname: 'Jonauskas', age: 29 },
// ];
// console.log(persons[0].name);

// type SumFunction = (a: number, b: number) => number;
// const sum: SumFunction = (a, b) => a + b;
// console.log(sum(6, 4));

// interface JoinFunction {
//   (a: number[], b: number[]): number[]
// }
// const join: JoinFunction = (a, b) => a.map((item, index) => item + b[index]);
// console.log(join([1, 2, 3], [3, 2, 1]));

// const capitalize = (word: string): string => word[0].toUpperCase() + word.slice(1);
// console.log(capitalize('vilnius'));

// const capitalizeName = (person: Person1): void => {
//   person.name = capitalize(person.name);
// };
// capitalizeName(person1);
// console.log(person1.name);
