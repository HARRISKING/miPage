import React from 'react';
// import { Navigator, Footer } from '../components';
import Navigator from '../components/Navigator';
import Footer from '../components/Footer';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Navigator />
                <div className="box-all">
                    <p>我是正文</p>
                </div>
                <Footer>
                    <span>sdfsd</span>
                    <span>sdfadse</span>
                    <span>hbrgr</span>
                </Footer>
            </div>
        )
    }
}