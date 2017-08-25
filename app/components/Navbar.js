import React, { Component } from 'react';


export default class Navbar extends Component {
    render() {
    return(<nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Margaret Hamilton Interplanetary Academy of JavaScript</a>
                        </div>
                        <ul className="nav navbar-nav">
                        <li className="active"><a href="#">Home</a></li>
                        <li><a href="#">Students</a></li>
                    </ul>
                </div>
            </nav>)
    }
}
