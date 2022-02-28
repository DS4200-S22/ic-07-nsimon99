/*

In-class activity 08 starter code
Prof. Mosca 
Modified: 12/08/21 

*/

// Build your scatterplot in this file 



/*
* scatterplot
*/

// Append svg object to the body of the page to house bar chart

const svg3 = d3
  .select("#csv-scatter")
  .append("svg")
  .attr("width", width-margin.left-margin.right)
  .attr("height", height - margin.top - margin.bottom)
  .attr("viewBox", [0, 0, width, height]);

d3.csv("data/scatter.csv").then((data2) => {
  // Find max y
let maxY3 = d3.max(data2, function(d) { return d.score; });

// TODO: What does each line of this code do?   
let yScale3 = d3.scaleLinear() //sets up y axis and linear
            .domain([0,maxY3]) //sets start of y axis as 0 and end as the max y found above
            .range([height-margin.bottom,margin.top]); // sets range of the axis as the top and bottom margin found above

// TODO: What does each line of this code do? 
let xScale3 = d3.scaleBand()//sets up x axis 
            .domain(d3.range(data2.length)) //sets start of x axis as the length of the data
            .range([margin.left, width - margin.right])// sets range of the axis as the top and bottom margin found above
            .padding(0.1); // creates padding between ticks

// Add y axis 
svg3.append("g")//appends placeholder 
   .attr("transform", `translate(${margin.left}, 0)`) // defines positioning and scale of y axis
   .call(d3.axisLeft(yScale3)) // sets up y axis to the left
   .attr("font-size", '20px'); // defines font and size of y axis

// Add y axis 
svg3.append("g") //appends placeholder 
    .attr("transform", `translate(0,${height - margin.bottom})`) // defines positioning and scale of x axis
    .call(d3.axisBottom(xScale3) 
            .tickFormat(i => data2[i].day))  // sets up x axis to the bottom and ticks
    .attr("font-size", '20px'); // defines font and size of y axis

/* 

  Tooltip Set-up  

*/

// TODO: What does each line of this code do? 
const tooltip3 = d3.select("#csv-scatter") //adds bar chart to svg
                .append("div") //adds a div 
                .attr('id', "tooltip1") // adds id "tooltip1" to div
                .style("opacity", 0) // sets opacity (the depth of the color)
                .attr("class", "tooltip"); // adds class "tooltip" to div

// creates event for when mouse is over object
const mouseover3 = function(event, d) { //creates function
  tooltip3.html("Day: " + d.day + "<br> Score: " + d.score + "<br>") // shows data when mouse is over
          .style("opacity", 1);  //sets opacity for when mouse is over
}

// // creates event for when mouse is moves object
const mousemove3 = function(event, d) { //creates function
  tooltip3.style("left", (event.pageX)+"px") 
          .style("top", (event.pageY + yTooltipOffset) +"px"); //sets back to orginal
}

// creates event for when mouse leave
const mouseleave3 = function(event, d) { //creates function
  tooltip3.style("opacity", 0); //sets opacity
}

/* 

  Bars 

*/

// TODO: What does each line of this code do? 
const myCircles1 = svg3.selectAll("circle")
                            .data(data2)
                            .enter()
                              .append("circle")
                              .attr("cx", (d,i) => xScale3(i)) //sets x data
                              .attr("cy", (d) => yScale3(d.day)) //sets y data
                              .attr("r", 8)
                              .style("opacity", 0.5)
                              .on("mouseover", mouseover3) //adds mouse over function
     .on("mousemove", mousemove3)//adds mouse move function
     .on("mouseleave", mouseleave3);//adds mouse leave function

});




