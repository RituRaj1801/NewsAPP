import React, { Component } from 'react'
import Newsitem from './Newsitem'
// import ApiResponse from './sampleJSON.json'
import UnableToProcess from './UnableToProcess'
import Loader from './Loader';


export default class News extends Component {

    pageSize = 9;
    API_KEY = process.env.REACT_APP_NEWS_API_KEY
    constructor() {
        super();
        this.state = {
            pageList: [],
            articles:[],
            page: 1, // Initialize page number
            totalResults: 0, // To store the total number of articles
            loader: true
        }
    }
    async componentDidMount() {
        await this.fetchNews(0, "next")
    }
    async componentDidUpdate(prevProps){
        if (prevProps.country!==this.props.country)
            await this.fetchNews(0,"newCountry")
        else if(prevProps.query!==this.props.query){
            await this.fetchNews(0,"newQuery")
        }
    }

    fetchNews = async (page, direction) => {
        var url = `https://newsdata.io/api/1/latest?apikey=${this.API_KEY}&category=${this.props.category}&size=9&country=${this.props.country}&removeduplicate=1${page > 0 ? `&page=${page}` : ''}`;
        if(direction==='newCountry' || direction==='newQuery'){
            this.setState( {
                pageList: [],
                articles: [],
                page: 1, // Initialize page number
                totalResults: 0, // To store the total number of articles
                loader: true
            })
        }
        if(direction==='newQuery')
             url=`https://newsdata.io/api/1/latest?apikey=${this.API_KEY}&q=${this.props.query}&size=9`
        // const url = "http://localhost/newAPI/news.php"

        this.setState({
            loader: true
        })
        const response = await fetch(url, {
            method: 'GET',
        });
        var parsedData = await response.json()
        console.log("parsed data ", parsedData)


        if (parsedData.status === 'success') {
            this.setState({
                pageList: (direction === "next"  || direction==="newCountry") ? (!this.state.pageList.includes(parsedData.nextPage) ? [...this.state.pageList, parsedData.nextPage] : [...this.state.pageList]) : [...this.state.pageList],
                error: false,
                status: parsedData.status,
                totalResults: parsedData.totalResults,
                loader: false,
                articles: parsedData.results,
            })
        } else {
            this.setState({
                error: true,
                loader: false,
            })
        }
    }

    handleClick = async (direction) => {
        const { page, pageList } = this.state;
        let newPage = page + direction; // Calculate new page

        if (direction === 1) {
            await this.fetchNews(pageList[newPage - 2], "next")
        }
        else {
            if (newPage === 1)
                await this.fetchNews(0, "prev")
            else
                await this.fetchNews(pageList[page - 3], "prev")
        }
        this.setState({
            page: newPage
        })
    }


    render() {
        const { page, articles, totalResults } = this.state;
        const totalPages = Math.ceil(totalResults / this.pageSize); // Calculate the total number of pages

        return (
            <div>
                {!this.state.error && <h3 className='text-center'>Top Headline-{this.props.category}</h3>}
                {this.state.loader && <Loader />}
                {this.state.error && <UnableToProcess />}
                <div className="row justify-content-evenly">
                    {!this.state.loader && !this.state.error && articles.map((article, index) => (
                        <Newsitem key={index} title={article.title ? article.title : "NO TITLE"} description={article.description ? article.description : "NO DESCRIPTION"} imgURL={article.image_url} readMore={article.source_url} date={article.pubDate.split(' ')[0]} source={article.source_name} />
                    ))
                    }
                </div>
                {!this.state.error && <div className="conta d-flex justify-content-around">
                    <button
                        className="btn btn-success"
                        onClick={() => this.handleClick(-1)}
                        disabled={page <= 1} // Disable when on the first page
                    >
                        &larr; Previous
                    </button>

                    <button
                        className="btn btn-success"
                        onClick={() => this.handleClick(1)}
                        disabled={page >= totalPages} // Disable when there are no more pages
                    >
                        Next &rarr;
                    </button>
                </div>}
            </div>
        )
    }
}
