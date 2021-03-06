import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import './Order.css';
import 'bootstrap/dist/css/bootstrap.css';


class Order extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items:[]
        }
        fetch("http://localhost:8080/orders", {method: "GET"})
            .then(res=>res.json())
            .then(data => this.setState({items:data}))
            .then(()=>console.log(this.state.items));
    }

    deleteOrderItem = (event) => {
        fetch(`http://localhost:8080/orderDelete/${event.target.item_id}`, {method: "POST"});
    }

    render() {
        return <div className="order">
            <table>
                <thead>
                    <tr>
                        <th>名字</th>
                        <th>单价</th>
                        <th>数量</th>
                        <th>单位</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    this.state.items.map((item) =>
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>1</td>
                            <td>{item.measurement}</td>
                            <td><button type="button" class="btn btn-secondary" item_id={item.id} onClick={this.deleteOrderItem}>删除</button></td>
                        </tr>
                    )
                    }
                </tbody>
            </table>
        </div>
    }
}

export default Order;
