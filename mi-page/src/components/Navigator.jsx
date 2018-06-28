import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../views/Home'

export default class Navigator extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    sdfsd
                    {/* <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/redmi">红米</Link>
                        </li>
                    </ul>

                    <Route path="/" component={ Home } /> */}
                </div>
            </Router>

        )
    }
}