import React, { Component } from 'react'
import Newsitem from './Newsitem'
import ApiResponse from './sampleJSON.json'


export default class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: ApiResponse.articles,
            page: 1, // Initialize page number
            totalResults: 0, // To store the total number of articles
            loader: false
        }
    }
    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=40562ffe6b24479b8044fa96f74851e1&page=1&pageSize=9"
        let data = await fetch(url)
        let parsedData = await data.json()

        this.setState({
            page: 1,
            articles: parsedData.articles,
            totalResults: parsedData.totalResults, // Set totalResults from API
            loader: false
        })
    }

    getPreviousNews = async () => {
        console.log("previous")
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=40562ffe6b24479b8044fa96f74851e1&page=${this.state.page - 1}&pageSize=9`
        let data = await fetch(url)
        let parsedData = await data.json()

        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loader: false
        })
    }

    getNextNews = async () => {
        console.log("next")
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=40562ffe6b24479b8044fa96f74851e1&page=${this.state.page + 1}&pageSize=9`
        let data = await fetch(url)
        let parsedData = await data.json()

        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles,
            loader: false
        })
    }

    render() {
        const { page, articles, totalResults } = this.state;
        const totalPages = Math.ceil(totalResults / 9); // Calculate the total number of pages
        
        return (
            <div>
                <h3>Daily News</h3>
                <div className="row justify-content-evenly">
                    {articles.map((article, index) => (
                        <Newsitem key={index} title={article.title ? article.title : "NO TITLE"} description={article.description ? article.description : "NO DESCRIPTION"} imgURL={article.urlToImage} readMore={article.url} />
                    ))}
                </div>
                <div className="conta d-flex justify-content-around">
                    <button 
                        className="btn btn-dark" 
                        onClick={this.getPreviousNews} 
                        disabled={page <= 1} // Disable when on the first page
                    > 
                        &larr; Previous
                    </button>
                    
                    <button 
                        className="btn btn-dark" 
                        onClick={this.getNextNews} 
                        disabled={page >= totalPages} // Disable when there are no more pages
                    >
                        Next &rarr;
                    </button>
                </div>
            </div>
        )
    }
}
