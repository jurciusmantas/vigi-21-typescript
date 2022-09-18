type Person = {
  name: string
};

type TypeWithSurname<Type> = Type & {
  surname: string
};

const person: Person = {
  name: 'Test',
};
console.log(person);

const personWithSurname: TypeWithSurname<Person> = {
  name: 'Test',
  surname: 'Test',
};
console.log(personWithSurname);

console.log('labas');

// type TypeWithPartial = {
//   name: string,
//   surname?: string,
// };

// type NotPartial = {
//   [Key in keyof TypeWithPartial]-?: TypeWithPartial[Key]
// };
