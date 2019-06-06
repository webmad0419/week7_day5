import React, { Component } from 'react'
import CoasterServices from '../service/coaster-services'
import CoasterCard from './coaster-card'
import CoasterForm from './coaster-form'

class CoastersList extends Component {

    constructor() {
        super()
        this.state = { coasters: [], loggedInUser: null }
        this.services = new CoasterServices()
    }


    componentDidMount() {
        this.services.getAllCoasters()
            .then(allCoasters => this.setState({ coasters: allCoasters }))
    }


    componentWillReceiveProps(nextProps) {
        this.setState({ loggedInUser: nextProps["userInSession"] });
    }


    render() {
        return (

            <div className="container">

                <h1>Listado de montañas rusas</h1>

                {this.state.loggedInUser ?
                    <CoasterForm refreshCoasters={this.getAllCoasters} /> : null}

                <div className="row coaster-list">

                    {this.state.coasters.map((theCoaster, idx) => <CoasterCard key={idx} {...theCoaster} />)}

                </div>

            </div>
        )
    }
}

export default CoastersList