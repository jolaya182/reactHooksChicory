/* eslint-disable react/prop-types */
/**
 * title: Radios.jsx
 *
 * date: 4/10/2021
 *
 * author: javier olaya
 *
 * description: this component the view of the selected store
 */
import React, { useState, useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import StateContext from './StateContext';


const Radios = () => {
    const { state, dispatch } = useContext(StateContext);
    const {isBlackListOn, isWhiteListOn } = state;

    useEffect(() => {
    }, []);

    const handleRadio = (e)=>{
        const {value} = e.target;
        if(value === 'BlackList'){
            dispatch({type:  "TOGGLE_BLACKLIST", isOn: true})
            dispatch({type:  "TOGGLE_WHITELIST", isOn: false})

        }else{
            dispatch({type:  "TOGGLE_WHITELIST", isOn: true})
            dispatch({type:  "TOGGLE_BLACKLIST", isOn: false})
        }

    }
    return (
        <Form >
        <Form.Check onChange={handleRadio} value={"BlackList"} name='list' inline label={"BlackList"} id={"BlackList"} type={"radio"} checked={isBlackListOn}/>
        <Form.Check onChange={handleRadio} value={"WhiteList"} name='list' inline label={"WhiteList"} id={"WhiteList"} type={"radio"} checked={isWhiteListOn}/>
        </Form>
      )
}
export default Radios;