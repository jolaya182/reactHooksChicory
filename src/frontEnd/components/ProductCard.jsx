/* eslint-disable react/prop-types */
/**
 * title: DropDownContainer.jsx
 *
 * date: 4/10/2021
 *
 * author: javier olaya
 *
 * description: this component the view of the selected store
 */
 import React, {useState, useEffect,  useContext} from 'react';
 import 'bootstrap/dist/css/bootstrap.css';
 import Dropdown from 'react-bootstrap/Dropdown'
 import StateContext from './StateContext';
 
 
 const DropDownContainer = () => {
    const {state, dispatch}= useContext(StateContext);
    // make a fetch request to get the information of the store
    const {storeSelected} = state; 


     return(<div>
        productCard
     </div>)
 }
 export default DropDownContainer;