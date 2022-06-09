// console.log(cityGrowths);
// var Sortedcities = cityGrowths.sort((a,b)=>(a.Increase_from_2016-b.Increase_from_2016)).reverse();
// console.log(Sortedcities);
// var topfive = Sortedcities.slice(0,5);
// console.log(topfive);
// var cityNames = cityGrowths.map(city=>city.City)
// console.log(cityNames);
// var growthFigures = cityGrowths.map(popu=>popu.population);
// console.log(growthFigures);
var topFiveCityNames = cityGrowths.map(city => city.City);
var topFiveCityNames = topFiveCityNames.slice(0,5)
console.log(topFiveCityNames);
var topFiveCityGrowths = cityGrowths.map(city => parseInt(city.Increase_from_2016));
var topFiveCityGrowths = topFiveCityGrowths.slice(0,5)
console.log(topFiveCityGrowths);
console.log(cityGrowths);

var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type:"bar"
};
var data = [trace];
var layout = {
    title : "Most Rapidly Growing Cities",
    xaxis:{title:"City"},
    yaxis:{title:"Population Growth, 2016-2017"}
};

Plotly.newPlot("bar-plot",data,layout)

var sortedtopSevenCities = cityGrowths.sort((a,b)=> parseInt(a.population - b.population)).reverse();
console.log(sortedtopSevenCities);
var topSevenCities = sortedtopSevenCities.slice(0,7);
console.log(topSevenCities);
console.log(cityGrowths);


var topSevenCities = cityGrowths.map(city=>city.City);
topSevenCities = topSevenCities.slice(0,7);
console.log(topSevenCities);

var topSevenPopulation = cityGrowths.map(city=>city.population);
topSevenPopulation = topSevenPopulation.slice(0,7);
console.log(topSevenPopulation);

var trace1 = [{
    x: topSevenCities,
    y: topSevenPopulation,
    type:"bar"

}];
var layout1 = {
    title:"Most Populated Cities",
    xaxis:{title:"City"},
    yaxis:{title:"Population"}

};

Plotly.newPlot("bar-plot",trace1,layout1);