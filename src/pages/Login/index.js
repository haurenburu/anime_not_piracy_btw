import React from 'react';

import Materialize from 'materialize-css';

export default class Login extends React.Component {
    componentDidMount() {
        Materialize.AutoInit();
    }
    render() {
        return (
            <main className="container row center">
                <h3 className="teal-text">Logar</h3>
                <form className="col s12">
                    <div className="input-field col s12 m6">
                        <label htmlFor="username">Username</label>
                        <input id="username" type="text" placeholder="Username"
                            className="validate" required />
                    </div>
                    <div className="input-field col s12 m6">
                        <label htmlFor="password">Password</label>
                        <input id="password" type="password" placeholder="Password"
                            className="validate" required />
                    </div>
                    {/* <div className="input-fild col s6">
                        <input className="btn" type="submit" />
                    </div> */}
                    <div className="input-fild col s12">
                        <input className="btn" type="submit" value="Logar"/>
                    </div>
                </form>

                <form className="col s12">
                    <h3 className="teal-text"> Cadastrar </h3>
                    <div className="input-field col s12 m6">
                        <label htmlFor="username">Username</label>
                        <input id="username" type="text" placeholder="Username"
                            className="validate" required />
                    </div>
                    <div className="input-field col s12 m6">
                        <label htmlFor="password2">Password</label>
                        <input id="password2" type="password" placeholder="Password"
                            className="validate" required />
                    </div>
                    <div className="input-field col s12 m6">
                        <label htmlFor="password3">Repeat password</label>
                        <input id="password3" type="password" placeholder="Repeat password"
                            className="validate" required />
                    </div>
                    <div className="input-field col s12 m6">
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" placeholder="something@something.com"
                            className="validate" required />
                    </div>

                    {/* <div className="input-fild col s6">
                        <input className="btn" type="submit" value="asd" />
                    </div> */}
                    <div className="input-fild col s12">
                        <input className="btn" type="submit" value="Cadastrar" />
                    </div>
                </form>
            </main>
        );
    }
}