import React from 'react';

import Materialize from 'materialize-css';

export default class Login extends React.Component {
    state = {
        name: "",
        email: "",
        subject: "",
        message: ""
    }


    componentDidMount() {
        Materialize.AutoInit();
    }
    render() {

        function validateForm() {

        }

        return (
            <main className="container row center">
                <h3 className="teal-text">Logar</h3>
                <form className="col s12" onSubmit={this.validateForm}>
                    <div className="input-field col s12 m6">
                        <label htmlFor="username">Name</label>
                        <input id="username" type="text"
                            className="validate" required />
                    </div>

                    <div className="input-field col s12 m6">
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email"
                            className="validate" required />
                    </div>
                    <div className="input-field col s12 m12">
                        <label htmlFor="subject">Subject</label>
                        <input id="subject" type="text"
                            className="validate" required />
                    </div>

                    <div class="input-field col s12">
                        <textarea id="textarea2" className="materialize-textarea validate" required data-length="120"></textarea>
                        <label for="textarea2">Message</label>
                    </div>

                    <div className="input-fild col s12">
                        <input className="btn" type="submit" onClick={ this.validateForm } value="Logar" />
                    </div>
                </form>

            </main>
        );
    }
}