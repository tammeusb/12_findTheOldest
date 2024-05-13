/*const findTheOldest = function(people) {
    const sortByAge = people.sort((a,b) => {
        const currentDate = new Date().getFullYear();

        if ('yearOfDeath' in a === false) a.yearOfDeath = currentDate;
        if ('yearOfDeath' in b === false) b.yearOfDeath = currentDate;

        if (a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth) return 1
        if (a.yearOfDeath - a.yearOfBirth < b.yearOfDeath - b.yearOfBirth) return -1
    })
    return sortedByAge[sortedByAge.length - 1]
};*/

const getAge = function (birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
  };
  
  const findTheOldest = function (people) {
    return people.reduce((oldest, currentPerson) => {
      const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
      const currentAge = getAge(
        currentPerson.yearOfBirth,
        currentPerson.yearOfDeath
      );
      return oldestAge < currentAge ? currentPerson : oldest;
    });
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
