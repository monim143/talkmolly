
/**
 * @Script js for (talkmolly chart)
 *
 * @project     - talkmolly
 * @author      - talkmolly
 * @created_by  - kawsar bin siraj
 * @created_at  - 20-12-2020
 * @modified_by -
 */

$(document).ready(function () {
    if ($('#bar-chart-1').length) {
        Highcharts.chart('bar-chart-1', {
            credits: {
                enabled: false
            },
            chart: {
                height: $(window).width() > 576 ? 300 : 200,
                type: 'column'
            },
            legend: false,
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                categories: [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec'
                ],
                labels: {
                    style: {
                        color: '#56606D',
                        fontSize: '16px',
                        fontFamily: "Product Sans",
                    }
                },
                crosshair: true
            },
            yAxis: {
                gridLineDashStyle: 'longdash',
                min: 0,
                title: {
                    text: ''
                },
                labels: {
                    style: {
                        color: '#56606D',
                        fontSize: '16px',
                        fontFamily: "Product Sans",
                    }
                }
            },
            plotOptions: {
                column: {
                    pointPadding: 0.35,
                    borderWidth: 0,
                    borderRadiusTopLeft: 10,
                    borderRadiusTopRight: 10
                },
                series: {
                    color: '#C4CEFE',
                    dashStyle: 'Dash'
                }
            },
            series: [{
                name: '',
                data: [49.9, 71.5, 200.4, 129.2, 144.0, 230.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

            }]
        });
    }

    // #pie-chart-1
    if ($('#pie-chart-1').length) {
        Highcharts.chart('pie-chart-1', {
            credits: {
                enabled: false
            },
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie',
                height: '318px',
            },
            title: {
                text: ''
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            accessibility: {
                point: {
                    valueSuffix: '%'
                }
            },
            legend: {
                align: 'center',
                verticalAlign: 'top',
                symbolWidth: 10, 
                symbolHeight: 10,
                symbolPadding : 10,
                itemStyle: {
                    fontSize: 15,
                    fontFamily: "Product Sans",
                    fontColor: '#4E5C73',
                    fontWeight: '500',
                }
            },
            plotOptions: {
                pie: {
                    // size: 225,
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true,
                    borderWidth: 5,
                }
            },
            colors: ['#5667F5', '#677899', '#FFA4BF',],
            series: [{
                name: 'Brands',
                colorByPoint: true,
                colorByPoint: true,
                innerSize: '50%',
                data: [{
                    name: 'Active',
                    y: 65,
                    // sliced: true,
                    // selected: true
                }, {
                    name: 'Inactive',
                    y: 20
                }, {
                    name: 'Suspend',
                    y: 15
                },]
            }]
        });
    }


});
