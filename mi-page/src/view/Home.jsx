import React from 'react';
import Navigator from '../components/Navigator';
import Footer from '../components/Footer';

class Home extends React.Component{
    render(){
        return (
            <div>
                <Navigator />
                <div className="content">
                    <p>我是我是ffgfdf正文</p>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Home;