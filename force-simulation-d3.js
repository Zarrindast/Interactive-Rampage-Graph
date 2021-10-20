d3.forceSimulation(network_data.nodez)
.force("links", 
	d3.forceLink(network_data.linkz)
			 .distance(1)
			 .id(d=>d.id))
	.force("links", d3.forceCenter(200,200))
.force("nodes", d3.forceCollide(50))
  .on( "end", function() {
