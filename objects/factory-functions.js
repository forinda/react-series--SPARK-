/**
 * Factory functions
 */
// User -> View -> Controller -> Service -> Dao/Repository -> DB(sql,nosql)

// Voting system -> age,Identification number
function votingSystem(minVotingAge) {
  return function (id, age) {
    try {
      if (isNaN(minVotingAge)) {
        throw Error("Minimum voting age not a number");
      }
      if (isNaN(age)) {
        throw Error("Age not a number");
      }
      if (age < minVotingAge) {
        throw Error("User is underage");
      }
      if (!id) {
        throw Error("Id required");
      }
      console.log({ voted: true, id });
    } catch (error) {
      console.log(error.message);
    }
  };
}

votingSystem(18)("234", 14);
