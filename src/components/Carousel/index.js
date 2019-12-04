import React from 'react';

import Materialize from 'materialize-css';
import {Link} from 'react-router-dom';

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
                    <Link className="carousel-item" to={"/anime/"+this.props.img1}>
                        <img src={"./imgs/"+this.props.img1+"_.png"} alt="Anime cover"></img>
                        <p className="teal-text">Nanatsu no Taizai</p>
                    </Link>
                    <Link className="carousel-item" to={"/anime/"+this.props.img2}>
                        <img src={"./imgs/"+this.props.img2+"_.png"} alt="Anime cover"></img>
                        <p className="teal-text">Nanatsu no Taizai</p>
                    </Link>
                    <Link className="carousel-item" to={"/anime/"+this.props.img3}>
                        <img src={"./imgs/"+this.props.img3+"_.png"} alt="Anime cover"></img>
                        <p className="teal-text">Nanatsu no Taizai</p>
                    </Link>
                </div>

                {/* MOBILE */}
                <div className="hide-on-med-and-up carousel carousel-slider center row">
                    <Link className="carousel-item" to={"/anime/"+this.props.img1}>
                        <p className="teal-text">Nanatsu no Taizai</p>
                        <img src={"./imgs/"+this.props.img1+".png"} alt="Anime cover"></img>
                    </Link>
                    <Link className="carousel-item" to={"/anime/"+this.props.img2}>
                        <p className="teal-text">Nanatsu no Taizai</p>
                        <img src={"./imgs/"+this.props.img2+".png"} alt="Anime cover"></img>
                    </Link>
                    <Link className="carousel-item" to={"/anime/"+this.props.img3}>
                        <p className="teal-text">Nanatsu no Taizai</p>
                        <img src={"./imgs/"+this.props.img3+".png"} alt="Anime cover"></img>
                    </Link>
                </div>
            </div>
        );
    }
}