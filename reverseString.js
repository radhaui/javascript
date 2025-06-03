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
