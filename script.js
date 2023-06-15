function threeSum(arr, target) {
	arr.sort((a,b) => a - b);
	const n = arr.length;
	let ans = 0, minDiff = Number.MAX_VALUE;
	for(let i=0; i<n-2; i++){
		let j=i+1, k=n-1;
		while(j < k){
			const sum = arr[i] + arr[j] + arr[k];
			if(sum < target){
				j++;
			}
			else k--;
			let diff = Math.abs(sum - target);
			if(diff < minDiff){
				minDiff = diff;
				ans = sum;
			}
		}
	}
	return sum;
}

module.exports = threeSum;
