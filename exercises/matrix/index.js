// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {

	let o = [];
	let count = 0;
	let x = -1;
	let y = 0;

	for (let i = 1; i <=n; i++) {
		o.push(Array(n+1).join(0).split(''));
	}



	console.log(o)

	while (count<(n*n)) {
		// Move dx
		try {
			while (x<n && o[y][x+1] == 0 ) {
				x ++ 
				count++
				o[y][x] = count;
				
			}
		} catch(err) {
			console.log("Err RIGHT")
		}
		// Move down
		try {
			while (y<(n-1) &&  o[y+1][x] == 0 ) {
				y ++
				count++
				o[y][x] = count;
				
			}
		} catch(err) {
			console.log("Err DOWN")
		}
		// Move left
		try {
			while (x>0 &&  o[y][x-1] == 0 ) {
				x--
				count++
				o[y][x] = count;
			}
		} catch(err) {
			console.log("Err LEFT")
		}
		// Move up
		try {
			while (y>0 &&  o[y-1][x] == 0 ) {
				y-- 
				count++
				o[y][x] = count;
			}
		} catch(err) {
			console.log("Err UP")
		}
		
		console.log("LOOP: "+count)
	}
	console.log(o)

}

module.exports = matrix;

matrix(5);
