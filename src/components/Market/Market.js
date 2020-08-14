import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Item from '../Item/Item';
import './Market.css';


class Market extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: []}
        fetch("http://localhost:8080/market", {method: "GET",
                                                mode: 'cors'})
            .then(res=>res.json())
            .then(data => this.setState({items:data}));
    }

    render() {
        return <div className="market">
            { this.state.items.map((key, value) => <Item key={key}/>) }
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
        </div>
    }
}

export default Market;
