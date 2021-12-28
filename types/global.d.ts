declare type TypePerson = {
  name: string;
  connectionList: TypePerson[];
};
declare type TypePeople = {
  [name: string]: TypePerson;
};

declare type TypeAddPersonComponent = {
  addToNetwork: (personName: string) => void;
  connectTwoPeople: (person1: string, person2: string) => void;
};

declare type TypeMutualConnectionComponent = {
  people: string[];
  findMutualConnection: (
    person1: string,
    person2: string,
    visited?: Set<TypePerson>,
    paths?: string[][]
  ) => void;
};
