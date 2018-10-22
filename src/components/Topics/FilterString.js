import React, { Component } from 'react'

class FilterString extends Component {

    constructor () {
        super()

        this.state = {
            unfilteredArray: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
            filteredArray: [],
            userInput: ''
        }
    }

    handleClick(value) {
        {this.setState({userInput: value})}
    }


    filterString (prop) {
        var unfiltered = this.state.unfilteredArray;
        var filtered = [];
        for (let i=0;i<unfiltered.length;i++) {
            if (unfiltered[i].includes(prop)) {
                filtered.push(unfiltered[i]);
            }
        }
        {this.setState({filteredArray: filtered})}
    }


    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Filter String</h4>
                <span className='puzzleText'>Strings: {JSON.stringify(this.state.unfilteredArray)}</span>
                <input className='inputLine' onChange={element => this.handleClick(element.target.value)}></input>
                <button className='confirmationButton' onClick={() => this.filterString(this.state.userInput)}>Filter</button>
                <span className='resultsBox filterStringRB'>Filtered Strings: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterString;