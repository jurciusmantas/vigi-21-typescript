console.log('labas');

class Person {
  name: string;
  protected age: number;
  private privateSurname: string;

  constructor(name: string) {
    this.name = name;
    this.privateSurname = 'DefaultSurname';
    this.age = 18;
  }

  printName() {
    console.log(`${this.name} ${this.privateSurname}`);
  }

  // getSurname(): string {
  //   return this.surname;
  // }

  get surname(): string {
    return this.privateSurname;
  }

  // setSurname(newSurname: string): void {
  //   // Validation
  //   if (newSurname === '') {
  //     throw new Error('Surname cannot be empty');
  //   }

  //   this.surname = newSurname;
  // }

  set surname(newSurname: string) {
    // Validation
    if (newSurname === '') {
      throw new Error('Surname cannot be empty');
    }

    this.privateSurname = newSurname;
  }
}

class Child extends Person {
  constructor() {
    super('DefaultChildName');
    this.name = 'DefaultName';
    this.age = 7;
    // console.log(this.surname);
  }
}

const person1 = new Person('Jonas');
console.log(person1.name);
console.log(person1.surname);
// console.log(person1.age);
person1.printName();

// console.log(person1.surname);
// person1.surname = 'Pavardenis';
// try { person1.setSurname(''); } catch (error) { console.log(error); }

// person1.setSurname('Pavardenis');
person1.surname = 'Pavardenis';
console.log(person1.surname);
// console.log(person1.getSurname());
