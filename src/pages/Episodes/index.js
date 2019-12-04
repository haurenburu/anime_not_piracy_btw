import React from 'react';

import Materialize from 'materialize-css';

import AnimeLink from '../../components/AnimeLink';


export default class Episodes extends React.Component {
    componentDidMount() {
        Materialize.AutoInit();
    }

    render() {
        return (
            <main className="container">
                <AnimeLink id={this.props.match.params.id} ep="1" />
                <AnimeLink id={this.props.match.params.id} ep="2" />
                <AnimeLink id={this.props.match.params.id} ep="3" />
                <AnimeLink id={this.props.match.params.id} ep="4" />
                <AnimeLink id={this.props.match.params.id} ep="5" />
            </main>
        );
    }
}