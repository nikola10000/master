import React,  {Component} from 'react'
import axios from 'axios'
import {Bar} from 'react-chartjs-2'



class GetByIdPage extends Component {

    renderGraph (input_non, input_tree, input_bin) {
        let graph = {
            // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            // labels: ["", "1", "", "", "2", "", "", "3", "", "", "4", "", "", "5", "", "", "6", "", "", "7", "", "", "8", "", "", "9", "", "", "10", "", 
            //          "", "11", "", "", "12", "", "", "13", "", "", "14", "", "", "15", "", "", "16", "", "", "17", "", "", "18", "", "", "19", "", "", "20", ""],
            labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"], 
            datasets: [{
            //   label: ['Bez indeksa', 'B-stablo', 'Binarni indeks'], 
                label:['Bez indeksa'], 
                data: input_non, 
                backgroundColor: 'rgba(255, 99, 132, 0.2)', 
                borderColor: 'rgba(255, 99, 132, 1)', 
                borderWidth: 1
            }, {
                label:'B-stablo',
                data: input_tree, 
                backgroundColor: 'rgba(54, 162, 235, 0.2)', 
                borderColor: 'rgba(54, 162, 235, 1)', 
                borderWidth: 1
            }, {
                label:'Binarni', 
                data: input_bin,
                backgroundColor: 'rgba(50, 179, 4, 0.2)', 
                borderColor: 'rgba(50, 179, 4, 1)', 
                borderWidth: 1
            }],
            color: ['rgba(50, 179, 4, 1)']
        }
        return graph
    }

    
    state = {
        retValNon: [], 
        retValTree: [],
        retValBin: [],
        inputTabNum: 1, 
        inputReps: 20
    }

    constructor () {
        super ()

        this.handleChange = this.handleChange.bind(this);
        this.handleTableChange = this.handleTableChange.bind(this);
        this.handleRepsChange = this.handleRepsChange.bind(this);
    }

    handleChange (event) {
        this.setState({retVal: event.target.value})
    }

    componentDidMount() {
        // this.getData()
    }

    getData = () => {
        const button = document.getElementById('calculate_avg')
        button.disabled = true
        let timesListNon = []
        let timesListTree = []
        let timesListBin = []
        for (let i = 1; i <= 20; ++i) {
            
            axios.get('http://localhost:8082/master/radnik/avg_time_find_by_id/table?table_number=' + i 
                        + '&reps=' + ((typeof this.state.inputReps === 'undefined') ? (20) : (this.state.inputReps)) + '&idx=0')
            .then ( res => {
                // console.log('Test graph page is logging')
                timesListNon = this.state.retValNon
                timesListNon[i - 1] = res.data
                this.setState({retValNon: timesListNon})
                button.disabled = false
            })

            axios.get('http://localhost:8082/master/radnik/avg_time_find_by_id/table?table_number=' + i 
                        + '&reps=' + ((typeof this.state.inputReps === 'undefined') ? (20) : (this.state.inputReps)) + '&idx=1')
            .then ( res => {
                // console.log('Test graph page is logging')
                timesListTree = this.state.retValTree
                timesListTree[i - 1] = res.data
                this.setState({retVal: timesListTree})
                button.disabled = false
            })

            axios.get('http://localhost:8082/master/radnik/avg_time_find_by_id/table?table_number=' + i 
                        + '&reps=' + ((typeof this.state.inputReps === 'undefined') ? (20) : (this.state.inputReps)) + '&idx=2')
            .then ( res => {
                // console.log('Test graph page is logging')
                timesListBin = this.state.retValBin
                timesListBin[i - 1] = res.data
                this.setState({retValBin: timesListBin})
                button.disabled = false
            })
        }
    }

    handleTableChange (event) {
        this.setState({inputTabNum: event.target.value})
    }

    handleRepsChange (event) {
        this.setState({inputReps: event.target.value})
    }

    render () {
        
        return (
            <div>
                
                <button id="calculate_avg" onClick={this.getData}>Pitaj</button>
                
                <br />
               
                <br />
                {/* <label id="resultingLabel" >
                    Odziv: 
                    {this.state.retVal.map ((l) => 
                        <li>{l}</li>
                    )} 
                
                </label> */}
                
                <div width="500p" height="100p">
                  <Bar 
                        data={this.renderGraph(this.state.retValNon, this.state.retValTree, this.state.retValBin)}
                        width={1400}
                        height={780}
                          options={{
                            responsive: false
                          }}
                    />
                </div>

            </div>
        )
    }

}

export default GetByIdPage