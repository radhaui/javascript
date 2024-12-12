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
