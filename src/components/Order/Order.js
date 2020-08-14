import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Item from '../Item/Item';
import './Order.css';


class Order extends React.Component {
    constructor(props) {
        super(props);
        this.super = {}
    }

    render() {
        return <div className="order">
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
        </div>
    }
}

export default Order;
