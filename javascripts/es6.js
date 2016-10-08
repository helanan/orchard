// console.log('es6')
// //const
// //const a=8;
// console.log('a', a);
// a=12;
// console.log('a2', a);
// //let
// let b=8;
// console.log('b', b);
// b=12;
// console.log('b2', b);

// function varTest(){
// 	var x=1;
// 	if(true){
// 		var x=2;
// 		console.log('inside if', x);
// 	}
// 	console.log('outside if', x);
// }

// varTest90;

// function letTest(){
// 	let y=1;
// 	if (true) {
// 		let y=12;
// 		console.log('inside if', y);
// 	}
// 		console.log('outside if', y);
// }

// letTest();

// //arrow functions
// var sum = function() {
// 	let a=1, b=2;
// 	return a+b;
// }
// console.log("hardcoded sum in ES5", sum());

// var sum = () => {
// let a=1, b=2;
// 	return a+b;
// }
// console.log("hardcoded sum in ES6", sum2());

// var reflect = function(value){
// 	return value;
// }
// console.log("reflect in ES5", reflect('ES5 is so yesterday'));

// var reflect2 = (value) => {
// 	return value;
// }
// console.log("reflect in ES5", reflect2('Es6 is the new hotness'));

// var realSum = function(num1, num2){
// 	return num1+num2;
// }
// 	console.log("realsum ES5",realsum(2,3));

// var realsum2 = (num1, num2) => {
// 	return num1+num2;
// }

// console.log("realsum ES6", realsum2(5,4));
// //string templates
// let m="biteme";
// console.log('m', m);
// let r = `hello y name is ${m}`;
// console.log('r', r);


// //property shorthand

// //object literal property shorthand
// let wow="Hi there", es6="ES6", numNum=()=>{console.log('howdy')}

// let myOldObject = {
// 	wow:wow,
// 	es6:es6,
// 	numNum:numNum
// }
// console.log('myOldObject', myOldObject);

// //if key and value are the same you can do this: 

// console.log('myOldObject', myOldObject);

// let myNewObject={
// 	wow,es6
// }

// console.log('myNewObject', myNewObject);

// //method properties
// var e5Obj={
// 	foo: function(){console.log('foo')},
// 	bar: function(){console.log('foo')}
// }
// console.log('e5Obj', e5Obj);

// //
// var es6Obj = {
// 	foo() {console.log('foo')},
// 	bar() {console.log('bar')}
// }
// console.log('es6Obj' es6Obj);