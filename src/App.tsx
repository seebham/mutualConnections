import { useEffect, useState } from "react";
import AddPerson from "./components/addPerson";
import MutualConnection from "./components/mutualConnection";
import Network from "./utils/network";
import Person from "./utils/person";

function App() {
  const [network, setNetwork] = useState<TypePeople>({});

  const addPersonToNetwork = (person: TypePerson) => {
    network[person.name] = person;
    setNetwork({ ...network });
  };

  const connectTwoPeople = (person1: string, person2: string) => {
    network[person1].connectionList.push(network[person2]);

    // For Undirected graph which this should be because friendship is always two-way!
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
    const network = new Network({});

    const Sameer = new Person("Sameer");
    network.addToNetwork(Sameer);

    const Aayushi = new Person("Aayushi");
    network.addToNetwork(Aayushi);
    Sameer.connect(Aayushi);

    const Bhaskar = new Person("Bhaskar");
    network.addToNetwork(Bhaskar);
    Aayushi.connect(Bhaskar);

    const Kamalnath = new Person("Kamalnath");
    network.addToNetwork(Kamalnath);
    Sameer.connect(Kamalnath);

    const ShantiKumar = new Person("ShantiKumar");
    network.addToNetwork(ShantiKumar);
    Kamalnath.connect(ShantiKumar);

    ShantiKumar.connect(Bhaskar);

    // console.log(network.people);
    // setNetwork(network);

    // console.log(network.DFS(Sameer, Bhaskar));
    // console.log(network.DFS(Kamalnath, Bhaskar));
  }, []);

  useEffect(() => {
    console.log(network);
  }, [network]);

  return (
    <main className="container mx-auto p-2 flex flex-col gap-2">
      <AddPerson
        addToNetwork={addPersonToNetwork}
        connectTwoPeople={connectTwoPeople}
      />
      <MutualConnection findMutualConnection={findMutualConnection} />
    </main>
  );
}

export default App;
