import React, { useCallback, useEffect, useState } from 'react';
import Newsitem from './Newsitem';
import UnableToProcess from './UnableToProcess';
import Loader from './Loader';

export default function News(props) {
    const pageSize = 9;
    const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

    // State initialization
    const [state, setState] = useState({
        pageList: [],
        articles: [],
        page: 1,
        totalResults: 0,
        loader: true,
        error: false,
        country: props.country,  // Initialize country
    });



    // Fetch news based on given parameters
    const fetchNews = useCallback(async (page, direction) => {
        let url = `https://newsdata.io/api/1/latest?apikey=${API_KEY}&category=${props.category}&size=9&country=${props.country}&removeduplicate=1${page > 0 ? `&page=${page}` : ''}`;

        // Reset state for new country or query
        if (direction === 'newCountry' || direction === 'newQuery') {
            setState({
                pageList: [],
                articles: [],
                page: 1, // Initialize page number
                totalResults: 0,
                loader: true,
                error: false,
                country: props.country, // Reset country in state
            });
        }

        // Change URL if new query
        if (direction === 'newQuery') {
            url = `https://newsdata.io/api/1/latest?apikey=${API_KEY}&q=${props.query}&size=9`;
        }

        // Set loader to true before fetching
        setState((prevState) => ({
            ...prevState,
            loader: true,
        }));

        const response = await fetch(url);
        const parsedData = await response.json();
        console.log("parsed data ", parsedData);

        // Update state based on fetch results
        if (parsedData.status === 'success') {
            setState((prevState) => ({
                ...prevState,
                pageList: (direction === "next" || direction === "newCountry") ?
                    (!prevState.pageList.includes(parsedData.nextPage) ?
                        [...prevState.pageList, parsedData.nextPage] :
                        [...prevState.pageList]) :
                    [...prevState.pageList],
                error: false,
                status: parsedData.status,
                totalResults: parsedData.totalResults,
                loader: false,
                articles: parsedData.results,
            }));
        } else {
            setState((prevState) => ({
                ...prevState,
                error: true,
                loader: false,
            }));
        }
    }, [API_KEY, props.category, props.country, props.query]); // Include all dependencies

    const handleClick = async (direction) => {
        const { page, pageList } = state;
        let newPage = page + direction; // Calculate new page

        if (direction === 1) {
            await fetchNews(pageList[newPage - 2], "next");
        } else {
            if (newPage === 1)
                await fetchNews(0, "prev");
            else
                await fetchNews(pageList[page - 3], "prev");
        }

        setState((prevState) => ({
            ...prevState,
            page: newPage,
        }));
    };

    // Fetch news on mount
    useEffect(() => {
        fetchNews(0, "next");
    }, [fetchNews]); // Runs only once when the component mounts

    // Check for prop changes and refetch news if necessary
    useEffect(() => {
        fetchNews(0, props.country !== state.country ? "newCountry" : "newQuery");
        // Update country in state if it has changed
        setState((prevState) => ({
            ...prevState,
            country: props.country,
        }));
    }, [props.country, props.query, fetchNews, state.country]);

    const { page, articles, totalResults, loader, error } = state;
    const totalPages = Math.ceil(totalResults / pageSize); // Calculate the total number of pages

    return (
        <div>
            {!error && <h3 className='text-center'>Top Headline - {props.category}</h3>}
            {loader && <Loader />}
            {error && <UnableToProcess />}
            <div className="row justify-content-evenly">
                {!loader && !error && articles.map((article, index) => (
                    <Newsitem
                        key={index}
                        title={article.title ? article.title : "NO TITLE"}
                        description={article.description ? article.description : "NO DESCRIPTION"}
                        imgURL={article.image_url}
                        readMore={article.source_url}
                        date={article.pubDate.replace('T', ' ')}
                        source={article.source_name}
                    />
                ))}

            </div>
            {!error && (
                <div className="conta d-flex justify-content-around">
                    <button
                        className="btn btn-success"
                        onClick={() => handleClick(-1)}
                        disabled={page <= 1} // Disable when on the first page
                    >
                        &larr; Previous
                    </button>

                    <button
                        className="btn btn-success"
                        onClick={() => handleClick(1)}
                        disabled={page >= totalPages} // Disable when there are no more pages
                    >
                        Next &rarr;
                    </button>
                </div>
            )}
        </div>
    );
}
