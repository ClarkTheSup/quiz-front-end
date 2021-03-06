import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import './CreateItem.css';
import 'bootstrap/dist/css/bootstrap.css';


class CreateItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            price: null,
            measurement: null,
            image: null
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let item = {
            name: this.state.name,
            price: this.state.price,
            measurement: this.state.measurement,
            image: this.state.image
        }
        let header = {method: "POST",
                      body: JSON.stringify(item),
                      headers: {
                        'content-type': 'application/json'
                      }}
        fetch("http://localhost:8080/market/item", header);
        
        
    }

    render() {
        return <div className="create-item">
            <form>
                <h1>添加商品</h1>
                <label>名称：</label><br/>
                <input name="name" onChange={(event)=>this.setState({name: event.target.value})}/><br/>
                <label>价格：</label><br/>
                <input name="price" onChange={(event)=>this.setState({price: event.target.value})}/><br/>
                <label>单位：</label><br/>
                <input name="measurement" onChange={(event)=>this.setState({measurement: event.target.value})}/><br/>
                <label>图片：</label><br/>
                <input name="image" onChange={(event)=>this.setState({image: event.target.value})}/><br/>
                <button type="button" class="btn btn-primary" onClick={this.handleSubmit}>提交</button>
            </form>
        </div>
    }
}

export default CreateItem;
