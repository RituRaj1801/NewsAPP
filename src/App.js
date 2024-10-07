import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import News from './components/News';

export default class App extends Component {
    render() {
        return (
            
            <Router>
                <Navbar />
                <div className="container">
                    <Routes>
                        <Route path='/' element={<News key='General'  category="General" />}></Route>
                        <Route path='/business' element={<News key='Business'  category="Business" />}></Route>
                        <Route path='/entertainment' element={<News  key='Entertainment' category="Entertainment" />}></Route>
                        <Route path='/health' element={<News key='Health'  category="Health" />}></Route>
                        <Route path='/science' element={<News  key='Science' category="Science" />}></Route>
                        <Route path='/sports' element={<News key='Sports'  category="Sports" />}></Route>
                        <Route path='/technology' element={<News  key='Technology' category="Technology" />}></Route>
                    </Routes>
                </div>
            </Router>
        )
    }
}

