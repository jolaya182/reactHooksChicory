/* eslint-disable react/prop-types */
/**
 * title: DropDown.jsx
 *
 * date: 4/10/2021
 *
 * author: javier olaya
 *
 * description: this component handles all the pages to render on the webpage
 */
import React, { useState, useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import StateContext from './StateContext';

const DropDown = () => {
    const { state, dispatch } = useContext(StateContext);
    const {retailers, isBlackListOn, blackList , whiteList  } = state;
    
    const isInList = (retailers , id)=>{
        return  !retailers.every((retail)=>{
            return retail.retailerId != id
        } );

    }


    const selectStore = (e) => {
        e.preventDefault();
        const { id, name } = e.target;
        dispatch({ type: "UPDATE_CURRENT_STORE", store: {retailerId : id, retailerName: name} });

        //check if it is in either black or white list, if so return
        if(isInList(blackList, id) || isInList(whiteList, id))return;

        if(isBlackListOn){
            dispatch({ type: "UPDATE_BLACKLIST", retailer: {retailerId : id, retailerName: name} });
        }else{
            dispatch({ type: "UPDATE_WHITELIST", retailer: {retailerId : id, retailerName: name} });

        }

    }

    useEffect(async () => {

    }, [])

    return (<div>
        <DropdownButton variant="success" title="Select Store">
            {retailers && retailers.map((store) => {
                return <Dropdown.Item onClick={selectStore} id={`${store.id}`} key={`drop-down-${store.id}`}
                    name={store.name}
                >
                    {store.name}
                </Dropdown.Item>
            })}
        </DropdownButton >

        

    </div>)
}
export default DropDown;

// { state.retailers && state.retailers.map((store) => {
//     return <div key={`try-drop-down-${store.id}`}>
//         {store.name}
//     </div>
// })}