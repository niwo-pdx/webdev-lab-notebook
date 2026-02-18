const characters = [
  { id: 1, name: "Arya", house: "Stark" },
  { id: 4, name: "Sansa", house: "Stark" },
  { id: 16, name: "Eddard", house: "Stark" },
  { id: 17, name: "Catelyn", house: "Stark" },
  { id: 20, name: "Robb", house: "Stark" },
  { id: 28, name: "Rickon", house: "Stark" },
  { id: 40, name: "Jaime", house: "Lannister" },
  { id: 41, name: "Cersei", house: "Lannister" },
  { id: 42, name: "Tyrion", house: "Lannister" },
  { id: 50, name: "Tywin", house: "Lannister" },
  { id: 53, name: "Kevan", house: "Lannister" },
  { id: 75, name: "Daenerys", house: "Targaryen" },
  { id: 77, name: "Viserys", house: "Targaryen" },
  { id: 81, name: "Rhaegar", house: "Targaryen" },
  { id: 83, name: "Theon", house: "Greyjoy" },
  { id: 84, name: "Yara", house: "Greyjoy" },
  { id: 87, name: "Davos", house: "Seaworth" },
  { id: 88, name: "Brienne", house: "Tarth" },
];

const mapNameFamily = (characters) => {
  // Return an array with the name and house of each character
  // Format: "Arya, of House Stark"

  // getting another array back, need to store it in a different variable
  /* const nameFamily = characters.map((item) => item.name);

  could also write this ^^ function as:
  const nameFamily = characters.map(function(item) {
    return item.name;
  }*/

  // editing first iteration of function:
  // now we need to format - use template literals for this
  const nameFamily = characters.map(
    (item) => `${item.name}, of House ${item.house}`,
  );

  return nameFamily;
};

const filterFamily = (characters, house) => {
  // Return an array with only the characters from a given house

  // iterate for array, and for every item check a specific function
  // if that function returns true, we add that specific item to an array
  // and the results of the filter function will be this new array

  const houses = characters.filter((item) => item.house === house);

  return houses;
};

const reduceHouses = (characters) => {
  // Return an object with the number of characters from each house

  // iterate through every item in the array and add up some aspect of it
  // in this case it's number of characters in each house
  // need current item AND accumulator (accumulator is the result)
  // accumulator can be a number but also can be something like an object

  /*  EXAMPLE with IDs
  const reducer = (accumulator, current) => accumulator + current.id;
  const sum = characters.reduce(reducer, 0);
      ALTERNATIVE:
  const sum = characters.reduce(
    (accumulator, current) => accumulator + current.id,
    0,
  );*/

  // need to create an object & add house names as keys,
  // then add num of diff characters to value associated w/ that key

  /*const obj = {
    Stark: 0,
    Lannister: 0,
    Targaryen: 0,
    Greyjoy: 0,
    Seaworth: 0,
    Tarth: 0,
  };

  const houses = characters.reduce((acc, curr) => {
    if (acc.hasOwnProperty(curr.house)) {
      acc[curr.house]++;
    }

    return acc;
  }, obj);*/

  // now let's start with an empty object instead of hardcoding it
  // and add to it as you go along

  /*  const houses = characters.reduce((acc, curr) => {
    if (acc.hasOwnProperty(curr.house)) {
      acc[curr.house]++;
    } else {
      acc[curr.house] = 1;
      // ^^ if it doesn't exist we create it (set to 1 to increment)
    }

    return acc;
  }, {});

  return houses;
};*/

  // ANOTHER WAY: using the ternary operator
  const houses = characters.reduce((acc, curr) => {
    acc.hasOwnProperty(curr.house) ? acc[curr.house]++ : (acc[curr.house] = 1);
    // ^^ if it doesn't exist we create it (set to 1 to increment)

    return acc;
  }, {});
  return houses;
};

console.log(mapNameFamily(characters));
// [
//   'Arya, of House Stark',
//   'Sansa, of House Stark',
//   'Eddard, of House Stark',
//   'Catelyn, of House Stark',
//   'Robb, of House Stark',
//   'Rickon, of House Stark',
//   'Jaime, of House Lannister',
//   'Cersei, of House Lannister',
//   'Tyrion, of House Lannister',
//   'Tywin, of House Lannister',
//   'Kevan, of House Lannister',
//   'Daenerys, of House Targaryen',
//   'Viserys, of House Targaryen',
//   'Rhaegar, of House Targaryen',
//   'Theon, of House Greyjoy',
//   'Yara, of House Greyjoy',
//   'Davos, of House Seaworth',
//   'Brienne, of House Tarth'
// ]

console.log(filterFamily(characters, "Stark"));
// [
//   { id: 1, name: 'Arya', house: 'Stark' },
//   { id: 4, name: 'Sansa', house: 'Stark' },
//   { id: 16, name: 'Eddard', house: 'Stark' },
//   { id: 17, name: 'Catelyn', house: 'Stark' },
//   { id: 20, name: 'Robb', house: 'Stark' },
//   { id: 28, name: 'Rickon', house: 'Stark' }
// ]

// console.log(filterFamily(characters, "Lannister"));

console.log(filterFamily(characters, "Greyjoy"));
// [
//   { id: 83, name: 'Theon', house: 'Greyjoy' },
//   { id: 84, name: 'Yara', house: 'Greyjoy' }
// ]

console.log(reduceHouses(characters));
// {
//   Stark: 6,
//   Lannister: 5,
//   Targaryen: 3,
//   Greyjoy: 2,
//   Seaworth: 1,
//   Tarth: 1
// }
