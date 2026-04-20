const findTheOldest = function(people) {
  return people.reduce((pre, cur) =>
    pre && (pre.yearOfDeath ? pre.yearOfDeath - pre.yearOfBirth: new Date().getFullYear() - pre.yearOfBirth) >
    (cur.yearOfDeath ? cur.yearOfDeath - cur.yearOfBirth: new Date().getFullYear() - cur.yearOfBirth) ? pre : cur);
};

// Do not edit below this line
module.exports = findTheOldest;
