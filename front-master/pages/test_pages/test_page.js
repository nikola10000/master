import React,  {Component} from 'react'
import axios from 'axios'


class TestPage extends Component {

    state = {
        lines: [], 
        line: [], 
        inputLine: ""
    }

    constructor () {
        super()

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.getData()
        //this.fillTable();
    }

    getData () {
        axios.get('http://localhost:8082/master/test_controller/bean')
        .then (res => {
            console.log('nesto')
            const lines = res.data;
            this.setState({lines});
        })
    }

    postFcn() {
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ value: this.state.inputLine, key:0 })
        };
        fetch('http://localhost:8082/master/test_controller/add', requestOptions)
            .then (
                this.getData()
            )
    }
    
    handleChange (event) {
        this.setState({inputLine: event.target.value})
    }
    
    render() {

        var inputLine = this.state.inputLine;
        return (
            <div> 
                <input type="text" name="name" value={this.state.inputLine} onChange={this.handleChange}/>
                <button onClick={this.postFcn.bind(this)}>
                    Dodaj
                </button>
                {this.state.lines.map ((l) => 
                    <li>{l}</li>
                )}
            </div>
        )
    }

}

export default TestPage