// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // set result var equal to empty string
  var result = '';
  // if object is numbers
  if (typeof obj === 'number') {
    // concat toString value
    result += obj.toString();
  }
  if (obj === null) {
    return 'null';
  }
  if (obj === true) {return 'true';}
  if (obj === false) {return 'false';}

  // if object is a string then concat to result
    // return result var
  if (typeof obj === 'string') {return result.concat('"' + obj + '"');}

  // if object is an array
  if (Array.isArray(obj)) {
        // iterate over array
    for (var i = 0; i < obj.length; i++) {
      obj[i]
    }
  }

      // sent current index thru main function
  // otherwise, if typeof obj is object
    // for each key/value? in obj thru main function
  return result;
};

'[a, b, c]'
'{key: value}'
/*
turn everyting into a string
 - strings
   - concat strings
 - numbers
 - objects
   - typeof object (if array test fails)
 - arrays
   - use Array.isArray()

 Tests:
 - fill in expected result
*/