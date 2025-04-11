# Plot.ly: Belly Button Biodiversity

## Plotly Interactive Dashboard

In this activity I needed to read in a json dataset of Operational Taxonomic Unit's (OTU's) into a web page. The unique challenge in this task was to display the the demographic information of each unique participant as well as show information in several different plots about the belly button biodiversity of that test subject.  For each subject that could be selected from a dropdown menu, all of the plots needed to updated with the selection.  Though these steps are not in order of completion, these are the steps I completed for this assignment.  

### Task 1: Read .JSON File  
For the dataset, I used the dataset provided with this project. To read the dataset in I use the D3 library read in samples.json.

### Task 2: Create Bar Chart
I had to create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual. Each bar in the bar chart also had to have biodiversity information displayed when the mouse icon hovered over it. These are steps that I followed to complete this portion of the project.
* Use sample_values as the values for the bar chart.
* Use otu_ids as the labels for the bar chart.
* Use otu_labels as the hovertext for the chart.

<p align="center">
    <img src="https://github.com/mathewqpmiller/Plotly-BiodiversityAnalysis/blob/main/Images/Dashboard.JPG?raw=true" height ="350">
</p>

### Task 3: Create Bubble Plot
After the bar chart was created, I then had to create a bubble chart that displays each sample.
* Use otu_ids for the x values.
* Use sample_values for the y values.
* Use sample_values for the marker size.
* Use otu_ids for the marker colors.
* Use otu_labels for the text values.

<p align="center">
    <img src="https://github.com/mathewqpmiller/Plotly-Biodiversity_Analysis/blob/main/Images/my_bubble_plot.JPG?raw=true" height ="350">
</p>

### Task 4: Create Demographic Panel
4) Display the sample metadata, i.e., an individual's demographic information.
* Display each key-value pair from the metadata JSON object somewhere on the page.
* Update all of the plots any time that a new sample is selected.
* Additionally, you are welcome to create any layout that you would like for your dashboard.

<p align="center">
    <img src="https://github.com/mathewqpmiller/Plotly-Biodiversity_Analysis/blob/main/Images/my_demographics_panel.JPG?raw=true" height ="350">
</p>

### Task 5: Advanced Challenge Assignment: Create Guage Indicator
The following task is advanced and therefore optional.
* Adapt the Gauge Chart from https://plot.ly/javascript/gauge-charts/ to plot the weekly washing frequency of the individual.
* You will need to modify the example gauge code to account for values ranging from 0 through 9.
* Update the chart whenever a new sample is selected.

<p align="center">
    <img src="https://github.com/mathewqpmiller/Plotly-Biodiversity_Analysis/blob/main/Images/my_guage_indicator.JPG?raw=true" height ="300">
</p>

### Project Submission: Deploy HTML to GitHub Pages
Now that all of my charts were built, I had to place them into an HTML page and create an interactive dashboard. As stated before, all of the charts needed to change simultaneously when a new selection was made from the dropdown menu. Once that was complete I had to deploy my page to a static page hosting service. Since I already have my projects in GitHub, I decided to use GitPages to host my webpage.  Below is a screenshot of the Dashboard followed by a link to the webpage. Please feel free to visit the page and select different options from the dropdown menu to see how the dashboard changes and to learn more about belly button biodiversity.  

<p align="center">
    <img src="https://mathewqpmiller.github.io/Plotly-Biodiversity_Analysis//blob/main/Images/Dashboard.JPG?raw=true" height ="500">
</p>

GitPages Link: https://mathewqpmiller.github.io/Plotly-BiodiversityAnalysis/

#
#
<p align="center">
UNIVERSITY OF OREGON: Data Analytics Boot Camp - Repository for project 12(Plotly Challenge)
</p>
<p align="center">
Mathew Miller © 2021. All Rights Reserved.
</p>
