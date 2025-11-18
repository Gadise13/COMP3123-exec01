import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

class PersonList extends Component {

    // Define state
    state = {
        persons: []
    };

    // Component Lifecycle Callback
    componentDidMount() {
        axios.get(`https://randomuser.me/api/?results=10`)
            .then(res => {
                console.log(res.data);
                const persons = res.data.results;
                this.setState({ persons });
            })
            .catch(err => { console.log(err); });
    }

    render() {
        return (
            <div className="container mt-4">
                <h2>User List (Axios Example)</h2>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Country</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.persons.map((p, index) => (
                            <tr key={index}>
                                <td><img src={p.picture.thumbnail} alt="" /></td>
                                <td>{p.name.first} {p.name.last}</td>
                                <td>{p.email}</td>
                                <td>{p.location.country}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default PersonList;
