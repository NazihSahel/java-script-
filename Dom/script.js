function filterEvenNumbers(arr) {
  const evenNumbers = arr.filter((number) => number % 2 === 0);
  return evenNumbers;
}

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterEvenNumbers(numbers);
console.log(evenNumbers);

//TASK2//

function createPerson(name, age, email) {
  return {
    name:Mo7 ,
    age: 30,
    email: mo7@gmail.com,
  };
}

function filterPeopleOver30(peopleArray) {
  const peopleOver30 = peopleArray.filter((person) => person.age > 30);
  return peopleOver30;
}

const people = [
  createPerson("Merouane", 25, "Merouane@example.com"),
  createPerson("Bob", 40, "bob@example.com"),
  createPerson("Mo7", 35, "charlie@example.com"),
  createPerson("David", 28, "david@example.com"),
];

const peopleOver30 = filterPeopleOver30(people);
console.log(peopleOver30);



//TASK3//


class Stack {
  constructor() {
    this.items = [];
  }

  
  push(element) {
    this.items.push(element);
  }

  
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  }

  
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }

 
  isEmpty() {
    return this.items.length === 0;
  }

 
  size() {
    return this.items.length;
  }

 
  clear() {
    this.items = [];
  }
}


const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.peek()); 
console.log(stack.pop()); 
console.log(stack.size()); 
console.log(stack.isEmpty()); 

stack.clear();
console.log(stack.isEmpty()); 





//TASK4//


class Queue {
  constructor() {
    this.items = [];
  }

  
  enqueue(element) {
    this.items.push(element);
  }

 
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.shift();
  }

 
  peek() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }

  
  isEmpty() {
    return this.items.length === 0;
  }

  
  size() {
    return this.items.length;
  }

 
  clear() {
    this.items = [];
  }
}


const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.peek()); // 
console.log(queue.dequeue()); // 
console.log(queue.size()); // 
console.log(queue.isEmpty()); 

queue.clear();
console.log(queue.isEmpty()); 




//TASK5//



function removeVowels(inputString) {
 
  const stringWithoutVowels = inputString.replace(/[aeiouAEIOU]/g, '');
  return stringWithoutVowels;
}

const input = "Hello, World!";
const result = removeVowels(input);
console.log(result); 





//TASK6//



function uniqueElementsFromArrays(array1, array2) {
 
  const combinedArray = array1.concat(array2);

  
  const uniqueArray = Array.from(new Set(combinedArray));

  return uniqueArray;
}


const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];

const result = uniqueElementsFromArrays(array1, array2);
console.log(result); 