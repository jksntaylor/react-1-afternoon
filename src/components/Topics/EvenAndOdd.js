import React, { Component } from 'react';

class EvenAndOdd extends Component {
    constructor () {
        super();

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''

        }
    }

    handleChange (value) {
        this.setState({ userInput: value})
    }

    problem (userInput) {
        var array = userInput.split(',');
        var evens = [];
        var odds = [];
        for (var i=0; i<array.length;i++) {
            if (array[i]%2===0) {
                evens.push( parseInt(array[i], 10));
            } else {
                odds.push(parseInt(array[i], 10));
          }   
        }

        this.setState({ evenArray: evens, oddArray: odds})
    }

    render () {
        return (
            <div className='puzzleBox evenAndOddPB'>
                <h4>Evens and Odds</h4>
                <input className='inputLine' onChange={element => this.handleChange(element.target.value)} ></input>
                <button className='confirmationButton' onClick={() => {this.problem(this.state.userInput)}}>Split</button>
                <span className='resultsBox'>Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className='resultsBox'>Odds: {JSON.stringify(this.state.oddArray)}</span>
            </div>
        )
    }
}

export default EvenAndOdd;