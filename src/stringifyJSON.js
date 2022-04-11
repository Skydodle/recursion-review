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
    return result;
  }
  if (obj === null) {
    return 'null';
  }
  if (obj === true) {return 'true';}
  if (obj === false) {return 'false';}

  // if object is a string then concat to result
    // return result var
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  // if object is an array
  if (Array.isArray(obj)) {
    // create var container
    var container = '';
    // iterate over array
    for (var i = 0; i < obj.length; i++) {
      container += stringifyJSON(obj[i]);
      if (i < obj.length - 1) {
        container += ',';
      }
    }
    return '[' + container + ']';
  } else if (typeof obj === 'object') {
    var container = '';
    //console.log(JSON.stringify( {'foo': true, 'bar': false, 'baz': null}))
    for (var key in obj) {
      var stringKey = stringifyJSON(key);
      var stringValue = stringifyJSON(obj[key]);
      if (typeof obj[key] === 'function' || typeof obj[key] === 'undefined') {
        return '{}';
      }
      container += stringKey + ':' + stringValue + ',';
      console.log(container);
    }
    return '{' + container.substr(0, container.length -1) + '}';
  }

      // sent current index thru main function
  // otherwise, if typeof obj is object
    // for each key/value? in obj thru main function
  //return '{}';
};

// LAST TEST: expected '{"functions":{},"undefined":{}}' to equal '{}'

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