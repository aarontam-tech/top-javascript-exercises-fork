const removeFromArray = function(array, ...removalTargets) {
  let newArray = [];
  let keep;
  for(let i = 0; i < array.length; i++) {
    keep = true;
    for(let j = 0; j < removalTargets.length && keep; j++) {
      if(array[i] === removalTargets[j]) {
        keep = false;
      }
    }
    if(keep) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
