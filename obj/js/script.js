var city1 = {};
city1.name = "City N"
city1.population = 10 ** 7
city1.getName = function(){
	return this.name;
}
city1.exportStr = function(){
	return "name = " + this.name + "\n population = " + this.population + "\n";
}

var city2 = {
	"name": "City M",
	"population": 10 ** 6,
	getName(){
		return this.name;
	},
	getName(){
		return "name = " + this.name + "\n population = " + this.population + "\n";
	}
};

console.log(city1.exportStr());
console.log(city2.exportStr());