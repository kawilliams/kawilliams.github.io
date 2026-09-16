/* bias-vis */
var height = 600,
	width = 600;

var viewBoxDimensions = {height: 600, width: 600, x: 0, y:0};
var graphDimensions = {x: 0, y: 0};

var radius = 4;
var margin = ({top: 50, right: 20, bottom: 40, left: 50});
var slider = {handle: 10, bar: 5};
var font = {height: 12, width: 7, size: 14};
var toolTipDimensions = {x: 108, 
	y: 156, 
	width: 363, 
	height: 135,
	activeX: 0.18 * width + 3,
	activeY: 0.26 * height + 5,
	activeHorizWidth: 340,
	activeHorizHeight: 60,
	activeVertWidth: 360,
	activeVertHeight: 60
	};
var toolTipWrap = 56;
var graphOffset = 0;

//Adjust sizes for mobile
if (screen.width < screen.height) {
	radius = 6;
	font = {height: 16, width: 9, size: 18};
	viewBoxDimensions = {height: 800, width: 600, x: 0, y:0};
	graphDimensions = {x: 0, y: 0};
	graphOffset = 170;
	toolTipDimensions = {x: 10, y: -170, width: 570, 
		height: 160, activeX: 13, activeY: -90,
		activeHorizWidth: 570,
		activeHorizHeight: 80,
		activeVertWidth: 570,
		activeVertHeight: 80
	};
	toolTipWrap = 70;
	slider.handle = 15;
	slider.bar = 10;
} 

/* 
Colors
CAII
#48A9C5 light blue
#1B365D dark blue
*/

/* Useful function to split text for tspan. 
Gives the effect of text wrapping. */
function wrapText(rectText, w) {
	var wrap = rectText.replace(
		new RegExp(`(?![^\\n]{1,${w}}$)([^\\n]{1,${w}})\\s`, 'g'), '$1\n'
	);
	var wrapList = wrap.split('\n');
	return wrapList;
}

function drawMySVG(mySVGID, mySVGClass){
	// Load the data and run the graph
	// Data: race, risk_score_quantile, num_chronic_conds_mean, ci
	d3.csv("data/figure1a_replicate_request.csv").then(function(d){

		// x: Percentile of Algorithm Risk Score
		var x = d3.scaleLinear()
			.domain([0, 100])
			.range([margin.left, width-margin.right]);

		var xAxis = g => g
			.attr('transform', 'translate(0, ' + (height - margin.bottom) + ' )')
			.attr('class', 'xAxis ' + mySVGClass)
			.call(d3.axisBottom(x).ticks(10))
			.call(g => g.selectAll(".tick line").clone()
				.attr("y2", -height+margin.top)
				.attr("stroke", "black")
				.attr("stroke-opacity", 0.1))
			.call(g => g.append("text")
				.attr("x", width - 4)
				.attr("y", -4)
				.attr("font-weight", "bold")
				.attr("text-anchor", "end")
				.attr("fill", "black")
				.text(d.x));

		// // y: Number of active chronic conditions
		var y = d3.scaleLinear()
			.domain([0, Math.ceil(d3.max(d, function(d){ return d.num_chronic_conds_mean; }))])
			.range([height - margin.bottom, margin.top]);

		var yAxis = g => g
			.attr('transform', 'translate('+ margin.left + ',0)')
			.attr('class', 'yAxis ' + mySVGClass)
			.call(d3.axisLeft(y).ticks(null,".1f"))
			.call(g => g.selectAll(".tick line").clone()
				.attr("x2", width)
				.attr("stroke", "black")
				.attr("stroke-opacity", 0.1))
	   		.call(g => g.select(".tick text").clone()
	        	.attr("x", 4)
		        .attr("text-anchor", "start")
		        .attr("font-weight", "bold")
		        .attr("fill", "black")
	        .text(d.y));


		var svg = d3.select(mySVGID)
				.attr('preserveAspectRatio', 'xMidYMid meet')
				.attr('viewBox', viewBoxDimensions.x + " " + viewBoxDimensions.y + " " + viewBoxDimensions.width + " " + viewBoxDimensions.height)
				.classed('svg-content', true)
				.attr('class', mySVGClass);

		var graphG = svg.append('g')
			.attr('class', mySVGClass)
			.attr('transform', 'translate(0, ' + graphOffset + ')');

		// Add rect to show shading past the 55%ile threshold
		graphG.append('rect')
			.attr('class', mySVGClass)
			.attr('x', x(55))
			.attr('y', y(5.5))
			.attr('width', x(100) - x(55) + 10)
			.attr('height', height - margin.top + 12)
			.attr('fill', 'grey')
			.attr('opacity', 0.3); //0.6

		var blackPoints = [];
		var whitePoints = [];
		for (var i=0; i<d.length; i++){
			var t = [d[i].risk_score_quantile, d[i].num_chronic_conds_mean];
			(i % 2 == 0) ? blackPoints.push(t) : whitePoints.push(t);
		}

		var exponentialRegression = d3.regressionExp()
				.x(d => d[0])
				.y(d => d[1])
				.domain([0, 100]);
		var blackCurve = exponentialRegression(blackPoints);
		var whiteCurve = exponentialRegression(whitePoints);		

		var lineGenerator = d3.line()
			.x(d => x(d[0]))
			.y(d => y(d[1]));

		// dark blue/Black line of best fit
		graphG.append("path")
			.data(blackCurve)
			.attr("d", lineGenerator(blackCurve))
			.attr('class', mySVGClass)
			.style("stroke", "#1B365D")
			.style("fill", "none")
			.style('stroke-width', "1px")
			.style('stroke-dasharray', '8')
		
	 	// light blue/White line of best fit
		graphG.append("path")
			.data(whiteCurve)
			.attr("d", lineGenerator(whiteCurve))
			.attr('class', mySVGClass)
			.style("stroke", "#48A9C5")
			.style("fill", "none")
			.style('stroke-width', "1px")
			.style('stroke-dasharray', '0')

		graphG.append('g')
			.attr('id', 'xAxisGroup')
			.attr('class', mySVGClass)
			.call(xAxis);

		//xAxis label
		graphG.select('#xAxisGroup')
			.append('text')
			.attr('id', 'xAxisLabel')
			.attr('class', mySVGClass)
			.attr('x', 0.54 * width)
			.attr('y', 0.06 * height)
			.attr('fill', 'black')
			.text('Percentile of Algorithm Risk Score')
			.style('font-size', font.size);

		graphG.append('g')
			.attr('id', 'yAxisGroup')
			.attr('class', mySVGClass)
			.call(yAxis);
		//yAxis label
		graphG.select('#yAxisGroup')
			.append('text')
			.attr('id', 'yAxisLabel')
			.attr('class', mySVGClass)
			.attr('transform', 'rotate(-90)')
			.attr('x', -0.36 * width)
			.attr('y', -0.06 * height)
			.attr('fill', 'black')
			.text('Number of Active Chronic Conditions')
			.style('font-size', font.size);


		// Add percentile lines marking "defaulted" (97%) and "referred" (55%)
		var cutoffLines = [{percentile: 55, text: 'Referred for screening'},
							{percentile: 97, text: 'Defaulted into program'}];
		graphG.append('g')
			.selectAll('line')
			.data(cutoffLines)
			.join('line')
				.attr('class', mySVGClass)
				.attr('x1', d => x(d.percentile))
				.attr('x2', d => x(d.percentile))
				.attr('y1', d => y(0))
				.attr('y2', 20)
				.attr('stroke', d => 'black')
				.attr('stroke-width', 2)
				.attr('stroke-dasharray', 8);

		// Add percentile cutoff lines' labels
		graphG.append('g')
			.selectAll('text')
			.data(cutoffLines)
			.enter()
			.append('text')
				.attr('class', mySVGClass)
				.attr('transform', d => 'translate('+(x(d.percentile)-5)+', 10) rotate(-90)')
				.attr('fill', d => 'black')
				.text(d => d.text)
				.attr('text-anchor', 'end')
				.style('font-size', font.size);
			
		// Add legend (Black: dark blue, White: light blue)
		var legendColors = [{color: "#48A9C5" , path: "M60,55 l45,0" , 
							dasharray: "0", race: "White"},
							{color: "#1B365D" , path: "M60,70 l50,0" , 
							dasharray: "5 5", race: "Black"}];
		// Add legend 
		graphG.append('g')
			.selectAll('path')
			.data(legendColors)
			.join('path')
			.attr('class', mySVGClass)
			.attr('d', d => d.path)
			.attr('stroke', d => d.color)
			.attr('stroke-dasharray', d => d.dasharray)
			.attr('stroke-width', 2)
			.attr('fill', 'none');
		graphG.append('g')
			.selectAll('text')
			.data(legendColors)
			.enter()
			.append('text')
			.attr('class', mySVGClass)
			.attr('x', 110)
			.attr('y', d => (d.race == 'Black') ? 72 : 57)
			.text(d => d.race)
			.style('font-size', font.size);

		// Add confidence intervals at dots
		var confInterval = graphG.append('g')
			.selectAll('g')
			.data(d)
			.join('g');

		confInterval.append('line')
			.attr('class', 'ci ' + mySVGClass)
			.attr('id', (d,i)=> {
				return i+"ci";
			})
			.attr('x1', d => x(d.risk_score_quantile))
			.attr('y1', d => {
				d.ci = +d.ci;
				d.num_chronic_conds_mean = +d.num_chronic_conds_mean;
				return y(d.num_chronic_conds_mean + d.ci)
			})
			.attr('x2', d => x(d.risk_score_quantile))
			.attr('y2', d => y(d.num_chronic_conds_mean - d.ci))
			.attr('stroke', d => (d.race == 'Black') ? '#1B365D' : '#48A9C5')
			.attr('stroke-dasharray', d => (d.race == 'Black') ? 3 : 0)
			.attr('stroke-width', 1);

		//Add dummy circle so that tabbing works
		graphG.append('circle')
			.attr('id', 'circle-1')
			.attr('cx', 10)
			.attr('cy', 10)
			.attr('r', 0)
			.attr('tabindex', '0');

		//Add data points
		var dataCircles = graphG.append('g')
			.selectAll('circle')
				.data(d)
				.join('circle')
				.attr('id', (d,i)=>{ return "circle"+i; })
				.attr('class', mySVGClass)
				.attr('cx', d => x(+d.risk_score_quantile))
				.attr('cy', d => y(+d.num_chronic_conds_mean))
				.attr('r', radius)
				.attr('tabindex', '0')
				.attr('fill', d => (d.race == 'Black') ? '#1B365D' : '#48A9C5')
				.attr('stroke', d => (d.race == 'Black') ? '#1B365D' : '#48A9C5');

		var toolTipG = graphG.append('g')
				.attr('class', "tooltip " + mySVGClass);

		var toolTip = toolTipG.append('rect')
				.attr('id', 'tooltip')
				.attr('class', mySVGClass)
				.attr('height', toolTipDimensions.height)
				.attr('width', toolTipDimensions.width)
				.attr('x', toolTipDimensions.x)
				.attr('y', toolTipDimensions.y)
				.attr('fill', 'black')
				.attr('rx', 5)
				.attr('opacity', '0.7');

		var toolTipText = { instructions: "Health providers used an algorithm to determine which patients would get referred for and accepted into an extra care program. The x-axis shows a patient's risk score, and the y-axis shows how healthy the patient is, based on the number of chronic conditions. A higher risk score equates to a higher chance to receive extra care. Move the sliders to explore.",
					horizTextAcrossThreshold: "Two patients at this level would be equally sick (Y conditions), but to the algorithm the Black patient needed to be more sick to be referred.",
					horizTextSameSide: "Two patients at this level would be equally sick (Y conditions), but to the algorithm the Black patient needed to be more sick to be scored higher.",
					vertText:  "Both patients at this point received the same score from the algorithm (X percentile) but the Black patient would have diff more conditions than the White patient."
					};
		var toolTipTextElement = toolTipG.selectAll('text.'+mySVGClass)
				.data(d => wrapText(toolTipText.instructions, toolTipWrap))
				.enter()
				.append("text")
				.attr('class', 'tiptext ' +mySVGClass)
				.attr('x', toolTipDimensions.x + font.width) 
				.attr('y', toolTipDimensions.y + 1.5 * font.height);
				
		toolTipTextElement
			.append('tspan')
			.attr('class', 'tiptext '+mySVGClass)
			.text(d => d)
			.attr('x', toolTipDimensions.x + font.width)
			.attr('y', (d,i) => i * (1.5 * font.height) + toolTipDimensions.y + 1.5 * font.height)
			.attr('fill', 'white')
			.style('font-size', font.size);

		// Add individual labels for each point (tooltips)
		var allLabelsG = graphG.append('g');
		var label = allLabelsG.selectAll('rect')
			.data(d)
			.enter()
			.append('rect')
			.attr('class', d =>  "labels label"+d.id+" "+mySVGClass)
			.attr('width', 110)
			.attr('height', 56)
			.attr('fill', 'black')
			.attr('opacity', '0.7')
			.attr('rx', 2)
			.attr('display', 'none') 
			.attr('x', d => (d.orient == "left") ? x(d.risk_score_quantile) - 115 : x(d.risk_score_quantile) + radius + 3)
			.attr('y', d => (d.orient == "left") ? y(d.num_chronic_conds_mean) - 60 : y(d.num_chronic_conds_mean) + radius + 3);

		var labelText = allLabelsG.selectAll('text')
			.data(d)
			.enter()
			.append('text')
			.attr('class', d =>  "labels label"+d.id+" "+mySVGClass)
			.attr('display', 'none')
			.attr('x', d => (d.orient == "left") ? x(d.risk_score_quantile) - 115 : x(d.risk_score_quantile) + radius + 3)
			.attr('y', d => (d.orient == "left") ? y(d.num_chronic_conds_mean) - 60 : y(d.num_chronic_conds_mean) + radius + 3);

			labelText.selectAll('tspan')
			.data(d => [d.num_chronic_conds_mean, d.risk_score_quantile, d.race])
			.enter()
			.append('tspan')
			.attr('class', function(d){ return this.parentElement.className.baseVal; })
			.text(function(d){
				if (d == "Black" | d == "White") { return "Race: " + d; }
				if (+d >= 10) { return "Percentile: " + percentileSuffix(d); }
				if (d < 5) { return "Conditions: " + d.toFixed(2); }
				return d;
			})
			.attr('display', 'none')
			.attr('x', function() { return this.parentElement.x.baseVal[0].value + 3; })
			.attr('dy', '1.2em')
			.attr('fill', 'white');

		dataCircles
			.on('touchstart', function(event){
				showDotToolTip(event);
				event.preventDefault();
			})
			.on('mouseover', showDotToolTip)
			.on('mouseout touchend', hideDotToolTip);
		

		// Slider
		var sliderClass = (mySVGClass.includes('vert')) ? 'vertSlider' : 'horizSlider';
		var sliderId = (mySVGClass.includes('vert')) ? 'vertSliderBar' : 'horizSliderBar';
		var handleId = (mySVGClass.includes('vert')) ? 'vertSliderHandle' : 'horizSliderHandle';

		var sliderX = (mySVGClass.includes('vert')) ? x(82) : x(-1.5);
		var sliderY = (mySVGClass.includes('vert')) ? y(5.5) : y(1.2);
		var sliderHeight = (mySVGClass.includes('vert')) ? 570 : slider.bar;
		var sliderWidth = (mySVGClass.includes('vert')) ? slider.bar : 550;
		
		var handleX = (mySVGClass.includes('vert')) ? x(82)-2 : x(55)-25;
		var handleY = (mySVGClass.includes('vert')) ? y(2.5)-25 : y(1.2)-2;
		var handleHeight = (mySVGClass.includes('vert')) ? 50 : slider.handle;
		var handleWidth = (mySVGClass.includes('vert')) ? slider.handle : 50;
		

		var dragSlider = d3.drag()
				.on('start', dragstarted)
				.on('drag', draggingSlider)
				.on('end', dragend);

		var sliderBar = graphG.append('rect')
				.attr('class', sliderClass + " " + mySVGClass)
				.attr('id', sliderId)
				.attr('x', sliderX)
				.attr('y', sliderY)
				.attr('rx', 5)
				.attr('height', sliderHeight)
				.attr('width', sliderWidth)
				.attr('fill', 'grey')
				.attr('opacity', 0.7)
				.attr('tabindex', '0')
				.attr('cursor', 'pointer')
				.call(dragSlider);
		var circleHorizIds = [];
		graphG.append('rect')
				.attr('class', sliderClass + " " + mySVGClass)
				.attr('id', handleId)
				.attr('x', handleX)
				.attr('y', handleY)
				.attr('rx', 8)
				.attr('height', handleHeight)
				.attr('width', handleWidth)
				.attr('fill', 'grey')
				.attr('cursor', 'pointer')
				.call(dragSlider);

		function dragstarted(event){
			if ((event.key == 'ArrowDown') || (event.key == 'ArrowUp')) {
				var whichSlider = ".horizSlider.horizGraph";
			} 
			else if ((event.key == 'ArrowLeft') || (event.key == 'ArrowRight')) {
				var whichSlider = ".vertSlider.vertGraph";
			} 
			else {
				var whichSlider = "." + d3.select(this).attr('class').replace(" ", ".");
			}
			
			d3.selectAll(whichSlider).raise().attr('fill', 'darkgrey');
		}
		function draggingSlider(event){
			if ((event.key == 'ArrowDown') || (event.key == 'ArrowUp')) {
				var whichSlider = "horiz";
				event.x = +d3.select('#horizSliderBar').attr('x');
				// Y-axis is runs 0 to 600 top to bottom
				(event.key == 'ArrowDown') ? event.y = +d3.select('#horizSliderBar').attr('y') + 10 : event.y = +d3.select('#horizSliderBar').attr('y') - 10;
				
			} 
			else if ((event.key == 'ArrowLeft') || (event.key == 'ArrowRight')){
				var whichSlider = "vert";
				(event.key == 'ArrowLeft') ? event.x = +d3.select('#vertSliderBar').attr('x') - 10 : event.x = +d3.select('#vertSliderBar').attr('x') + 10;
				event.y = +d3.select('#vertSliderBar').attr('y');
			}
			else {
				var whichSlider = d3.select(this).attr('id').split('Slider')[0];
			}
			if (whichSlider.includes('vert')){
				//Prevent slider from going off screen left
				if (event.x < margin.left){
					d3.select("#" + whichSlider + "SliderBar").attr('x', margin.left);
					d3.select("#" + whichSlider + "SliderHandle").attr('x', margin.left-2);	
				}
				// Prevent slider from going off screen right 
				else if (event.x > width-margin.right) {
					d3.select("#" + whichSlider + "SliderBar").attr('x', width-margin.right);
					d3.select("#" + whichSlider + "SliderHandle").attr('x', width-margin.right-2);
				} else{
					d3.select("#" + whichSlider + "SliderBar").attr('x', event.x);
					d3.select("#" + whichSlider + "SliderHandle").attr('x', event.x-2);
				}
			} else {
				//Prevent slider from going off the bottom
				if (event.y > (height - margin.bottom)) {
					d3.select("#" + whichSlider + "SliderBar").attr('y', height-margin.bottom);
					d3.select("#" + whichSlider + "SliderHandle").attr('y', height-margin.bottom-2);
				} 
				//Prevent slider from going off the top
				else if (event.y < margin.top){
					d3.select("#" + whichSlider + "SliderBar").attr('y', margin.top);
					d3.select("#" + whichSlider + "SliderHandle").attr('y', margin.top-2);
				}
				else {		
					d3.select("#" + whichSlider + "SliderBar").attr('y', event.y);
					d3.select("#" + whichSlider + "SliderHandle").attr('y', event.y-2);
				}
			}
			
			const circles = d3.selectAll('circle.' + mySVGClass).nodes();
			var circleDataArray = [];
			circles.forEach(element => {
				switch(mySVGClass) {
					case 'horizGraph':
						curr_y = element.cy.baseVal.value;
						if ((curr_y >= (event.y-radius)) && (curr_y <= (event.y+radius+slider.bar))) {
							element.setAttribute('r', radius * 2);
							var circleData = d3.select(element).datum();
							circleDataArray.push(circleData);
						}
						else {
							element.setAttribute('r', radius);
						}
						break;
					case 'vertGraph':
						curr_x = element.cx.baseVal.value;
						if ((curr_x >= event.x-radius) && (curr_x <= (event.x+radius+slider.bar))) {
							element.setAttribute('r', radius * 2);
							var circleData = d3.select(element).datum();
							circleDataArray.push(circleData);
						}
						else {
							element.setAttribute('r', radius);
						}
						break;
				}
				
			});
			toolTipAppear(event, d, whichSlider, circleDataArray);
		}
		
		function dragend(event, d){
			if ((event.key == 'ArrowDown') || (event.key == 'ArrowUp')) {
				var whichSlider = ".horizSlider.horizGraph";
			} 
			else if ((event.key == 'ArrowLeft') || (event.key == 'ArrowRight')) {
				var whichSlider = ".vertSlider.vertGraph";
			} 
			else {
				var whichSlider = "." + d3.select(this).attr('class').replace(" ", ".");
			}
			d3.selectAll(whichSlider).raise().attr('fill', 'grey');
		}
		function percentileSuffix(number) {
			var percentileWithSuffix = number;
			if (number % 10 == 1) {return percentileWithSuffix + "st";}
			else if (number % 10 == 2) {return percentileWithSuffix + "nd";}
			else if (number % 10 == 3) {return percentileWithSuffix + "rd";}
			return percentileWithSuffix + "th";
		}

		function toolTipAppear(event, d, whichSlider, selectedCircles){
			hideDotToolTip(event);

			var text = whichSlider.includes("horiz") ? toolTipText.horizTextSameSide : toolTipText.vertText;
			var toolTipG = d3.select('g.tooltip.' + whichSlider + 'Graph');
			
			toolTipG.selectAll('text').remove();
			toolTipG.select("rect")
			.transition()
			.duration(35)
			.attr('width', whichSlider.includes("horiz") ? toolTipDimensions.activeHorizWidth : toolTipDimensions.activeVertWidth)
			.attr('height', whichSlider.includes("horiz") ? toolTipDimensions.activeHorizHeight : toolTipDimensions.activeVertHeight)
			.attr('x', toolTipDimensions.activeX)
			.attr('y', toolTipDimensions.activeY);
		
			//Get the selected circles' data
			if (selectedCircles.length == 2 && whichSlider.includes("horiz")) {
				var blackPatientScore = selectedCircles[0].risk_score_quantile;
				var whitePatientScore = selectedCircles[1].risk_score_quantile;
				//If one patient is past the threshold but the other isn't
				if ((whichSlider.includes("horiz")) && (blackPatientScore <= 55) && (whitePatientScore >= 55)){
					text = toolTipText.horizTextAcrossThreshold;
				}
				var Y = selectedCircles[1].num_chronic_conds_mean.toFixed(2);
			
				text = text.replace("Y", Y);
			} 
			else if (whichSlider.includes("horiz")){

				//Need to use a LoBF point
				var blackApproxY = 0;
				var blackPatientScore = 0;
				var blackApproxIndex = -1;
				blackCurve.forEach((element,i) => {
					if (y(element[1]) > event.y) {
						blackApproxY = y(element[1]);
						blackPatientScore = element[0];
						blackApproxIndex = i;
					}
				});
				var whiteApproxY = 0;
				var whitePatientScore = 0;
				var whiteApproxIndex = -1;
				whiteCurve.forEach((element,i) => {
					if (y(element[1]) > event.y) {
						whiteApproxY = y(element[1]);
						whitePatientScore = element[0];
						whiteApproxIndex = i;
					}
				});
				//If one patient is past the threshold but the other isn't
				if ((blackPatientScore <= 55) && (whitePatientScore >= 55)) {
					text = toolTipText.horizTextAcrossThreshold;
				}

				var Y = blackCurve[blackApproxIndex][1].toFixed(2);
				text = text.replace("Y", Y);
			}
			if (selectedCircles.length == 2 && whichSlider.includes("vert")){
				var X = selectedCircles[1].risk_score_quantile;
				var Y = selectedCircles[1].num_chronic_conds_mean.toFixed(2);
				var Z = selectedCircles[0].num_chronic_conds_mean.toFixed(2);
				var X = percentileSuffix(X);
				
				var diff = (Z - Y).toFixed(2);
				text = text.replace("X", X);
				text = text.replace("diff", diff);
			}
			else if (whichSlider.includes("vert")){
				//Need to use a LoBF point
				var blackApproxX = 0;
				var blackApproxIndex = -1;
				blackCurve.forEach((element,i) => {
					if (x(element[0]) < event.x) {
						blackApproxX = x(element[0]);
						blackApproxIndex = i;
					}
				});
				var whiteApproxX = 0;
				var whiteApproxIndex = -1;
				whiteCurve.forEach((element,i) => {
					if (x(element[0]) < event.x) {
						whiteApproxX = x(element[0]);
						whiteApproxIndex = i;
					}
				});
				var X = blackCurve[blackApproxIndex][0].toFixed(0); //percentile
				var Y = whiteCurve[whiteApproxIndex][1].toFixed(2);
				var Z = blackCurve[blackApproxIndex][1].toFixed(2);
				var X = percentileSuffix(X);

				
				var diff = (Z - Y).toFixed(2);
				text = text.replace("X", X);
				text = text.replace("diff", diff);
			}

			var toolTipTextElement = toolTipG.selectAll('text')
					.data(d => wrapText(text, toolTipWrap))
					.enter()
					.append("text")
					.attr('class', 'tiptext')
					.attr('x', toolTipDimensions.activeX) 
					.attr('y', toolTipDimensions.activeY)
					.style('font-size', font.size);
				
				toolTipTextElement
					.append('tspan')
					.attr('class', 'tiptext')
					.text(d => d)
					.attr('x', toolTipDimensions.activeX + font.width)
					.attr('y', (d,i) => i * (1.5 * font.height) + toolTipDimensions.activeY + 1.5 * font.height)
					.attr('fill', 'white')
					.style('font-size', font.size);
		}

		function showDotToolTip(event) {
			//Clear labels/tooltips first
			d3.selectAll('.labels.' + mySVGClass).attr('display', 'none');
			if (event.key == 'Tab') {
				var whichLabel = ".label" + (+(document.activeElement.id.split('circle')[1]) + 1) + "." + mySVGClass;
			}
			else {
				var whichLabel = ".label" + d3.select(this).attr('id').split('circle')[1] + "." + mySVGClass;
			}
			var allPartsOfDotToolTip = d3.selectAll(whichLabel);
			allPartsOfDotToolTip.attr('display', 'inline');
			
		}
		function hideDotToolTip(event) {
			d3.selectAll('.labels.' + mySVGClass).attr('display', 'none');
		}

		document.addEventListener('keydown', (event) => {
			if (['ArrowDown','ArrowUp'].indexOf(event.code) > -1){
				event.preventDefault();
			}
			const keyName = event.key;
			if (keyName == 'Tab') {
				showDotToolTip(event);
			}
			else if ((keyName == 'ArrowDown') || (keyName == 'ArrowUp') || (keyName == 'ArrowLeft') || (keyName == 'ArrowRight')) {
				dragstarted(event);
				draggingSlider(event);

			}
			else {
				dragend(event);
			}
		});


	})
	.catch(function(error){
		console.log("Error on csv load");
		console.log(error)
	})

}

drawMySVG('#fig1AHoriz', 'horizGraph');

drawMySVG('#fig1AVert', 'vertGraph');











