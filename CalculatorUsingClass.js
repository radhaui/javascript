class calculator {
	constructor(initialValue= 0) {
  	this.value = initialValue;
  }
  add(number){
  	this.value +=number;
    return this;
  }
   sub(number){
  	this.value -=number;
    return this;
  }
   multiply(number){
  	this.value *=number;
    return this;
  }
  
  getValue(){
  return this.value
  }
}
const calc =  new calculator(3);
console.log(calc.add(3).multiply(4).sub(5).getValue());
