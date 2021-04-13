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
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient, { InMemoryCache, gql } from 'apollo-boost';
import { persistCache } from 'apollo-cache-persist';
import { SERVER, initialState } from '../util/constants';

/**
 *  app container component used hold and 
 * pass application functions
 *
 * @return {Html}
 */
const DropDownContainer = () => {
  const [state, dispatch] = useReducer(appReducers, initialState);
  const { blackList, whiteList } = state;

  const cache = new InMemoryCache();
  persistCache({
    cache,
    storage: localStorage
  });
  const client = new ApolloClient({
    uri: SERVER,
    cache: cache
  });

/**
 * updates zipcode and fetches the retailers 
 * for that zipcode
 *
 * @param {event} e
 */
  const submitZipCode = (e) => {
    e.preventDefault();
    dispatch({ type: 'REINITIALIZE', initialState: initialState });
    fetchRequest(state.currentZipCode);
  };

/**
 *Makes fetch request with gql query
 * 
 * @param {event} e 
 * */
  const fetchRequest = async (zipCode) => {
    const newQuery = gql`query retailers {
      retailers(zipCode: "${zipCode}", blacklistedRetailers: [], whitelistedRetailers: []) {
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
    const results = await client.query({ query: newQuery }).then((result) => {
      return result;
    });

    dispatch({ type: 'HYDRATE_RETAILERS', retailers: results.data.retailers });
  };


  //checks for local storeage data and updates accordingly
  useEffect(() => {
    if (localStorage['apollo-cache-persist']) {
      let cacheData = JSON.parse(localStorage['apollo-cache-persist']);
      cache.restore(cacheData);
      const newRetailer = cacheData ? Object.values(cacheData) : [];
      dispatch({ type: 'HYDRATE_RETAILERS', retailers: newRetailer });
      if (localStorage['selectedRetailer']) {
        const sr = JSON.parse(window.localStorage.getItem('selectedRetailer'));
        const selecteR = sr ? sr : { retailerId: '', retailerName: '' };
        dispatch({ type: 'UPDATE_CURRENT_STORE', selectedRetailer: selecteR });
      }
    }
  }, []);

  return (
    <div>
      <ApolloProvider client={client}>
        <StateContext.Provider value={{ state, dispatch }}>
          <ZipCode submitZipCode={submitZipCode}></ZipCode>
          <Radios></Radios>
          <Row>
            <DropDown />
          </Row>
          <Row>
            <Col>
              <List title={'BlackList'} retailers={blackList}></List>
            </Col>

            <Col>
              <List title={'WhiteList'} retailers={whiteList}></List>
            </Col>
          </Row>
        </StateContext.Provider>
      </ApolloProvider>
    </div>
  );
};
export default DropDownContainer;
