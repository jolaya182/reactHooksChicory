/* eslint-disable react/prop-types */
/**
 * title: index.jsx
 *
 * date: 4/10/2021
 *
 * author: javier olaya
 *
 * description: this component handles all the pages to render on the webpage
 */
// main page component create the 404 page and the all other
// pages as exported components
import React from 'react';

import DropDownContainer from '../components/DropDownContainer';

export const Whoops404 = ({ location }) => (
  <div className="whoops404">
    <h1>
      resources not found at
      {` ${location.pathname}`}
    </h1>
  </div>
);

export const chicoryDropDown = ()=><DropDownContainer></DropDownContainer>;
