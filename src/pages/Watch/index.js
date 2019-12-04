import React from 'react';
import {Link} from 'react-router-dom';
import Materialize from 'materialize-css';

export default class Watch extends React.Component {

    render() {
        return (
            <main className="container">
                {/* <AnimeLink id={this.props.match.params.id} ep="01" /> */}
                <div className="row">
                    <div className="card">
                        <div className="col s12 m12 l12 center m5">
                            <video className="materialboxed" poster={"/imgs/"+this.props.match.params.id+"_.png"} src="/video/anime.mp4" controls></video>
                            <Link className="btn m10 col l12 m12 s12" to={"/anime/"+this.props.match.params.id+"/episodes"}>Episodes</Link>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}