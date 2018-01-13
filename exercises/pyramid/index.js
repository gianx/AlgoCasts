// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
	rec(1,n);
}


function rec(line, tot) {
	if (line===tot+1) {
		return;
	}
	
	row = tot+(tot-1);
	pounds = (line-1)*2+1
	spaces = (row-pounds)/2

	console.log(repeat_char(" ", spaces)+repeat_char("#", pounds)+repeat_char(" ", spaces));
	rec(line+1, tot)

}

function repeat_char(c, n) {
	outs = "";
	for (let s=0; s<n; s++) {
		outs += c;
	}
	return outs
}

module.exports = pyramid;

pyramid(5);
