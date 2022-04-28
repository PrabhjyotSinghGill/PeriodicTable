import React, { useState, useEffect } from 'react';
import "./Footer.css";
import {db} from "../firebase";
import Element from "./Element";

function Footer() {
    const[elements1, setElements1] = useState([]);
    const[elements2, setElements2] = useState([]);
    const[elements3, setElements3] = useState([]);
    const[elements4, setElements4] = useState([]);

    useEffect(()=>{
        db.collection('col1').onSnapshot(snapshot => (
          setElements1(snapshot.docs.map(doc => doc.data()))
        ))
      },[]);
    useEffect(()=>{
        db.collection('col2').onSnapshot(snapshot => (
          setElements2(snapshot.docs.map(doc => doc.data()))
        ))
      },[]);
    useEffect(()=>{
        db.collection('col3').onSnapshot(snapshot => (
          setElements3(snapshot.docs.map(doc => doc.data()))
        ))
      },[]);
    useEffect(()=>{
        db.collection('col4').onSnapshot(snapshot => (
          setElements4(snapshot.docs.map(doc => doc.data()))
        ))
      },[]);

    return <div className='footer'>
        <div className='footerCol'>
            {elements1.map(el1 =><Element name={el1.name} elcolor={el1.color}></Element>)}
        </div>
        <div className='footerCol'>
            {elements2.map(el2 =><Element name={el2.name} elcolor={el2.color}></Element>)}
        </div>
        <div className='footerCol'>
            {elements3.map(el3 =><Element name={el3.name} elcolor={el3.color}></Element>)}
        </div>
        <div className='footerCol'>
            {elements4.map(el4 =><Element name={el4.name} elcolor={el4.color}></Element>)}
        </div>
    </div>;
}

export default Footer;