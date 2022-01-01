import { useEffect, useState } from "react";
import MutualConnection from "./components/mutualConnection";
import NetworkView from "./components/networkView";
import sampleData from "../sampleData";

const NPerson = (name: string) => {
  return { name: name, connectionList: [] };
};

function App() {
  const [network, setNetwork] = useState<TypePeople>({});
  const [paths, setPaths] = useState<string[][]>();

  useEffect(() => {
    console.log(paths);
  }, [paths]);

  useEffect(() => {
    if (!localStorage.getItem("networkData")) return;
    let data = JSON.parse(localStorage.getItem("networkData")!);
    setNetwork(data);
  }, []);

  useEffect(() => {
    localStorage.setItem("networkData", JSON.stringify(network));
  }, [network]);

  const loadSampleData = () => {
    localStorage.setItem("networkData", JSON.stringify(network));
    setNetwork(sampleData);
  };

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
    visited: Set<TypePerson>,
    path: string[]
  ) => {
    let start = network[person1];
    let end = network[person2];

    // keep going until a leaf node or end node is found

    if (!path) return;
    if (!visited) return;

    visited.add(start);
    path.push(start.name);

    // base case
    if (start.name === end.name) {
      // console.log("Found");

      const tempPath = [...path];
      setPaths((prevPaths) => {
        if (!prevPaths) {
          let arr: string[][] = new Array();
          arr.push([...tempPath]);
          return arr;
        }
        return [...prevPaths, tempPath];
      });
    } else {
      // recursive case
      for (const connection of start.connectionList) {
        if (!visited.has(connection)) {
          findMutualConnection(connection.name, end.name, visited, path);
        }
      }
    }

    path.pop();
    visited.delete(start);
  };

  const handleFindMutualConnection = (person1: string, person2: string) => {
    setPaths(undefined);

    let visited = new Set<TypePerson>();
    let path: string[] = new Array();

    findMutualConnection(person1, person2, visited, path);
  };

  return (
    <main className="container mx-auto p-2 flex flex-col gap-2">
      <NetworkView
        networkData={network}
        addToNetwork={addPersonToNetwork}
        connectTwoPeople={connectTwoPeople}
        loadSampleData={loadSampleData}
      />
      {/* <AddPerson
        addToNetwork={addPersonToNetwork}
        connectTwoPeople={connectTwoPeople}
      /> */}
      <MutualConnection
        people={Object.keys(network)}
        findMutualConnection={handleFindMutualConnection}
        foundPaths={paths}
      />
    </main>
  );
}

export default App;
