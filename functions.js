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
const filter = function (collection, callback) {

  for (let i = 0; i < collection.length; i++) {
    callback(function (num) {
      if (num % 2 && num == 0) {
        ;
      }
    }); return result
  }
};

const filter = function (collection, callback) {

  for (let i = 0; i < collection.length; i++) {
    callback(function (num) {
      if (num % 2 && num !== 0) {
        ;
      }
    }); return result;
  };
}


const filter = function (collection, callback) {
  let result = [];
  for (let i = 0; i < collection.length; i++) {
    callback(function (num) {
      if (num % 2 && num !== 0) {
        num.push(result);
      }
    }); return result;
  };
}


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
    }return result;
  } else if ([1, 2, 3, 4, 5, 6] && isOdd) {
    for (let i = 0; i < num.length; i++) {
      if (num % 2 !== 0) {
        num.push(result)
      }
    }return result;
  }



};
//use indexOf to solve this
const uniq = function (array) {


  
};

const reduce = function (collection, iterator, accumulator) { };

module.exports = {
  filter,
  reject,
  uniq,
  reduce,
  map,
};
