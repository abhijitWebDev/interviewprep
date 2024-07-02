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

    const treeBfs = (root) => {
        if(root === null) return 0;
        const queue = [root];
        let sum = 0;

        while(queue.length > 0) {
            const node = queue.shift();
            sum += node.key;

            if(node.left !== null) {
                queue.push(node.left);
            }

            if(node.right !== null) {
                queue.push(node.right);
            }

            

        }
        return sum
    }

    const treeSumDFS = (root) => {
        if(root === null) {
            return 0;
        };

        return root.key + treeSumDFS(root.left) + treeSumDFS(root.right);
    }   


    // Example usage:
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

console.log(treeBfs(root)); // Output: 28
console.log(treeSumDFS(root)); // Output: 28