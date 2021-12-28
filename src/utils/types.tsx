export type TypePerson = {
  name: string;
  connectionList: TypePerson[];
};
export type TypePeople = {
  [name: string]: TypePerson;
};

export type TypeAddPersonComponent = {
  addToNetwork: (person: TypePerson) => void;
  connectTwoPeople: (person1: string, person2: string) => void;
};

export type TypeMutualConnectionComponent = {
  findMutualConnection: (
    person1: string,
    person2: string,
    visited?: Set<TypePerson>,
    paths?: string[][]
  ) => void;
};
