import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import image from '../../images/1.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import './Item.css';


class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            order_id: 0
        }
    }

    addToOrder = (event)=>{
        event.preventDefault();
        let date = new Date();
        let order = {
            item_id: this.props.item.id,
            order_time: date,
            order_name: 'order1',
            id: this.state.order_id
        }
        this.setState({order_id: this.state.order_id+1});
        let header = {method: "POST",
                      body: JSON.stringify(order),
                      headers: {
                        'content-type': 'application/json'
                      }}
        fetch("http://localhost:8080/order", header);
    }

    render() {
        return <div className="item">
            <img src={image} width="300px" height="350px"/><br/>
            <span>{this.props.item.name}</span><br/>
            <span>单价:{this.props.item.price}元/{this.props.item.measurement}</span>
            <a href="#" onClick={this.addToOrder}>
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"/>
                <path fill-rule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"/>
                <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                </svg>
            </a>
        </div>
    }
}

export default Item;
