import React from 'react';
import Navigator from '../components/Navigator';
import Footer from '../components/Footer';

class Home extends React.Component{
    render(){
        return (
            <div>
                <Navigator />
                <div>
                    <p>我是正文</p>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Home;