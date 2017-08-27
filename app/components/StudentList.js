import React, { Component } from 'react';
import AddStudent from './AddStudent'; 

export default class StudentList extends Component {
    constructor(props){
        super(props)
    } 
    render() {
        const students = this.props.students.map((student, i) => {
            return (<li key={i} >{ student.name }</li>);
        })
        return (<div className="row">
                <div className="col-sm-8">
                    <h4>Students</h4>
                    <ul>
                        { students }
                    </ul>
                </div>
                <div className="col-sm-4">
                    <AddStudent campuses={ this.props.campuses }
                                addStudent={ this.props.addStudent }  />
                </div>
             </div>)
    }
 }