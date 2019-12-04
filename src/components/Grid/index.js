import React from 'react';

import Materialize from 'materialize-css';
import { Link } from 'react-router-dom';

export default class Grid extends React.Component {
    componentDidMount() {
        Materialize.AutoInit();
    }
    render() {
        return (
            <div className="row container">
                <h3 className="teal-text">{this.props.name}</h3>
                <div className="col s12 m6 l4">
                    <Link to={"/anime/" + this.props.item1}>
                        <h6 className="teal-text">Anime Name 1</h6>
                        <img src={"./imgs/" + this.props.item1 + "_.png"} className="responsive-img card" alt="Anime grid item"></img>
                    </Link>
                </div>
                <div className="col s12 m6 l4">
                    <Link to={"/anime/" + this.props.item2}>
                        <h6 className="teal-text">Anime Name 2</h6>
                        <img src={"./imgs/" + this.props.item2 + "_.png"} className="responsive-img card" alt="Anime grid item"></img>
                    </Link>
                </div>
                <div className="col s12 m6 l4">
                    <Link to={"/anime/" + this.props.item3}>
                        <h6 className="teal-text">Anime Name 3</h6>
                        <img src={"./imgs/" + this.props.item3 + "_.png"} className="responsive-img card" alt="Anime grid item"></img>
                    </Link>
                </div>
                <div className="col s12 m6 l4">
                    <Link to={"/anime/" + this.props.item1}>
                        <h6 className="teal-text">Anime Name 4</h6>
                        <img src={"./imgs/" + this.props.item1 + "_.png"} className="responsive-img card" alt="Anime grid item"></img>
                    </Link>
                </div>
                <div className="col s12 m6 l4">
                    <Link to={"/anime/" + this.props.item2}>
                        <h6 className="teal-text">Anime Name 5</h6>
                        <img src={"./imgs/" + this.props.item2 + "_.png"} className="responsive-img card" alt="Anime grid item"></img>
                    </Link>
                </div>
                <div className="col s12 m6 l4">
                    <Link to={"/anime/" + this.props.item3}>
                        <h6 className="teal-text">Anime Name 6</h6>
                        <img src={"./imgs/" + this.props.item3 + "_.png"} className="responsive-img card" alt="Anime grid item"></img>
                    </Link>
                </div>
                <div className="col s12 m6 l4">
                    <Link to={"/anime/" + this.props.item1}>
                        <h6 className="teal-text">Anime Name 7</h6>
                        <img src={"./imgs/" + this.props.item1 + "_.png"} className="responsive-img card" alt="Anime grid item"></img>
                    </Link>
                </div>
                <div className="col s12 m6 l4">
                    <Link to={"/anime/" + this.props.item2}>
                        <h6 className="teal-text">Anime Name 8</h6>
                        <img src={"./imgs/" + this.props.item2 + "_.png"} className="responsive-img card" alt="Anime grid item"></img>
                    </Link>
                </div>
                <div className="col s12 m6 l4">
                    <Link to={"/anime/" + this.props.item3}>
                        <h6 className="teal-text">Anime Name 9</h6>
                        <img src={"./imgs/" + this.props.item3 + "_.png"} className="responsive-img card" alt="Anime grid item"></img>
                    </Link>
                </div>

            </div>
        )
    }
}