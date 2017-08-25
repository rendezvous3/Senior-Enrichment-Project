import React, { Component } from 'react';

export default class StudentList extends Component {
    constructor(props){
        super(props)
    } 
    render() {
        const students = this.props.students.map((student, i) => {
            return (<li key={i} >{ student.name }</li>);
        })
        return (<div>
            <h4>Students</h4>
            <ul>
                { students }
            </ul>
        </div>)
    }
 }