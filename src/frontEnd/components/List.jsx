/* eslint-disable react/prop-types */
/**
 * title: List.jsx
 *
 * date: 4/10/2021
 *
 * author: javier olaya
 *
 * description: this component the view of the selected store
 */
import React, { useState, useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ProductCard from './ProductCard';
import StateContext from './StateContext';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const List = ({ title, retailers }) => {
    const { state, dispatch } = useContext(StateContext);
    useEffect(() => {
    }, []);

    return (<Col>
        <Row>
            <h3>{title}</h3>
        </Row>
        {retailers && retailers.map((retailer) => {
            return (<ProductCard key={"ProductCard-" + retailer.retailerId} retailer={retailer}></ProductCard>)
        })
        }
    </Col>)
}
export default List;