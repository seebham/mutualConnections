import { useEffect, useState } from "react";
import InputField from "./inputField";

export const NPerson = (name: string) => {
  return { name: name, connectionList: [] };
};

const AddPerson = ({
  addToNetwork,
  connectTwoPeople,
}: TypeAddPersonComponent) => {
  // useEffect(() => {
  //   const sameer = NPerson("Sameer");
  //   addToNetwork(sameer);

  //   const aayushi = NPerson("Aayushi");
  //   addToNetwork(aayushi);
  //   connectTwoPeople(sameer.name, aayushi.name);

  //   const bhaskar = NPerson("Bhaskar");
  //   addToNetwork(bhaskar);
  //   connectTwoPeople(aayushi.name, bhaskar.name);

  //   const kamalnath = NPerson("Kamalnath");
  //   addToNetwork(kamalnath);
  //   connectTwoPeople(sameer.name, kamalnath.name);

  //   const shantikumar = NPerson("ShantiKumar");
  //   addToNetwork(shantikumar);
  //   connectTwoPeople(kamalnath.name, shantikumar.name);

  //   connectTwoPeople(shantikumar.name, bhaskar.name);
  // }, []);

  const [state, setstate] = useState({});

  return (
    <div className="border-2 border-gray-600 flex flex-col p-4 rounded-lg">
      <div className="text-xl font-semibold">Add a person</div>
      <div>
        <InputField
          id="personName"
          name="personName"
          label="Name"
          placeholder={"eg. Sameer"}
          type="text"
          required
          spaceToOccupy={"w-1/3"}
        />
        <InputField
          id="relationship"
          name="relationship"
          label="Relationship Type"
          placeholder={"eg. Friend"}
          type="text"
          required={false}
          spaceToOccupy={"w-1/3"}
          datalist={["Friend"]}
        />
        <InputField
          id="relationTo"
          name="relationTo"
          label="Related to"
          placeholder={"eg. Aauyshi"}
          type="text"
          required={false}
          spaceToOccupy={"w-1/3"}
        />
      </div>
    </div>
  );
};

export default AddPerson;
