// const sportsCars: SportsCar = {
//   model: 'Porche',
//   make: 2015,
//   isUsed: true,
//   engine: 'V12',
//   ownerName: 'Petras',
//   color: 'red',
// };

// const cars: Car[] = [
//   { model: 'Audi A6', make: 2004, isUsed: false },
//   { model: 'Mercedes CLK', make: 2003, isUsed: true },
//   { model: 'BMW M3', make: 2002, isUsed: true },
//   { model: 10, make: 2002, isUsed: true },
// ];

// const printWhenMade = (models: Car['model'][]): void => {
//   models.forEach((model) => {
//     if (model === 'Audi A6') console.log(2004);
//     else if (model === 'Mercedes CLK') console.log(2003);
//     else if (model === 'BMW M3') console.log(2002);
//     else console.log('not found');
//   });
// };
// printWhenMade(['Audi A6', 'Audi A4', 'BMW M3', 'Mercedes CLK']);
// const carsModels = cars.map((item) => item.model);
// printWhenMade(carsModels);

// type CarProperties = keyof Car;
// const carProperty1: CarProperties = 'isUsed';
// const carProperty2: CarProperties = 'make';
// const carProperty3: CarProperties = 'model';

// type SportsCar = Car & {
//   engine: 'V8' | 'V12'
// };

// type CarOptional = {
//   [key in keyof Car]?: Car[key] // Car['model'] // Car['make'] // Car['isUsed'] ....
//   // model: string | number,
//   // make: number,
//   // isUsed: boolean,
//   // accidents: number,
//   // ownerCount: number,
//   // ownerName?: string,
//   // color?: string,
// };

// type CarPartial = {
//   // model          : Car['model']
//   // make           : Car['make']
//   // isUsed         : Car['isUsed']
//   // ....
//   // color          : Car['color']
//   [key in keyof Car]+?: Car[key]
// };

// type CarOptionalUsingHelper = Partial<Car>;

// type CarStringified = {
//   [key in keyof Car]: string
// };

// type CarReadOnly = {
//   readonly [key in keyof Car]: Car[key]
// };
// const carReadonly: CarReadOnly = {
//   model: 'Audi A6', 
//   ownerCount: 2, 
//   make: 2004, 
//   isUsed: false, 
//   accidents: 0,
// };
// // carReadonly.model = 'Audi A8';

// type CarWithCapitalizedKeys = {
//   [key in keyof Car as `ourCustom${Capitalize<key>}`]: Car[key]
// };

// type CarRequired = {
//   [Raktas in keyof Car]-?: Car[Raktas]
// };

// type CarRequiredUsingHelper = Required<Car>;

// type CarOnlyMakeAndModel = Pick<Car, 'make' | 'model' | 'accidents'>;
// type CarWithouthMakeAndModel = Omit<Car, 'make' | 'model'>;

// const updateCar = (item: Car, update: CarOptional): Car => {
//   return {
//     ...item,
//     ...update,
//   };
// };

// const newCar = updateCar({
//   model: 'Audi A6', 
//   ownerCount: 2, 
//   make: 2004, 
//   isUsed: false, 
//   accidents: 0,
// }, { 
//   make: 2003, 
//   accidents: 1, 
// });
// console.log(newCar);
