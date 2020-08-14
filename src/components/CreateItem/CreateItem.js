import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import './CreateItem.css';
import 'bootstrap/dist/css/bootstrap.css';


class CreateItem extends React.Component {
    constructor(props) {
        super(props);
        this.super = {}
    }

    render() {
        return <div className="create-item">
            <form>
                <h1>添加商品</h1>
                <label>名称：</label><br/>
                <input name="name"/><br/>
                <label>价格：</label><br/>
                <input name="price"/><br/>
                <label>单位：</label><br/>
                <input name="measurement"/><br/>
                <label>图片：</label><br/>
                <input name="image"/><br/>
                <button type="submit" class="btn btn-primary">提交</button>
            </form>
        </div>
    }
}

export default CreateItem;
