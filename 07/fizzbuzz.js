var fizzbuzz = function(a){
	if(a % 5 ==0 && a % 3 ==0){
		return "fizzbuzz"
	}else if(a % 3 == 0){
		return "fizz"
	}else if(a % 5 == 0){
		return "buzz"
	}else{
		return a
	}
};