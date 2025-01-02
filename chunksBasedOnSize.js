//create array chunks based on size
let inputArr = [1,2,3,4,5];
let size =2;
//output = [[1,2],[3,4],[5]];
let output = [];
const chunks = (input) => {
	if(input.length<= size) {
  output.push(input);
  	return false;
  } else {
  	output.push(input.splice(0,size));
    chunks(input)
  }
}
chunks(inputArr);
console.log(output);
