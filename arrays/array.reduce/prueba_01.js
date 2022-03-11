const pets = [
  { name: "Mumita", type: "perra" },
  { name: "Frodo", type: "cui" },
  { name: "Luffy", type: "cui" },
  { name: "Barto", type: "cui" },
];

const indexed = pets.reduce(
  (acc, el) => ({
    ...acc,
    [el.name]: el,
  }),
  {}
);

console.log(indexed(""));
