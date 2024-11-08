// Stack.js
class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (this.items.length === 0) {
      return null;
    }
    return this.items.pop();
  }

  getItems() {
    return this.items;
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

export default Stack;
