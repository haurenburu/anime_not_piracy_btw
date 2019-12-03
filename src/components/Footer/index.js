import React from 'react';

import Materialize from 'materialize-css';
import {Link} from 'react-router-dom';

export default class Footer extends React.Component {
    componentDidMount() {
        Materialize.AutoInit();
    }
    render() {
        
        return(
            <footer className="page-footer teal">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Footer Content</h5>
                <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" target="_blank" href="http://www.facebook.com/acantonicarlos">Facebook</a></li>
                  <li><a className="grey-text text-lighten-3" target="_blank" href="http://www.github.com/haurenburu">Github</a></li>
                  <li><a className="grey-text text-lighten-3" target="_blank" href="http://www.twitter.com/haurenburu">Twitter</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2019 Copyright Text
            <Link className="grey-text text-lighten-4 right" target="_blank" to="#!">More Links</Link>
            </div>
          </div>
        </footer>
        );

    }
}