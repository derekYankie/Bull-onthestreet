var main = function() {
  /* Push the body and the nav over by 285px over */
  $('.icon-menu').click(function() {
    $('.menu').animate({
      left: "0px"
    }, 200);

    $('body').animate({
      left: "285px"
    }, 200);
  });

  /* Then push them back */
  $('.icon-close').click(function() {
    $('.menu').animate({
      left: "-285px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);
  });
};
$(document).ready(main);

/* Pulling stock data from Yahoo finance API */
/* Stock Ticker Alphabet Inc.(Google) #1 */
$("document").ready(function () {

        //Calling function
        reLoad();

        function reLoad(){
/*This whrere the stock SYM goes--> %22StockSYMBOL%22 */
            $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22GOOG%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=", function(data) {
               $("#symbol").html("Symbol: "+ data.query.results.quote.symbol);
                //Live Price for homepage
               $(".Price").html("Live Price: $"+ data.query.results.quote.LastTradePriceOnly);
               $(".Price").hide().fadeIn(700);
                //Live price for stock_chart page
                $("#result").html("Live Price: $"+ data.query.results.quote.LastTradePriceOnly);
                    $("#result").hide().fadeIn(500);
                $("#time").html("Valid Time: "+ data.query.results.quote.LastTradeTime);
                //Change for homepage
                $(".Change").html("Change: "+ data.query.results.quote.Change);
                 $(".Change").hide().fadeIn(770);
                 //MKT CAP for homepage
                 $(".MarketCapitalization").html("MKT CAP: "+ data.query.results.quote.MarketCapitalization);
                 //Last trade time & price for homepage
                 $(".LastUpdated").html("Last Trade Time & Price: "+ data.query.results.quote.LastTradeWithTime);
                 $("#percent").html("Percent: "+ data.query.results.quote.ChangeinPercent);
                 //Volume for homepage
                $(".Volume").html("Volume: "+ data.query.results.quote.Volume);
                $("#change").html("Change: "+ data.query.results.quote.Change);
                 $("#change").hide().fadeIn(500);
                $("#percent").html("Percent: "+ data.query.results.quote.ChangeinPercent);
            });
        setTimeout(reLoad,6000);
        };

    });
/* Stock Ticker #2 Apple Inc. */
$("document").ready(function () {

        //Calling function
        reLoad();

        function reLoad(){
/*This whrere the stock SYM goes--> %22StockSYMBOL%22 */
            $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22AAPL%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=", function(data) {
               $("#symbol").html("Symbol: "+ data.query.results.quote.symbol);
                //Live Price2 for homepage
               $(".Price2").html("Live Price: $"+ data.query.results.quote.LastTradePriceOnly);
                //Live price for stock_chart page
                $("#result").html("Live Price: $"+ data.query.results.quote.LastTradePriceOnly);
                    $("#result").hide().fadeIn(500);
                $("#time").html("Valid Time: "+ data.query.results.quote.LastTradeTime);
                $(".Change2").html("Change: "+ data.query.results.quote.Change);
                 $(".Change2").hide().fadeIn(500);
                 $(".Volume2").html("Volume: "+ data.query.results.quote.Volume);
                 $(".Volume2").hide().fadeIn(500);
                 $(".MarketCapitalization2").html("Mkt Cap: "+ data.query.results.quote.MarketCapitalization);
                 $(".MarketCapitalization2").hide().fadeIn(500);
                 $(".LastUpdated").html("Last Trade Time & Price: "+ data.query.results.quote.LastTradeWithTime);
                $("#percent").html("Percent: "+ data.query.results.quote.ChangeinPercent);
            });
        setTimeout(reLoad,6000);
        };

    });
/* Google's graph */
$(document).ready(function(){
    $.getJSON('http://www.highcharts.com/samples/data/jsonp.php?filename=goog-c.json&callback=?', function (data)    {
        // Create the chart

        var dataObject = {
            rangeSelector: {
                selected: 1,
                inputEnabled: $('#stock_chart1').width() > 480
            },

            title: {
                text: 'GOOGLE Stock Price'
            },

            series: [{
                name: 'GOOG',
                //Color of line graph
                color: 'green',
                //Display data box
                data: data,
                tooltip: {
                    valueDecimals: 2
                }
            }],

            chart: {
                renderTo: 'stock_chart1'
            }
        };
        var chart = $('#stock_chart1').highcharts('StockChart', dataObject);
    });
});
/* Apple's graph */
$(document).ready(function(){
    $.getJSON('http://www.highcharts.com/samples/data/jsonp.php?filename=aapl-c.json&callback=?', function (data)    {
        // Create the chart

        var dataObject = {
            rangeSelector: {
                selected: 1,
                inputEnabled: $('#stock_chart2').width() > 480
            },

            title: {
                text: 'APPLE Stock Price',
            },

            series: [{
                name: 'AAPL',
                //Color of line graph
                color: 'dodgerblue',
                //Display data box
                data: data,
                tooltip: {
                    valueDecimals: 2
                }
            }],

            chart: {
                renderTo: 'stock_chart2'
            }
        };
        var chart = $('#stock_chart2').highcharts('StockChart', dataObject);
    });
});