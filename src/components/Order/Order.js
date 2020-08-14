import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import './Order.css';
import 'bootstrap/dist/css/bootstrap.css';


class Order extends React.Component {
    constructor(props) {
        super(props);
        this.super = {}
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
                    <tr>
                        <td>可乐1</td>
                        <td>1</td>
                        <td>2</td>
                        <td>瓶</td>
                        <td><button type="button" class="btn btn-secondary">删除</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    }
}

export default Order;
