import React from 'react';

import {Link} from 'react-router-dom';
import Materialize from 'materialize-css';
import AnimeDesc from '../../components/AnimeDesc';

export default class Anime extends React.Component {
    componentDidMount() {
        Materialize.AutoInit();
    }
    render() {

        return (
            <>
                <main className="container row">
                    <div className="col s12 m6 l4 m10">
                        <img className="responsive-img card " src={"/imgs/" + this.props.match.params.id + ".png"}></img>
                    </div>
                    <AnimeDesc id={this.props.match.params.id} />
                </main>
                <div className="container row center">
                    <Link className="btn col s12" to={"/anime/" + this.props.match.params.id+"/episodes"}>Episodes</Link>
                </div>
            </>
        );
    }
}
