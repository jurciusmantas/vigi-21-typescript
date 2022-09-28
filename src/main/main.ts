abstract class Animal {
  protected energy: number;
  protected weight: number;

  constructor(energy: number, weight: number) {
    this.energy = energy;
    this.weight = weight;
  }

  /* Template design pattern start */
  wakeUp() {
    console.log('Animal woke up');
  }

  abstract eat(food: number): void;
  abstract move(): void;

  goSleep() {
    console.log('Animal going to sleep');
  }

  dailyLife() {
    this.wakeUp();
    this.eat(20);
    this.move();
    this.eat(20);
    this.goSleep();
  }

  /* Template desing pattern end */
}

// const animal1: Animal = new Animal();

class Dog extends Animal {
  public name: string;

  constructor(energy: number, weight: number, name: string) {
    super(energy, weight);
    this.name = name;
  }

  eat(food: number) {
    this.energy += food * 0.01;
    this.weight += food * 0.1; 
  }

  move() {
    console.log(`Dog ${this.name} is moving...`);
  }
}

class GuardDog extends Dog {

}

class Cat extends Animal {
  eat(food: number) {
    this.energy += food * 0.005;
    this.weight += food * 0.07; 
  }

  move() {
    console.log(`Cat is sitting...`);
  }

  override goSleep(): void {
    console.log('No sleep, cat is going to hunt');
  }

  showAffection() {
    console.log('MurMur');
  }
}

const cat1: Animal = new Cat(100, 7);
// cat1.showAffection();
cat1.dailyLife();

const feedAnimal = (animal: Animal, food: number): void => {
  animal.eat(food);
};
const dog1: Dog = new Dog(200, 15, 'Bruno');
const guardDog1: GuardDog = new GuardDog(300, 20, 'Sargis');

feedAnimal(cat1, 10);
feedAnimal(dog1, 50);
feedAnimal(guardDog1, 100);

type AnimalShelter = {
  animals: Animal[]
};

const shelter1: AnimalShelter = {
  animals: [
    dog1,
    guardDog1,
    cat1,
  ],
};

/* Polimorfizma galime naudoti netik su abstrakcija */
class Mover {
  move() {
    console.log('I am moving...');
  }
}

class Human extends Mover {

}

const human: Mover = new Human();
const moveAllMover = (movers: Mover[]): void => {
  movers.forEach((mover) => mover.move());
};
moveAllMover([
  new Human(),
  new Mover(),
]);
