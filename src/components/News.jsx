import React, { Component } from 'react'
import Newsitem from './Newsitem'
import ApiResponse from './sampleJSON.json'


export default class News extends Component {
    render() {
        let articles = ApiResponse.articles
        return (
            <div>
                <h3>Daily News</h3>
                <div className="row justify-content-evenly">
                    {articles.map((article, index) => (
                        <Newsitem key={index} title={article.title} description={article.description} imgURL={article.urlToImage} readMore={article.url} />
                    ))}
                </div>
            </div>
        )
    }
}
