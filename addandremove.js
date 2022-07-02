function nextInLine(arr, item) {
    arr.push(item); //Add Last Item =)!!! hahahaa =D!!
    return arr.shift(); //Remove First Item hahaahaa =DDD!! =)!!!
}

const testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));