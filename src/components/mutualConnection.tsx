import { useEffect, useRef } from "react";
import PeopleDropdown from "./peopleDropDown";

const MutualConnection = ({
  people,
  findMutualConnection,
}: TypeMutualConnectionComponent) => {
  const person1Ref = useRef<HTMLSelectElement>(null);
  const person2Ref = useRef<HTMLSelectElement>(null);

  const handleFindConnection = () => {
    if (!person1Ref.current?.value) return;
    if (!person2Ref.current?.value) return;

    console.log(
      findMutualConnection(person1Ref.current.value, person2Ref.current.value)
    );
  };

  return (
    <div className="border-2 border-gray-600 flex flex-col p-4 rounded-lg">
      <div className="text-xl font-semibold">Find the connection</div>
      <PeopleDropdown people={people} inputRef={person1Ref} />
      <PeopleDropdown people={people} inputRef={person2Ref} />
      <button onClick={handleFindConnection}>Find Connection</button>
    </div>
  );
};

export default MutualConnection;
