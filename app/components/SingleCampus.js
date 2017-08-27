import React, { Component } from 'react';
import axios from 'axios';


export default class SingleCampus extends Component {
    constructor(props){
        super(props)
        this.state = {
            campus: {},
            students: []
        }
    }

    componentDidMount() {
        const campusId = this.props.match.params.campusId;
        Promise.all([
        axios.get(`api/campus/${campusId}`)
        .then(res => res.data)
        .then(campus => campus),
        axios.get(`api/campus/${campusId}/students`)
        .then(res => res.data)
        .then(students => students)])
        .then(result => {
            this.setState({
                campus: result[0],
                students: result[1]
            })
        })

    }

    render() {
        return(
        <div>
         <h4>{this.state.campus.name}</h4>
         <hr/>
         <ul>
             { this.state.students.map((student, i)=><p key={i}>{ student.name }</p>) }
         </ul>
        </div>);
    }
} 