/*
  This function should accept an array as a parameter.
  It should return an object that contains the number of times each unique
    value showed up in the array.

  For instance, [ "a", "b", "c", "b" ] would produce { "a": 1, "b": 2, "c": 1 }
*/
var frequency = function(array) {
  var number = {};
  for(var i = 0; i < array.length; i++){  
    // Key already exists and has a frequency count
    if (array[i] in number){
      // Increment that count by 1
      number[ array[i] ] += 1
    }
    // Key doesnt exist
    else {
      // Create key and start 1
      number[ array[i] ] = 1
    }
  }
  return number;
}


/*
  This function should accept an array as a parameter.
  It should return an array that contains the unique values that showed up in the array.
  (Order of the values in the resulting array is not important.)

  For instance, [ "a", "b", "c", "b" ] would produce [ "a", "b", "c" ].
*/
var unique = function(array) {
  var number = [];
  for (var i = 0; i <array.length; i++){
    //check if array[i] exists already in numbers
    //numbers.indexOf(array[i]) ---- if true, returns the index position of the element searched for. if false returns -1
    var temp = number.indexOf(array[i])

    //does temp exist  or not? (-1)
    if (temp === -1){
      number.push(array[i])

  }
  }
  return number;
} 
/*
  This function should accept a number as a parameter.
  It should return the value of the number times 3.
*/
var tripler = function(number) {
  return number * 3

}

/*
  This function should accept an object as a parameter.
  It should return the object with all of its *values* tripled.
*/
var objectTripler = function(object) {
  for(var i in object){
    object[i] = object[i] * 3
  }
  return object;
}



/*
  This function should accept two objects as parameters.
  It should return a single object that combines the properties of both the parameters.
  If a property is on both objects, use the value of the property on the left.

  For instance, ({ a: 1, b: 2 } and { b: 9, c: 3 }) would produce { a: 1, b: 2, c: 3 }
*/
var extend = function(left, right) {
  var direction= {}

  for(var i in right){
    direction[i] = right[i]
  }

  for (var i in left){
    direction[i] = left[i]; 
   }
   console.log(direction)
   return direction
}
/*
  This function should accept two parameters: an array of objects, and a string.
  It should return an array. The array should contain the values of 
    the named property in each object in the array.

  For instance, [{a: 1, b: 2}, {a: 3, c: 4}] for "a" would produce [1, 3]
*/
var pluck = function(arrayOfObjects, string) {
  var stuff = []; 
  for (var i = 0; i < arrayOfObjects.length; i++){
    var object = arrayOfObjects[i]
     
    stuff.push(object[string])

  }

  return stuff
}
