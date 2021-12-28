export type TypePerson = {
  name: string;
  connectionList: TypePerson[];
};
export type TypePeople = {
  [name: string]: TypePerson;
};
