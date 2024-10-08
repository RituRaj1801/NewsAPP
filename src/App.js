import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import News from './components/News';
// import Country from './components/Country';

export default class App extends Component {
    constructor(){
        super()
        this.state={
            country:"in",
            query:""
        }
    }

    countryCode=(code)=>{
        this.setState({
            country:code,
            query:""
        })
    }
    querySearch=(query)=>{
       console.log(query)
        this.setState({
            country:this.state.country,
            query:query
        })
    }

    render() {
        return (            
            <Router >
                <Navbar countryCode={this.countryCode}  querySearch={this.querySearch}/>
                <div className="container">
                    <Routes>
                        <Route path='/' element={<News key='General' category="Top" country={this.state.country}   query={this.state.query}  />}></Route>
                        <Route path='/business' element={<News key='Business' category="Business" country={this.state.country}   query={this.state.query}  />}></Route>
                        <Route path='/entertainment' element={<News key='Entertainment' category="Entertainment" country={this.state.country}   query={this.state.query}  />}></Route>
                        <Route path='/health' element={<News key='Health' category="Health" country={this.state.country}   query={this.state.query}  />}></Route>
                        <Route path='/science' element={<News key='Science' category="Science" country={this.state.country}   query={this.state.query}  />}></Route>
                        <Route path='/sports' element={<News key='Sports' category="Sports" country={this.state.country}   query={this.state.query}  />}></Route>
                        <Route path='/technology' element={<News key='Technology' category="Technology" country={this.state.country}   query={this.state.query}  />}></Route>
                        <Route path='/crime' element={<News key='crime' category="Crime" country={this.state.country}   query={this.state.query}  />}></Route>
                        <Route path='/domestic' element={<News key='domestic' category="Domestic" country={this.state.country}   query={this.state.query}  />}></Route>
                        <Route path='/education' element={<News key='education' category="Education" country={this.state.country}   query={this.state.query}  />}></Route>
                        <Route path='/environment' element={<News key='environment' category="Environment" country={this.state.country}   query={this.state.query}  />}></Route>
                        <Route path='/food' element={<News key='food' category="Food" country={this.state.country}   query={this.state.query}  />}></Route>
                        <Route path='/lifestyle' element={<News key='lifestyle' category="Lifestyle" country={this.state.country}   query={this.state.query}  />}></Route>
                        <Route path='/other' element={<News key='other' category="Other" country={this.state.country}   query={this.state.query}  />}></Route>
                        <Route path='/politics' element={<News key='politics' category="Politics" country={this.state.country}   query={this.state.query}  />}></Route>
                        <Route path='/top' element={<News key='top' category="Top" country={this.state.country}    query={this.state.query} />}></Route>
                        <Route path='/tourism' element={<News key='tourism' category="Tourism" country={this.state.country}    query={this.state.query} />}></Route>
                        <Route path='/world' element={<News key='world' category="World" country={this.state.country}   query={this.state.query} />}></Route>
                    </Routes>
                </div>
            </Router>
        )
    }
}

