const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// ANSWER

// The append function scales better than the insert function
// Append is scaling less aggressively than insert, because the unshift method is adding numbers to the beginning of the array, thus causing more runtime to be
// Needed in order to shift the values in the array, while push is merely adding the values to the end of the array.
// Because insert is causing the entire array to shift with each entry, there is extreme scaling in runtime as a result


// extra large array

// insert 820.8239 ms
// append 2.6904 ms

// large array

// insert 8.6714 ms
// append 578.5 microsecond

// medium

// insert 190 microsecond
// append 161.9 microsecond

// small

// insert 45.3 microsecond
// append 124.8 microsecond

// tiny

// insert 33.2 microsecond
// 76.3 microsecond


// Try it with first function
perf.start();                     // Starts timer
doublerAppend(tinyArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(tinyArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);
