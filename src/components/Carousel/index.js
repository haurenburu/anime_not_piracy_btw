import React from 'react';

import Materialize from 'materialize-css';


export default class Carousel extends React.Component {
    componentDidMount() {
        Materialize.AutoInit();
    }
    render() {
        return (

            <div className="container">
            <h3 className="teal-text">{this.props.name}</h3>
                
                {/* DESKTOP */}
                <div className="hide-on-med-and-down carousel carousel-slider center card ">
                    <a className="carousel-item" href={"/anime/"+this.props.img1}>
                        <img src={"./imgs/"+this.props.img1+"_.png"} alt="Anime Image"></img>
                        <p className="teal-text">Nanatsu no Taizai</p>
                    </a>
                    <a className="carousel-item" href={"/anime/"+this.props.img2}>
                        <img src={"./imgs/"+this.props.img2+"_.png"} alt="Anime Image"></img>
                        <p className="teal-text">Nanatsu no Taizai</p>
                    </a>
                    <a className="carousel-item" href={"/anime/"+this.props.img3}>
                        <img src={"./imgs/"+this.props.img3+"_.png"} alt="Anime Image"></img>
                        <p className="teal-text">Nanatsu no Taizai</p>
                    </a>
                </div>

                {/* MOBILE */}
                <div className="hide-on-med-and-up carousel carousel-slider center row">
                    <a className="carousel-item" href="#01">
                        <p className="teal-text">Nanatsu no Taizai</p>
                        <img src={"./imgs/"+this.props.img1+".png"} alt="Anime Image"></img>
                    </a>
                    <a className="carousel-item" href="#02">
                        <p className="teal-text">Nanatsu no Taizai</p>
                        <img src={"./imgs/"+this.props.img2+".png"} alt="Anime Image"></img>
                    </a>
                    <a className="carousel-item" href="#03">
                        <p className="teal-text">Nanatsu no Taizai</p>
                        <img src={"./imgs/"+this.props.img3+".png"} alt="Anime Image"></img>
                    </a>
                </div>
            </div>
        );
    }
}