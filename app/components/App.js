import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import StudentList from './StudentList';
import CampusList from './CampusList';


export default class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            users: [],
            campuses: [],
        }
    }

    componentDidMount() {
        axios.get('/api/users')
        .then(res => res.data)
        .then(users => this.setState({ users: users }))

        axios.get('/api/campus')
        .then(res => res.data)
        .then(campuses => this.setState({ campuses: campuses }))
    }



    render() {
        return (<Router>
                <div>
                    <Navbar />
                    <div className="container">
                        <Switch>
                            <Route exact path="/" render={()=> <CampusList campuses={this.state.campuses} />} />
                            <Route exact path="/campus" render={()=> <CampusList campuses={this.state.campuses} />} />
                            <Route exact path="/student" render={()=> <StudentList students={this.state.users} />} />
                        </Switch>    
                    </div>
                </div>
                </Router>)
    }
}

