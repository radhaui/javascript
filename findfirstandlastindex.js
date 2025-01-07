var x=[1,2,3,4,5,1,3,4,6];
var left = 0;
var right = x.length-1;
var index = x.length-1;
var result = [-1,-1];
var num = 5;
while(left<=right){
	if(x[left]===num){
  	result[0]=left;
    result[1]=result[1]===-1 ? left : result[1];
  } 
  if(x[right]===num){
  	result[1]=right;
    result[0]=result[0]===-1 ? right : result[0];
  } 
  	right--;
    left++;

  if(result[0]!==result[1]){
  	break;
  }
}
console.log(result);
