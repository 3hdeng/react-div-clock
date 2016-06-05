import myutil from '../myutil.js';
//const myutil=require('../myutil.js');


var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai


describe('myutil test', function() {
  it('range(7,2) shd return [7,6,5,4,3] ', function() {
    var arr=myutil.range(7,2);
    console.log(arr);
    expect(arr[0]).to.equal(7);
    expect(arr[arr.length-1]).to.equal(3); 
  });
  
  it('CosSinTable60 result', function() {
    let arr=myutil.CosSinTable60;
    console.log(arr);
    expect(arr[0].sin).to.equal(-1.0);
    expect( Math.abs(arr[0].cos) <1.0e-10 );
    
    });
  
});