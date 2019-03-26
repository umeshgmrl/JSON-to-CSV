x = new Array(5).fill({
	name: 'bhumesh',
	age: 20,
	address: "Hyderbad"
})



header = Object.keys(x[0]).join(', ') + '\n';
body = x.map( y => Object.values(y).join(', ') + '\n').reduce((a, b) => a+ b);

csv = header + body;
console.log(csv);