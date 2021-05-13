const arr = [1, false, 'abc', NaN];
const obj = {a: 1, b: false, c: 'abc', d: NaN};

/* ----- Output variable directly ----- */
console.log('>>> Output variable directly <<<')
console.log(arr);
console.log(obj);

/* ----- Output variable via embedded expression ----- */
// Template literals (``) are string literals allowing embedded expressions
console.log('\n>>> Output variable via template literals as embedded expression <<<');
console.log(`${arr}`);
console.log(`${obj}`);


// basically, this is the same as using the toString() method
console.log('\n>>> Output variable directly with toString() <<<');
console.log(arr.toString());
console.log(obj.toString());

/* ----- Output variable with JSON.stringify()----- */
// the JSON.stringify() method converts a JavaScript object or value to a JSON string
console.log('\n>>> Output variable with JSON.stringify() <<<');
console.log(JSON.stringify(arr));
console.log(JSON.stringify(obj));


// "NaN and Infinity regardless of sign are represented as the String null [when using JSON.stringify()]."
// souce: https://262.ecma-international.org/7.0/#sec-json.stringify