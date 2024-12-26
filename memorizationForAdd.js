const memorize = () => {
	let cache = {};
  return (a,b) => {
  const key = `${a},${b}`;
  	if(cache[key]) {
   	 console.log("value from memo");
    	return cache[key];
    } else {
    	cache[key]=a+b;
      return cache[key];
    }
  }
}

const add = memorize();
console.log(add(1,2));
console.log(add(1,2));
console.log(add(21,2));
console.log(add(1,2));
