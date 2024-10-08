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
                        <Route path='/' element={<News key='General' category="Top" />}></Route>
                        <Route path='/business' element={<News key='Business' category="Business" />}></Route>
                        <Route path='/entertainment' element={<News key='Entertainment' category="Entertainment" />}></Route>
                        <Route path='/health' element={<News key='Health' category="Health" />}></Route>
                        <Route path='/science' element={<News key='Science' category="Science" />}></Route>
                        <Route path='/sports' element={<News key='Sports' category="Sports" />}></Route>
                        <Route path='/technology' element={<News key='Technology' category="Technology" />}></Route>
                        <Route path='/crime' element={<News key='crime' category="Crime" />}></Route>
                        <Route path='/domestic' element={<News key='domestic' category="Domestic" />}></Route>
                        <Route path='/education' element={<News key='education' category="Education" />}></Route>
                        <Route path='/environment' element={<News key='environment' category="Environment" />}></Route>
                        <Route path='/food' element={<News key='food' category="Food" />}></Route>
                        <Route path='/lifestyle' element={<News key='lifestyle' category="Lifestyle" />}></Route>
                        <Route path='/other' element={<News key='other' category="Other" />}></Route>
                        <Route path='/politics' element={<News key='politics' category="Politics" />}></Route>
                        <Route path='/top' element={<News key='top' category="Top" />}></Route>
                        <Route path='/tourism' element={<News key='tourism' category="Tourism" />}></Route>
                        <Route path='/world' element={<News key='world' category="World" />}></Route>
                    </Routes>
                </div>
            </Router>
        )
    }
}

