const fibonacci = function(sequenceNumber) {
  if(Number(sequenceNumber) === 0) {
    return 0;
  } else if(Number(sequenceNumber) < 0) {
    return "OOPS"
  }
  let previous = 0;
  let current = 1;
  for(let i = 1; i < Number(sequenceNumber); i++) {
    let next = current + previous;
    previous = current;
    current = next;
  }
  return current;
};

// Do not edit below this line
module.exports = fibonacci;
