const sampleData = {
  Sameer: {
    name: "Sameer",
    connectionList: [
      {
        name: "Aayushi",
        connectionList: [
          {
            name: "Bhaskar",
            connectionList: [],
          },
        ],
      },
      {
        name: "Kamalnath",
        connectionList: [
          {
            name: "Shantikumar",
            connectionList: [
              {
                name: "Bhaskar",
                connectionList: [],
              },
            ],
          },
        ],
      },
    ],
  },
  Aayushi: {
    name: "Aayushi",
    connectionList: [
      {
        name: "Bhaskar",
        connectionList: [],
      },
    ],
  },
  Bhaskar: {
    name: "Bhaskar",
    connectionList: [],
  },
  Kamalnath: {
    name: "Kamalnath",
    connectionList: [
      {
        name: "Shantikumar",
        connectionList: [
          {
            name: "Bhaskar",
            connectionList: [],
          },
        ],
      },
    ],
  },
  Shantikumar: {
    name: "Shantikumar",
    connectionList: [
      {
        name: "Bhaskar",
        connectionList: [],
      },
    ],
  },
};

export default sampleData;
