import React, { Component } from 'react'

class FilterObject extends Component {

    constructor() {
        super()
        this.state = {
            unfilteredArray: [{name: 'Jackson', cool: true, relationship: false, religious: false, inUtah: true},
                              {name: 'Chris', cool: false, relationship: false, religious: true, inUtah: false},
                              {name: 'Nate',cool: false, relationship: true, religious: true, inUtah: true},
                              {name: 'Sunny',cool: true, relationship: false, religious: false, inUtah: true}],
            filteredArray: [],
            userInput: ''
        }
    }

    handleClick(value) {
        {this.setState({userInput: value})}
    }

    filterObject(prop) {
        var unfiltered = this.state.unfilteredArray;
        var filtered = [];
        for (let i=0;i<unfiltered.length;i++) {
            if (unfiltered[i][prop]===true) {
                filtered.push(unfiltered[i].name);
            }
        }
        this.setState({filteredArray: filtered})
    }

    render() {
        return (
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object By Property</h4>
                <span className='puzzleText'>{JSON.stringify(this.state.unfilteredArray)}</span>
                <input className='inputLine' onChange={element => this.handleClick(element.target.value)}></input>
                <button className='confirmationButton' onClick={() => this.filterObject(this.state.userInput)}>Filter</button>
                <span className='resultsBox filterObjectPB'>{JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterObject;