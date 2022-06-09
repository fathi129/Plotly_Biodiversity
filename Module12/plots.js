// d3.json("samples.json").then(function(data){
//     console.log(data);
// });
// d3.json("samples.json").then(function(data){
//     wfreq = data.metadata.map(person=>person.wfreq).sort((a,b)=>b-a);
//     console.log(wfreq);
//     filteredFreq = wfreq.filter(element=>element!=null);
//     console.log(filteredFreq);
//     Object.entries(data.metadata[0]).forEach(([key,value])=> console.log(key + ":" + value));

// });

// researcher1 = {
//     name: 'Roza',
//     age: 34,
//     hobby: 'Hiking'
// };
// console.log(Object.entries(researcher1));

// d3.selectAll("body").on("change",updatePage);
// function updatePage(){
//     var dropdownMenu = d3.selectAll("#dropdownMenu").node();
//     var dropdownMenuID = dropdownMenu.id;
//     var selectedOption = dropdownMenu.value;

//     console.log(dropdownMenuID);
//     console.log(selectedOption);


// }
function init(){
    data = [{
        x:[1,2,3,4,5],
        y:[1,2,4,8,16]
    }];
    Plotly.newPlot("plot",data);
};

d3.selectAll("#dropdownMenu").on("change",updatePlotly)
function updatePlotly(){
    var dropdownMenu = d3.selectAll("#dropdownMenu");
    var dataset = dropdownMenu.property("value");
    var xData = [1, 2, 3, 4, 5];
    var yData = [];
    if (dataset === 'dataset1') {
        yData = [1, 2, 4, 8, 16];
      };
    
      if (dataset === 'dataset2') {
        yData = [1, 10, 100, 1000, 10000];
      };

      var trace = {
          x:[xData],
          y:[yData]

      };
      Plotly.restyle("plot",trace);

};
init();