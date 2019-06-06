import React, { Component } from 'react'
import CoasterServices from '../service/coaster-services'
import Modal from 'react-bootstrap/Modal'


class CoasterForm extends Component {

    constructor() {
        super()
        this.state = {
            coaster: {
                title: '',
                description: '',
                inversions: '',
                length: '',
                imageUrl: ''
            },
            show: false
        }
        this.services = new CoasterServices()

        this.handleShow = this.handleShow.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }

    handleClose = () => this.setState({ show: false })
    handleShow = () => this.setState({ show: true })

    handleState = e => {
        const { name, value } = e.target
        this.setState({
            coaster: {
                ...this.state.coaster, [name]: value
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.services.postNewCoaster(this.state.coaster)
            .then(x => window.location.href = "/coasters")
    }

    render() {
        return (
            <div>

                <button className="btn btn-outline-dark" onClick={this.handleShow}>Crear montaña rusa</button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header>
                        <Modal.Title>Nueva Montaña rusa</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label>Título</label>
                                <input type="text" className="form-control" name="title" value={this.state.coaster.title} onChange={this.handleState} />
                            </div>

                            <div className="form-group">
                                <label>Descripción</label>
                                <input type="text" className="form-control" name="description" value={this.state.coaster.description} onChange={this.handleState} />
                            </div>

                            <div className="form-group">
                                <label>Longitud</label>
                                <input type="number" className="form-control" name="length" value={this.state.coaster.length} onChange={this.handleState} />
                            </div>

                            <div className="form-group">
                                <label>Inversiones</label>
                                <input type="number" className="form-control" name="inversions" value={this.state.coaster.inversions} onChange={this.handleState} />
                            </div>

                            <div className="form-group">
                                <label>Imagen</label>
                                <input type="text" className="form-control" onChange={this.handleState} />
                            </div>

                            <button type="submit" className="btn btn-dark">Crear</button>
                        </form>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

export default CoasterForm