const findTheOldest = function(people) {
    const sortedByAge = people.sort((a,b) => {
        if (a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - a.yearOfBirth) return 1
        if (a.yearOfDeath - a.yearOfBirth < b.yearOfDeath - a.yearOfBirth) return -1
    })
    return sortedByAge[sortedByAge.length - 1]
};


//iterate through object, 

const peopleTest = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
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
