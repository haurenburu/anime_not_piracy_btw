import React from 'react';
import Materialize from 'materialize-css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Carousel from '../../components/Carousel';
import Grid from '../../components/Grid';

export default class Home extends React.Component {
    componentDidMount() {
        Materialize.AutoInit();
    }
    render() {
        return(
            <>
            <Header />

            <main>
                <Carousel name="Temporada" img1="01" img2="02" img3="03"/>
                <Grid name="Lançamentos" item1="01" item2="02" item3="03" item4="01" item5="02" item6="03" item7="01" item8="02" item9="03"/>
                <Carousel name="Populares (Semana)" img1="01" img2="02" img3="03"/>
            </main>

            <Footer />
            </>
        );
    }
}