class Animal {
  protected name: string;
  protected sex: string;
  protected legs: number;

  constructor(name: string, sex: string, legs: number) {
    this.name = name;
    this.sex = sex;
    this.legs = legs;
  }

  eat() {
    console.log(`Animal ${this.name} is eating...`);
  }
}

class Dog extends Animal {
  protected breed: string;

  constructor(name: string, sex: string, legs: number, breed: string) {
    super(name, sex, legs);
    this.breed = breed;
  }

  makeNoise() {
    console.log(`Bark bark, my name is ${this.name}`);
  }
}

class Cat extends Animal {
  protected breed: string;
  private dislikes: string;

  constructor(name: string, sex: string, legs: number, breed: string) {
    super(name, sex, legs);
    this.breed = breed;
    this.dislikes = 'Dog';
  }

  makeNoise() {
    console.log(`Miau miau, I don't like ${this.dislikes}`);
  }

  override eat() {
    console.log('Cat refuses to eat now');
  }
}

const animal1: Animal = new Animal('Rika', 'female', 4);
animal1.eat();

const dog1: Dog = new Dog('Rikis', 'male', 4, 'Pitbulis');
dog1.eat();

const cat1: Cat = new Cat('Pukis', 'male', 4, 'Lietuvinis');
cat1.eat();
