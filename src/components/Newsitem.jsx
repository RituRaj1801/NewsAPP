import React, { Component } from 'react'
import '../styles/newsitem.css'

export default class Newsitem extends Component {
    render() {
        let { title, description, imgURL, readMore } = this.props;
        return (
            
                <div className="card my-1 mx-1 col-md-4" style={{ width: '18rem' }}>
                    <img src={imgURL?imgURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd2NAjCcjjk7ac57mKCQvgWVTmP0ysxnzQnQ&s"} className="card-img-top img-custom " alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title.length < 40 ? title : title.slice(0, 40) + "..."}</h5>
                        <p className="card-text">{description.length < 80 ? description : description.slice(0, 80) + "..."}</p>
                        <a   rel="noreferrer" target='_blank' href={readMore} className="btn btn-primary">Read More</a>
                    </div>
                </div>
           
        )
    }
}


// 40562ffe6b24479b8044fa96f74851e1