import React, { Component } from 'react';

class Palindrome extends Component {

    constructor () {
        super()
        this.state = {
            userInput='',
            palindrome=''
        }
    }

    handleClick (value) {
        {this.setState({userInput: value})}
    }

    palindromeCheck (prop) {
        var palindrome = this.state.palindrome;
        var propArr = prop.split(',');
        for (let i=0, i<propArr;i++) {
            
        }
    }
    render () {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Palindrome</h4>
                <input className='inputLine' onChange={element => this.handleClick(element.target.value)}></input>
                <button className='confirmationButton' onClick={()=>this.palindromeCheck(this.state.userInput)}>Check</button>
                <span className='resultsBox'>{this.state.palindrome}</span>
            </div>
        )
    }
}

export default Palindrome;