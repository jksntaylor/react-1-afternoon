import React, { Component } from 'react'

class EvenAndOdd extends Component {
    constructor () {
        super()
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    handleClick(value) {
        {this.setState({userInput: value})}
    }

    evenOdd(prop) {
        var propArray = prop.split(',');
        var evens = [];
        var odds = [];
        for (let i=0; i<propArray.length;i++) {
            if (propArray[i]%2===0) {
                evens.push(Number(propArray[i]))
            } else {
                odds.push(Number(propArray[i]))
            }
        }
        this.setState({ evenArray: evens, oddArray: odds})
    }

    render() {
        return (
            <div className='puzzleBox evenAndOddPB'>
                <h4> Evens And Odds </h4>
                <input className='inputLine' onChange={element => this.handleClick(element.target.value)}></input>
                <button className='confirmationButton' onClick={() => this.evenOdd(this.state.userInput)}>Separate (Use Commas)</button>
                <span className='resultsBox'>Even Numbers: {JSON.stringify(this.state.evenArray, 10)}</span>
                <span className='resultsBox'>Odd Numbers: {JSON.stringify(this.state.oddArray)}</span>
            </div>
        )
    }
}

export default EvenAndOdd;