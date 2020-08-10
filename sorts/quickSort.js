function pivot(arr, start = 0, end = arr.length - 1) {
	function swap(arr, j, i) {
		let temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}

	let pivot = arr[start];
	let swapIdx = start;

	for (let i = start + 1; i <= end; i++) {
		if (pivot > arr[i]) {
			swapIdx++;
			swap(arr, swapIdx, i);
		}
	}
	swap(arr, start, swapIdx);
	return swapIdx;
}

// console.log(pivot([28, 41, 4, 11, 16, 1, 40, 14, 36, 37, 42, 18]))

function quickSort(arr, left = 0, right = arr.length - 1) {
	if (left < right) {
		let pivotIndex = pivot(arr, left, right);
		//left
		quickSort(arr, left, pivotIndex - 1);
		//right
		quickSort(arr, pivotIndex + 1, right);
	}
	return arr;
}
console.log(quickSort([28, 41, 4, 11, 16, 1, 40, 14, 36, 37, 42, 18]));
