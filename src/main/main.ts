console.log('labas');

// type CarPartial = Partial<Car>;
// type PersonPartial = Partial<Person>;
// type CarRequired = Required<Car>;
// type PersonRequired = Required<Person>;

const copyWithAny = (arg: any): any => {
  if (arg instanceof Object) {
    return JSON.parse(JSON.stringify(arg));
  }

  return arg;
};
const copyGeneric = <T>(arg: T): T => {
  if (arg instanceof Object) {
    return JSON.parse(JSON.stringify(arg));
  }

  return arg;
};
const arrayCopiedWithAny = copyWithAny([1, 2, 3, 'a']);
// arrayCopiedWithAny.Map(2); <- Runtime error
const stringCopiedWithGeneric = copyGeneric('aaa');
const numberCopiedWithGeneric = copyGeneric(1);

const arrayCopiedWithGeneric = copyGeneric<number[]>([1, 2, 3]);
arrayCopiedWithGeneric.map((item) => console.log(item));

type Person = {
  name: string;
  surname: string;
};

const objectCopiedWithAny = copyWithAny({ name: 'Petras', surname: 'Petrauskas' });
// console.log(objectCopiedWithAny.name()); <- Runtime error

const originalObject: Person = { name: 'Petras', surname: 'Petrauskas' };
const copy = copyGeneric<Person>(originalObject);
console.log(copy.name);

const printId = <T extends { id: string | number }>(arg: T): void => {
  console.log(arg.id);
};
// printId(originalObject);
// printId(1);
printId({ id: 1, name: 'Petras', surname: 'Petrauskas' });
