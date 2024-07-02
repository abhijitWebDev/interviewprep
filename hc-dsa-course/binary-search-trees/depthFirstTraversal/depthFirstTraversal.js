

class Node {
/*
 * Represents a node in a binary tree.
 * @constructor
 * @param {any} key - The value or key of the node.
 */
constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
}

}

/*
 * Performs a depth-first traversal on a binary tree.
 *
 * @param {Object} root - The root node of the binary tree.
 * @param {number|string} root.key - The value of the node.
 * @param {Object|null} root.left - The left child node.
 * @param {Object|null} root.right - The right child node.
 * @returns {Array} An array containing the keys of the nodes in depth-first order.
 */
const depthFirstTraversal = (root) => {
    if (root === null) {
        return;
    }

    const values = [];
    const stack = [root];

    while (stack.length > 0) {
        const node = stack.pop();
        values.push(node.key);
        if (node.right !== null) {
            stack.push(node.right);
        }
        if (node.left !== null) {
            stack.push(node.left);
        }
    }
    return values;
}



const recursiveDepthFirstTraversal = (root) => {
    if(root === null) {
        return;
    }

    const leftValues = recursiveDepthFirstTraversal(root.left);
    const rightValues = recursiveDepthFirstTraversal(root.right);

    return [root.key, ...leftValues, ...rightValues];
}

// Example usage
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log(depthFirstTraversal(root));
