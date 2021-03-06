$(function () {
    Highcharts.chart('container', {

        title: {
            text: "近7天訪客流量",
            x: -20 //center
        },

        subtitle: {
            text: "網站後台儀表板",
            x: -20
        },

        xAxis: {
            categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        },

        yAxis: {
            title: {
                text: "流量"
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },

        tooltip: {
            valueSuffix: "次"
        },

        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },

        series: [

            {
                name: "Page View",
                data: [7.0, 6.9, 9.5, 14.5, 10.2, 5.5, 2.2]
            }, 

            {
                name: "Repeat",
                data: [-0.2, 0.8, 5.7, 11.3, 14.0, 9.0, 6.8]
            }, 

            {
                name: "Not Repeating",
                data: [-0.9, 0.6, 3.5, 8.4, 8.5, 2.0, 5.6]
            }, 

            {
                name: "Visiting Record",
                data: [3.9, 4.2, 5.7, 10.5, 9.9, 15.2, 3.0]
            }
        ]
    });
});