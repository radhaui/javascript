// rotate array "k" times

var x=[1,2,3,4,5,6,7,8];
var k = 4;
const rotateArray = () => {
	const size = x.length;
  if(k > size) {
  	k =  k % size;
  }
  const rotate = x.splice(size - k, size);
  console.log(x);
  console.log(rotate);
  return [...rotate, ...x]
}
console.log(rotateArray());


///second approch
var x=[1,2,3,4,5,6,7,];
//[7,1,2,3,4,5,6] => [7,6,1,2,3,4,5] => [5,6,7,1,2,3,4]
var k=14;
const rotate = () => {
	let size = x.length;
  if( k > size) {
  	k = k % size;
  }

  for (let i=0;i<k;i++){
  	x.unshift(x.pop());
  }
  return x;
}
console.log(rotate());
