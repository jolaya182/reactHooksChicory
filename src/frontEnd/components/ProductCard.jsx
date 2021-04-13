/* eslint-disable react/prop-types */
/**
 * title: ProductCard.jsx
 *
 * date: 4/10/2021
 *
 * author: javier olaya
 *
 * description: this component the view of the selected store
 */
import React, { useState, useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import StateContext from './StateContext';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/**
 * displays the retailer name
 * 
 * @param {obj} retailer
 */
const ProductCard = ({ retailer }) => {
  return (
    <Row>
      <Col>{retailer.retailerName}</Col>
    </Row>
  );
};
export default ProductCard;
