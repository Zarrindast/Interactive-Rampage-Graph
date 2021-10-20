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
