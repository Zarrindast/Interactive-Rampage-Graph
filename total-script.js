network_data = {
	"nodez":
	[
	{"id":"n1","piclink":"https://i.picsum.photos/id/1003/1181/1772.jpg?hmac=oN9fHMXiqe9Zq2RM6XT-RVZkojgPnECWwyEF1RvvTZk"},
	{"id":"n2","piclink":"https://i.picsum.photos/id/100/2500/1656.jpg?hmac=gWyN-7ZB32rkAjMhKXQgdHOIBRHyTSgzuOK6U0vXb1w"},
  {"id":"n3","piclink":"https://i.picsum.photos/id/1008/5616/3744.jpg?hmac=906z84ml4jhqPMsm4ObF9aZhCRC-t2S_Sy0RLvYWZwY"},
  {"id":"n4","piclink":"https://i.picsum.photos/id/101/2621/1747.jpg?hmac=cu15YGotS0gIYdBbR1he5NtBLZAAY6aIY5AbORRAngs"},
  {"id":"n5","piclink":"https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y"},
],
	"linkz":[
{"source":"n1","target":"n3","out":"https://www.amazon.com"}, 
{"source":"n1","target":"n5","out":"https://www.google.com"},{"source":"n2","target":"n3","out":"https://www.target.com"},{"source":"n3","target":"n4","out":"https://www.paypal.com"}, 
{"source":"n3","target":"n5","out":"https://www.cvs.com"},{"source":"n2","target":"n5","out":"https://www.skype.com"}
]
}

var img = new Image();
img.src = 
"https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png";
document.getElementById('imgID').appendChild(img);

// window to see thru to svg
w = 500
h = 500
var svg = d3.select("#my_dataviz")
.append("svg")
.attr("height", h)
.attr("width",w);

d3.forceSimulation(network_data.nodez)
.force("links", 
	d3.forceLink(network_data.linkz)
			 .distance(1)
			 .id(d=>d.id))
	.force("links", d3.forceCenter(200,200))
.force("nodes", d3.forceCollide(50))
  .on( "end", function() {


svg.append("g")
  .selectAll("line")
	.data(network_data.linkz)
	.enter()
	.append("line")
	.attr("stroke","black")
	.attr("stroke-width", 4)
	.attr("class","links_class elements_class")
  .attr("x1",d => d.source.x)
  .attr("y1",d => d.source.y)
  .attr("x2",d => d.target.x)
  .attr("y2",d => d.target.y)
// don't put this after the text part or it won't work, poss bc you can't click on the text
	
// the e has to be there because d3 changes how they process events (learn about this later); everything else is like a normal function.
.on('click', function(e,d) {window.open(d.out);
	})

// should be summary of manifesto or letter or whatever	
.append("title")
.text((d) => ["test"]);

	

	
//	.on("click", function(d) {
//  window.open("URL CONTAINING CITED DOCUMENT" + //d.properties.State, "_blank"); <- what are those two?
// });


svg.append("g")
.selectAll("circle")
.data(network_data.nodez)
.enter()
.append("circle")
.attr("r",8)
.attr("fill","pink")
.attr("class","nodes_class elements_class")
.attr("cx", d=>d.x)
.attr("cy", d=>d.y)
// the following is redundant with, and overpowers
// .nodes:onclick {
//   fill: green;
// }
// in the CSS
	
	.on("mouseover", function(d) {
d3.select(this).attr("r",50);
d3.select("body").transition().duration(1200).style("background-color", "gray");
})
	
	.on("mouseout", function(d) {
d3.select(this).attr("r",8);
d3.select("body").transition().duration(1200).style("background-color", "white");
})
	
.on('click', function(e,d) {
	window.open(d.piclink);
	d3.select(this)
     .style('fill', 'green');
  })

//.on('click', function(d) {
//    d3.select(this)
//      .style('fill', 'green');
//  })
	


//.on("mouseout", function(d) {
 // d3.select(this)
//	.transition()
//    .duration(1200)
    // pic goes away
// })	
	



});
