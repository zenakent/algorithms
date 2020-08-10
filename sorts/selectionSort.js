function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let min = i;
		console.log("orig", arr);
		for (let j = i; j < arr.length; j++) {
			if (arr[min] > arr[j]) {
				min = j;
			}
		}
		//swap positions
		let temp = arr[min];
		arr[min] = arr[i];
		arr[i] = temp;
		console.log("arr", arr);
		console.log("====");
	}

	return arr;
}

// console.log(selectionSort([19, 44, 38, 5, 47, 15]));
console.log(selectionSort([1, 2, 3, 4, 5]));
