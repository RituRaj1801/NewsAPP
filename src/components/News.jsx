import React, { Component } from 'react'
import Newsitem from './Newsitem'
import ApiResponse from './sampleJSON.json'
import UnableToProcess from './UnableToProcess'
import Loader from './Loader';


export default class News extends Component {
    
    pageSize=15;
    apiKEY="9a54db73614b470ca508c57ac92c3bd3"
    constructor() {
        super();
        this.state = {
            articles:ApiResponse.articles,
            page: 1, // Initialize page number
            totalResults: 0, // To store the total number of articles
            loader: true
        }
    }
    async componentDidMount() {
        await this.fetchNews(1)
    }

    fetchNews = async (page) => {
        this.setState({
            loader:true
        })
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apikey=${this.apiKEY}&page=${page}&pageSize=${this.pageSize}`
        let data = await fetch(url)
        let parsedData = await data.json()
        if(parsedData.status==='ok'){
            this.setState({
                error :false,
                status:parsedData.status,
                totalResults: parsedData.totalResults,
                loader:false,
                articles: parsedData.articles,
            })
        }else{
            this.setState({
                error :true,
                // status:parsedData.status,
                // totalResults: parsedData.totalResults,
                loader:false,
                // articles: parsedData.articles,
            })
        }

       
    }

    handleClick= async (direction)=>{
        console.log(this.state.page)
        let newPage=this.state.page+direction
        await this.fetchNews(newPage)
        this.setState({
            page:newPage
        })
    }
    

    render() {
        const { page, articles, totalResults } = this.state;
        const totalPages = Math.ceil(totalResults / 9); // Calculate the total number of pages

        return (
            <div>
               { !this.state.error  && <h3>Top Headline-{this.props.category}</h3>}
                {this.state.loader && <Loader />}
                {this.state.error  && <UnableToProcess/> }
                <div className="row justify-content-evenly">
                    { !this.state.loader && !this.state.error && articles.map((article, index) => (
                        <Newsitem key={index} title={article.title ? article.title : "NO TITLE"} description={article.description ? article.description : "NO DESCRIPTION"} imgURL={article.urlToImage} readMore={article.url} author={article.author} date={article.publishedAt.split('T')[0]} source={article.source.name} />
                    ))
                    }
                </div>
                { !this.state.error  && <div className="conta d-flex justify-content-around">
                    <button
                        className="btn btn-success"
                        onClick={()=>this.handleClick(-1)}
                        disabled={page <= 1} // Disable when on the first page
                    >
                        &larr; Previous
                    </button>

                    <button
                        className="btn btn-success"
                        onClick={()=>this.handleClick(1)}
                        disabled={page >= totalPages} // Disable when there are no more pages
                    >
                        Next &rarr;
                    </button>
                </div>}
            </div>
        )
    }
}
