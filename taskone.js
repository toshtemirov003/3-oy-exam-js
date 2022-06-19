// -----------------------1-masala-----

var numbers = [7, 5, 0, 3, 0, 1, 0];

function zeroEnd(numbers) {
	var newArray = [];

	for (num of numbers) {
		if (num == 0) {
			newArray.push(num);
		} else {
			newArray.unshift(num);
		}
	}
	return newArray.join('');
}

console.log(zeroEnd(numbers));