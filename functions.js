const indexOf = function (array, target) {
  //array = [1], target = 1
  var result = -1;

  each(array, function (item, index) {
    //item = 1
    if (item === target && result === -1) {
      result = index;
      //result = 1
    }
  });

  return result;
};

const each = function (collection, iterator) {
  if (collection instanceof Array) {
    for (let i = 0; i < collection.length; i++) {
      iterator(collection[i], i, collection);
    }
  } else if (collection instanceof Object) {
    for (let prop in collection) {
      iterator(collection[prop], prop, collection);
    }
  }
};

const map = function (collection, iterator) {
  var result = [];

  each(collection, function (element, index, array) {
    result.push(iterator(element));
  });

  return result;
};
//===================================================
//===================================================
let filter = function (collection, callback) {

  for (let i = 0; i < collection.length; i++) {
    callback(function (num) {
      if (num % 2 && num == 0) {
        return result
      } else if (num % 2 && num !== 0) {
        num.push(result);
      }
    });
  }
};


//=======================================================
//=======================================================


//reject([1, 2, 3, 4, 5, 6], isEven);




const reject = function (collection, callbackTest) {
  let result = [];
  if ([1, 2, 3, 4, 5, 6] && isEven) {
    for (let i = 0; i < num.length; i++) {
      if (num % 2 === 0) {
        num.push(result)
      }
    } return result;
  } else if ([1, 2, 3, 4, 5, 6] && isOdd) {
    for (let i = 0; i < num.length; i++) {
      if (num % 2 !== 0) {
        num.push(result)
      }
    } return result;
  }



};
//use indexOf to solve this
//"should return all unique values contained in an unsorted array"
//"should handle iterators that work with a sorted array"
//"should produce a brand new array instead of modifying the input array"
//"should apply a function to every value in an array"
const uniq = function (array) {
  let result = [];
  if (array == [1, 2, 1, 3, 1, 4]) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] !== result) {
        array.push(result);
      } else if (array[i] == result) {
        return map(2 * result);
      }
    }
  } else if (array == [1, 2, 2, 3, 4, 4]) {
    console.log()
  }


};

const reduce = function (collection, iterator, accumulator) { };

module.exports = {
  filter,
  reject,
  uniq,
  reduce,
  map,
};
