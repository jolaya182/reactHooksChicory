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
import React, {useState, useEffect,  useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import StateContext from './StateContext';
import {SERVER, query} from '../util/constants';

const DropDown = () => {
    const {state, dispatch}= useContext(StateContext);
    const fetchRequest = () =>{
        const options = {   
            method: 'POST',
            headers:{'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query})
        }
        return fetch(SERVER, options)
        .then((response)=>{return response.json()})
        .then((json)=>{ return json.data.retailers });
    }

    const selectStore = (e)=>{
        e.preventDefault();
        const name = e.target.innerHTML;
        const {id} = e.target;
        dispatch({type:"UPDATE_CURRENT_STORE", store:id});
    }

    useEffect(async()=>{
        const result = await fetchRequest();
        dispatch({type:'HYDRATE_RETAILERS', retailers:result});
        

    },[])
    
    return(<div>
        <DropdownButton variant="success" title="Select Store">
                { state.retailers && state.retailers.map((store)=>{
                    return <Dropdown.Item onClick={selectStore} id={`${store.id}`}  key={`drop-down-${store.id}`}
                    value={store.id}
                    >
                        {store.name}
                        </Dropdown.Item>
                })}
            </DropdownButton >
    </div>)
}
export default DropDown;