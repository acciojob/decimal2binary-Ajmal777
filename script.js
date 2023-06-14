function threeSum(arr, target) {
	while(target > 0){
		arr.shift(target % 2);
		target = (target >> 1);
	}
	return arr;
}

module.exports = threeSum;
