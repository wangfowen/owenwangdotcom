var margin = {top: 40, right: 30, bottom: 20, left: 40},
    width = document.getElementsByClassName('post')[0].offsetWidth 
      - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom,
    duration = 750,
    color = d3.scale.category20(),
    textOffset = 14,

    innerRadius,
    radius,
    wasteShow,
    internetShow,
    sleepShow;

var makeGraphs = function() {
  //for non-mobile browsers
  if (window.innerWidth > 500) {
    innerRadius = 70;
    radius = 120;

    wasteShow = 1;
    internetShow = 2;
    sleepShow = 7;
  } else {
    innerRadius = 40;
    radius = 70;

    wasteShow = 2;
    internetShow = 4;
    sleepShow = 15;
  }

  new PieGraph(timeCategoryData, "category-pie", "time", "category", 20);
  new LineGraph(wasteWeekData, "waste-line", ["time"], "week", wasteShow, "Goal-less hours");
  new BarGraph(internetUsageData, "internet-bar", "time", "site", "Hours on site");

  new DiffGraph(sleepFactorData, "sleep-diff", "effect", "factor", "Effect on sleep");
  new LineGraph(sleepDayData, "sleep-line", ["sleep", "quality", "social", "nogoal"], "date", sleepShow, ["Sleep (hours)", "Sleep quality (/10)", "Socialization (hours)", "No goal (hours)"]);
  new PieGraph(peopleTimeData, "people-pie", "time", "name", 35);
};

function listenForAnimate(self, loaded, animateFunc) {
  if (!loaded && window.pageYOffset > document.getElementById(self.el).offsetTop - window.innerHeight) {
    animateFunc();
    loaded = true;
  }

  window.addEventListener("scroll", function(e) {
    if (!loaded && window.pageYOffset > document.getElementById(self.el).offsetTop - window.innerHeight + 300) {
      animateFunc();
      loaded = true;
    }
  });
}

function makeEmptyGraph(el) {
  return d3.select("#" + el)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + ","
          + margin.top + ")");

}

function PieGraph(data, el, arcValuesKey, labelKey, labelThreshold) {
  var self = this;

  self.data = data;
  self.el = el;
  self.value = arcValuesKey;
  self.label = labelKey;
  self.threshold = labelThreshold;

  self.loaded = false;

  var pieData = d3.layout.pie().value(function(d) { return d[self.value]; }),
      arc = d3.svg.arc()
          .startAngle(function(d) { return d.startAngle; })
          .endAngle(function(d) { return d.endAngle; })
          .innerRadius(0)
          .outerRadius(radius);

  var graph = makeEmptyGraph(el)
        .attr("class", "pie");

  var labels = graph.append("g")
          .attr("class", "label")
          .attr("transform", "translate(" + (width/2) 
              + "," + (height/2) + ")");

  var lines = labels.selectAll("line")
          .data(pieData(self.data));

  lines.enter()
    .append("line")
      .attr("class", "line")
      .attr("x1", 0)
      .attr("x2", 0)
      .attr("y1", 0)
      .attr("y2", 0)
      .attr("transform", function(d) {
          return "rotate(" + (d.startAngle + d.endAngle)/2 *
            (180/Math.PI) + ")";
        });

  var pie = graph.append("g")
          .attr("transform", "translate(" + (width/2) 
              + "," + (height/2) + ")");

  var piePiece = pie.selectAll(".arc")
          .data(pieData(self.data))
        .enter().append("path")
          .attr("class", "arc");

  var centerContainer = graph.append("g")
          .attr("transform", "translate(" + (width/2) 
              + "," + (height/2) + ")");

  var center = centerContainer.append("circle")
          .attr("class", "center")
          .attr("r", 0);

  var centerLabel = centerContainer.append("text")
          .attr("class", "center-label")
          .attr("dy", -10)
          .attr("text-anchor", "middle");

  var centerValue = centerContainer.append("text")
          .attr("class", "center-value")
          .attr("dy", 20)
          .attr("text-anchor", "middle");

  listenForAnimate(self, self.loaded, function() {
      piePiece.attr("d", arc)
          .each(function() { this._current = { startAngle: 0, endAngle: 0}; })
          .attr("fill", function(d, i) { return color(i); })
          .transition().duration(duration)
          .attrTween("d", function(d) {
                var interpolate = d3.interpolate(this._current, d);
                this._current = interpolate(0);

                return function(t) {
                  return arc(interpolate(t));
                };
              }
            );

    //draw the labels
    lines.each(function(d) {
      if (d.value > self.threshold) {
        var angle = (d.startAngle + d.endAngle)/2;

        d3.select(this).transition()
            .delay(duration)
            .duration(duration)
            .attr("y1", -radius - 3)
            .attr("y2", -radius - 8);

        labels.append("text")
            .attr("dy", (function() {
                if (angle < Math.PI/2) {
                  return 0;
                } else if (angle > Math.PI*1.5) {
                  return -5;
                }
                else {
                  return 10;
                }
              })())
            .attr("dx", (function() {
                if (angle > Math.PI) {
                  return -20;
                } else {
                  return 25;
                }
              })())
            .attr("text-anchor", angle < Math.PI ? "beginning" : "end")
            .transition()
            .duration(duration)
            .delay(duration)
            .attr("transform", "translate(" + Math.cos(((d.startAngle+d.endAngle - Math.PI)/2)) * (radius+textOffset) + "," + Math.sin((d.startAngle+d.endAngle - Math.PI)/2) * (radius+textOffset) + ")")
            .text(d.data[self.label]);
      }
    });

    center.transition()
        .duration(duration)
        .delay(duration)
        .attr("r", innerRadius);
    setTimeout(function() {
        piePiece.on("mouseover", function(d) {
                  centerLabel.text(d.data[self.label]);
                  centerValue.text(d.data[self.value] + " hours");
                })
      }, 1000);
  });

  return self;
}

function makeXAxis(x) {
  return d3.svg.axis()
      .scale(x)
      .orient("bottom");
}

function makeYAxis(y) {
  return d3.svg.axis()
      .scale(y)
      .orient("left");
}

function drawGrid(graph, x, y) {
  graph.append("g")
      .attr("class", "grid")
      .attr("transform", "translate(0," + height + ")")
      .call(makeXAxis(x)
          .tickSize(-height, 0, 0)
          .tickFormat("")
    );

  graph.append("g")
      .attr("class", "grid")
      .call(makeYAxis(y)
          .tickSize(-width, 0, 0)
          .tickFormat("")
        );
}

function drawXAxis(graph, xAxis) {
  graph.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);
}

function drawYAxis(graph, yAxis, yAxisLabel) {
  var drawn = graph.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", -38)
      .attr("x", -10)
      .attr("dy", ".71em")
      .style("text-anchor", "end");

  if (typeof yAxisLabel === "string")
    drawn.text(yAxisLabel).attr("class", "axis-label");
}

function LineGraph(data, el, yValueKeys, xLabelKey, everyNumLabels, yAxisLabel) {
  var self = this;

  self.data = data;
  self.el = el;
  self.label = xLabelKey;
  self.values = yValueKeys;
  self.numLabels = everyNumLabels;
  self.yAxisLabel = yAxisLabel;

  var x = d3.scale.ordinal()
            .domain(self.data.map(function(d) { return d[self.label]; }))
            .rangeRoundBands([0, width]),
      y = d3.scale.linear().range([height, 0])
            .domain([0, d3.max(self.data, function(d) {
                var max = 0;

                for (var i = 0; i < self.values.length; i++) {
                  if (d[self.values[i]] && d[self.values[i]] > max)
                    max = d[self.values[i]];
                }
                return max;
              })]);

  var xAxis = makeXAxis(x)
          .tickFormat(function (d, i) { return i % self.numLabels === 0 ? d : ''         }),
      yAxis = makeYAxis(y)
          .ticks(8);

  var graph = makeEmptyGraph(el);

  drawXAxis(graph, xAxis);
  drawYAxis(graph, yAxis, self.yAxisLabel);
  //drawGrid(graph, x, y);

  var startingPoint = (width / self.data.length) / 2;
  var line = d3.svg.line()
          .interpolate("linear")
          .x(function(d) { return x(d[self.label]) + startingPoint });

  var path = [],
      loaded = [];

  for (var i = 0; i < self.values.length; i++) {
    var prev = 0;

    (function(i) {
      line.y(function(d) {
          if (d[self.values[i]]) {
            prev = y(d[self.values[i]]);
          }
          return prev;
        });

      path.push(
          graph.append("path")
            .datum(self.data)
            .attr("class", "line")
            .attr("d", line)
            .attr("stroke", color(i * 2))
        );
      loaded.push(false);

      var totalLength = path[i].node().getTotalLength();

      path[i]
        .attr("stroke-dasharray", totalLength + " " + totalLength)
        .attr("stroke-dashoffset", totalLength);

      listenForAnimate(self, loaded[i], function() {
        path[i]
          .transition()
            .delay(duration * i)
            .duration(duration)
            .ease("linear")
            .attr("stroke-dashoffset", 0);
      });
    })(i);
  }

  //label should be a legend if multiple lines
  if (self.values.length > 1) {
    var legend = graph.selectAll(".legend")
          .data(self.yAxisLabel)
        .enter().append("g")
          .attr("class", "legend")
          .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

    legend.append("rect")
        .attr("x", width - 18)
        .attr("height", 18)
        .attr("width", 18)
        .attr("fill", function(d,i) { return color(i * 2); });

    legend.append("text")
        .attr("x", width - 24)
        .attr("y", 9)
        .attr("dy", ".35em")
        .style("text-anchor", "end")
        .text(function(d) { return d; });
  }

  return self;
}

function BarGraph(data, el, yValuesKey, xLabelsKey, yAxisLabel) {
  var self = this;

  self.data = data;
  self.el = el;
  self.value = yValuesKey;
  self.label = xLabelsKey;
  self.yAxisLabel = yAxisLabel;

  self.loaded = false;

  var x = d3.scale.ordinal()
          .domain(self.data.map(function(d) { return d[self.label]; }))
          .rangeRoundBands([0, width], .1),
      y = d3.scale.linear()
          .domain([0, d3.max(self.data, function(d) { return d[self.value]; })])
          .range([height, 0]);

  var xAxis = makeXAxis(x)
          //only show every fourth label
          .tickFormat(function (d, i) { return i % internetShow === 0 ? d : ''         }),
      yAxis = makeYAxis(y)
          .ticks(12);

  var graph = makeEmptyGraph(el);

  drawXAxis(graph, xAxis);
  drawYAxis(graph, yAxis, self.yAxisLabel);
  drawGrid(graph, x, y);

  var bar = graph.selectAll(".bar")
          .data(self.data)
        .enter().append("rect")
          .attr("class", "bar")
          .attr("x", function(d) { return x(d[self.label]); })
          .attr("y", function(d) { return y(d[self.value]); })
          .attr("width", x.rangeBand())
          .attr("height", 0)
          //fill with a color
          .attr("style", function(d, i) { return "fill: " + color(i * 2); });

  listenForAnimate(self, self.loaded, function() {
      bar.transition()
          .duration(duration)
          .delay(function(d, i) { return i * 10; })
          .attr("height", function(d) { return height - y(d[self.value]); });
  });

  return self;
}

function DiffGraph(data, el, yValuesKey, xLabelsKey, yAxisLabel) {
  var self = this;

  self.data = data;
  self.el = el;
  self.value = yValuesKey;
  self.label = xLabelsKey;
  self.yAxisLabel = yAxisLabel;

  self.loaded = false;

  var x = d3.scale.ordinal()
          .domain(self.data.map(function(d) { return d[self.label]; }))
          .rangeRoundBands([0, width], .1),
      y = d3.scale.linear()
          .domain(d3.extent(self.data, function(d) { return d[self.value]; }))
          .range([height, 0]);

  var yAxis = makeYAxis(y)
        .tickFormat(function(d) { return d + "%" });

  var graph = makeEmptyGraph(el);

  graph.append("g")
      .attr("class", "x axis")
    .append("line")
      .attr("y1", y(0))
      .attr("y2", y(0))
      .attr("x2", width);

  drawYAxis(graph, yAxis, self.yAxisLabel);
  drawGrid(graph, x, y);

  var barBox = graph.selectAll(".bar")
      .data(self.data)
    .enter().append("g")
      .attr("transform", function(d) { return "translate(" + x(d[self.label]) + ",0)"; });

  barBox.append("text")
      .attr("y", function(d) { return d[self.value] > 0 ? y(d[self.value]) - 10 : y(d[self.value]) + 3; })
      .attr("x", x.rangeBand() / 2)
      .attr("dy", ".75em")
    .text(function(d) { return d[self.label]; });
  var bar = barBox.append("rect")
      .attr("class", function(d) { return d[self.value] > 0 ? "bar positive" : "bar negative" })
      .attr("y", function(d) { return y(Math.max(0, d[self.value])); })
      .attr("width", x.rangeBand())
      .attr("height", 0);

  listenForAnimate(self, self.loaded, function() {
    bar.transition()
          .duration(duration)
          .delay(function(d, i) { return i * 10; })
      .attr("height", function(d) { return Math.abs(y(d[self.value]) - y(0)); });
  });

  return self;
}

makeGraphs();

var timeOut = null;
var remakeGraphs = function() {
  width = document.getElementsByClassName('post')[0].offsetWidth 
      - margin.left - margin.right;

  var svg = document.getElementsByTagName("svg"),
      last;

  for (var i = 0; i < svg.length; i++) {
    while (last = svg[i].lastChild) svg[i].removeChild(last);
  }
  makeGraphs();
};

window.onresize = function(){
   if(timeOut != null) clearTimeout(timeOut);
   timeOut = setTimeout(remakeGraphs, 100);
}
