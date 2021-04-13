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
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import StateContext from './StateContext';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/**
 * returns a reactboot strap dropdown 
 *
 * @return {Html}
 */
const DropDown = () => {
  const { state, dispatch } = useContext(StateContext);
  const {
    retailers,
    isBlackListOn,
    blackList,
    whiteList,
    selectedRetailer
  } = state;

  const isInList = (retailers, id) => {
    return !retailers.every((retail) => {
      return retail.retailerId != id;
    });
  };

/**
 *  updates the  current selected trailer 
 * 
 * @param {event} e
 */
  const selectStore = (e) => {
    e.preventDefault();
    const { id, name } = e.target;
    const newRetailer = { retailerId: id, retailerName: name };

    //check if it is in either black or white list, if so return
    if (isInList(blackList, id) || isInList(whiteList, id)) return;

    if (isBlackListOn) {
      dispatch({
        type: 'UPDATE_BLACKLIST',
        retailer: newRetailer
      });
    } else {
      dispatch({
        type: 'UPDATE_WHITELIST',
        retailer: newRetailer
      });
    }
    const sr = JSON.stringify(newRetailer);
    window.localStorage.setItem('selectedRetailer', sr);
    dispatch({
      type: 'UPDATE_CURRENT_STORE',
      selectedRetailer: newRetailer
    });
  };

  return (
    <Col>
      <Row>
        <Col>Selected Retailer: {selectedRetailer.retailerName}</Col>
      </Row>

      <Row>
        <Col>
          <DropdownButton variant="success" title="Select Store">
            {retailers &&
              retailers.map((store) => {
                return (
                  <Dropdown.Item
                    onClick={selectStore}
                    id={`${store.id}`}
                    key={`drop-down-${store.id}`}
                    name={store.name}
                  >
                    {store.name}
                  </Dropdown.Item>
                );
              })}
          </DropdownButton>
        </Col>
      </Row>
    </Col>
  );
};
export default DropDown;
