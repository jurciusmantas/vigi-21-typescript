// console.log('labas');

// type NullableInteger = number | null;
// let integer: NullableInteger = 1.25;
// integer = null;
// console.log(integer);

// const printFirst = (arr: number[] | string[]): void => {
//   console.log(arr[0]);
// };
// printFirst([1, 2, 3]);
// printFirst(['Hello', 'world']);

// const returnFirst = (arr: number[] | string[]): number | string => arr[0];
// console.log(returnFirst([1, 2, 3]));
// console.log(returnFirst(['Hello', 'world']));

// type Person1 = {
//   id?: number,
//   name: string,
//   age: string | number,
//   getHeight: () => number
// };
// const person1: Person1 = {
//   name: 'Jonas',
//   age: 23,
//   getHeight: () => 182,
// };
// console.log(person1);

// type Worker1 = {
//   surname: string,
//   duties: string[]
// };
// const worker1: Worker1 = {
//   surname: 'Petrauskas',
//   duties: ['Programming'],
// };

// const printName = (entity: Person1 | Worker1): void => {
//   console.log(entity);
// };
// printName(person1);
// printName(worker1);

// const getSquareInfo = (length: number): [number, number] => {
//   const fullLengh: number = length * 4;
//   const area: number = length * length;
//   return [fullLengh, area];
// };
// const squareInfo = getSquareInfo(2);
// console.log(squareInfo[0]);
// console.log(squareInfo[1]);

// const [fullLengthLength4, areaLength4] = getSquareInfo(4);
// console.log(fullLengthLength4);
// console.log(areaLength4);

// type CreditCardInfo = [string, number, boolean];
// const worker1CreditCardInfo: CreditCardInfo = ['123456789', 111, true];

// console.log(`${worker1CreditCardInfo[0]} ${worker1CreditCardInfo[1]} ${worker1CreditCardInfo[2]}`);

// const myDiv = document.getElementById('my-div');
// myDiv?.addEventListener('click', () => {
//   console.log('my div was clicked');
// });

// const myForm = document.getElementById('my-form') as HTMLFormElement;
// console.log(myForm?.elements);
// myForm?.addEventListener('submit', (e) => {
//   e.preventDefault();
//   console.log('submitted');
// });

// const printMenu = (menuType: 'drinks' | 'main' | 'dessert'): 1 | 2 => {
//   if (menuType === 'drinks') {
//     console.log('coffe, tea, water');
//   } else if (menuType === 'main') {
//     console.log('steak, soup');
//   } else if (menuType === 'dessert') {
//     console.log('cake, icecream');
//   } else if (menuType === 'snacks') {
//     console.log('-');
//     return 2;
//   }

//   return 1;
// };
// printMenu('drinks');
// printMenu('main');
// printMenu('dessert');
// // printMenu('snacks');
// console.log('---------');

// enum MenuType {
//   Drinks,
//   Main,
//   Dessert,
//   Snacks,
// }

// const printMenuV2 = (type: MenuType): void => {
//   if (type === MenuType.Drinks) {
//     console.log('coffe, tea, water');
//   } else if (type === MenuType.Main) {
//     console.log('steak, soup');
//   } else if (type === MenuType.Dessert) {
//     console.log('cake, icecream');
//   } else if (type === MenuType.Snacks) {
//     console.log('baked bread with cheese');
//   }
// };

// printMenuV2(MenuType.Dessert);
// printMenuV2(MenuType.Drinks);
// printMenuV2(MenuType.Main);
// printMenuV2(MenuType.Snacks);

// enum MenuTypeStrings {
//   Drinks = 'drinks_from_menu_1',
//   Dessert = 'Dessert',
// }

// const printMenuV3 = (type: MenuTypeStrings): void => {
//   if (type === MenuTypeStrings.Dessert) {
//     console.log('icecream');
//   }
// };
// printMenuV3(MenuTypeStrings.Dessert);
