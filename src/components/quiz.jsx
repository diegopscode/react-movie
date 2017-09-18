import React, { Component } from 'react'
import { Search, Actors } from '../services/index'
import { random } from '../services/helper'

import Score from './score'

const image = "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwMjAwNzI0M15BMl5BanBnXkFtZTcwOTY1MTMyOQ@@._V1_UY1200_CR173,0,630,1200_AL_.jpg"

class Quiz extends Component {
    constructor(props) {
        super(props)
        this.state = {
            actor: {
                name: 'Jim Carry',
                img: image
            }
        }

        this.listActors = Actors
        this.getActor()
    }

    getActor() {
        let index = random(0, this.listActors.length - 1)

        Search(this.listActors[index])
        .then(response => response.data).then(data => setActor(data, index))
        .catch(error => {
            console.log(error.response)
        })
    }

    setActor(actor, index = null) {
        console.log(actor)
        if(index) this.listActors.splice(index, 1)
    }

    nextActor(e) {
        console.log('Next Actor!')
    }

    showActor(e) {
        console.log('The name is ' + this.state.actor.name)
    }

    answer() {
        console.log('Answer is ');
    }

    handleChange(e) {
        this.setState({...this.state, [e.target.name]: e.target.value})
    }

    render() {
        return (
            <div className="quiz">
                <Score/>
                <div className="actor-image">
                    <img src={this.state.actor.img} alt=""/>
                </div>
                <div className="quiz-form">
                    <div className="answer">
                        <div className="form-group">
                            <label>What is the name of this Movie Actor?</label>
                            <input type="text" name="answer" className="form-control" onChange={this.handleChange.bind(this)}/>
                        </div>
                        <div className="answer-button">
                            <button className="btn" onClick={this.answer.bind(this)}>Answer</button>
                        </div>
                    </div>
                    <div className="footer-form">
                        <div className="give-up" onClick={this.showActor.bind(this)}>I give up, who is it?</div>
                        <button className="btn" onClick={this.nextActor.bind(this)}>Next</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Quiz;