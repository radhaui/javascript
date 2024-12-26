//flatten Array
//input [1,2,3,[4,[5,6,[7]]]];
//output [1,2,3,4,5,6,7];
let input=[1,2,3,[4,[5,6,[7]]],8];
let result = [];
const flattenArry = (input) => {
  input.forEach (item => {
      if(Array.isArray(item)) {
        flattenArry(item)
      } else {
        result.push(item);
      }
	})
	
}
flattenArry(input);
console.log(result);
