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
    const [currentStore, setCurrentStore] = useState({});
    const {selectedStore} = state; 

    const getSelectedStore = ()=>{
        const {retailers} = state;
        let foundStore = false;
        if(retailers)foundStore = retailers.find((store)=>store.id === selectedStore);
        setCurrentStore(foundStore)
    }

    useEffect(()=>{
        getSelectedStore();
    },[state]);

     return(<div>
        
        {currentStore && <div>{currentStore.name}</div>}
     </div>)
 }
 export default DropDownContainer;