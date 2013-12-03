var timeCategoryData = [
      {
        category: "Cook",
        time: 15.0
      },
      {
        category: "Socialize",
        time: 133.5,
      },
      {
        category: "Dance",
        time: 8.0,
      },
      {
        category: "Sleep",
        time: 287.6,
      },
      {
        category: "Write",
        time : 11.0,
      },
      {
        category: "No goal",
        time : 114.0,
      },
      {
        category: "Read",
        time : 14.5,
      },
      {
        category: "Program",
        time : 14.0,
      },
      {
        category: "Plan",
        time : 9.5,
      },
      {
        category: "Travel",
        time : 126.5,
      },
      {
        category: "French",
        time : 36.5,
      },
      {
        category: "Exercise",
        time : 18.5,
      },
      {
        category: "Class",
        time : 62.5
      }
    ],
    wasteWeekData = [
      {
        week: 1,
        time: 5.0
      },
      {
        week: 2,
        time: 22.0
      },
      {
        week: 3,
        time: 29.5
      },
      {
        week: 4,
        time: 27.5
      },
      {
        week: 5,
        time: 16.5
      }
    ],
    internetUsageData = [
      {
        site:"Facebook",
        time: 26.4
      },
      {
        site:"YouTube",
        time : 23.4
      },
      {
        site:"GMail",
        time : 7.1
      },
      {
        site:"Google",
        time : 6.0
      },
      {
        site:"Wikipedia",
        time : 5.7
      },
      {
        site:"Word Reference",
        time : 3.8
      },
      {
        site:"Chuck-Streaming.fr",
        time : 3.8
      },
      {
        site:"Google Plus",
        time : 2.2
      },
      {
        site:"Google Docs",
        time : 1.7
      },
      {
        site:"Digg Reader",
        time : 1.6
      }
    ],
    peopleTimeData = [
      {
        name: "Nathan W",
        time: 81.5
      },
      {
        name: "Jamie W",
        time : 55.5
      },
      {
        name: "Nick S",
        time : 55.0
      },
      {
        name: "Merike H",
        time : 49.0
      },
      {
        name: "Stine S",
        time : 45.0
      },
      {
        name: "Heather C",
        time : 43.0
      },
      {
        name: "Dani A",
        time : 40.0
      },
      {
        name: "Sam N",
        time : 37.5
      },
      {
        name: "Sam R",
        time : 33.0
      },
      {
        name: "Kirsten M",
        time : 32.5
      },
      {
        name: "Shefali B",
        time : 29.0
      },
      {
        name: "Maria L",
        time : 25.0
      },
      {
        name: "Haoyu C",
        time : 24.0
      },
      {
        name: "Till B",
        time : 21.5
      },
      {
        name: "Jean-Francois B",
        time : 18.5
      },
      {
        name: "Yalei C",
        time : 18.0
      },
      {
        name: "Gabriel T",
        time : 16.0
      },
      {
        name: "Jake B",
        time : 16.0
      },
      {
        name: "Ross A",
        time : 15.5
      },
      {
        name: "Karla R",
        time : 14.0
      },
      {
        name: "Alex G",
        time : 13.5
      },
      {
        name: "Marco N",
        time : 13.0
      },
      {
        name: "Daniel L",
        time : 12.0
      },
      {
        name: "Hanyu L",
        time : 12.0
      },
      {
        name: "Guillermo G",
        time : 11.0
      },
      {
        name: "Martin C",
        time : 11.0
      },
      {
        name: "Mark S",
        time : 11.0
      },
      {
        name: "Yongli Y",
        time : 11.0
      },
      {
        name: "Andreas W",
        time : 10.5
      },
      {
        name: "Cheng W",
        time : 10.5
      },
      {
        name: "Carolina G",
        time : 10.0
      },
      {
        name: "Julian S",
        time : 10.0
      },
      {
        name: "Kayleigh E",
        time : 9.5
      },
      {
        name: "Jayne B",
        time : 9.5
      },
      {
        name: "Lucas D",
        time : 9.0
      },
      {
        name: "Adrian I",
        time : 9.0
      },
      {
        name: "Rong S",
        time : 9.0
      },
      {
        name: "Silvia M",
        time : 9.0
      },
      {
        name: "Martin M",
        time : 9.0
      },
      {
        name: "Kim B",
        time : 7.0
      },
      {
        name: "Bonnie H",
        time : 7.0
      },
      {
        name: "Eric C",
        time : 7.0
      },
      {
        name: "Jesse T",
        time : 6.5
      },
      {
        name: "Jamie J",
        time : 6.5
      },
      {
        name: "Tito S",
        time : 6.0
      },
      {
        name: "Nitesh B",
        time : 6.0
      },
      {
        name: "Peter M",
        time : 5.0
      },
      {
        name: "Mark W",
        time : 4.0
      },
      {
        name: "Pawel B",
        time : 4.0
      },
      {
        name: "Gonzalo B",
        time : 4.0
      },
      {
        name: "Pierre L",
        time : 4.0
      },
      {
        name: "Parents",
        time : 3.5
      },
      {
        name: "Anuj M",
        time : 3.5
      },
      {
        name: "Ruonan Z",
        time : 3.5
      },
      {
        name: "Ignacio C",
        time : 3.0
      },
      {
        name: "Mark C",
        time : 2.5
      },
      {
        name: "Sunethri M",
        time : 2.0
      },
      {
        name: "Xuehai F",
        time : 2.0
      },
      {
        name: "Tiffany Y",
        time : 1.0
      },
      {
        name: "Stephane L",
        time : 1.0
      },
      {
        name: "Vivian C",
        time : 1.0
      },
      {
        name: "Nicole G",
        time : 1.0
      },
      {
        name: "Steven H",
        time : 0.5
      },
      {
        name: "Sean V",
        time : 0.5
      }
    ],
    sleepFactorData = [
      {
        factor: "Exercise",
        effect: 5.14
      },
      {
        factor: "Drink alcohol",
        effect : -9.41
      },
      {
        factor: "Drink coffee",
        effect : 3.27
      },
      {
        factor: "Overeat",
        effect : -3.37
      }
    ],
    sleepDayData = [
      {
        sleep : 8.0,
        quality : 87,
        nogoal : 4.0,
        social : 2.0,
        date: "2013-10-22"
      },
      {
        sleep : 7.6,
        quality : 78.0,
        nogoal : 2.5,
        social : 2.0,
        date: "2013-10-23"
      },
      {
        sleep : 6.3,
        quality : 66.0,
        nogoal : 1.5,
        social : 9.5,
        date: "2013-10-24"
      },
      {
        sleep : 4.0,
        nogoal : 2.5,
        social : 11.0,
        date: "2013-10-25"
      },
      {
        sleep : 9.0,
        nogoal : 3.0,
        social : 9.0,
        date: "2013-10-26"
      },
      {
        sleep : 3.0,
        social : 14.0,
        date: "2013-10-27"
      },
      {
        sleep : 9.0,
        nogoal : 2.0,
        date: "2013-10-28"
      },
      {
        sleep : 9.0,
        nogoal : 1.0,
        social : 8.0,
        siesta : true,
        date: "2013-10-29"
      },
      {
        sleep : 5.6,
        quality : 56.0,
        social : 14.0,
        date: "2013-10-30"
      },
      {
        sleep : 8.5,
        social : 6.0,
        siesta : true,
        date: "2013-10-31"
      },
      {
        sleep : 8.5,
        quality : 87.0,
        social : 11.0,
        date: "2013-11-01"
      },
      {
        sleep : 11.3,
        quality : 32.0,
        nogoal : 2.0,
        social : 4.0,
        siesta : true,
        date: "2013-11-02"
      },
      {
        sleep : 8.0,
        social : 13.0,
        date: "2013-11-03"
      },
      {
        sleep : 7.9,
        quality : 40.0,
        nogoal : 5.5,
        social : 4.0,
        siesta : true,
        date: "2013-11-04"
      },
      {
        sleep : 9.9,
        quality : 94.0,
        nogoal : 6.0,
        social : 1.0,
        date: "2013-11-05"
      },
      {
        sleep : 5.3,
        quality : 58.0,
        nogoal : 4.0,
        social : 6.0,
        date: "2013-11-06"
      },
      {
        sleep : 6.1,
        quality : 51.0,
        nogoal : 3.0,
        social : 6.0,
        date: "2013-11-07"
      },
      {
        sleep : 7.7,
        quality : 36.0,
        nogoal : 2.5,
        social : 9.0,
        siesta : true,
        date: "2013-11-08"
      },
      {
        sleep : 2.5,
        quality : 15.0,
        social : 18.5,
        date: "2013-11-09"
      },
      {
        sleep : 9.4,
        quality : 68.0,
        nogoal : 1.0,
        social : 10.0,
        siesta : true,
        date: "2013-11-10"
      },
      {
        sleep : 14.8,
        quality : 70.0,
        nogoal : 6.0,
        social : 0.5,
        siesta : true,
        date: "2013-11-12"
      },
      {
        sleep : 6.0,
        quality : 56.0,
        nogoal : 4.5,
        social : 5.0,
        date: "2013-11-13"
      },
      {
        sleep : 7.6,
        quality : 85.0,
        nogoal : 5.0,
        social : 9.5,
        date: "2013-11-14"
      },
      {
        sleep : 6.4,
        quality : 64.0,
        nogoal : 5.0,
        social : 6.5,
        siesta : true,
        date: "2013-11-15"
      },
      {
        sleep : 8.2,
        quality : 90.0,
        nogoal : 2.0,
        social : 5.5,
        date: "2013-11-16"
      },
      {
        sleep : 4.5,
        quality : 48.0,
        nogoal : 7.0,
        social : 0.5,
        date: "2013-11-17"
      },
      {
        sleep : 8.3,
        quality : 84.0,
        nogoal : 6.0,
        social : 1.0,
        siesta : true,
        date: "2013-11-18"
      },
      {
        sleep : 5.4,
        quality : 60.0,
        nogoal : 3.5,
        social : 3.0,
        date: "2013-11-19"
      },
      {
        sleep : 6.8,
        quality : 70.0,
        nogoal : 1.0,
        social : 5.5,
        siesta : true,
        date: "2013-11-20"
      },
      {
        sleep : 8.0,
        quality : 88.0,
        nogoal : 1.0,
        social : 5.0,
        date: "2013-11-21"
      },
      {
        sleep : 5.8,
        quality : 55.0,
        nogoal : 1.0,
        social : 10.5,
        date: "2013-11-22"
      },
      {
        sleep : 7.4,
        quality : 65.0,
        nogoal : 8.0,
        social : 2.0,
        date: "2013-11-23"
      },
      {
        sleep : 6.8,
        quality : 63.0,
        nogoal : 5.0,
        social : 2.5,
        siesta : true,
        date: "2013-11-24"
      },
      {
        sleep : 8.5,
        quality : 72.0,
        nogoal : 2.5,
        social : 2.0,
        siesta : true,
        date: "2013-11-25"
      },
      {
        sleep : 7.6,
        quality : 77.0,
        nogoal : 2.5,
        social : 4.5,
        date: "2013-11-26"
      },
      {
        sleep : 7.6,
        quality : 84.0,
        nogoal : 2.0,
        social : 6.5,
        date: "2013-11-27"
      },
      {
        sleep : 5.6,
        quality : 63.0,
        nogoal : 3.0,
        social : 7.5,
        date: "2013-11-28"
      },
      {
        sleep : 8.6,
        quality : 94.0,
        nogoal : 0.5,
        social : 7.5,
        date: "2013-11-29"
      },
      {
        sleep : 7.3,
        quality : 81.0,
        nogoal : 6.0,
        social : 2.5,
        date: "2013-11-30"
      }
    ];

var margin = {top: 20, right: 30, bottom: 30, left: 40},
    width = document.getElementsByClassName('post')[0].offsetWidth 
      - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom,
    innerRadius = 45
    radius = 100,
    transitionDuration = 750;

var color = d3.scale.category20(),
    donut = d3.layout.pie().value(function(d) {
      return d.octectTotalCount;
    }),
    arc = d3.svg.arc()
        .startAngle(function(d) { return d.startAngle; })
        .endAngle(function(d) { return d.endAngle; })
        .innerRadius(innerRadius)
        .outerRadius(radius);

function PieGraph(data, el) {
  var self = this;

  self.data = data;
  self.el = el;

  var graph = d3.select("#" + el)
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
        .append("g")
          .attr("transform", "translate(" + margin.left + ","
              + margin.top + ")");

  var arcs = graph.append(g)
          .attr("class", "arc")
          .attr("transform", "translate(" + (width/2) 
              + "," + (height/2) + ")");

  var labels = graph.append(g)
          .attr("class", "pie-label")
          .attr("transform", "translate(" + (width/2) 
              + "," + (height/2) + ")");

  var center = graph.append(g)
          .attr("class", "center")
          .attr("transform", "translate(" + (width/2) 
              + "," + (height/2) + ")");

  var centerLabel = center.append("text")
        .attr("class", "center-label")
        .attr("dy", -15)
        .attr("text-anchor", "middle");

  var centerTime = center.append("text")
        .attr("class", "center-time")
        .attr("dy", 7)
        .attr("text-anchor", "middle");

  return self;
}

function LineGraph(data, el) {
  var self = this;

  self.data = data;
  self.el = el;

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

  var xAxis = d3.svg.axis()
          .scale(x)
          .orient("bottom")
          //only show every fourth label
          .tickFormat(function (d, i) { return i % 4 === 0 ? d : '' }),
      yAxis = d3.svg.axis()
          .scale(y)
          .orient("left")
          .ticks(5);

  var graph = d3.select("#" + el)
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
        .append("g")
          .attr("transform", "translate(" + margin.left + ","
              + margin.top + ")");

  graph.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);

  graph.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", -38)
      .attr("x", -10)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
    .text(yAxisLabel)
      .attr("class", "axis-label");

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

  window.addEventListener("scroll", function(e) {
    if (!self.loaded && window.pageYOffset > document.getElementById(self.el).offsetTop - 300) {
      bar.transition()
          .duration(transitionDuration)
          .delay(function(d, i) { return i * 10; })
          .attr("height", function(d) { return height - y(d[self.value]); });

      self.loaded = true;
    }
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

  var yAxis = d3.svg.axis()
          .scale(y)
          .orient("left");

  var graph = d3.select("#" + el)
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
        .append("g")
          .attr("transform", "translate(" + margin.left + ","
              + margin.top + ")");

  graph.append("g")
      .attr("class", "x axis")
    .append("line")
      .attr("y1", y(0))
      .attr("y2", y(0))
      .attr("x2", width);

  graph.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", -38)
      .attr("x", -10)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
    .text(yAxisLabel)
      .attr("class", "axis-label");

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

  window.addEventListener("scroll", function(e) {
    if (!self.loaded && window.pageYOffset > document.getElementById(self.el).offsetTop - 300) {
      bar.transition()
          .duration(transitionDuration)
          .delay(function(d, i) { return i * 10; })
      .attr("height", function(d) { return Math.abs(y(d[self.value]) - y(0)); });

      self.loaded = true;
    }
  });

  return self;
}

var categoryPie = new PieGraph(timeCategoryData, "category-pie");
var wasteLine = new LineGraph(wasteWeekData, "waste-line");
var internetBar = new BarGraph(internetUsageData, "internet-bar", "time", "site", "Time On Site (hours)");

var sleepDiff = new DiffGraph(sleepFactorData, "sleep-diff", "effect", "factor", "Percent effect");
var sleepLine = new LineGraph(sleepDayData, "sleep-line");
var peoplePie = new PieGraph(peopleTimeData, "people-pie");
