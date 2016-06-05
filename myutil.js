const calCosSin = require('./utils/calCosSin');

//===
function myStatics() {
  const arr60= range(0,60);
  myStatics.CosSinTable60= arr60.map(function(v, i, arr) {
  return calCosSin(v * 6 - 90);
});

};
myStatics.Arr12 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
myStatics.CosSinTable = myStatics.Arr12.map(function(v, i, arr) {
  return calCosSin(v * 30 - 90);
  //return {cos:0.5*v, sin:0.5};
});

//===
function range(start, end) {
  var count = 0,
    step = 1;
  if (end > start) count = end - start;
  else {
    count = start - end;
    step = -1;
  }

  return Array.apply(0, Array(count))
    .map(function(element, index) {
      if (step == 1)
        return index + start;
      else 
        return start - index;
    });
}

myStatics(); //to initialized CosSinTable60
//===
module.exports.calCosSin = calCosSin;
module.exports.range = range;
module.exports.CosSinTable = myStatics.CosSinTable;
module.exports.CosSinTable60 = myStatics.CosSinTable60;