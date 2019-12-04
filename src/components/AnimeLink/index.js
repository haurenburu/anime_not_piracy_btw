import React from 'react';
import Materialize from 'materialize-css';
import { Link } from 'react-router-dom';

export default class AnimeLink extends React.Component {
    componentDidMount() {
        Materialize.AutoInit();
    }
    render() {
        return (
            <div className="row">
                <div className="card">
                    <img className="col s4 m4 l2 responsive-img" src={"/imgs/" + this.props.id + "_.png"} alt="anime cover"></img>
                    <h4 className="animeName teal-text col s8 m6 l6">Episode {this.props.ep}</h4>
                    <Link className="m5 col btn s12 m2 l4" to={"/anime/" + this.props.id + "/watch"}>Watch Online</Link>
                </div>
            </div>
        );
    }
}