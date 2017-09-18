import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
  
import Header from './components/header'
import Home from './scenes/home'

const App = () => ( 
    <Router>
        <div>
           <Header />
            <Route exact path="/" component={Home} />
        </div>
    </Router>
)

export default App;