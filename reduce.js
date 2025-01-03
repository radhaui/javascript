//REDUCE summ of array
let input =[1,2,3,4,5,6];

let sumOfArray = input.reduce((acc,current)=>{

	return acc +=current;
},0);
console.log("sumOfArray",sumOfArray);

//count occurencess
let fruits = ["apple","oragens","mango","mango","banana","apple"];

let countOccurence = fruits.reduce((acc,current)=>{
	if(acc[current]) {
  	acc[current] = acc[current] + 1;
  } else {
  	acc[current] = 1;
  }
  return acc;
},{});
console.log(countOccurence);
let input1 = [
{
	key:"Sample 1",
  data:"Data 1"
},{
	key:"Sample 2",
  data:"Data 1"
},{
	key:"Sample 3",
  data:"Data 1"
},{
	key:"Sample 1",
  data:"Data 1"
},{
	key:"Sample 3",
  data:"Data 1"
},{
	key:"Sample 1",
  data:"Data 1"
}
];

const groupByKey = input1.reduce((acc,current)=>{
	if(!acc[current.key]){
  	acc[current.key]=[];
    }
 
  	acc[current.key].push(current);
  return acc;
},{});

console.log(groupByKey);
