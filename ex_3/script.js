const average = (...rest) =>  {
	let av = 0;
	rest.forEach(r => av = av + r);
	return av / rest.length;
}
console.log(average(1));
console.log(average(1, 3));
average(1, 3, 6, 6);


/*const average = ((...num) => num.reduce((sum, next) => sum + next) / num.length);

console.log(average(1));
console.log(average(1, 3));
console.log(average(1, 3, 6, 6));*/