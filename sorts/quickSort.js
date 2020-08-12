//implement a quicksort
// a quicksort needs a pivot to put in as the first cemented place
//never create another array! only work with given array

let array1 = [9, 14, 11, 15, 10, 7, 15, 8, 18, 4, 19, 13, 16, 4, 1, 2, 3, 12, 0, 12, 2, 10, 2, 3, 1, 12, 10, 10, 10, 1];

//pivot
const pivot = (array, start = 0, end = array.length - 1) => {
	//needs a swap
	const swap = (array, idx1, idx2) => {
		let temp = array[idx1];
		array[idx1] = array[idx2];
		array[idx2] = temp;
	};

	//pivot is the value of the first element or whatever element we want as a pivot
	let pivot = array[start];
	//swapIdx is the number of swaps that happened and the number we'll use to swap whatever index
	let swapIdx = start; // should have the same value as the start parameter

	//loop through the array to put all the numbers that are less than the pivot on the left side and the numbers that are greater than the pivot on the right side
	//since our pivot is the first element, have to loop start at the second element
	for (let i = start + 1; i <= end; i++) {
		if (pivot >= array[i]) {
			swapIdx++;
			swap(array, swapIdx, i);
		}
	}
	//swap the first element and the current elemen selected by the swapIdx
	swap(array, swapIdx, start);
	return swapIdx;
};

const quicksort = (array, left = 0, right = array.length - 1) => {
	if (left < right) {
		let pivotIndex = pivot(array, left, right);
		quicksort(array, left, pivotIndex - 1);
		quicksort(array, pivotIndex + 1, right);
	}

	return array;
};

console.log(quicksort(array1));
