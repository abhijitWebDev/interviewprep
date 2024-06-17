const graph = {
    a: ['b', 'c'],
    b: ['a', 'c', 'd'],
    c: ['a', 'b', 'd'],
    d: ['b', 'c'],
    e: ['f'],
    f: ['e'],
  };

  function bfs(graph, start) {
    const visited = new Set();
    const queue = [start];

    // processing the queue
    while(queue.length > 0 ) {
        const node = queue.shift();
        for(const neighbour of graph[node]) {
            if(!visited.has(neighbour)) {
                visited.add(neighbour);
                queue.push(neighbour);
            }
        }
    }

  }