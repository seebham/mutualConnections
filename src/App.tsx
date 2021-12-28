import { useEffect } from "react";
import Network from "./utils/network";
import Person from "./utils/person";

function App() {
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

    console.log(network.DFS(Sameer, Bhaskar));
    // console.log(network.DFS(Kamalnath, Bhaskar));
  }, []);

  return <h1 className="App">Hello</h1>;
}

export default App;
