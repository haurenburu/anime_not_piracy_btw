import React from 'react';

import Materialize from 'materialize-css';
import {Link} from 'react-router-dom';

export default class Header extends React.Component {
    componentDidMount() {
        Materialize.AutoInit();
    }
    render() {
        return(
            <header>
                <nav className="nav-wrapper teal">
                    <div className="container">
                        <Link to="/" className="brand-logo">Not Piracy BTW</Link>
                        <Link to="#" className="sidenav-trigger" data-target="mobile-menu">
                            <i className="fas fa-bars"></i>
                        </Link>
                        {/* Hide On Mobile */}
                        <ul className="right hide-on-med-and-down">
                            <li><Link to="/" className="white-text">Home</Link></li>
                            <li><Link to="/animes" className="white-text">Animes</Link></li>
                            <li><Link to="/login" className="white-text">Login</Link></li>
                        </ul>
                        {/* Hide on desktop */}
                        <ul className="sidenav teal" id="mobile-menu">
                            <li><Link to="/" className="white-text">Home</Link></li>
                            <li><Link to="/animes" className="white-text">Animes</Link></li>
                            <li><Link to="/login" className="white-text">Login</Link></li>
                        </ul>

                    </div>
                </nav>
            </header>

        );
    }
}