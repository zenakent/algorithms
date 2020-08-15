//radix sort helpers
function getDigit(num, place) {
	return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

console.log(getDigit(12345, 2)) // 3

function digitCount(num) {
	if (num === 0) return 1;
	return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// console.log(digitCount(4612345)) // 7

function mostDigits(array) {
	let max = 0;
	for (let i = 0; i < array.length; i++) {
		max = Math.max(max, digitCount(array[i]));
	}
	return max;
}

// console.log(mostDigits([1234, 56, 7])) //4

function radixSort(array) {
	let maxDigit = mostDigits(array);

	for (let i = 0; i <= maxDigit; i++) {
		let bucket = [[], [], [], [], [], [], [], [], [], []];
		for (let j = 0; j < array.length; j++) {
			let well = getDigit(array[j], i);
			bucket[well].push(array[j]);
		}
		array = bucket.flat();
	}

	return array;
}

// console.log(radixSort([8978, 564, 8979, 1, 385, 6, 489]));
