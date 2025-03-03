/* #doubleArray
 *
 * Takes in an array of numbers and returns an array with each element doubled
 *
 * @param {Array} // [1,2,3]
 * @return {Array} // [2,4,6]
 */
var doubleArray = function (arr){
  doubleArr = [];
  for (i=0;i<arr.length;i++){
    doubleArr.push(arr[i]*2);
  }
  return doubleArr;
};

/* #sumArrays
 *
 * Takes in two arrays of numbers and returns the sum of both arrays.
 *
 * @param {Array}
 * @param {Array}
 * @return {Number}
 */
var sumArrays = function (arr1,arr2){
  var sum=0;
  for (let i=0;i<arr1.length;i++){
    sum+= arr1[i];
  }
  for (let i=0;i<arr2.length;i++){
    sum+=arr2[i];
  }
  return sum;
};

/* #stringCount
 *
 * Takes in a string and returns the length of the string.
 *
 * @param {String}
 * @return {Number}
 */
var stringCount = function (str){
  return str.length;
};



/* #arrayLength
 *
 * Takes in an array and returns the length of the array.
 *
 * @param {Array}
 * @return {Number}
 */
var arrayLength = function (arr){
  return arr.length;
};

/* #countAll
 *
 * Takes in an array and returns the sum of all numbers in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countAll = function (arr){
  var sum = 0;
  for (i=0;i<arr.length;i++){
    if(typeof arr[i]!=='number'){
      sum = sum;
    }
    sum+=arr[i];
  }
  return sum;
};

/* #countStrings
 *
 * Takes in an array of strings and returns an array of string lengths.
 *
 * @param {Array}
 * @return {Array}
 */
var countStrings = function (arr){
  countArr = [];
  for (i=0;i<arr.length;i++){
    if(typeof arr[i]!=='string'){
      nothing= 0;
      countArr.push(nothing);
    }
    countArr.push(arr[i].length);
  }
  return countArr;
};

/* #countAllStrings
 *
 * Takes in an array of strings and returns the sum of all string lengths.
 *
 * @param {Array}
 * @return {Number}
 */
var countAllStrings = function (arr){
  var total = 0;
  var countArr = countStrings(arr);
  for (i=0; i<countArr.length;i++){
    total += countArr[i];
  }
  return total;
};

/* #convertToArray
 *
 * Takes in an object and returns all the values of the object in an array.
 *
 * @param {Object}
 * @return {Array}
 */
var convertToArray = function (obj){
  var valueArr = [];
  for (key in obj){
    valueArr.push (obj[key]);
  }
  return valueArr;
};

/* #objectSize
 *
 * Takes in an object and returns the number of key value pairs in the object.
 *
 * @param {Object}
 * @return {Number}
 */
var objectSize = function (obj){
  var total = 0;
  for (key in obj){
    total++;
  }

  return total;
};

/* #createZeroFilledArray
 *
 * Takes in a number and fills an array with that number of zeroes.
 *
 * @param {Number}
 * @return {Array}
 */
var createZeroFilledArray = function (num){
  var zeroArr = [];
  for (i=0; i<num;i++){
    zeroArr.push(0);
  }
  return zeroArr;
};

/* #poppedArray
 *
 * Takes in an array of numbers and returns an array of all but the last element of the array.
 *
 * @param {Array}
 * @return {Array}
 */
var poppedArray = function (arr){
  poppedArr = arr;
  poppedArr.pop();
  return poppedArr;
};

/* #splitString
 *
 * Takes in a string and returns an array of each individual character in the string.
 *
 * @param {String}
 * @return {Array}
 */
var splitString = function (str){
  arr = str.split("");
  return arr;

};

/* #lengthOfLast
 *
 * Takes in an array of strings and returns the length of the last string.
 *
 * @param {Array}
 * @return {Number}
 */
var lengthOfLast = function (arr){
  lastStr = arr[arr.length-1];
  return lastStr.length;
};

/* #sumBelowTen
 *
 * Takes in an array of numbers and returns the sum of all numbers below 10.
 *
 * @param {Array}
 * @return {Number}
 */
var sumBelowTen = function (arr){
  sum = 0;
  for (i=0;i<arr.length;i++){
    if(arr[i]>=10){
      sum = sum;
    }else{
      sum += arr[i];
    }
  }
  return sum;
};

/* #moreThanTenLetters
 *
 * Takes in an array of strings and returns the amount of elements that have more than ten letters.
 *
 * @param {Array}
 * @return {Number}
 */
var moreThanTenLetters = function (arr){
  var count = 0;
  var countArr = countStrings(arr);
  
  for (i=0;i<countArr.length;i++){
    if (countArr[i]>10){
      count++;
    }
  }
  return count;
};

/* #multiplyAll
 *
 * Takes in an array of numbers and returns the product of all elements.
 *
 * @param {Array}
 * @return {Number}
 */
var multiplyAll = function (arr){
  product = 1;
  for (i=0;i<arr.length;i++){
    product *= arr[i];
  }
  return product;
};

/* #sumAllPositive
 *
 * Takes in an array of numbers and returns the sum of all non-negative numbers.
 *
 * @param {Array}
 * @return {Number}
 */
var sumAllPositive = function (arr){
  var sumPositive = 0;
  for (i=0;i<arr.length;i++){
    if (arr[i]>0){
      sumPositive += arr[i];
    }
  }
  return sumPositive;
};

/* #stringCountBelowThree
 *
 * Takes in an array of strings and returns the amount of strings that have three characters or less.
 *
 * @param {Array}
 * @return {Number}
 */
var stringCountBelowThree = function (arr){
  var count = 0;
  var countArr = countStrings(arr);
  for (i=0;i<countArr.length;i++){
    if (countArr[i]<=3){
      count++;
    }
  }
  return count;
};

/* #countObjects
 *
 * Takes in an array of objects and returns the amount of objects in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countObjects = function (arr){
  count = 0;
  for (i=0;i<arr.length;i++){
    if (typeof arr[i]!=='object'){
      count = count;
    }
    count++;
  }
  return count;
};

/* #getObjectKeys
 *
 * Takes in an object and returns an array of all the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectKeys = function (obj){
  keyArr = [];
  for (key in obj){
    keyArr.push(key);
  }
  return keyArr;
};

/* #getObjectValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectValues = function (obj){
  var valuesArr = [];
  for (key in obj){
    valuesArr.push(obj[key]);
  }
  return valuesArr;
};

/* #makeObject
 *
 * Takes in two arguments 'key' and 'value' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Object}
 */
var makeObject = function (str1, str2){
  obj = {};
  obj[str1] = str2;
  return obj;
};

/* #makeObjectReverse
 *
 * Takes in two arguments 'value' and 'key' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Object}
 */
var makeObjectReverse = function (str1, str2){
  obj = {};
  obj[str2] = str1;
  return obj;
};

/* #tupleToObject
 *
 * Takes in a tuple (an array with two elements) and returns it into a single key-value pair in an object.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObject = function (arr){
  var arrObj = makeObject(arr[0],arr[1]);
  return arrObj;
};

/* #tupleToObjectReverse
 *
 * Takes in a tuple and returns it into a single key-value pair with second tuple element as key and first tuple element as value.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObjectReverse = function (arr){
  var arrObj = makeObjectReverse(arr[0],arr[1]);
  return arrObj;
};

/* #strToKeys
 *
 * Takes in an array of strings and returns an object with all string elements as the object's keys and all values set to 0.
 *
 * @param {Array}
 * @return {Object}
 */
var strToKeys = function (arr){
  var arrObj={};
  for (i=0;i<arr.length;i++){
    arrObj[arr[i]] = 0;
  }
  return arrObj;
};

/* #getValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
var getValues = getObjectValues;

/* #getKeys
 *
 * Takes in an object and returns an array of the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getKeys = getObjectKeys;

/* #objectToArray
 *
 * Takes in an object and returns an array of tuples where each tuple has 
 * the object's key as element 0 and object's value as element 1.
 *
 * @param {Object}
 * @return {Array}
 */
var objectToArray = function (obj){
  tupleArr = [];
  for (key in obj){
    var tuple = [];
    tuple.push (key);
    tuple.push (obj[key]);
    tupleArr.push(tuple);
  }
  return tupleArr;
};

/* #arrayToObject
 *
 * takes in an array and returns an object with keys set to the elements in the array and
 * all values set to false.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObject = function (arr){
  arrObj = strToKeys (arr);
  for (key in arrObj){
    arrObj[key] = false;
  }
  return arrObj;
};

/* #arraysToObject
 *
 * takes in two arrays, the first array elements will be keys of an object and second array elements 
 * will be values of an object.
 *
 * @param {Array}
 * @param {Array}
 * @return {Object}
 */
var arraysToObject = function (arr1,arr2){
  obj = strToKeys (arr1);
  i=0;
  for (key in obj){
    obj[key] = arr2[i];
    i++;
  }
  return obj;
};

/* #objectsToTuples
 *
 * takes in two objects and returns an array of tuples of the key value pairs of all objects in both arrays.
 *
 * @param {Object}
 * @param {Object}
 * @return {Array}
 */
var objectsToTuples = function (obj1, obj2){
  var arr1 = objectToArray(obj1);
  var arr2 = objectToArray(obj2);
  finalArr = arr1.concat(arr2);
  return finalArr;
};

/* #mapArrayValues
 *
 * takes in an array of strings and returns an object with keys of the array elements and values all set to True.
 *
 * @param {Array}
 * @return {Object}
 */
var mapArrayValues = function (arr){
  var obj = strToKeys(arr);
  for (key in obj){
    obj[key]=true;
  }
  return obj;
};

/* #mapStringCounts
 *
 * takes in an array of strings and returns an object with key names set to the elements in the array.
 * If the character count of the key name is greater than or equal to 5 set the value to true,
 * otherwise set to false.
 *
 * @param {Array}
 * @return {Object}
 */
var mapStringCounts = function (arr){
  var obj = strToKeys(arr)
  for (key in obj){
    if (key.length >=5){
      obj[key]=true;
    }else{
      obj[key]= false;
    }
  }
  return obj;
};

/* #arrayToObjectNums
 *
 * takes in an array of numbers and returns an object with keys set to 
 * each element of the array and all values set to true.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObjectNums = function (arr){
  var obj = strToKeys (arr)
  for (key in obj){
    obj[key]=true;
  }
  return obj;
};

/* #stringToKeys
 *
 * takes in a string and returns an object whos keys are each letter of the string and all values set to true.
 * 
 * @param {String}
 * @return {Object}
 */
var stringToKeys = function (str){
  var arr= splitString(str);
  var obj = arrayToObjectNums(arr);
  return obj;
};

/* #charCountMap
 *
 * takes in an array of strings and returns an object with keys set to each element of the array 
 * and values set to the character count of each key name.
 *
 * @param {Array}
 * @return {Object}
 */
var charCountMap = function (arr){
  var obj = strToKeys (arr);
  for (key in obj){
    obj[key]=key.length;
  }
  return obj;
};

/* #frequencyMap
 *
 * takes in an array of strings and returns an object with the string as the key and the number of occurences as the value.
 *
 * @param {String}
 * @return {Object}
 */
var frequencyMap = function (arr){
  // console.log(arr);
  var obj = {};
  for (i=0;i<arr.length;i++){
    count = 0;
    // console.log ("i lvl = " +arr[i]);
    for (j=0;j<arr.length;j++){
      if (arr[i]===arr[j]){
        count++;
      }
      // console.log("j lvl = " + arr[j]+", and the count is at "+count);
    }
    // console.log(count);
    obj[arr[i]]=count;
    // console.log(obj);
  }
  return obj;
};

/* #tupleConvertToObject
 *
 * takes in an array of tuples and and returns an object whos keys are 
 * the first element of the tuples and values are second element of the tuples.
 *
 * @param {String}
 * @return {Object}
 */
var tupleConvertToObject = function (arr){
  // console.log(arr)
  var obj = {};
  for (i=0;i<arr.length;i++){
    var keyValue = tupleToObject(arr[i]);
    // console.log(keyValue);
    for (key in keyValue){
      obj[key] = keyValue[key];
    }
  }
  // console.log(obj);
  return obj;
};


module.exports = {
  doubleArray: doubleArray,
  sumArrays: sumArrays,
  stringCount: stringCount,
  arrayLength: arrayLength,
  countAll: countAll,
  countStrings: countStrings,
  countAllStrings: countAllStrings,
  convertToArray: convertToArray,
  objectSize: objectSize,
  createZeroFilledArray: createZeroFilledArray,
  poppedArray: poppedArray,
  splitString: splitString,
  lengthOfLast: lengthOfLast,
  sumBelowTen: sumBelowTen,
  moreThanTenLetters: moreThanTenLetters,
  multiplyAll: multiplyAll,
  sumAllPositive: sumAllPositive,
  stringCountBelowThree: stringCountBelowThree,
  countObjects: countObjects,
  getObjectKeys: getObjectKeys,
  getObjectValues: getObjectValues,
  makeObject: makeObject,
  makeObjectReverse: makeObjectReverse,
  tupleToObject: tupleToObject,
  tupleToObjectReverse: tupleToObjectReverse,
  strToKeys: strToKeys,
  getValues: getValues,
  getKeys: getKeys,
  objectToArray: objectToArray,
  arrayToObject: arrayToObject,
  arraysToObject: arraysToObject,
  objectsToTuples: objectsToTuples,
  mapArrayValues: mapArrayValues,
  mapStringCounts: mapStringCounts,
  arrayToObjectNums: arrayToObjectNums,
  stringToKeys: stringToKeys,
  charCountMap: charCountMap,
  frequencyMap: frequencyMap,
  tupleConvertToObject: tupleConvertToObject
}
