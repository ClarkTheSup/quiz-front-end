import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Item from '../Item/Item';
import './Market.css';


class Market extends React.Component {
    constructor(props) {
        super(props);
        this.super = {}
    }

    render() {
        return <div className="market">
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
        </div>
    }
}

export default Market;
