// loading the titanic passenger data
d3.csv("data/titanic_data.csv", function(data) {
	for (i = 0; i < data.length; i++)
	{
		data[i]['Count'] = 1;
		if (data[i]['Survived'] == 0)
		{
			data[i]['Status'] = "Not Survived";
		}
		else
		{
			data[i]['Status'] = "Survived";
		}
	}
	
	// add histogram of survived and non-survived
	var svg = dimple.newSvg("#chart0", 600, 500);
	var chart = new dimple.chart(svg, data);
	chart.addCategoryAxis("x", "Status");
	chart.addMeasureAxis("y", "Count");
	chart.addSeries(null, dimple.plot.bar);
	chart.draw();
	svg.append("text")
			.attr("x", chart._xPixels() + chart._widthPixels()/2)
			.attr("y", chart._yPixels() - 20)
			.style("text-anchor", "middle")
			.style("font-family", "sans-serif")
			.style("font-weight", "bold")
			.text("HISTOGRAM OF SURVIVOR STATUS")

	chart1Btn = d3.select("#chart1Btn");
	chart2Btn = d3.select("#chart2Btn");
	chart3Btn = d3.select("#chart3Btn");
	explainP  = d3.select("#explain");
	var svg1 = dimple.newSvg("#chart1", 600, 500);
	// call-back for buttons with interactive visualization
	chart1Btn.on("click", function()
	{ // survivor by gender
		svg1.selectAll("*").remove();
		chart1Btn.style("background-color", "green")
		chart2Btn.style("background-color", "white")
		chart3Btn.style("background-color", "white")
		var chart1 = new dimple.chart(svg1, data);
		chart1.addCategoryAxis("x", "Sex");
		chart1.addMeasureAxis("y", "Count");
		chart1.addSeries("Status", dimple.plot.bar);
		chart1.addLegend(400, 100, 100, 100, "right");
		chart1.draw();
		svg1.append("text")
				.attr("x", chart1._xPixels() + chart1._widthPixels()/2)
				.attr("y", chart1._yPixels() - 20)
				.style("text-anchor", "middle")
				.style("font-family", "sans-serif")
				.style("font-weight", "bold")
				.text("SURVIVOR V/S GENDER")
		explainP.text("Number of males are greater than females and proportion of males survived are less than females.");
	})
	chart2Btn.on("click", function()
	{ // survivor by class
		svg1.selectAll("*").remove();
		chart1Btn.style("background-color", "white")
		chart2Btn.style("background-color", "green")
		chart3Btn.style("background-color", "white")

		var chart2 = new dimple.chart(svg1, data);
		var x = chart2.addCategoryAxis("x", "Pclass");
		chart2.addMeasureAxis("y", "Count");
		chart2.addSeries("Status", dimple.plot.bar);
		chart2.addLegend(100, 100, 100, 100, "left");
		chart2.draw();
		svg1.append("text")
				.attr("x", chart2._xPixels() + chart2._widthPixels()/2)
				.attr("y", chart2._yPixels() - 20)
				.style("text-anchor", "middle")
				.style("font-family", "sans-serif")
				.style("font-weight", "bold")
				.text("SURVIVOR V/S CLASS")
		explainP.text("Proportion of passengers surivived in first class is high.");
	})
	chart3Btn.on("click", function()
	{ // survivors by both class and gender
		svg1.selectAll("*").remove();
		chart1Btn.style("background-color", "white")
		chart2Btn.style("background-color", "white")
		chart3Btn.style("background-color", "green")

		var chart3 = new dimple.chart(svg1, data);
		var x = chart3.addCategoryAxis("x", ["Pclass", "Sex"]);
		chart3.addMeasureAxis("y", "Count");
		chart3.addSeries("Status", dimple.plot.bar);
		chart3.addLegend(100, 100, 100, 100, "left");
		chart3.draw();
		svg1.append("text")
				.attr("x", chart3._xPixels() + chart3._widthPixels()/2)
				.attr("y", chart3._yPixels() - 20)
				.style("text-anchor", "middle")
				.style("font-family", "sans-serif")
				.style("font-weight", "bold")
				.text("SURVIVOR V/S CLASS/GENDER")
		explainP.text("Proportion of females surivived in each class is high. Proportions of passengers survived depends on class.");
	})
})
