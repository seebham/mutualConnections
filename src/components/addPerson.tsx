import { useEffect } from "react";
import { NPerson } from "../utils/person";
import { TypeAddPersonComponent } from "../utils/types";
const AddPerson = ({
  addToNetwork,
  connectTwoPeople,
}: TypeAddPersonComponent) => {
  useEffect(() => {
    const sameer = NPerson("Sameer");
    addToNetwork(sameer);

    const aayushi = NPerson("Aayushi");
    addToNetwork(aayushi);
    connectTwoPeople(sameer.name, aayushi.name);

    const bhaskar = NPerson("Bhaskar");
    addToNetwork(bhaskar);
    connectTwoPeople(aayushi.name, bhaskar.name);

    const kamalnath = NPerson("Kamalnath");
    addToNetwork(kamalnath);
    connectTwoPeople(sameer.name, kamalnath.name);

    const shantikumar = NPerson("ShantiKumar");
    addToNetwork(shantikumar);
    connectTwoPeople(kamalnath.name, shantikumar.name);

    connectTwoPeople(shantikumar.name, bhaskar.name);
  }, []);
  return (
    <div className="border-2 border-gray-600 flex flex-col p-4 rounded-lg">
      <div className="text-xl font-semibold">Add a person</div>
    </div>
  );
};

export default AddPerson;
