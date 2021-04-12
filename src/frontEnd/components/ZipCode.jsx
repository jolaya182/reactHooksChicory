/* eslint-disable react/prop-types */
/**
 * title: ZipCode.jsx
 *
 * date: 4/10/2021
 *
 * author: javier olaya
 *
 * description: this component the view of the selected store
 */
 import React, {useState, useEffect,  useContext} from 'react';
 import 'bootstrap/dist/css/bootstrap.css';
 import StateContext from './StateContext';
 import InputGroup from 'react-bootstrap/InputGroup';
 import FormControl from 'react-bootstrap/FormControl'
 import Button from 'react-bootstrap/Button';
 
 const ZipCode = ({submitZipCode}) => {
    const {state, dispatch} = useContext(StateContext);
     const {selectedStore, currentZipCode} = state; 
    useEffect(()=>{
    },[]);

    const handleZipCode = (e)=>{
        e.preventDefault();
        const {value} = e.target;
        dispatch({type:"UPDATE_CURRENTZIPCODE", currentZipCode: value})
        
    }

     return(<div>
         <InputGroup>
            <InputGroup.Prepend>
                <Button onClick={submitZipCode}>
                    Submit
                </Button>
            </InputGroup.Prepend>
            <FormControl placeholder={currentZipCode ? currentZipCode : "Enter your zip code"} onChange={handleZipCode}></FormControl>
         </InputGroup>
     </div>)
 }
 export default ZipCode;