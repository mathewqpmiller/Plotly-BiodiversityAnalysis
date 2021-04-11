// App to create the dropdown menu with id's, bar plot, guage plot and bubble plot

// Create function to read in all .json data
function jsonInfo(id){
    d3.json("samples.json").then((data)=> {
        var metadata = data.metadata;
        console.log(metadata);
        //filter demo info data by id
        var filterResult = metadata.filter(info => info.id.toString() === id)[0];
        var panelBody = d3.select("#sample-metadata");
        //empty the demo info panel each time before getting new data
        panelBody.html("");
        Object.entries(filterResult).forEach((key)=>{
            panelBody.append("p").text(key[0] + ":" + key[1]);
        });
    });
};

//creating function for all the plots
function plots(id) {
    // getting data from the json file
    d3.json("samples.json").then((data)=> {
        //console.log(data)

        // Create a variable that filters the washed frequency
        var wfreq = data.metadata.filter(f => f.id.toString() === id)[0];
        wfreq = wfreq.wfreq;
        console.log("Washing Freq: " + wfreq);

        // filter samples+ values by id
        var samples = data.samples.filter(s => s.id.toString() === id)[0];

        //console.log("Samples: " + samples);

        // Getting the top 10
        var samplevalues = samples.sample_values.slice(0, 10).reverse();
        console.log("top 10 sample: " + samplevalues);

        // get only top 10 otu ids for the plot OTU and reversing it.
        var OTU = (samples.otu_ids.slice(0, 10)).reverse();

        // get the otu id's to the desired form for the plot
        var OTU_id = OTU.map(d => "OTU " + d)

        console.log("OTU IDS: " + OTU_id);


        // get the top 10 labels for the plot and reversing it.
        var labels = samples.otu_labels.slice(0, 10).reverse();
        console.log("labels: " + labels);

        // Define the bar plot paramaters
        var bar_plot = {
            x: samplevalues,
            y: OTU_id,
            text: labels,
            marker: {
              color: '68b1b6'},
            type:"bar",
            orientation: "h",
        };
        // create data variable
        var data = [bar_plot];
        // create the bar plot
        Plotly.newPlot("bar", data);

        // The bubble chart
        var trace1 = {
            x: samples.otu_ids,
            y: samples.sample_values,
            mode: "markers",
            marker: {
                size: samples.sample_values,
                color: samples.otu_ids
            },
            text: samples.otu_labels

        };

        // set the layout for the bubble plot
        var layout_b = {
            xaxis:{title: "OTU ID"},
            height: 600,
            width: 1200
        };

        // creating data variable
        var data1 = [trace1];

        // create the bubble plot
        Plotly.newPlot("bubble", data1, layout_b);

        // Define the guage plot paramaters
        var guage_plot = [
          {
          domain: { x: [0, 1], y: [0, 1] },
          value: wfreq,
          title: {text: `Times Washed Per Week`},
          type: "indicator",
          delta: {reference: 9, 'increasing': {color: "red"}},
          mode: "gauge+number+delta",
          gauge: { axis: { range: [null, 9] },
                  bar: {color: "68b1b6"},
                   steps: [
                    {range: [0, 1], color: "f4f4f6"},
                    {range: [1, 2], color: "eae9ec"},
                    {range: [2, 3], color: "dfdee3"},
                    {range: [3, 4], color: "d5d3d9"},
                    {range: [4, 5], color: "cac8d0"},
                    {range: [5, 6], color: "c0bec6"},
                    {range: [6, 7], color: "b5b3bd"},
                    {range: [7, 8], color: "aaa8b3"},
                    {range: [8, 9], color: "a09daa"}
                  ]}

          }
        ];
        var guage_layout = {
            width: 600,
            height: 600,
            margin: { t: 20, b: 40, l:140, r:140 }
          };
        Plotly.newPlot("gauge", guage_plot, guage_layout);
      });
  }

function init() {
    //read the data
    d3.json("samples.json").then((data)=> {
        //console.log(data);

        //get the name id to the dropdown menu
        data.names.forEach((name) => {
            d3.select("#selDataset")
            .append("option")
            .text(name)
            .property("value");
        });
        plots(data.names[0]);
        jsonInfo(data.names[0]);
    });
};
init();

//change event function
function optionChanged(id){
    plots(id);
    jsonInfo(id);
};
