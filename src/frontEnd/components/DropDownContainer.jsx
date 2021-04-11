/* eslint-disable react/prop-types */
/**
 * title: DropDownContainer.jsx
 *
 * date: 4/10/2021
 *
 * author: javier olaya
 *
 * description: this component handles the root changes for the application
 */
import React, { useReducer} from 'react';
import appReducers from '../reducers';
import 'bootstrap/dist/css/bootstrap.css';
import ProductCard from './ProductCard';
import DropDown from './DropDown';
import StateContext from './StateContext';


const DropDownContainer = () => {
    const [state, dispatch] = useReducer(appReducers, {});
    
    return(<div>
        <StateContext.Provider value={{state, dispatch}}>
        <DropDown />
        <ProductCard></ProductCard>
        </StateContext.Provider>
    </div>)
}
export default DropDownContainer;