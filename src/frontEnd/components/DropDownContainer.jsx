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
import React, { useReducer, useEffect } from 'react';
import appReducers from '../reducers';
import 'bootstrap/dist/css/bootstrap.css';
import DropDown from './DropDown';
import StateContext from './StateContext';
import ZipCode from './ZipCode';
import Radios from './Radios';
import List from './List';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SERVER, initialState } from '../util/constants';

const DropDownContainer = () => {

  const [state, dispatch] = useReducer(appReducers, initialState);
  const { blackList, whiteList } = state;

  const submitZipCode = (e) => {
    e.preventDefault();
    dispatch({type: "REINITIALIZE", initialState:initialState})
    fetchRequest(state.currentZipCode);
  }
  const fetchRequest = async (zipCode) => {
    const filter = ["amazon", "amazonfresh"];
    const res = "\"" + filter.join('", "') + "\"";
    const search = '';
    const query = `query retailers {
            retailers(zipCode: ${zipCode}, blacklistedRetailers: [${res}], whitelistedRetailers: []) {
            id
            slug
            shopOnLogoUrl
            logoUrl
            name
            requiresLocation
            homepage
            location {
              storeName
              address
              city
              externalId
              zipCode
              state
              distance
            }
            }
            }`;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query })
    }

    const result = [
      {
        "id": "15",
        "name": "Walmart Grocery"
      },
      {
        "id": "4",
        "name": "Amazon Fresh"
      },
      {
        "id": "3",
        "name": "Instacart"
      },
      {
        "id": "44",
        "name": "Target (pick up and same day delivery)"
      },
      {
        "id": "12",
        "name": "Stop and Shop (Ahold)"
      },
      {
        "id": "10",
        "name": "ShopRite (Wakefern)"
      },
      {
        "id": "14",
        "name": "Amazon"
      },
      {
        "id": "50",
        "name": "Target (standard shipping)"
      },
      {
        "id": "16",
        "name": "Foodtown (Freshop)"
      },
      {
        "id": "43",
        "name": "Walmart"
      }
    ]


    //const  results = await fetch(SERVER, options)
    //     .then((response) => { return response.json() })
    //     .then((json) => { return json.data.retailers });
    dispatch({ type: 'HYDRATE_RETAILERS', retailers: result });

  }

  useEffect(() => {

  }, [])

  return (<div>
    <StateContext.Provider value={{ state, dispatch }}>
      <ZipCode submitZipCode={submitZipCode} ></ZipCode>
      <Radios></Radios>
      <DropDown />

      <Row><Col>
        <List
          title={"BlackList"}
          retailers={blackList}
        ></List>
      </Col>

        <Col>
          <List
            title={"WhiteList"}
            retailers={whiteList}
          ></List>
        </Col>
      </Row>
    </StateContext.Provider>
  </div>)
}
export default DropDownContainer;