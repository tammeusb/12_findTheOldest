const getAge = function(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth
}

const findTheOldest = function(people) {
    const sortByAge = people.sort((a,b) => {

        const firstAge = getAge(a.yearOfBirth, a.yearOfDeath);
        const secondAge = getAge(b.yearOfBirth, b.yearOfDeath);

        if (firstAge > secondAge) return 1
        if (firstAge < secondAge) return -1
    })
    return sortByAge[sortByAge.length - 1]
};

/*const getAge = function (birth, death) {
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
*/

//iterate through object, 





// Do not edit below this line
module.exports = findTheOldest;
