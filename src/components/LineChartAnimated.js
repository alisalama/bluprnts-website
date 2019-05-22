import React, { Component } from 'react'
import { Line } from 'react-chartjs-2';
let myLineChart;
// import classes from './LineGraph.module.css';


export default class ReactLineGraphAnimated extends Component {

    chartReference = {};
    // myData = [{ x: 0, y: 0 }, { x: 1, y: 2 }, { x: 2, y: 1 }, { x: 3, y: 3 }];
    myData = {
        labels: ['May-19', 'Jun-19', 'Jul-19', 'Aug-19', 'Sep-19', 'Oct-19', 'Nov-19', 'Dec-19', 'Jan-20', 'Feb-20', 'Mar-20', 'Apr-20', 'May-20', 'Jun-20', 'Jul-20', 'Aug-20', 'Sep-20', 'Oct-20', 'Nov-20', 'Dec-20', 'Jan-21', 'Feb-21', 'Mar-21', 'Apr-21', 'May-21', 'Jun-21', 'Jul-21', 'Aug-21', 'Sep-21', 'Oct-21', 'Nov-21', 'Dec-21', 'Jan-22', 'Feb-22', 'Mar-22', 'Apr-22', 'May-22', 'Jun-22', 'Jul-22', 'Aug-22', 'Sep-22', 'Oct-22', 'Nov-22', 'Dec-22', 'Jan-23', 'Feb-23', 'Mar-23', 'Apr-23', 'May-23', 'Jun-23', 'Jul-23', 'Aug-23', 'Sep-23', 'Oct-23', 'Nov-23', 'Dec-23', 'Jan-24', 'Feb-24', 'Mar-24', 'Apr-24', 'May-24'],
        datasets: [{
            'type': 'line',
            'data': [],
            'dataToUpdate': [
                24018.718160574037,
                108143.00327956534,
                132203.3865915371,
                184484.68063387685,
                370954.2097427256,
                447980.52220697113,
                601299.2626244654,
                698618.6577951863,
                887145.6088358123,
                1075672.5598764382,
                1132138.839047159,
                1357713.427713058,
                1546240.378753684,
                1336647.1969006963,
                1525174.1479413223,
                1713701.0989819483,
                1931758.3660818893,
                2120285.3171225153,
                2308812.2681631413,
                2365278.547333862,
                2592962.7883744882,
                2820647.0294151143,
                2929180.3185858354,
                3228643.3172517344,
                3491058.67829236,
                3142091.6628558636,
                3404507.0238964893,
                3666922.384937115,
                3917390.326037056,
                4155102.647077682,
                4392814.968118308,
                4474921.947955696,
                4716800.935662989,
                4958679.923370281,
                5040786.903207669,
                5308414.658540235,
                5538994.776247527,
                5079286.499477698,
                5246821.10718499,
                5414355.714892283,
                5604437.538658891,
                5747360.266366184,
                5890282.994073477,
                5898003.113910864,
                6006194.721618157,
                6114386.32932545,
                6141762.785162837,
                6287002.030495403,
                6395193.638202696,
                6176883.9707662,
                6285075.5784734925,
                6393267.186180785,
                6582234.629947393,
                6690426.237654686,
                6840284.512028646,
                6910994.301199366,
                7062519.242239992,
                7214044.183280618,
                7256553.972451339,
                7405627.681117238,
                7517653.752157863
            ],
            'label': 'Profit after Tax',
            'borderWidth': 1,
            'borderColor': '#3784FF',
            'backgroundColor': 'rgba(55,132,255, 0.05)',
            'pointBackgroundColor': '#3784FF',
            'pointBorderColor': '#fff',
            'pointHoverBackgroundColor': '#fff',
            'pointHoverBorderColor': '#3784FF',
            'radius': 2,
            'fill': true
        },
        {
            'type': 'line',
            'data': [],
            'dataToUpdate': [
                24165.461040625993,
                135292.80403924713,
                159458.26507987312,
                211823.72612049914,
                450483.2150903453,
                527551.7161309713,
                680891.5771715973,
                869418.5282122233,
                1057945.4792528492,
                1246472.4302934753,
                1434999.3813341013,
                1660573.9700000002,
                1849100.9210406262,
                2124589.754039247,
                2313116.705079873,
                2501643.656120499,
                2851761.595090345,
                3040288.546130971,
                3228815.497171597,
                3417342.448212223,
                3645026.689252849,
                3872710.9302934753,
                4135126.291334101,
                4434589.29,
                4697004.651040626,
                5046381.894039247,
                5308797.255079873,
                5571212.616120499,
                5995218.965090345,
                6232931.28613097,
                6470643.607171596,
                6712522.594878889,
                6954401.582586181,
                7196280.570293474,
                7438159.558000767,
                7705787.313333333,
                7936367.431040625,
                8214752.140705913,
                8382286.748413206,
                8549821.356120499,
                8854335.071757011,
                8997257.799464304,
                9140180.527171597,
                9248372.134878889,
                9356563.74258618,
                9464755.350293472,
                9572946.958000764,
                9718186.20333333,
                9826377.811040621,
                10021531.30070591,
                10129722.908413202,
                10237914.516120493,
                10507697.111757006,
                10615888.719464298,
                10765746.993838258,
                10917271.934878884,
                11068796.87591951,
                11220321.816960135,
                11343646.758000761,
                11492720.46666666,
                11604746.537707286
            ],
            'label': 'Profit before Tax',
            'borderWidth': 1,
            'borderColor': '#296EB4',
            'backgroundColor': 'rgba(41,110,180, 0.05)',
            'pointBackgroundColor': '#296EB4',
            'pointBorderColor': '#fff',
            'pointHoverBackgroundColor': '#fff',
            'pointHoverBorderColor': '#296EB4',
            'radius': 2,
            'fill': true
        },
        {
            'type': 'line',
            'data': [],
            'dataToUpdate': [
                78331.62770729266,
                243625.13737258047,
                321956.76507987315,
                428488.3927871658,
                721314.0484236786,
                852548.7161309712,
                1060054.743838264,
                1307747.3615455565,
                1555439.979252849,
                1803132.5969601416,
                2050825.214667434,
                2335565.4699999997,
                2583258.0877072923,
                2917912.58737258,
                3165605.2050798726,
                3413297.822787165,
                3822581.428423678,
                4070274.0461309706,
                4317966.663838264,
                4565659.281545556,
                4852509.189252849,
                5139359.096960141,
                5460940.124667434,
                5819568.79,
                6141149.817707293,
                6549692.72737258,
                6871273.755079873,
                7192854.782787166,
                7676026.798423679,
                7972904.786130971,
                8269782.773838264,
                8566660.761545558,
                8863538.74925285,
                9160416.736960143,
                9457294.724667436,
                9774921.98,
                10055501.597707294,
                10383885.807372581,
                10601419.915079873,
                10818954.022787165,
                11173467.238423677,
                11366389.46613097,
                11559311.693838263,
                11717502.801545555,
                11875693.909252847,
                12033885.016960138,
                12192076.12466743,
                12387314.869999995,
                12545505.977707287,
                12790658.967372576,
                12948850.075079868,
                13107041.18278716,
                13426823.278423673,
                13585014.386130964,
                13743205.493838256,
                13901396.601545548,
                14059587.70925284,
                14217778.816960132,
                14347769.924667424,
                14498510.29999999,
                14612203.037707282
            ],
            'label': 'Gross Profit',
            'borderWidth': 1,
            'borderColor': '#3E92CC',
            'backgroundColor': 'rgba(62,146,204, 0.05)',
            'pointBackgroundColor': '#3E92CC',
            'pointBorderColor': '#fff',
            'pointHoverBackgroundColor': '#fff',
            'pointHoverBorderColor': '#3E92CC',
            'radius': 2,
            'fill': true
        },
        {
            'type': 'line',
            'data': [],
            'dataToUpdate': [
                112033.55634142939,
                345221.4373921399,
                457254.9937335693,
                609188.5500749986,
                1020664.8697853105,
                1207014.42612674,
                1480035.9824681694,
                1811854.328809599,
                2143672.675151028,
                2475491.0214924575,
                2807309.3678338868,
                3190742.07,
                3522560.416341429,
                3975533.0873921397,
                4307351.433733569,
                4639169.780074999,
                5196114.88978531,
                5527933.2361267395,
                5859751.582468169,
                6191569.928809598,
                6577941.775151027,
                6964313.621492457,
                7399826.307833886,
                7886953.349999999,
                8322466.036341428,
                8879133.047392137,
                9314645.733733566,
                9750158.420074996,
                10410797.869785307,
                10811894.556126736,
                11212991.242468165,
                11614087.928809594,
                12015184.615151023,
                12416281.301492453,
                12817377.987833882,
                13245091.529999996,
                13621190.716341425,
                14063890.727392135,
                14351637.123733565,
                14639383.520074995,
                15117355.669785308,
                15370201.056126738,
                15623046.442468168,
                15826750.988809597,
                16030455.535151025,
                16234160.081492454,
                16437864.627833882,
                16693183.529999996,
                16896888.076341424,
                17221746.947392136,
                17425451.493733566,
                17629156.040074997,
                18057987.34978531,
                18261691.89612674,
                18465396.44246817,
                18669100.9888096,
                18872805.53515103,
                19076510.08149246,
                19240314.62783389,
                19430736.030000005,
                19569543.076341435
            ],
            'label': 'Gross Revenue',
            'borderWidth': 1,
            'borderColor': '#0A2463',
            'backgroundColor': 'rgba(10,36,99, 0.05)',
            'pointBackgroundColor': '#0A2463',
            'pointBorderColor': '#fff',
            'pointHoverBackgroundColor': '#fff',
            'pointHoverBorderColor': '#0A2463',
            'radius': 2,
            'fill': true
        }]
    }


    reset = () => {
        this.myData.datasets.forEach((ds, i) => {
            this.chartReference.props.data.datasets[i].data = [];
        });
        this.chartReference.chartInstance.update();
    }

    next = () => {

        if (this.chartReference) {
            const data = this.chartReference.props.data.datasets[0].data;
            const count = this.myData.datasets[0].data.length; // number of labels we have
            const countToUpdate = this.myData.datasets[0].dataToUpdate.length; // number of labels we have

            // add all the dataToUpdates to the list
            this.myData.datasets.map((ds, i) => {
                this.chartReference.props.data.datasets[i].data[count] = this.myData.datasets[i].dataToUpdate[count - 1];
            });
            this.chartReference.chartInstance.update();

            // set the loop again, with an easing function
            if (count < this.myData.labels.length) {
                setTimeout(this.next, this.easeInOutQuart(count / countToUpdate));
            }
        }
    }

    easeInOutQuart = (t) => { return t < .5 ? 4 * t * t * t * t : 1 - 8 * (--t) * t * t * t }
    easeInOutCubic = (t) => { return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 }
    easeInOutQuad = (t) => { return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t }
    easeInQuad = (t) => { return t * t * t * t }

    componentDidMount() {
        // this.buildChart();
        this.next();
    }

    componentDidUpdate() {
        // this.buildChart();
    }

    componentDidUnMount() {

    }

    render() {
        return (

            <>

                {/* <button onClick={this.next}>Add Data</button>
                <button onClick={this.reset}>Reset data</button> */}
                <Line
                    ref={(reference) => this.chartReference = reference}
                    width={100}
                    height={50}
                    options={{
                        maintainAspectRatio: true,
                        responsive: true,
                        // scaleShowValues: true,
                        animation: {
                            duration: 300
                        },
                        layout: {
                            padding: 30
                        },
                        legend: {
                            display: true,
                            position: 'bottom',
                            labels: {
                                usePointStyle: true
                            }
                        },
                        scales: {
                            yAxes: [{
                                stacked: false,
                                gridLines: {
                                    display: false
                                },
                                ticks: {
                                    max: 20000000,
                                    beginAtZero: true,
                                    userCallback: function (label, index, labels) {
                                        // when the floored value is the same as the value we have a whole number
                                        if (Math.floor(label) === label) {
                                            label = label.toString();
                                            label = label.split(/(?=(?:...)*$)/);
                                            label = label.join(',');
                                            return label;
                                            // if it is a string then always return it
                                        } else if (typeof label === 'string') {
                                            return label;
                                        } else {
                                            return '';
                                        }
                                    },
                                },
                            }],
                            xAxes: [{
                                stacked: false,
                                gridLines: {
                                    display: false
                                },
                                ticks: {
                                    autoSkip: true,
                                    userCallback: function (label, index, labels) {
                                        // when the floored value is the same as the value we have a whole number
                                        if (Math.floor(label) === label) {

                                            label = label.toString();
                                            label = label.split(/(?=(?:...)*$)/);
                                            label = label.join(',');
                                            return label;
                                            // if it is a string then always return it
                                        } else if (typeof label === 'string') {
                                            return label;
                                        } else {
                                            return '';
                                        }
                                    },
                                }
                            }]
                        },
                        tooltips: {
                            callbacks: {
                                label: function (tooltipItem, data) {

                                    // get the category
                                    let label = data.datasets[tooltipItem.datasetIndex].label + ': ' || '';
                                    label += tooltipItem.yLabel.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
                                    return label;
                                }
                            }
                        }
                    }}
                    data={this.myData}
                />

            </>
        )
    }
}