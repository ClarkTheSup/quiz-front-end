import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './Footer.css';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.super = {}
    }

    render() {
        return <div id="footer">
            <span>TW Mall 2018 Created By ForCheng</span>
        </div>
    }
}

export default Footer;