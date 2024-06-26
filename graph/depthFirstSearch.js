const graph = {
  a: ['b', 'c'],
  b: ['a', 'c', 'd'],
  c: ['a', 'b', 'd'],
  d: ['b', 'c'],
  e: ['f'],
  f: ['e'],
};
// itterative way
function dfs(graph, start) {
  const stack = [start];
  const visited = new Set();

  while (stack.length > 0) {
    const node = stack.pop();
    if (!visited.has(node)) {
      visited.add(node);

      // ploting neighbours
      for (const neighbour of graph[node]) {
        if (!visited.has(neighbour)) {
          stack.push(neighbour);
        }
      }
    }
  }
}

// recursive way


function recDfs(graph, start, visited = new Set()) {
    if(!visited.has(start)) {
        visited.add(start);
        for(const neighbour of graph[start]) {
            recDfs(graph, neighbour, visited);
        }
    }
}

console.log(recDfs(graph, 'b'));


