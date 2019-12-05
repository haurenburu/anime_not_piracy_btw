import React from 'react';

import Materialize from 'materialize-css';

export default class Login extends React.Component {
    state = {
        name: "",
        email: "",
        subject: "",
        message: "",
        error: "",
    }

    handleChange = event => {
        console.log(event.target.name);
        this.setState({
            [event.target.name]: event.target.value,
        });
    }
    handleSubmit = event => {
        if (this.state.name.length === 0) this.setState({ error: "Name can't be empty" })
        else if (this.state.name.length < 4) this.setState({ error: "Name must have at least 4 characters" })
        else if (this.state.email.length === 0) this.setState({ error: "Email can't be empty" })
        else if (!this.state.email.includes("@")) this.setState({ error: "This is not a valid email" })
        else if (this.state.subject.length === 0) this.setState({ error: "Subject can't be empty" })
        else if (this.state.message.length === 0) this.setState({ error: "Message can't be empty" })
        else if (this.state.message.length < 20) this.setState({ error: "Message must have at least 20 characters" })
        else this.setState({ error: "Form Sent" })
        
        event.preventDefault();
    }

    componentDidMount() {
        Materialize.AutoInit();
    }
    render() {



        return (
            <main className="container row center">
                <h3 className="teal-text">Contact</h3>
                <form className="col s12" onSubmit={this.handleSubmit}>
                    <div className="input-field col s12 m6">
                        <label htmlFor="name">Name</label>
                        <input name="name" id="name" type="text" value={this.state.name} onChange={this.handleChange}
                            className="validate" />
                    </div>

                    <div className="input-field col s12 m6">
                        <label htmlFor="email">Email</label>
                        <input name="email" id="email" type="text" value={this.state.email} onChange={this.handleChange}
                            className="validate" />
                    </div>
                    <div className="input-field col s12 m12">
                        <label htmlFor="subject">Subject</label>
                        <input name="subject" id="subject" type="text" value={this.state.subject} onChange={this.handleChange}
                            className="validate" />
                    </div>

                    <div className="input-field col s12">
                        <textarea name="message" id="textarea2" className="materialize-textarea validate" value={this.state.message} onChange={this.handleChange} data-length="120"></textarea>
                        <label htmlFor="textarea2">Message</label>
                    </div>
                    <p className={this.state.error !== "Form Sent" ? "red-text" : "teal-text"}> {this.state.error} </p>



                    <div className="input-fild col s12">
                        <input className="btn" type="submit" onClick={this.validateForm} value="Send" />
                    </div>
                </form>

            </main>
        );
    }
}