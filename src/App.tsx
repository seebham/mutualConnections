import { useEffect, useState } from "react";
import AddPerson, { NPerson } from "./components/addPerson";
import MutualConnection from "./components/mutualConnection";
import NetworkView from "./components/networkView";

function App() {
  const [network, setNetwork] = useState<TypePeople>({});

  const addPersonToNetwork = (personName: string) => {
    let newPerson = NPerson(personName);
    network[personName] = newPerson;
    setNetwork({ ...network });
  };

  const connectTwoPeople = (person1: string, person2: string) => {
    network[person1].connectionList.push(network[person2]);

    // Below line is for Undirected graph which this should be because friendship is always two-way!
    // But after observing the sample outputs I am assuming this is a one-way relationship, so directed graph XD
    // network[person2].connectionList.push(network[person1]);

    setNetwork({ ...network });
  };

  const findMutualConnection = (
    person1: string,
    person2: string,
    visited?: Set<TypePerson>,
    paths?: string[][]
  ) => {
    let start = network[person1];
    let end = network[person2];

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
        findMutualConnection(connection.name, end.name, visited, paths);
      }
    }
    return paths;
  };

  useEffect(() => {
    console.log(network);
  }, [network]);

  return (
    <main className="container mx-auto p-2 flex flex-col gap-2">
      <NetworkView networkData={network} addToNetwork={addPersonToNetwork} />
      <AddPerson
        addToNetwork={addPersonToNetwork}
        connectTwoPeople={connectTwoPeople}
      />
      <MutualConnection findMutualConnection={findMutualConnection} />
    </main>
  );
}

export default App;
