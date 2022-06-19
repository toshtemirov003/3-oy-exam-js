// -----------------------2-masala-----

var array = [true, false, false, true, false,true,true];

function countTrue(arr) {
	var count = 0;
	for (el of arr) {
		if (el == true) {
			count += true;
		}else {
			count += false;
		}
	}
  return count;
}

console.log(countTrue(array));