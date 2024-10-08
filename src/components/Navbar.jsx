import React from 'react'
import { Link } from 'react-router-dom'
import Country from './Country';

export default function Navbar(props) {
    let categories = [
        "crime", "domestic", "education", "environment", "food", "lifestyle", "politics", "top", "tourism", "world",
        "other"
    ];
    const querySearchFun = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        const keyword = event.target.elements[0].value; // or use a ref for input
        props.querySearch(keyword)
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">NewsWave</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/business">Business</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/entertainment">Entertainment</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/health">Health</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/science">Science</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/sports">Sports</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/technology">Technology</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                More
                            </Link>
                            <ul className="dropdown-menu">
                                {categories.map((category, index) => (
                                    <li key={index} className="nav-item">
                                        <Link className="nav-link" aria-current="page" to={`/${category}`}>
                                            {category.charAt(0).toUpperCase() + category.slice(1)}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <Country countryCode={props.countryCode} />
                    </ul>
                    <form className="d-flex" role="search" onSubmit={querySearchFun}>
                        <input className="form-control me-2 mx-1" type="search" placeholder="Enter one KeyWord" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit" >Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )

}
