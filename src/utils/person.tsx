import { TypePerson } from "./types";
export default class Person {
  name: string;
  connectionList: TypePerson[];

  constructor(name: string) {
    this.name = name;
    this.connectionList = [];
  }

  connect(person: TypePerson) {
    this.connectionList.push(person);

    // For Undirected graph which this should be because friendship is always two-way!
    // But after observing the sample outputs I am assuming this is a one-way relationship, so directed graph XD
    // person.connectionList.push(this);
  }

  getConnections() {
    return this.connectionList;
  }

  isConnected(person: TypePerson) {
    return this.connectionList.some((edge) => edge === person);
  }
}

export const NPerson = (name: string) => {
  return { name: name, connectionList: [] };
};
