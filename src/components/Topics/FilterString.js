import React, { Component } from 'react';

class FilterString extends Component {

    constructor () {
        super()

        this.state = {
            unfilteredArray: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
            userInput: '',
            filteredArray: []
        }
    }

    handleClick (value) {
        {this.setState({userInput: value})}
    }

    filterString (prop) {
        let unfiltered = this.state.unfilteredArray;
        let filtered = [];
        for (let i=0; i<unfiltered.length;i++) {
            if (unfiltered[i].includes(prop)) {
                filtered.push(unfiltered[i])
            }
        }
        {this.setState({filteredArray: filtered})}
    }


    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Filter String</h4>
                <span className='puzzleText'>Original: {JSON.stringify(this.state.unfilteredArray,null,10)}</span>
                <input className='inputLine' onChange={element => this.handleClick(element.target.value)}></input>
                <button className='confirmationButton' onClick={() => {this.filterString(this.state.userInput)}}>Filter</button>
                <span className='resultsBox filterStringRB'>Filtered: {JSON.stringify(this.state.filteredArray,null,10)}</span>
            </div>
        )
    }
}

export default FilterString;