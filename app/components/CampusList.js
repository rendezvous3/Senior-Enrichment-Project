import React from 'react';
import { Link } from 'react-router-dom';

const Footer = (props) => {
    const campuses = props.campuses.map((campus, i) => {
        return (<Link key={i} to={`/campus/${campus.id}`}>
                    <li>{ campus.name }</li>
                </Link>);
    })
    return (<div className="row">
            <div className="col-sm-8">
                <h4>Campuses</h4>
                <ul>
                    { campuses }
                </ul>
            </div>
            <div className="col-sm-4">
                <h4>Add A Campus</h4>
            </div>
            
    </div>)
}


export default Footer 