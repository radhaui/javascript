let str="radha";
str = str.split("");
let left = 0;
let right = str.length-1;
console.log(str);
while(left<right){
	const temp = str[left];
  str[left]=str[right];
  str[right]=temp;
  left++;
  right--;

}

str = str.join("");
  console.log(str);

//2nd approch

const  str="radha";
 let reversStr= "";
const strArray = str.split("");
console.log(strArray);
console.log(strArray[strArray.length-1]);
for(var i=strArray.length-1;i>=0;i--){
  reversStr += strArray[i];
}
console.log(reversStr);

