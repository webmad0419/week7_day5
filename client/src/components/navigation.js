import React, { Component } from 'react'
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import AuthService from '../service/auth-services';


class navigation extends Component {

    constructor(props) {
        super(props);
        this.state = { loggedInUser: null };
        this.service = new AuthService();
    }


    componentWillReceiveProps(nextProps) {
        this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
    }

    logoutUser = () => {
        this.service.logout()
            .then(() => {
                this.setState({ loggedInUser: null });
                this.props.setUser(null);
            })
    }


    render() {

        if (this.state.loggedInUser) {

            return (
                <Navbar expand="md" bg="dark" variant="dark" className="justify-content-end navigation">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav>
                            <Nav.Item>
                                <Nav.Link as="div">
                                    ¡Bienvenid@, {this.state.loggedInUser.username}!
                            </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as="div">
                                    <Link to="/">Inicio</Link>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as="div">
                                    <Link to="/coasters">Montañas rusas</Link>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as="div">
                                    <div onClick={this.logoutUser}>Cerrar sesión</div>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            )
        } else {
            return (
                <Navbar expand="md" bg="dark" variant="dark" className="justify-content-end navigation">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav>
                            <Nav.Item>
                                <Nav.Link as="div">
                                    ¡Bienvenid@, invitado!
                            </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as="div">
                                    <Link to="/">Inicio</Link>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as="div">
                                    <Link to="/coasters">Montañas rusas</Link>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as="div">
                                    <Link to="/signup">Registro</Link>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as="div">
                                    <Link to="/login">Iniciar sesión</Link>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            )
        }
    }
}
export default navigation