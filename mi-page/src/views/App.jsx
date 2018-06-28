import React from "react";
// import { Navigator, Footer } from '../components';
import Navigator from '../components/Navigator';
import Footer from '../components/Footer';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import SecPage from './SecPage';


export default class App extends React.Component {
    render() {
        return(
            <div>
               <Navigator />
               <Router>
                    <div>
                    <ul>
                        <li>
                        <Link to="/">Home</Link>
                        </li>
                        <li>
                        <Link to="/SecPage">SecPage</Link>
                        </li>
                    </ul>

                    <hr />

                    <Route exact path="/" component={Home} />
                    <Route path="/SecPage" component={SecPage} />
                    </div>
                </Router>
               <Footer>
                    <span>sdfsd</span>
                    <span>sdfadse</span>
                    <span>hbrgr</span>
                </Footer>
            </div>
        )
    }
}