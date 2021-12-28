import React, { useRef, useState } from "react";
import InputField from "./inputField";
import Vertex from "./vertex";

type TypeNetworkViewComponent = {
  networkData: TypePeople;
  addToNetwork: (personName: string) => void;
};

const NetworkView = ({
  networkData,
  addToNetwork,
}: TypeNetworkViewComponent) => {
  const [addPerson, setAddPerson] = useState(false);
  const addInputFieldRef = useRef<HTMLInputElement>(null);

  const handleAddPerson = () => {
    if (!addInputFieldRef.current?.value) return;

    addToNetwork(addInputFieldRef.current?.value);
    addInputFieldRef.current.value = "";
  };

  return (
    <div className="p-4 flex flex-col divide-y-2">
      {networkData
        ? Object.entries(networkData).map((person) => (
            <div key={person[0]} className="p-4 flex flex-row gap-1">
              <Vertex name={person[0]} />
              {person[1].connectionList.length > 0 ? " -->> Friends: " : null}
              {person[1].connectionList.map((connection, ind) => (
                <span key={connection.name} className="flex flex-row">
                  <Vertex name={connection.name} />{" "}
                  {ind === Object.entries(networkData).length ? ", " : ""}
                </span>
              ))}
            </div>
          ))
        : null}
      <div className="p-4 flex flex-row items-center gap-4">
        <div
          className="p-2 px-4 border-2 border-gray-600 rounded-full w-fit h-fit"
          onClick={() => setAddPerson(true)}
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
