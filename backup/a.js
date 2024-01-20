var progressChartData = [
    {
        "date": "2022-01-01",
        "distance": 300,
        "achievement": "Vivienne Hub",
        "achievement2": "Vivienne Hub",
        "achievementSize": 30,
        "neurons": 37.7749,
        "duration": 450
    },
    {
        "date": "2022-01-02",
        "distance": 420,
        "achievement": "Innovation City",
        "achievementSize": 20,
        "neurons": 34.0522,
        "duration": 600
    },
    {
        "date": "2022-01-03",
        "distance": 550,
        "achievement": "Empathy Valley",
        "achievementSize": 15,
        "neurons": 41.8781,
        "duration": 720
    },
    {
        "date": "2022-01-04",
        "distance": 400,
        "achievement": "Creative Corner",
        "achievementSize": 12,
        "neurons": 32.7157,
        "duration": 500
    },
    {
        "date": "2022-01-05",
        "distance": 650,
        "achievement": "Future Heights",
        "achievement2": "Future Heights",
        "achievementSize": 25,
        "neurons": 40.7128,
        "duration": 800
    },
    {
        "date": "2022-01-06",
        "distance": 500,
        "achievement": "Innovation Junction",
        "achievementSize": 18,
        "neurons": 37.3382,
        "duration": 600
    },
    {
        "date": "2022-01-07",
        "distance": 450,
        "achievement": "Tech Oasis",
        "achievementSize": 20,
        "neurons": 29.9511,
        "duration": 550
    },
    {
        "date": "2022-01-08",
        "distance": 350,
        "achievement": "AI Haven",
        "achievement2": "AI Haven",
        "achievementSize": 28,
        "neurons": 37.7749,
        "duration": 400
    },
    {
        "date": "2022-01-09",
        "distance": 300,
        "achievement": "Tech Valley",
        "achievementSize": 22,
        "neurons": 32.7767,
        "duration": 350
    },
    {
        "date": "2022-01-10",
        "distance": 480,
        "achievement": "Innovation Oasis",
        "achievementSize": 15,
        "neurons": 35.4676,
        "duration": 600
    },
    {
        "date": "2022-01-11",
        "distance": 700,
        "achievement": "Progress Peak",
        "achievementSize": 18,
        "neurons": 39.0997,
        "duration": 900
    },
    {
        "date": "2022-01-12",
        "distance": 600,
        "achievement": "AI Summit",
        "achievement2": "AI Summit",
        "achievementSize": 30,
        "neurons": 39.7392,
        "duration": 850
    },
    {
        "date": "2022-01-13",
        "achievement": "Tech Summit",
        "achievementSize": 25,
        "distance": 550,
        "duration": 720,
        "neurons": 37.7749,
        "alpha": 0.4
    },
    {
        "date": "2022-01-14",
        "neurons": 36.7783,
        "duration": 670,
        "achievement": "Innovation Oasis",
        "achievement2": "Innovation Oasis",
        "bulletClass": "lastBullet"
    },
    {
        "date": "2022-01-15"
    },
    {
        "date": "2022-01-16"
    },
    {
        "date": "2022-01-17"
    },
    {
        "date": "2022-01-18"
    },
    {
        "date": "2022-01-19"
    }
];

var progressChart = AmCharts.makeChart("chartdiv", {
    type: "serial",
    theme: "dark",
    dataDateFormat: "YYYY-MM-DD",
    dataProvider: progressChartData,

    addClassNames: true,
    startDuration: 1,
    color: "#FFFFFF",
    marginLeft: 0,

    categoryField: "date",
    categoryAxis: {
        parseDates: true,
        minPeriod: "DD",
        autoGridCount: false,
        gridCount: 50,
        gridAlpha: 0.1,
        gridColor: "#FFFFFF",
        axisColor: "#555555",
        dateFormats: [{
            period: 'DD',
            format: 'DD'
        }, {
            period: 'WW',
            format: 'MMM DD'
        }, {
            period: 'MM',
            format: 'MMM'
        }, {
            period: 'YYYY',
            format: 'YYYY'
        }]
    },

    valueAxes: [{
        id: "a1",
        title: "Progress",
        gridAlpha: 0,
        axisAlpha: 0
    }, {
        id: "a2",
        position: "right",
        gridAlpha: 0,
        axisAlpha: 0,
        labelsEnabled: false
    }, {
        id: "a3",
        title: "Duration",
        position: "right",
        gridAlpha: 0,
        axisAlpha: 0,
        inside: true,
        duration: "mm",
        durationUnits: {
            DD: "d. ",
            hh: "h ",
            mm: "min",
            ss: ""
        }
    }],
    graphs: [{
        id: "g1",
        valueField: "distance",
        title: "Progress",
        type: "column",
        fillAlphas: 0.9,
        valueAxis: "a1",
        balloonText: "[[value]] datasets",
        legendValueText: "[[value]]",
        legendPeriodValueText: "total: [[value.sum]]",
        lineColor: "#263138",
        alphaField: "alpha",
    }, {
        id: "g2",
        valueField: "neurons",
        classNameField: "bulletClass",
        title: "neurons/Achievement",
        type: "line",
        valueAxis: "a2",
        lineColor: "#786c56",
        lineThickness: 1,
        legendValueText: "[[description]]/[[value]]",
        descriptionField: "achievement",
        bullet: "round",
        bulletSizeField: "achievementSize",
        bulletBorderColor: "#786c56",
        bulletBorderAlpha: 1,
        bulletBorderThickness: 2,
        bulletColor: "#000000",
        labelText: "[[achievement2]]",
        labelPosition: "right",
        balloonText: "neurons:[[value]]",
        showBalloon: true,
        animationPlayed: true,
    }, {
        id: "g3",
        title: "Duration",
        valueField: "duration",
        type: "line",
        valueAxis: "a3",
        lineColor: "#ff5755",
        balloonText: "[[value]]",
        lineThickness: 1,
        legendValueText: "[[value]]",
        bullet: "square",
        bulletBorderColor: "#ff5755",
        bulletBorderThickness: 1,
        bulletBorderAlpha: 1,
        dashLengthField: "dashLength",
        animationPlayed: true
    }],

    chartCursor: {
        zoomable: false,
        categoryBalloonDateFormat: "DD",
        cursorAlpha: 0,
        valueBalloonsEnabled: false
    },
    legend: {
        bulletType: "round",
        equalWidths: false,
        valueWidth: 120,
        useGraphSettings: true,
        color: "#FFFFFF"
    }
});
