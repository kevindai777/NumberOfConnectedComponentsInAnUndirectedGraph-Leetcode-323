//Objective is to find the number of connected components in an undirected graph

let edges = [[0, 1], [1, 2], [2, 3], [3, 4]], n = 5


//O(n) solution where n is the number of vertices in a graph
//We use DFS to visit the entirety of a specific component

let count = 0
let graph = new Map()

for (let edge of edges) {
    if (!graph.has(edge[0])) {
        graph.set(edge[0], [])
    }
    graph.get(edge[0]).push(edge[1])
    
    if (!graph.has(edge[1])) {
        graph.set(edge[1], [])
    }
    graph.get(edge[1]).push(edge[0])
}

let visited = new Set()
for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
        count++
        dfs(graph, i, visited)
    }
}

function dfs(graph, i, visited) {
    visited.add(i)
    if (graph.get(i)) {
        for (let neighbor of graph.get(i)) {
            if (!visited.has(neighbor)) {
                dfs(graph, neighbor, visited)
            }
        }    
    }
}

return count