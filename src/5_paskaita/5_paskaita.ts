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