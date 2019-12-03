import React from 'react';

import Materialize from 'materialize-css';


export default class Header extends React.Component {
    componentDidMount() {
        Materialize.AutoInit();
    }
    render() {
        return(
            <header>
                <nav className="nav-wrapper teal">
                    <div className="container">
                        <a href="/" className="brand-logo">Not Piracy BTW</a>
                        <a href="#" className="sidenav-trigger" data-target="mobile-menu">
                            <i className="fas fa-bars"></i>
                        </a>
                        {/* Hide On Mobile */}
                        <ul className="right hide-on-med-and-down">
                            <li><a href="/" className="white-text">Home</a></li>
                            <li><a href="/animes" className="white-text">Animes</a></li>
                            <li><a href="#" className="white-text">Menu 3</a></li>
                            <li><a href="/login" className="white-text">Login</a></li>
                        </ul>
                        {/* Hide on desktop */}
                        <ul className="sidenav teal" id="mobile-menu">
                            <li><a href="#" className="white-text">Menu 1</a></li>
                            <li><a href="#" className="white-text">Menu 2</a></li>
                            <li><a href="#" className="white-text">Menu 3</a></li>
                            <li><a href="#" className="white-text">Menu 4</a></li>
                        </ul>

                    </div>
                </nav>
            </header>

        );
    }
}