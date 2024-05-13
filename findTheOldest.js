const findTheOldest = function(people) {
    const sortedByAge = people.sort((a,b) => {
        if ('yearOfDeath' in a === false) a.yearOfDeath = new Date().getFullYear();
        if ('yearOfDeath' in b === false) b.yearOfDeath = new Date().getFullYear();
        if (a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth) return 1
        if (a.yearOfDeath - a.yearOfBirth < b.yearOfDeath - b.yearOfBirth) return -1
    })
    return sortedByAge[sortedByAge.length - 1]
};


//iterate through object, 

const peopleTest = [
    {
      name: "Carly",
      yearOfBirth: 2018,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]



// Do not edit below this line
module.exports = findTheOldest;
