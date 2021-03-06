import React,  {Component} from 'react'
import MyNavbar from '../../components/MyNavbar'
import axios from 'axios'
import 'chartjs-plugin-datalabels'
import { 
    HorizontalGridLines, 
    LabelSeries, 
    VerticalBarSeries,  
    XAxis, 
    XYPlot, 
    YAxis, 
    DiscreteColorLegend
} from 'react-vis'
import 'react-vis/dist/style.css';

class PredefLtPage extends Component {

    state = {
        retVal: [], 
        valuesNon: [], 
        valuesTree: [],
        valuesBin: [],
        labels: [], 
        maxY: 0
    }

    constructor () {
        super ()

        this.sort = this.sort.bind(this);
    }

    componentDidMount() {
        this.getData()
    }

    getData = () => {
        var idx; 
        axios.get('http://localhost:8082/master/res/select_lt_times')
        .then (res => {
            this.setState({retVal: res.data})
        })
        .then ( res => {
            this.sort()
        })
    }

    sort () {
        let tempValues = [];
        let tempLabels = [];
        for (var i = 0; i < 60; ++i) {
            if (i % 3 === 0) {
                tempValues = this.state.valuesNon
                tempLabels = this.state.labels 
                tempValues[Math.floor(i / 3)] = {x: Math.floor(i / 3) + 1, y: this.state.retVal[i]["time"], label: 1, xOffset: -15, yOffset: -30}
                tempLabels[Math.floor(i / 3)] = this.state.retVal[i]["rowId"]
                this.setState({valuesNon: tempValues})
                this.setState({labels: tempLabels})
                if (this.state.retVal[i]["time"] > this.state.maxY) {
                    this.setState({maxY: this.state.retVal[i]["time"]})
                }
            } else if (i % 3 === 1) {
                tempValues = this.state.valuesTree
                tempLabels = this.state.labels 
                tempValues[Math.floor(i / 3)] = {x: Math.floor(i / 3) + 1, y: this.state.retVal[i]["time"], label: 1, xOffset: 13, yOffset: -30}
                tempLabels[Math.floor(i / 3)] = this.state.retVal[i]["rowId"]
                this.setState({valuesTree: tempValues})
                this.setState({labels: tempLabels})
                if (this.state.retVal[i]["time"] > this.state.maxY) {
                    this.setState({maxY: this.state.retVal[i]["time"]})
                }
            } else {
                tempValues = this.state.valuesBin
                tempLabels = this.state.labels 
                tempValues[Math.floor(i / 3)] = {x: Math.floor(i / 3) + 1, y: this.state.retVal[i]["time"], label: 1, xOffset: 41, yOffset: -30}
                tempLabels[Math.floor(i / 3)] = this.state.retVal[i]["rowId"]
                this.setState({valuesBin: tempValues})
                this.setState({labels: tempLabels})
                if (this.state.retVal[i]["time"] > this.state.maxY) {
                    this.setState({maxY: this.state.retVal[i]["time"]})
                }
            }
        }
        this.setState({maxY: this.state.maxY * 1.1})
    }

    render () {
        
        return (
            <html>
                <head>
                    <title>Manje </title>
                </head>
                <body>
                    <div style={{backgroundColor: 'rgb(146, 239, 252)'}}>
                        <MyNavbar></MyNavbar>
                        <p style={{marginLeft: "30px"}}> 
                            <br />
                            Grafik prikazuje brzinu odziva upita selekcije prema brojevnoj vrednosti manje od unapred zadate. Skripta koja ja vr??ila<br />
                            upite je dobavljala sve podatke iz svih redova u tabelema gde je plata manja od slu??ajno izabrane<br /> 
                            vrednosti. Indeks se formirao nad poljem ??ija sa vrednost gledala prilikom selekcije (plt). <br />
                            Primer upita: &emsp; <b style={{fontFamily: 'Courier'}}>{'SELECT * FROM radnik WHERE plt \< 123022.02'}</b>
                        </p>
                        <div 
                            style={{backgroundColor: '#e3fffd'}}
                        >
                            <XYPlot 
                                height={700} 
                                width={1900} 
                                xType="ordinal"
                                yDomain={[0, this.state.maxY]}    
                            > 
                            <HorizontalGridLines> 

                            </HorizontalGridLines>
                            <VerticalBarSeries data={this.state.valuesNon} color="#3bd464"/>
                            <VerticalBarSeries data={this.state.valuesTree} color="#ca7af5"/>
                            <VerticalBarSeries data={this.state.valuesBin} color="#ffc800"/>
                            <DiscreteColorLegend
                                style={{position: 'absolute', left: '40%', top: '10px', fontSize: '15px'}}
                                orientation="horizontal"
                                shape="round"
                                items={[
                                    {
                                        title: 'Bez indeksa',
                                        color: '#3bd464'
                                    },
                                    {
                                        title: 'Indeks tipa stablo',
                                        color: '#ca7af5'
                                    },
                                    {
                                        title: 'Binarni indeks',
                                        color: '#ffc800'
                                    }
                                ]}
                            />
                            <LabelSeries
                                data={this.state.valuesNon.map((obj) => {
                                    return { ...obj, label: obj.y.toString()};
                                })}
                                labelAnchorX="middle"
                                labelAnchorY="text-after-edge"
                                tickFormat={`tickLabelAngle={-30}`}
                                style={{fontSize: '16px'}}
                                rotation={-75}
                            />
                            <LabelSeries
                                data={this.state.valuesTree.map((obj) => {
                                    return { ...obj, label: obj.y.toString() };
                                })}
                                labelAnchorX="middle"
                                labelAnchorY="text-after-edge"
                                style={{fontSize: '16px'}}
                                    rotation={-75}
                            />
                            <LabelSeries
                                data={this.state.valuesBin.map((obj) => {
                                            return { ...obj, label: obj.y.toString() };
                                        })}
                                labelAnchorX="middle"
                                labelAnchorY="text-after-edge"
                                style={{fontSize: '16px'}}
                                rotation={-75}
                            />                        
                            <XAxis 
                                title="Br. redova [mil.]" style={{title: {fontSize: "20px", fill: "black", transform: `translate(48%, 19px)`}, fill: "black", fontSize: '15px'}} 
                                color="red" 
                                titlePositionX="50%"
                            />
                            <YAxis title="Vreme odziva [s]" style={{fontSize: '15px', fill: "black", title: {fontSize: "20px"}}}/>
                            </XYPlot>
                        </div>
                    </div>
                </body>
            </html>
            
        )
    }

}

export default PredefLtPage