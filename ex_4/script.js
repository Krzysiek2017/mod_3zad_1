const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

const average = (...rest) =>  {
	let av = 0;
	rest.forEach(r => av = av + r);
	return av/rest.length;
}
console.log(average(1));
console.log(average(1, 3));
average(1, 3, 6, 6);

console.log(average(...grades));
