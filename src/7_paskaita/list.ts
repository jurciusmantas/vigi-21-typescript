class ListNode<T> {
  prev?: ListNode<T>;
  next?: ListNode<T>;
  data: T;

  constructor(data: T) {
    this.data = data;
  }
}

class List<T> {
  private head?: ListNode<T>;
  private tail?: ListNode<T>;

  constructor(items: T[]) {
    if (items.length === 0) return;
    if (items.length === 1) {
      this.initialize(items[0]);
      return;
    }

    let previous: ListNode<T>;
    items.forEach((item, index) => {
      const nodeElement = new ListNode<T>(item);

      if (index === 0) {
        this.head = nodeElement;
        previous = nodeElement;
      } else if (index === items.length - 1) {
        this.tail = nodeElement;
        if (this.head) {
          this.tail.next = this.head;
          this.head.prev = this.tail;
          if (items.length === 2) {
            this.head.next = this.tail;
            this.tail.prev = this.head;
          } else {
            previous.next = this.tail;
            this.tail.prev = previous;
          }
        } 
      } else {
        nodeElement.prev = previous;
        previous.next = nodeElement;

        previous = nodeElement;
      }
    });
  }

  private initialize(item: T) {
    const nodeElement = new ListNode<T>(item);

    nodeElement.next = nodeElement;
    nodeElement.prev = nodeElement;

    this.head = nodeElement;
    this.tail = nodeElement;
  }

  push(item: T) {
    const newNode: ListNode<T> = new ListNode<T>(item);
    if (this.head && this.tail) {
      // Changes for head
      this.head.prev = newNode;
      newNode.next = this.head;

      /* If list contains only 1 element */
      if (this.head === this.tail) {
        // Changes for head
        this.head.next = newNode;

        // Changes for newNode
        newNode.next = this.head;

        // Swap tail
        this.tail = newNode;
        return;
      } 

      // Create new node, save info from old tail
      const oldTail = new ListNode<T>(this.tail.data);
      oldTail.prev = this.tail.prev as ListNode<T>;
      oldTail.next = newNode;

      // Prepare newNode
      newNode.prev = oldTail;
      
      /* If list contains 2 elements */
      if (this.head.next === this.tail) { 
        this.head.next = oldTail;
      } else { /* If contains 3 or more elements */
        oldTail.prev.next = oldTail;
      }

      // Swap tail with newNode
      this.tail = newNode;
    } else { /* If list is empty */
      this.initialize(item);
    }
  }

  print() {
    if (this.head) this.printInner(this.head, 0, false);
    else console.log('List contains no elements');
  }

  private printInner(current: ListNode<T>, index: number, wasFirstPrinted: boolean = true): void {
    if (this.head === current) {
      if (wasFirstPrinted) {
        console.log('----------');
        return;
      }

      console.log('----------');
    }
    
    console.log(`[${index}] - ${JSON.stringify(current.data)}`);
    const newIndex = index + 1;
    if (current.next) this.printInner(current.next, newIndex);
    else console.error('current.next was empty');
  }
}

type PersonListElement = {
  name: string
  surname: string
};

const personList: List<PersonListElement> = new List<PersonListElement>([
  { name: 'Petras', surname: 'Petrauskas' },
  { name: 'Jonas', surname: 'Jonauskas' },
  { name: 'Tomas', surname: 'Tomauskas' },
  { name: 'Ignas', surname: 'Ignauskas' },
]);

personList.print();
personList.push({ name: 'Ona', surname: 'Onauskaite' });
personList.print();
