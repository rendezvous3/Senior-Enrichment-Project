import React from 'react';


const Footer = (props) => {
    const campuses = props.campuses.map((campus, i) => {
        return (<li key={i} >{ campus.name }</li>);
    })
    return (<div>
            <h4>Capmuses</h4>
            <ul>
                { campuses }
            </ul>
            
    </div>)
}


export default Footer 