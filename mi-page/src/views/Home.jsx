import React from 'react';
// import { Navigator, Footer } from '../components';
import Navigator from '../components/Navigator';
import Footer from '../components/Footer';

export default class Home extends React.Component {
    render() {
        console.log(this.props.children)
        return (
            <div>
                <Navigator />
                <div className="box-all">
                    <p>我是正文</p>
                </div>
                <Footer />
            </div>
        )
    }
}