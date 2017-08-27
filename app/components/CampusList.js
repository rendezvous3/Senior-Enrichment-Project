import React from 'react';


const Footer = (props) => {
    const campuses = props.campuses.map((campus, i) => {
        return (<li key={i} >{ campus.name }</li>);
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