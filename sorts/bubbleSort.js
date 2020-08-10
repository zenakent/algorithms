/*
Write a bubble sort function
 */

function bubbleSort(arr) {
	for (let i = arr.length; i > 0; i--) {
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	return arr;
}

//what if the thing is nearly sorted?
//bubble sort will just continue... how to optimize?

function optiBubbleSort(arr) {
	for (let i = arr.length; i > 0; i--) {
		let noSwap = true;
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				noSwap = false;
				console.log("something was swapped");
			}
		}
		if (noSwap) {
			console.log("nothing was swapped");
			break;
		}
	}
	return arr;
}

console.log(optiBubbleSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
