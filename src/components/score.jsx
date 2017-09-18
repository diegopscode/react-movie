import React, { Component } from 'react'

class Score extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 0
        }
    }

    render() {
        return (
            <div className="score">{this.state.value}</div>
        )
    }
}

export default Score;