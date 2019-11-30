import React from 'react';

import Materialize from 'materialize-css';


export default class Carousel extends React.Component {
    componentDidMount() {
        Materialize.AutoInit();
    }
    render() {
        return (
            <div className="container">
            <h2>{this.props.name}</h2>
                <div className="carousel carousel-slider center">
                    <a className="carousel-item" href="#one!"><img src="http://lorempixel.com/200/400/sports/1/"></img></a>
                    <a className="carousel-item" href="#one!"><img src="http://lorempixel.com/200/400/sports/2/"></img></a>
                    <a className="carousel-item" href="#one!"><img src="http://lorempixel.com/200/400/sports/3/"></img></a>
                    <a className="carousel-item" href="#one!"><img src="http://lorempixel.com/200/400/sports/4/"></img></a>
                </div>
            </div>
        );
    }
}