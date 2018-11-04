import React from 'react';
import { Physical, Mobile, Desktop, Tablet } from '.'

export default class Carousel extends React.Component {
  
  render() {
    return (
        <div id="demo" className="carousel slide" data-ride="carousel" data-keyboard={true} data-interval={false}>

        <ul className="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" className="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
          <li data-target="#demo" data-slide-to="3"></li>
        </ul>
    
        <div className="carousel-inner">
          <div className="carousel-item active"><Physical></Physical></div>
          <div className="carousel-item"><Mobile></Mobile></div>
          <div className="carousel-item"><Desktop></Desktop></div>
          <div className="carousel-item"><Tablet></Tablet></div>
        </div>
    
        <a className="carousel-control-prev" href="#demo" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </a>
    
        <a className="carousel-control-next" href="#demo" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </a>
    
      </div>
    )
  }
}