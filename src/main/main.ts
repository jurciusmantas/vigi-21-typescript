console.log('labas');

type SportsCar = Car & {
  engine: 'V8' | 'V12'
};

type CarOptional = {
  [key in keyof Car]?: Car[key] // Car['model'] // Car['make'] // Car['isUsed'] ....
  // model: string | number,
  // make: number,
  // isUsed: boolean,
  // accidents: number,
  // ownerCount: number,
  // ownerName?: string,
  // color?: string,
};

type CarOptionalUsingHelper = Partial<Car>;

type CarStringified = {
  [key in keyof Car]: string
};

type CarReadOnly = {
  readonly [key in keyof Car]: Car[key]
};
const carReadonly: CarReadOnly = {
  model: 'Audi A6', 
  ownerCount: 2, 
  make: 2004, 
  isUsed: false, 
  accidents: 0,
};
// carReadonly.model = 'Audi A8';

type CarWithCapitalizedKeys = {
  [key in keyof Car as `ourCustom${Capitalize<key>}`]: Car[key]
};

type CarRequired = {
  [Raktas in keyof Car]-?: Car[Raktas]
};

type CarRequiredUsingHelper = Required<Car>;

type CarOnlyMakeAndModel = Pick<Car, 'make' | 'model' | 'accidents'>;
type CarWithouthMakeAndModel = Omit<Car, 'make' | 'model'>;

const updateCar = (item: Car, update: CarOptional): Car => {
  return {
    ...item,
    ...update,
  };
};

const newCar = updateCar({
  model: 'Audi A6', 
  ownerCount: 2, 
  make: 2004, 
  isUsed: false, 
  accidents: 0,
}, { 
  make: 2003, 
  accidents: 1, 
});
console.log(newCar);
