import { useEffect } from "react";

const MutualConnection = ({
  findMutualConnection,
}: TypeMutualConnectionComponent) => {
  useEffect(() => {
    // console.log(findMutualConnection("Sameer", "Bhaskar"));
    // console.log(findMutualConnection("Kamalnath", "Bhaskar"));
  }, []);

  return (
    <div className="border-2 border-gray-600 flex flex-col p-4 rounded-lg">
      <div className="text-xl font-semibold">Find the connection</div>
    </div>
  );
};

export default MutualConnection;
