// class Node {
//     constructor(key) {
//         this.key = key;
//         this.left = null;
//         this.right = null;
//     }
    
// }

const depthFirstTraversal = (root) => {
    if(root === null) {
        return;
    }

    const values = [];
    const stack = [root];

    while (stack.length > 0) {
        const node = stack.pop();
        values.push(node.key);
        if(node.right !== null) {
            stack.push(node.right);
        }
        if(node.left !== null) {
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