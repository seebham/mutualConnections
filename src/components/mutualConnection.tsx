import { useRef, useState } from "react";
import Path from "./path";
import PeopleDropdown from "./peopleDropDown";
import Vertex from "./vertex";

const MutualConnection = ({
  people,
  findMutualConnection,
  foundPaths,
}: TypeMutualConnectionComponent) => {
  const person1Ref = useRef<HTMLSelectElement>(null);
  const person2Ref = useRef<HTMLSelectElement>(null);

  const handleFindConnection = () => {
    if (!person1Ref.current?.value) return;
    if (!person2Ref.current?.value) return;

    findMutualConnection(person1Ref.current.value, person2Ref.current.value);
    // console.log(foundPaths);
  };

  return (
    <div className="border-2 border-gray-600 flex flex-col p-4 rounded-lg">
      <div className="text-xl font-semibold">Find connection</div>
      <div className="flex items-center gap-2 mt-4">
        <div className="">How does</div>
        <PeopleDropdown people={people} inputRef={person1Ref} hideLabel />
        <div className="">knows</div>
        <PeopleDropdown people={people} inputRef={person2Ref} hideLabel />
        <div>?</div>
        <button
          onClick={handleFindConnection}
          className="border-2 border-gray-600 px-2 rounded-xl ml-4 hover:bg-gray-600 hover:text-gray-50 transition-all"
        >
          Find
        </button>
      </div>
      {foundPaths && foundPaths.length > 0 && (
        <div className="p-4 flex flex-col gap-4">
          {foundPaths.map((path, ind) => (
            <div key={ind} className="flex items-center">
              <div className="mr-4">{ind + 1}:</div>
              <Path path={path} />
            </div>
          ))}
        </div>
      )}
      {(foundPaths !== null && foundPaths === undefined) ||
      foundPaths?.length === 0 ? (
        <div className="p-2 underline">No Connections</div>
      ) : null}
    </div>
  );
};

export default MutualConnection;
