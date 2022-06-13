d3.json("../Module12/samples.json").then((data) => {
    // 3. Create a variable that holds the samples array. 
    sample = '944';
    var sampleData = data.samples
    console.log(sampleData);
    // 4. Create a variable that filters the samples for the object with the desired sample number.
    var sampleArray = sampleData.filter(sampleObj => sampleObj.id == sample);
    console.log(sampleArray);
//     //  5. Create a variable that holds the first sample in the array.
  var sampleResult = sampleArray[0]
    console.log(sampleResult);
//     // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
  let dates = data.map(x => x.Date).reverse();
  
     var res_otu_ids = sampleResult.otu_ids;
    console.log(res_otu_ids);
    var res_otu_labels = sampleResult.otu_labels;
    console.log(res_otu_labels);
    var res_sample_values = sampleResult.sample_values;
    console.log(res_sample_values);
    
    // var sorted_otu_ids = res_otu_ids.sort((a,b)=>(b-a));
    // console.log(sorted_otu_ids);
    // var sliced_otu_ids = sorted_otu_ids.slice(0,10);
    // console.log(sliced_otu_ids);
//     var res_otu_ids = sampleResult.map(row=>row.otu_ids).sort((a,b)=>(a-b)).reverse().slice(0,10)
//     var res_otu_ids = sampleResult.map(row=>row.otu_ids).sort((a,b)=>(a-b)).reverse().slice(0,10)
//     // 7. Create the yticks for the bar chart.
//     // Hint: Get the the top 10 otu_ids and map them in descending order  
//     //  so the otu_ids with the most bacteria are last. 

    // sorted_otu_ids = res_otu_ids.sort((a,b)=>(b-a));
    // console.log(sorted_otu_ids)

    var yticks = res_otu_ids.slice(0,10).map(id => "OTU " + id).reverse();
    console.log(yticks);
    // var xticks = res_sample_values.slice(0,10).reverse();
    // console.log(xticks);


//     // 8. Create the trace for the bar chart. 
    var barData = [{
      x : res_sample_values.slice(0,10).reverse(),
      text:res_otu_labels.slice(0,10).reverse(),
      type:"bar",
      orientation:'h'

      
}];
//     // 9. Create the layout for the bar chart. 
    var barLayout = {
      title: 'top 10 bacteria'


     
    };
    Plotly.newPlot("bar",barData,barLayout);

//     // 10. Use Plotly to plot the data with the layout. 
    
   });

