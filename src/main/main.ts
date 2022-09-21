console.log('labas');

type Car = {
  model: string | number,
  ownerCount: number,
  color?: string
};

type Person = {
  name: string;
  surname: string;
};

class ListNode<T> {
  data: T;
  next?: ListNode<T>;

  constructor(item: T) {
    this.data = item;
  }
}

class List<T> {
  head?: ListNode<T>;
  tail?: ListNode<T>;
  length: number;

  constructor() {
    this.length = 0;
  }

  printList() {
    if (this.head) {
      console.log(this.head.data);
      this.printListInner(this.head.next);
    } else {
      console.log('list is empty');
    }
  }

  private printListInner(current?: ListNode<T>) {
    if (current !== undefined) {
      console.log(current.data);
      this.printListInner(current.next);
    }
  }

  push(data: T): void {
    const newNode = new ListNode<T>(data);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else if (this.length === 1) {
      this.tail = newNode;
      if (this.head) this.head.next = newNode;
    } else if (this.length === 2) {
      // yra 2, pridedam dar 1
      
      /* Yra tokia situacija */
      // this.head.next === this.tail
      // this.tail.next === undefined

      /* Norim padaryt, kad butu tokia situacija */
      // this.head.next === oldTail
      // oldTail.next === newNode
      // newNode.next === undefined
      
      if (this.tail) {
        const oldTail = this.tail;
        oldTail.next = newNode;
        this.tail = newNode;
      }   
    } else if (this.length >= 3) {
      // yra 3 arba daugiau
      if (this.tail) {
        const oldTail = this.tail;
        oldTail.next = newNode;
        this.tail = newNode;
      }
    }

    this.length += 1;
    // this.length = this.lenght + 1;
  }
}

const listNodeCar1: ListNode<Car> = new ListNode<Car>({ model: 'Audi', ownerCount: 2 });
const listNodeCar2: ListNode<Car> = new ListNode<Car>({ model: 'Honda', ownerCount: 3 });
const listNodeCar3: ListNode<Car> = new ListNode<Car>({ model: 'BMW', ownerCount: 1 });
listNodeCar1.next = listNodeCar2;
listNodeCar2.next = listNodeCar3;
// console.log(listNodeCar1);

const personsList: List<Person> = new List<Person>();
personsList.printList();
console.log('-------');

personsList.push({ name: 'Jonas', surname: 'Jonauskas' });
personsList.printList();
console.log('-------');

personsList.push({ name: 'Petras', surname: 'Petrauskas' });
personsList.printList();
console.log('-------');

personsList.push({ name: 'Tadas', surname: 'Tadauskas' });
personsList.printList();
console.log('-------');

personsList.push({ name: 'Kriste', surname: 'Kristauske' });
personsList.printList();
console.log('-------');
