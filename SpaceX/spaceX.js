const url = "https://api.spacexdata.com/v2/launchpads";
d3.json(url).then(receiveData => console.log(receiveData));
d3.json(url).then(receiveData => console.log(receiveData[0].full_name));
d3.json(url).then(receiveData => console.log(receiveData[0].location.latitude));
d3.json(url).then(receiveData => console.log(receiveData[0].location.map(row=>row.latitude)));

