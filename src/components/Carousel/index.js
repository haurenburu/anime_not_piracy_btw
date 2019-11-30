import React from 'react';

import Materialize from 'materialize-css';


export default class Carousel extends React.Component {
    componentDidMount() {
        Materialize.AutoInit();
    }
    render() {
        return (
        


            <div className="container">
            <h2 className="teal-text">{this.props.name}</h2>
                
                {/* DESKTOP */}
                <div className="hide-on-med-and-down carousel carousel-slider center">
                    <a className="carousel-item" href="#01">
                        <p className="teal-text">Nanatsu no Taizai</p>
                        <img src={"./imgs/"+this.props.img1+"_.png"}></img>
                    </a>
                    <a className="carousel-item" href="#02">
                        <p className="teal-text">Nanatsu no Taizai</p>
                        <img src={"./imgs/"+this.props.img2+"_.png"}></img>
                    </a>
                    <a className="carousel-item" href="#03">
                        <p className="teal-text">Nanatsu no Taizai</p>
                        <img src={"./imgs/"+this.props.img3+"_.png"}></img>
                    </a>
                </div>

                {/* MOBILE */}
                <div className="hide-on-med-and-up carousel carousel-slider center">
                    <a className="carousel-item" href="#01">
                        <p className="teal-text">Nanatsu no Taizai</p>
                        <img src={"./imgs/"+this.props.img1+".png"}></img>
                    </a>
                    <a className="carousel-item" href="#02">
                        <p className="teal-text">Nanatsu no Taizai</p>
                        <img src={"./imgs/"+this.props.img2+".png"}></img>
                    </a>
                    <a className="carousel-item" href="#03">
                        <p className="teal-text">Nanatsu no Taizai</p>
                        <img src={"./imgs/"+this.props.img3+".png"}></img>
                    </a>
                </div>
            </div>
        );
    }
}