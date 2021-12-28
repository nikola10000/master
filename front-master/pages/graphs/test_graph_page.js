import React,  {Component} from 'react'
import axios from 'axios'

class TestGraphPage extends Component {

    state = {
        retVal: '-', 
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

    getData () {
        const button = document.getElementById('calculate_avg')
        button.disabled = true
        axios.get('http://localhost:8082/master/radnik/avg_time_find_by_id/table?table_number=' + ((typeof this.state.inputTabNum === 'undefined') ? (1) : (this.state.inputTabNum)) 
                    + '&reps=' + ((typeof this.state.inputReps === 'undefined') ? (20) : (this.state.inputReps)))
        .then ( res => {
            console.log('Test graph page is logging')
            const retVal = res.data 
            this.setState({retVal})
            button.disabled = false
        })

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
                
                <table>
                    <tr>
                        <td>
                            <label>Broj redova u tabeli: </label>
                        </td>
                        <td>
                            <input type="text" name="table_number" value={this.state.inputTabNum} onChange={this.handleTableChange}/>
                        </td>
                        <td>
                            <label> * 1.000.000</label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Broj ponavljanja upita: </label>
                        </td>
                        <td>
                            <input type="text" name="table_reps" value={this.state.inputReps    } onChange={this.handleRepsChange}/>
                        </td>
                        <td>
                            <button id="calculate_avg" onClick={this.getData.bind(this)}>Pitaj</button>
                        </td>
                    </tr>
                </table>
                
                
                
                <br />
               
                <br />
                <label id="resultingLabel" >Odziv: {this.state.retVal} </label>
            </div>
        )
    }

}

export default TestGraphPage