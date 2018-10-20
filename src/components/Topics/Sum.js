import React, { Component } from 'react';

class Sum extends Component {

    constructor () {
        super()
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }


    handleClick1(value) {
        {this.setState({number1: value})}
    }

    handleClick2(value) {
        {this.setState({number2: value})}
    }

    add (num1, num2) {
        var sum = Number(num1) + Number(num2);
        this.setState({sum: sum})
    }

    render () {
        return (
            <div className='puzzleBox sumPB'>
                <h4>Sum</h4>
                <input className='inputLine' onChange={element => this.handleClick1(element.target.value)}></input>
                <input className='inputLine' onChange={element => this.handleClick2(element.target.value)}></input>
                <button className='confirmationButton' onClick={() => this.add(this.state.number1,this.state.number2)}>Add</button>
                <span className='resultsBox'>{this.state.sum}</span>
            </div>
        )
    }
}

export default Sum;