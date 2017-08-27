import React, { Component } from 'react';
import axios from 'axios';

export default class AddStudent extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentName: '',
            campusId: this.props.campuses[3].id
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeId = this.handleChangeId.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ currentName: e.target.value })
        console.log(this.state.currentName, this.state.campusId)
    }

    handleChangeId(e) {
        this.setState({ campusId: e.target.value })
        console.log(this.state.currentName, this.state.campusId)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addStudent(this.state.currentName, this.state.campusId);
    }

    render() {
        console.log(this.props.addStudent)
        //console.log(this.props.campuses);
        //console.log(this.state.campusId)
        const campusesOptions = this.props.campuses.map((campus,i) => {
            return (<option key={i} value={campus.id}>{campus.name}</option>)
        })
        return(<div>
                <h4>Add a Student</h4>
                <form onSubmit={this.handleSubmit}>
                    <select value={this.state.campusId} onChange={this.handleChangeId}>
                        { campusesOptions }
                    </select>
                    <input value={this.state.currentName} onChange={ this.handleChange } type="text" />
                    <button className='btn btn-info'>Add Student</button>
                </form>
                </div>)
    }

}


