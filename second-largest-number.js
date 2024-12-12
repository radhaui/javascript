//find the second largest element in array 
// if the array lenth not more than 2 return no

var x=[1,2,4,55,54,55,54,2];
const secondlargestVal = () =>{
	const uniqueValues =  Array.from(new Set(x))
	uniqueValues.sort((a,b)=>b-a);
  if(uniqueValues.length >=2)
  	return uniqueValues[1];
    
    return "no";
}
console.log(secondlargestVal());


var x=[1,2,4,55,54,55,54,2];
const secondlargestValoptimisie = () =>{
	let largestVal = Number.NEGATIVE_INFINITY;
  let secLargestVal = Number.NEGATIVE_INFINITY;
  for(let i= 0;i<x.length;i++){
  	if(x[i] > largestVal){
    	secLargestVal = largestVal;
  		largestVal = x[i];
    } else if(x[i] != largestVal && x[i] > secLargestVal){
    	secLargestVal = x[i];
      
    }
    
  }
  return secLargestVal;
}
console.log(secondlargestValoptimisie());
