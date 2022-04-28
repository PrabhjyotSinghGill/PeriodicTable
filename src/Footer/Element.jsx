import React from 'react';
import "./Element.css";

function Element({name,elcolor}) {
    return< div className='element'>
        <span className='elementColor' style={{backgroundColor:elcolor}}></span>
        <div className='footerElementName'>{name}</div>
    </div>;
}

export default Element;