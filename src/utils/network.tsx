import { TypePerson, TypePeople } from "./types";

export default class Network {
  people: TypePeople;

  constructor(people: TypePeople) {
    this.people = people;
  }

  addToNetwork(person: TypePerson) {
    this.people[person.name] = person;
  }

  DFS(
    start: TypePerson,
    end: TypePerson,
    visited?: Set<TypePerson>,
    paths?: string[][]
  ) {
    // keep going until a leaf node or end node is found

    // console.log("Visiting node: ", start.value);
    if (!paths) paths = new Array([]);
    if (!visited) visited = new Set();

    // base case
    if (start.name === end.name) {
      // console.log("Found");
      paths[paths.length - 1].push(start.name);
      paths.push([]);
      return;
    }

    visited.add(start);

    // recursive case
    for (const connection of start.connectionList) {
      if (!visited.has(connection)) {
        paths[paths.length - 1].push(start.name);
        this.DFS(connection, end, visited, paths);
      }
    }
    return paths;
  }
}
