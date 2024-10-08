import './App.css';
import React, { useState  } from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import News from './components/News';
// import Country from './components/Country';

export default function App() {
    const [state, setState] = useState({
        country: "in",
        query: ""
    });

    const countryCode = (code) => {
        setState({
            country: code,
            query: ""
        })
    }
    const querySearch = (query) => {

        setState({
            country: state.country,
            query: query
        })
    }

    return (
        <Router >
            <Navbar countryCode={countryCode} querySearch={querySearch} />
            <div className="container">
                <Routes>
                    <Route path='/' element={<News key='General' category="Top" country={state.country} query={state.query} />}></Route>
                    <Route path='/business' element={<News key='Business' category="Business" country={state.country} query={state.query} />}></Route>
                    <Route path='/entertainment' element={<News key='Entertainment' category="Entertainment" country={state.country} query={state.query} />}></Route>
                    <Route path='/health' element={<News key='Health' category="Health" country={state.country} query={state.query} />}></Route>
                    <Route path='/science' element={<News key='Science' category="Science" country={state.country} query={state.query} />}></Route>
                    <Route path='/sports' element={<News key='Sports' category="Sports" country={state.country} query={state.query} />}></Route>
                    <Route path='/technology' element={<News key='Technology' category="Technology" country={state.country} query={state.query} />}></Route>
                    <Route path='/crime' element={<News key='crime' category="Crime" country={state.country} query={state.query} />}></Route>
                    <Route path='/domestic' element={<News key='domestic' category="Domestic" country={state.country} query={state.query} />}></Route>
                    <Route path='/education' element={<News key='education' category="Education" country={state.country} query={state.query} />}></Route>
                    <Route path='/environment' element={<News key='environment' category="Environment" country={state.country} query={state.query} />}></Route>
                    <Route path='/food' element={<News key='food' category="Food" country={state.country} query={state.query} />}></Route>
                    <Route path='/lifestyle' element={<News key='lifestyle' category="Lifestyle" country={state.country} query={state.query} />}></Route>
                    <Route path='/other' element={<News key='other' category="Other" country={state.country} query={state.query} />}></Route>
                    <Route path='/politics' element={<News key='politics' category="Politics" country={state.country} query={state.query} />}></Route>
                    <Route path='/top' element={<News key='top' category="Top" country={state.country} query={state.query} />}></Route>
                    <Route path='/tourism' element={<News key='tourism' category="Tourism" country={state.country} query={state.query} />}></Route>
                    <Route path='/world' element={<News key='world' category="World" country={state.country} query={state.query} />}></Route>
                </Routes>
            </div>
        </Router>
    )
}

