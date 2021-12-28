import React, { useRef, useState } from "react";
import InputField from "./inputField";
import PeopleDropdown from "./peopleDropDown";
import Vertex from "./vertex";

type TypePersonInNetworkView = {
  personName: string;
  connectionList: TypePerson[];
  people: string[];
  connectTwoPeople: (person1: string, person2: string) => void;
};

const PersonInNetworkView = ({
  personName,
  connectionList,
  people,
  connectTwoPeople,
}: TypePersonInNetworkView) => {
  const addConnectionNameRef = useRef<HTMLSelectElement>(null);

  const handleAddConnection = (person1Name: string) => {
    if (!addConnectionNameRef.current?.value) return;
    connectTwoPeople(person1Name, addConnectionNameRef.current.value);
  };
  return (
    <div key={personName} className="p-4 flex flex-row items-center gap-2">
      <Vertex name={personName} />
      <div className="flex-1 flex items-center flex-row flex-wrap gap-2">
        {connectionList.length > 0 ? (
          <div>--&gt; Friends:</div>
        ) : (
          <div>No Connections</div>
        )}
        {connectionList.map((connection, ind) => (
          <div key={connection.name} className="flex flex-row flex-wrap gap-1">
            <Vertex name={connection.name} />{" "}
            {/* {ind === Object.entries(networkData).length ? ", " : ""} */}
          </div>
        ))}
      </div>
      <div className="flex px-3 py-1 border-2 border-gray-600 rounded-md ml-10">
        <PeopleDropdown
          people={people}
          inputRef={addConnectionNameRef}
          exclude={personName}
        />
        <button
          className="ml-2 font-semibold"
          onClick={() => handleAddConnection(personName)}
        >
          Connect
        </button>
      </div>
    </div>
  );
};

type TypeNetworkViewComponent = {
  networkData: TypePeople;
  addToNetwork: (personName: string) => void;
  connectTwoPeople: (person1: string, person2: string) => void;
};

const NetworkView = ({
  networkData,
  addToNetwork,
  connectTwoPeople,
}: TypeNetworkViewComponent) => {
  const [addPerson, setAddPerson] = useState(false);
  const addInputFieldRef = useRef<HTMLInputElement>(null);
  const addConnectionNameRef = useRef<HTMLSelectElement>(null);

  const handleAddPerson = () => {
    if (!addInputFieldRef.current?.value) return;

    addToNetwork(addInputFieldRef.current?.value);
    addInputFieldRef.current.value = "";
  };

  const handleAddConnection = (person1Name: string) => {
    if (!addConnectionNameRef.current?.value) return;

    console.log(
      `Person1: ${person1Name}, 2: ${addConnectionNameRef.current.value}`
    );
    console.log(addConnectionNameRef.current);

    connectTwoPeople(person1Name, addConnectionNameRef.current.value);
  };

  return (
    <div className="p-4 flex flex-col divide-y-2">
      {networkData
        ? Object.entries(networkData).map((person) => (
            <PersonInNetworkView
              personName={person[0]}
              connectionList={person[1].connectionList}
              people={Object.keys(networkData)}
              connectTwoPeople={connectTwoPeople}
              key={person[0]}
            />
          ))
        : null}
      <div className="p-4 flex flex-row items-center gap-4">
        <div
          className={`p-2 px-4 border-2 border-gray-600 rounded-full w-fit h-fit cursor-pointer ${
            addPerson ? "bg-gray-50 text-black" : "bg-gray-600 text-gray-50"
          }`}
          onClick={() => setAddPerson((state) => !state)}
        >
          Add Person
        </div>

        {addPerson ? (
          <div className="flex flex-col items-end border-2 border-gray-600 p-2 border-dashed">
            <InputField
              inputRef={addInputFieldRef}
              id="personName"
              name="personName"
              label="Name"
              placeholder={"eg. Sameer"}
              type="text"
              required
            />
            <button
              className="mt-1 px-4 py-1 bg-black text-gray-50 rounded-lg"
              onClick={handleAddPerson}
            >
              Add
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default NetworkView;
