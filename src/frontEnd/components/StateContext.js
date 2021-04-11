/**
 * title: StateContext.js
 *
 * date: 4/10/2021
 *
 * author: javier olaya
 *
 * description: this component handle the context data for the application
 * */
import React from 'react';

const StateContext = React.createContext({
    state:{},
    dispatch: ()=>{}
});

export default StateContext ;
 