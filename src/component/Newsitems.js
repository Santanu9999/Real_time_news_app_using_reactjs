import React, { Component } from 'react'

export default class Newsitems extends Component {
  render() {
    let { title, description, imageurl, url, aurther, date,sourse } = this.props;
    return (
      <div className="my-3">
        <div className="card" >
          <div style={{display :'flex',justifyContent:'flex-end',position:'absolute', right : '0'}}>
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" >
          {sourse}</span>
          </div>
          <img src={imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">By {aurther} on {date}</small></p>
            <a href={url} target="_blank" className="btn btn-sm btn-dark">Read more</a>
          </div>
        </div>
      </div>
    )
  }
}
