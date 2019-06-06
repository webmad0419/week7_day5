import React, { Component } from 'react';
import AuthService from '../../service/auth-services';
import { Link } from 'react-router-dom';


class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = { username: '', password: '' };
        this.service = new AuthService();
    }

    handleFormSubmit = (event) => {
        event.preventDefault()

        const { username, password } = this.state

        this.service.signup(username, password)
            .then(response => {
                this.setState({
                    username: "",
                    password: "",
                });
                this.props.setUser(response)
            })
            .catch(error => console.log(error.response.data.message))
    }


    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <label>Username:</label>
                    <input type="text" name="username" value={this.state.username} onChange={e => this.handleChange(e)} />

                    <label>Password:</label>
                    <textarea name="password" value={this.state.password} onChange={e => this.handleChange(e)} />

                    <input type="submit" value="Signup" />
                </form>

                <p>Already have account?
                    <Link to={"/"}> Login</Link>
                </p>
            </div>
        )
    }
}

export default Signup;