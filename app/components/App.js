import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import StudentList from './StudentList';
import CampusList from './CampusList';
import SingleCampus from './SingleCampus';


export default class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            users: [],
            campuses: [],
        }

        this.addStudent = this.addStudent.bind(this);

    }

    componentDidMount() {
        axios.get('/api/student')
        .then(res => res.data)
        .then(users => this.setState({ users: users }))

        axios.get('/api/campus')
        .then(res => res.data)
        .then(campuses => this.setState({ campuses: campuses }))
    }


    addStudent(name, campusId){
        axios.post('/api/student', { 'name': name, 'campusId': campusId })
        .then(res => res.data)
        .then(newStudent => {
            this.setState({ users: this.state.users.concat(newStudent) })
            //console.log(this.state.students)
        })
        .catch(console.error);
    }

    render() {
        if(this.state.users.length && this.state.campuses.length){
            return (<Router>
                <div>
                    <Navbar />
                    <div className="container">
                        <Switch>
                            <Route exact path="/" render={()=> <CampusList campuses={this.state.campuses} />} />
                            <Route exact path="/campus" render={()=> <CampusList campuses={this.state.campuses} />} />
                            <Route path="/campus/:campusId" component={SingleCampus} />
                            <Route exact path="/student" render={()=> 
                            <StudentList students={this.state.users} 
                                         campuses={this.state.campuses}
                                         addStudent={this.addStudent} />} />
                        </Switch>    
                    </div>
                </div>
                </Router>)
        } else {
            return(<div>Loading...</div>)
        }
    }
}

