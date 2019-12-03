import React from 'react';
import Materialize from 'materialize-css';

import Grid from '../../components/Grid';

export default class Animes extends React.Component{
    componentDidMount() {
        Materialize.AutoInit();
    }

    render() {
        return(
            <Grid name="Lançamentos" item1="01" item2="02" item3="03" item4="01" item5="02" item6="03" item7="01" item8="02" item9="03"/>
        )
    }
}


