// Compute Decimal Representation

/**
 * @param {number} n
 * @return {number[]}
 */
var decimalRepresentation = function (n) {
  const result = [];

  while (n > 0) {
    const basae10Component =
      Math.pow(10, Math.floor(Math.log10(n))) *
      Math.floor(n / Math.pow(10, Math.floor(Math.log10(n))));
    result.push(basae10Component);
    n -= basae10Component;
  }

  return result;
};


// Example usage: 
console.log(decimalRepresentation(2321));
console.log(decimalRepresentation(102)); 
console.log(decimalRepresentation(11));  
console.log(decimalRepresentation(7));  



// Output: 
