class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

const breadthFirstSearch = (root) => {
  if (root === null) {
    return []; // empty array or a message;
  }
  const values = []; // this will be the place, where the values are stored.
  const queue = [root]; // this will be the place, where the elements in the queue are plotted and then exported in the values.

  while (queue.length > 0) {
    // this will check if the length of the line is grater than zero
    const node = queue.shift(); // input of optimization, or also we can say that each memmber of the line will be shifted or poped out and stored in the variable.
    values.push(node.key); // we will push the key of the node into the value array;

    if (node.left !== null) {
      values.push(node.left);
    } // if data is present in the left side of the node, it will be pushed in to the values array
    if (node.right !== null) {
      values.push(node.right);
    } // if data is present in the right side of the node, it will be pushed in to the values array
  }

  // here after the value is null in the queue we will return values array
  return values;
};

// Example usage
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log(breadthFirstSearch(root)); // Output: [1, 2, 3, 4, 5]
