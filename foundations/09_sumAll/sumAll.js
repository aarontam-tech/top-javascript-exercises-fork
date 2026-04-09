const sumAll = function(int1, int2) {
  if((Number.isInteger(int1) && int1 >= 0) && (Number.isInteger(int2) && int2 >= 0)) {
    let lesserInt = Math.min(int1, int2),
      greaterInt = Math.max(int1, int2),
      sum = greaterInt * (greaterInt + 1) / 2 - (lesserInt - 1) * lesserInt / 2;
    return sum;
  }
  return 'ERROR';
};

// Do not edit below this line
module.exports = sumAll;
