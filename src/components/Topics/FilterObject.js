import React, { Component } from 'react';

class FilterObject extends Component {

    constructor() {
        super()
        this.state = {
            unFilteredArray: [{name: 'Jackson', friend: true, cool: true},{name: 'Nate', friend: true, relationship: true},{name: 'Chris', friend: true, gone: true}],
            userInput: '',
            filteredArray: []
        }
    }

    handleClick (value) {
        {this.setState({userInput: value})}
    }

    filterMethod (userInput) {
        let unfiltered = this.state.unFilteredArray;
        let filtered = [];
        for (let i=0;i<unfiltered.length;i++) {
            if (unfiltered[i].hasOwnProperty(userInput)) {
                filtered.push(unfiltered[i])
            }
        }
        []
        {this.setState({filteredArray: filtered})}
    }

    render () {
        return (
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'>Original : {JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
                <input className='inputLine' onChange={element => this.handleClick(element.target.value)}></input>
                <button className='confirmationButton' onClick={() => {this.filterMethod(this.state.userInput)}}>Filter</button>
                <span className='resultsBox filterObjectRB'>Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}

export default FilterObject;