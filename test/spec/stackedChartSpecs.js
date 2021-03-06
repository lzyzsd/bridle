jQuery.fn.d3Click = function (callback) {
  this.each(function (i, e) {
    var evt = document.createEvent("MouseEvents");
    evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

    e.dispatchEvent(evt);

    if (typeof callback === "function") {
      callback();
    }

  });
};

jQuery.fn.d3Mouseover = function (callback) {
  this.each(function (i, e) {
    var evt = document.createEvent("MouseEvents");
    evt.initMouseEvent("mouseover", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

    e.dispatchEvent(evt);

    if (typeof callback === "function") {
      callback();
    }
  });
};

jQuery.fn.d3Mouseout = function (callback) {
  this.each(function (i, e) {
    var evt = document.createEvent("MouseEvents");
    evt.initMouseEvent("mouseout", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

    e.dispatchEvent(evt);

    if (typeof callback === "function") {
      callback();
    }
  });
};

var stackedData = function() {
  return [
  {
    "name": "apples",
    "values": [
      { "x": new Date('2012-01-01'), "y":  60},
      { "x": new Date('2012-01-02'), "y":  30},
      { "x": new Date('2012-01-03'), "y":  0},
      { "x": new Date('2012-01-04'), "y":  100*Math.random()},
      { "x": new Date('2012-01-05'), "y":  100*Math.random()},
      { "x": new Date('2012-01-06'), "y":  100*Math.random()},
      { "x": new Date('2012-01-07'), "y":  100*Math.random()},
      { "x": new Date('2012-01-08'), "y":  100*Math.random()},
      { "x": new Date('2012-01-09'), "y":  100*Math.random()},
      { "x": new Date('2012-01-10'), "y":  100*Math.random()},
      { "x": new Date('2012-01-11'), "y":  100*Math.random()},
      { "x": new Date('2012-01-12'), "y":  100*Math.random()},
      { "x": new Date('2012-01-13'), "y":  100*Math.random()},
      { "x": new Date('2012-01-14'), "y":  100*Math.random()},
      { "x": new Date('2012-01-15'), "y":  100*Math.random()},
      { "x": new Date('2012-01-16'), "y":  100*Math.random()},
      { "x": new Date('2012-01-17'), "y":  100*Math.random()},
      { "x": new Date('2012-01-18'), "y":  100*Math.random()},
      { "x": new Date('2012-01-19'), "y":  100*Math.random()}
    ]
  },
  {  
    "name": "oranges",
    "values": [
      { "x": new Date('2012-01-01'), "y":  100*Math.random()},
      { "x": new Date('2012-01-02'), "y":  100*Math.random()},
      { "x": new Date('2012-01-03'), "y":  100*Math.random()},
      { "x": new Date('2012-01-04'), "y":  100*Math.random()},
      { "x": new Date('2012-01-05'), "y":  100*Math.random()},
      { "x": new Date('2012-01-06'), "y":  100*Math.random()},
      { "x": new Date('2012-01-07'), "y":  100*Math.random()},
      { "x": new Date('2012-01-08'), "y":  100*Math.random()},
      { "x": new Date('2012-01-09'), "y":  100*Math.random()},
      { "x": new Date('2012-01-10'), "y":  100*Math.random()},
      { "x": new Date('2012-01-11'), "y":  100*Math.random()},
      { "x": new Date('2012-01-12'), "y":  100*Math.random()},
      { "x": new Date('2012-01-13'), "y":  100*Math.random()},
      { "x": new Date('2012-01-14'), "y":  100*Math.random()},
      { "x": new Date('2012-01-15'), "y":  100*Math.random()},
      { "x": new Date('2012-01-16'), "y":  100*Math.random()},
      { "x": new Date('2012-01-17'), "y":  100*Math.random()},
      { "x": new Date('2012-01-18'), "y":  100*Math.random()},
      { "x": new Date('2012-01-19'), "y":  100*Math.random()}
    ]
  }
  ];
}
var data2 = function () {
  return [ 
  {  
    "name": "pears",
    "values": [
      { "x": new Date('2012-01-01'), "y":  100*Math.random()},
      { "x": new Date('2012-01-02'), "y":  100*Math.random()},
      { "x": new Date('2012-01-03'), "y":  100*Math.random()},
      { "x": new Date('2012-01-04'), "y":  100*Math.random()},
      { "x": new Date('2012-01-05'), "y":  100*Math.random()},
      { "x": new Date('2012-01-06'), "y":  100*Math.random()},
      { "x": new Date('2012-01-07'), "y":  100*Math.random()},
      { "x": new Date('2012-01-08'), "y":  100*Math.random()},
      { "x": new Date('2012-01-09'), "y":  100*Math.random()},
      { "x": new Date('2012-01-10'), "y":  100*Math.random()},
      { "x": new Date('2012-01-11'), "y":  100*Math.random()},
      { "x": new Date('2012-01-12'), "y":  100*Math.random()},
      { "x": new Date('2012-01-13'), "y":  100*Math.random()},
      { "x": new Date('2012-01-14'), "y":  100*Math.random()},
      { "x": new Date('2012-01-15'), "y":  100*Math.random()},
      { "x": new Date('2012-01-16'), "y":  100*Math.random()},
      { "x": new Date('2012-01-17'), "y":  100*Math.random()},
      { "x": new Date('2012-01-18'), "y":  100*Math.random()},
      { "x": new Date('2012-01-19'), "y":  100*Math.random()}
    ]
  },
  {  
    "name": "kiwi",
    "values": [
        { "x": new Date('2012-01-01'), "y":  100},
        { "x": new Date('2012-01-02'), "y":  50},
        { "x": new Date('2012-01-03'), "y":  0},
      { "x": new Date('2012-01-04'), "y":  100*Math.random()},
      { "x": new Date('2012-01-05'), "y":  100*Math.random()},
      { "x": new Date('2012-01-06'), "y":  100*Math.random()},
      { "x": new Date('2012-01-07'), "y":  100*Math.random()},
      { "x": new Date('2012-01-08'), "y":  100*Math.random()},
      { "x": new Date('2012-01-09'), "y":  100*Math.random()},
      { "x": new Date('2012-01-10'), "y":  100*Math.random()},
      { "x": new Date('2012-01-11'), "y":  100*Math.random()},
      { "x": new Date('2012-01-12'), "y":  100*Math.random()},
      { "x": new Date('2012-01-13'), "y":  100*Math.random()},
      { "x": new Date('2012-01-14'), "y":  100*Math.random()},
      { "x": new Date('2012-01-15'), "y":  100*Math.random()},
      { "x": new Date('2012-01-16'), "y":  100*Math.random()},
      { "x": new Date('2012-01-17'), "y":  100*Math.random()},
      { "x": new Date('2012-01-18'), "y":  100*Math.random()},
      { "x": new Date('2012-01-19'), "y":  100*Math.random()}
    ]
  },
  {  
    "name": "lychee",
    "values": [
      { "x": new Date('2012-01-01'), "y":  100*Math.random()},
      { "x": new Date('2012-01-02'), "y":  100*Math.random()},
      { "x": new Date('2012-01-03'), "y":  100*Math.random()},
      { "x": new Date('2012-01-04'), "y":  100*Math.random()},
      { "x": new Date('2012-01-05'), "y":  100*Math.random()},
      { "x": new Date('2012-01-06'), "y":  100*Math.random()},
      { "x": new Date('2012-01-07'), "y":  100*Math.random()},
      { "x": new Date('2012-01-08'), "y":  100*Math.random()},
      { "x": new Date('2012-01-09'), "y":  100*Math.random()},
      { "x": new Date('2012-01-10'), "y":  100*Math.random()},
      { "x": new Date('2012-01-11'), "y":  100*Math.random()},
      { "x": new Date('2012-01-12'), "y":  100*Math.random()},
      { "x": new Date('2012-01-13'), "y":  100*Math.random()},
      { "x": new Date('2012-01-14'), "y":  100*Math.random()},
      { "x": new Date('2012-01-15'), "y":  100*Math.random()},
      { "x": new Date('2012-01-16'), "y":  100*Math.random()},
      { "x": new Date('2012-01-17'), "y":  100*Math.random()},
      { "x": new Date('2012-01-18'), "y":  100*Math.random()},
      { "x": new Date('2012-01-19'), "y":  100*Math.random()}
    ]
  },
  {  
    "name": "mango",
    "values": [
      { "x": new Date('2012-01-01'), "y":  100*Math.random()},
      { "x": new Date('2012-01-02'), "y":  100*Math.random()},
      { "x": new Date('2012-01-03'), "y":  100*Math.random()},
      { "x": new Date('2012-01-04'), "y":  100*Math.random()},
      { "x": new Date('2012-01-05'), "y":  100*Math.random()},
      { "x": new Date('2012-01-06'), "y":  100*Math.random()},
      { "x": new Date('2012-01-07'), "y":  100*Math.random()},
      { "x": new Date('2012-01-08'), "y":  100*Math.random()},
      { "x": new Date('2012-01-09'), "y":  100*Math.random()},
      { "x": new Date('2012-01-10'), "y":  100*Math.random()},
      { "x": new Date('2012-01-11'), "y":  100*Math.random()},
      { "x": new Date('2012-01-12'), "y":  100*Math.random()},
      { "x": new Date('2012-01-13'), "y":  100*Math.random()},
      { "x": new Date('2012-01-14'), "y":  100*Math.random()},
      { "x": new Date('2012-01-15'), "y":  100*Math.random()},
      { "x": new Date('2012-01-16'), "y":  100*Math.random()},
      { "x": new Date('2012-01-17'), "y":  100*Math.random()},
      { "x": new Date('2012-01-18'), "y":  100*Math.random()},
      { "x": new Date('2012-01-19'), "y":  100*Math.random()}
    ]
  },
  ];
}

function makeData() {
 return stackedData().concat(data2());
}

var containerID = "#stacked-chart"

function cleanup() {

  d3.select(containerID)
    .selectAll("svg")
    .remove();
  d3.select("svg")
    .remove();
  d3.selectAll(".tooltip")
    .remove();    

}

var margin = {top:50, bottom:30, left:100, right:200};
var height = 400;

describe("Stacked Chart", function() {

  describe("initial load", function() {

    beforeEach(function(done) {
      this.stackedData = stackedData();
      var time = 0;
      this.stacked = Bridle.StackedChart()
        .duration(time)
        .width(800)
        .height(height)
        .title("Apples or Oranges?")
        .yAxisTitle("Label your axes")
        .margin(margin);

      d3.select(containerID)
        .datum(this.stackedData)
        .call(this.stacked)
        .transition()
        .delay(time)
        .each("end", function() {
          done();
        })

    });

    afterEach(function() {
      cleanup();
    })

    it("has been initiated", function() {
      this.stacked.should.be.a('function')
    });

    it("allows get/set of option variables", function() {
      this.stacked.title().should.equal('Apples or Oranges?')
      this.stacked.width().should.equal(800)
      this.stacked.height().should.equal(400)
      this.stacked.margin().should.be.a('object')
    });

    it('creates svg', function() {
      var svgs = $(containerID + ' svg');
      svgs.length.should.equal(2); // bar-chart + legend = 2
      var svg = d3.select(containerID).select("svg");
      parseInt(svg.attr("width")).should.equal(800)
      parseInt(svg.attr("height")).should.equal(400)

      var outerG = $('g', svgs[0])[0];
      d3.select(outerG).attr('transform').should.equal('translate(100,50)');

    });

    it('has correct number of area series', function() {

      var areas = d3.selectAll('g.areas path');
      areas[0].length.should.equal(this.stackedData.length)

    });

    it('has correct number of points series', function() {

      var series = d3.selectAll('g.seriespoints');
      series[0].length.should.equal(this.stackedData.length)

    });

    it('has correct number of points in seriespoints', function() {

      var points = d3.select('g.seriespoints').selectAll("circle");
      points[0].length.should.equal(this.stackedData[0].values.length)

    });

    it('points have correct height', function() {
      // 
      
        var points = d3.selectAll('g.seriespoints').selectAll("circle");
        var cy1 = parseFloat(Math.round(points[0][0].getAttribute('cy')))
        var cy2 = parseFloat(Math.round(points[0][1].getAttribute('cy')))
        var cy3 = parseFloat(Math.round(points[0][2].getAttribute('cy')))
        var base = height - margin.top - margin.bottom;
        var y1 = (base - cy1);
        var y2 = (base - cy2);
        var y3 = (base - cy3);

        (y1 - (y2*2)).should.be.below(2)
        y3.should.equal(0)

      
    })

    it('has some xAxis labels', function() {

      // console.log(this.stacked.xAxis.ticks)

      var xAxisTicks = d3.selectAll('g.x.axis g.tick.major');

      var nthLabel = Math.ceil(200 / (this.stacked.width() / this.stackedData[0].values.length));

      var expectedNumLabels = Math.round(this.stackedData[0].values.length / nthLabel);

      // change this to a specific expected number if possible
      xAxisTicks[0].length.should.above(2)

    });

    it('has correct number of legend labels', function() {

      var legendItems = d3.selectAll('g.legendItem');
      legendItems[0].length.should.equal(this.stackedData.length)

    });

    it('legend labels have paragraphs', function() {

      var legendText = d3.selectAll('g.legendItem p');
      legendText[0].length.should.equal(this.stackedData.length)

    });

    it('legend circles have correct colour', function() {

      var colorFunc = this.stacked.colors()
      var legendCircle = d3.select('g.legendItem circle');
      legendCircle.attr("fill").should.equal(colorFunc(this.stackedData[0].name));

    });
  });

  describe("adding data", function() {

    beforeEach(function(done) {
      this.stackedData2 = makeData();
      var time = 0;
      this.stacked = Bridle.StackedChart()
        .duration(time)
        .width(800)
        .title("Apples or Oranges?")
        .yAxisTitle("Label your axes")
        .margin({
          top: 50,
          bottom: 30,
          left: 100,
          right: 200
        })

      var that = this;

      d3.select(containerID)
        .datum(stackedData)
        .call(this.stacked)
        .transition()
        .delay(time)
        .each("end", function() {
          d3.select(containerID)
            .datum(that.stackedData2)
            .call(that.stacked)
            .transition()
            .delay(time)
            .each("end", function() {
              done()
            })
        })

      

    });

    afterEach(function() {
      cleanup();
    })

    it('has correct number of line series', function() {

      var areas = d3.selectAll('g.areas path');
      areas[0].length.should.equal(this.stackedData2.length)

    });

    it('has correct number of points series', function() {

      var series = d3.selectAll('g.seriespoints');
      series[0].length.should.equal(this.stackedData2.length)

    });

    it('has correct number of points in seriespoints', function() {

      var points = d3.select('g.seriespoints').selectAll("circle");
      points[0].length.should.equal(this.stackedData2[0].values.length)

    });

    it('points have correct height', function() {
      
      var points = d3.selectAll('g.seriespoints').selectAll("circle");
      var cy1 = parseFloat(Math.round(points[0][0].getAttribute('cy')))
      var cy2 = parseFloat(Math.round(points[0][1].getAttribute('cy')))
      var cy3 = parseFloat(Math.round(points[0][2].getAttribute('cy')))
      var base = height - margin.top - margin.bottom;
      var y1 = (base - cy1);
      var y2 = (base - cy2);
      var y3 = (base - cy3);

      (y1 - (y2*2)).should.be.below(2)
      y3.should.equal(0)
    

    })

    it('has correct number of legend labels', function() {
      var legendItems = d3.selectAll('g.legendItem');
      legendItems[0].length.should.equal(this.stackedData2.length)
    });
  });


  describe("legend click (hiding series)", function() {


    beforeEach(function(done) {
      
      this.stackedData2 = makeData();
      var time = 0;
      this.stacked = Bridle.StackedChart()
        .duration(time)
        .width(800)
        .title("Apples or Oranges?")
        .yAxisTitle("Label your axes")
        .margin({
        top: 50,
        bottom: 30,
        left: 100,
        right: 200
      })


      d3.select(containerID)
        .datum(this.stackedData2)
        .call(this.stacked)
        .transition()
        .delay(time)
        .each("end", function() {
          // click on the third legend item - (kiwi)
          var legendItems = d3.selectAll('g.legendItem');
          $(legendItems[0][3]).d3Click();
          setTimeout(function() {
            done()
          }, 100)
        })



    });

    afterEach(function(done) {
      this.stackedData = [];
      cleanup();
      done();
    })

    it('triggers "disabled" on clicked data point', function() {
      this.stackedData2[3].disabled.should.equal(true);
    });

    it('removes disabled series lines', function() {
      var series = d3.selectAll('g.areas path');
      series[0].length.should.equal(this.stackedData2.length - 1)
    });


    it('clicked legend circle has fill opacity 0', function() {
      var legendCircle = $('g.legendItem.disabled circle');
      parseInt(legendCircle.css('fill-opacity')).should.equal(0);
    });
  });


  describe("legend mouseover", function() {

    beforeEach(function(done) {
      
      this.stackedData2 = makeData();
      var time = 0;
      this.stacked = Bridle.StackedChart()
        .duration(time)
        .width(800)
        .title("Apples or Oranges?")
        .yAxisTitle("Label your axes")
        .margin({
        top: 50,
        bottom: 30,
        left: 100,
        right: 200
      })
        

      d3.select('#bar-chart')
        .datum(this.stackedData2)
        .call(this.stacked)
        .transition()
        .delay(time)
        .each("end", function() {
          // mouseover on the third legend item - (kiwi)
          var legendItems = d3.selectAll('g.legendItem');
          $(legendItems[0][3]).d3Mouseover();
          setTimeout(function () {
            done()
          }, 100)
        })




    });

    afterEach(function() {
      cleanup();
    })

    it('triggers "hover" on clicked data point', function() {
      this.stackedData2[3].hover.should.equal(true);
      $('.area.hover').length.should.equal(1)
    });


    it('increases opacity of area.hover', function() {
      var observedOpacity = $('.area.hover').css('fill-opacity');
      parseInt(observedOpacity).should.equal(1);
    });

    // mouseout reverts to 0.9 opacity
    it('area opacity reverts after mouseout', function(done) {
      // mouseout on the third legend item - (kiwi)
      var that = this;
      $('.area.hover').length.should.equal(1);
      var legendItems = d3.selectAll('g.legendItem');
      $(legendItems[0][3]).d3Mouseout(function() {
        $('path.area').length.should.equal(that.stackedData2.length);
        $('.area.hover').length.should.equal(0);
        done()
      });
    });
  });


  describe("point mouseover", function() {

    beforeEach(function(done) {
      
      this.stackedData2 = makeData()
      var time = 0;
      this.stacked = Bridle.StackedChart()
        .duration(time)
        .width(800)
        .title("Apples or Oranges?")
        .yAxisTitle("Label your axes")
        .margin({
        top: 50,
        bottom: 30,
        left: 100,
        right: 200
      })


      d3.select(containerID)
        .datum(this.stackedData2)
        .call(this.stacked)
        .transition()
        .delay(time)
        .each("end", function() {
          // mouseover on the 4th point of 4th series - (kiwi 2012-01-04)    
          var points = d3.selectAll('g.seriespoints').selectAll("circle");

          $(points[3][3]).d3Mouseover();
          done();
        })



    });

    afterEach(function() {
      cleanup();
    })

    it('tooltip div gets created', function() {
      var tooltip = d3.selectAll('.tooltip');
      tooltip[0].length.should.be.above(0);
    });

    it('tooltip shows correct text', function() {
      var tooltip = d3.select('.tooltip').html();
      var yFormatted = d3.format(".02f")(this.stackedData2[3].values[3].y)
      tooltip.should.equal('<h3>kiwi</h3><p><span class="value">[2012-01-04, ' + yFormatted + ']</span></p>')
    });

    it('tooltip gets destroyed on mouseout', function(done) {
      var points = d3.selectAll('g.seriespoints').selectAll("circle");
      $(points[3][3]).d3Mouseout();
      // mouseout on the 4th rect of 4th series - (kiwi 2012-01-04)
      // delay 1 second so that tooltip remove transition completes
      setTimeout(function() {
        var tooltip = d3.selectAll('.tooltip');
        tooltip[0].length.should.equal(0);
        done();
      }, 500)

    });
  });
});