/*

In-class activity 08 starter code
Prof. Mosca 
Modified: 12/08/21 

*/

// Build your bar charts in this file 


// Set dimensions and margins for plots 
const width = 900; 
const height = 450; 
const margin = {left:50, right:50, bottom:50, top:50}; 
const yTooltipOffset = 15; 


// Append svg object to the body of the page to house bar chart
const svg1 = d3
  .select("#hard-coded-bar")
  .append("svg")
  .attr("width", width-margin.left-margin.right)
  .attr("height", height - margin.top - margin.bottom)
  .attr("viewBox", [0, 0, width, height]);

// Hardcoded barchart data
const data1 = [
  {name: 'A', score: 92},
  {name: 'B', score: 15},
  {name: 'C', score: 67},
  {name: 'D', score: 89},
  {name: 'E', score: 53},
  {name: 'F', score: 91},
  {name: 'G', score: 18}
];

/*

  Axes

*/ 

// Find max y
let maxY1 = d3.max(data1, function(d) { return d.score; });

// TODO: What does each line of this code do?   
let yScale1 = d3.scaleLinear() //sets up y axis and linear
            .domain([0,maxY1]) //sets start of y axis as 0 and end as the max y found above
            .range([height-margin.bottom,margin.top]); // sets range of the axis as the top and bottom margin found above

// TODO: What does each line of this code do? 
let xScale1 = d3.scaleBand()//sets up x axis 
            .domain(d3.range(data1.length)) //sets start of x axis as the length of the data
            .range([margin.left, width - margin.right])// sets range of the axis as the top and bottom margin found above
            .padding(0.1); // creates padding between ticks

// Add y axis 
svg1.append("g")//appends placeholder 
   .attr("transform", `translate(${margin.left}, 0)`) // defines positioning and scale of y axis
   .call(d3.axisLeft(yScale1)) // sets up y axis to the left
   .attr("font-size", '20px'); // defines font and size of y axis

// Add y axis 
svg1.append("g") //appends placeholder 
    .attr("transform", `translate(0,${height - margin.bottom})`) // defines positioning and scale of x axis
    .call(d3.axisBottom(xScale1) 
            .tickFormat(i => data1[i].name))  // sets up x axis to the bottom and ticks
    .attr("font-size", '20px'); // defines font and size of y axis

/* 

  Tooltip Set-up  

*/

// TODO: What does each line of this code do? 
const tooltip1 = d3.select("#hard-coded-bar") //adds bar chart to svg
                .append("div") //adds a div 
                .attr('id', "tooltip1") // adds id "tooltip1" to div
                .style("opacity", 0) // sets opacity (the depth of the color)
                .attr("class", "tooltip"); // adds class "tooltip" to div

// creates event for when mouse is over object
const mouseover1 = function(event, d) { //creates function
  tooltip1.html("Name: " + d.name + "<br> Score: " + d.score + "<br>") // shows data when mouse is over
          .style("opacity", 1);  //sets opacity for when mouse is over
}

// // creates event for when mouse is moves object
const mousemove1 = function(event, d) { //creates function
  tooltip1.style("left", (event.x)+"px") 
          .style("top", (event.y + yTooltipOffset) +"px"); //sets back to orginal
}

// creates event for when mouse leave
const mouseleave1 = function(event, d) { //creates function
  tooltip1.style("opacity", 0); //sets opacity
}

/* 

  Bars 

*/

// TODO: What does each line of this code do? 
svg.selectAll(".bar") //adds bars to svg
   .data(data1) //adds data to chart
   .enter()  
   .append("rect") // defines bars as rectangles
     .attr("class", "bar") // gives class as "bars"
     .attr("x", (d,i) => xScale1(i)) //sets x data
     .attr("y", (d) => yScale1(d.score)) //sets y data
     .attr("height", (d) => (height - margin.bottom) - yScale1(d.score)) //defines height of each bar
     .attr("width", xScale1.bandwidth()) //defines width of each bar
     .on("mouseover", mouseover1) //adds mouse over function
     .on("mousemove", mousemove1)//adds mouse move function
     .on("mouseleave", mouseleave1);//adds mouse leave function


/* 
* new chart
*/
// Append svg object to the body of the page to house bar chart
const svg2 = d3
  .select("#csv-bar")
  .append("svg")
  .attr("width", width-margin.left-margin.right)
  .attr("height", height - margin.top - margin.bottom)
  .attr("viewBox", [0, 0, width, height]);



/*

  Axes

*/ 

// Find max y
let maxY2 = d3.max(data1, function(d) { return d.score; });

// TODO: What does each line of this code do?   
let yScale2 = d3.scaleLinear() //sets up y axis and linear
            .domain([0,maxY2]) //sets start of y axis as 0 and end as the max y found above
            .range([height-margin.bottom,margin.top]); // sets range of the axis as the top and bottom margin found above

// TODO: What does each line of this code do? 
let xScale2 = d3.scaleBand()//sets up x axis 
            .domain(d3.range(data1.length)) //sets start of x axis as the length of the data
            .range([margin.left, width - margin.right])// sets range of the axis as the top and bottom margin found above
            .padding(0.1); // creates padding between ticks

// Add y axis 
svg2.append("g")//appends placeholder 
   .attr("transform", `translate(${margin.left}, 0)`) // defines positioning and scale of y axis
   .call(d3.axisLeft(yScale2)) // sets up y axis to the left
   .attr("font-size", '20px'); // defines font and size of y axis

// Add y axis 
svg2.append("g") //appends placeholder 
    .attr("transform", `translate(0,${height - margin.bottom})`) // defines positioning and scale of x axis
    .call(d3.axisBottom(xScale2) 
            .tickFormat(i => data1[i].name))  // sets up x axis to the bottom and ticks
    .attr("font-size", '20px'); // defines font and size of y axis

/* 

  Tooltip Set-up  

*/

// TODO: What does each line of this code do? 
const tooltip2 = d3.select("#csv-bar") //adds bar chart to svg
                .append("div") //adds a div 
                .attr('id', "tooltip1") // adds id "tooltip1" to div
                .style("opacity", 0) // sets opacity (the depth of the color)
                .attr("class", "tooltip"); // adds class "tooltip" to div

// creates event for when mouse is over object
const mouseover2 = function(event, d) { //creates function
  tooltip1.html("Name: " + d.name + "<br> Score: " + d.score + "<br>") // shows data when mouse is over
          .style("opacity", 1);  //sets opacity for when mouse is over
}

// // creates event for when mouse is moves object
const mousemove2 = function(event, d) { //creates function
  tooltip1.style("left", (event.x)+"px") 
          .style("top", (event.y + yTooltipOffset) +"px"); //sets back to orginal
}

// creates event for when mouse leave
const mouseleave2 = function(event, d) { //creates function
  tooltip1.style("opacity", 0); //sets opacity
}

/* 

  Bars 

*/

// TODO: What does each line of this code do? 
svg2.selectAll(".bar") //adds bars to svg
   .data(data1) //adds data to chart
   .enter()  
   .append("rect") // defines bars as rectangles
     .attr("class", "bar") // gives class as "bars"
     .attr("x", (d,i) => xScale2(i)) //sets x data
     .attr("y", (d) => yScale2(d.score)) //sets y data
     .attr("height", (d) => (height - margin.bottom) - yScale2(d.score)) //defines height of each bar
     .attr("width", xScale2.bandwidth()) //defines width of each bar
     .on("mouseover", mouseover2) //adds mouse over function
     .on("mousemove", mousemove2)//adds mouse move function
     .on("mouseleave", mouseleave2);//adds mouse leave function









