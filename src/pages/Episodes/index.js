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
                <AnimeLink id={this.props.match.params.id} ep="01" />
                <AnimeLink id={this.props.match.params.id} ep="02" />
                <AnimeLink id={this.props.match.params.id} ep="03" />
                <AnimeLink id={this.props.match.params.id} ep="04" />
                <AnimeLink id={this.props.match.params.id} ep="05" />
            </main>
        );
    }
}