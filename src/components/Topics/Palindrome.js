import React, { Component } from 'react'

class Palindrome extends Component {

    constructor () {
        super()

        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    handleClick(value) {
        {this.setState({userInput: value})}
    }

    palindrome() {
        var forwards = this.state.userInput;
        var backwards = this.state.userInput;
        backwards = backwards.split('').reverse().join('');
        if (forwards===backwards) {
            this.setState({palindrome: 'Yes, ' +forwards+ ' is a palindrome.'});
        } else {
            this.setState({palindrome: 'No, ' +forwards+ ' is not a palindrome'});
        }
    }

    render() {
        return (
            <div className='puzzleBox palindromePB'>
                <h4>Palindrome</h4>
                <input className='inputLine' onChange={element => this.handleClick(element.target.value)}></input>
                <button className='confirmationButton' onClick={() => this.palindrome(this.state.userInput)}>Check</button>
                <span className='resultsBox'>{(this.state.palindrome)}</span>
            </div>
        )
    }
}

export default Palindrome;