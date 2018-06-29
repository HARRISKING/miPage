import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from '../views/Home';
import SecPage from '../views/SecPage';


export default class Navigator extends React.Component {
    render() {
        return (
            <div className="navAll">
                <div className="navLittle">
                    <div>
                        <ul>
                            <li><a href="https://www.mi.com/index.html">小米商城</a></li>
                            <li><a href="https://www.miui.com/">MIUI</a></li>
                            <li><a href="https://iot.mi.com/index.html">loT</a></li>
                            <li><a href="https://i.mi.com/#/">云服务</a></li>
                            <li><a href="https://jr.mi.com/index.html?from=micom&t=1530256405200">金融</a></li>
                            <li><a href="https://youpin.mi.com/">有品</a></li>
                            <li><a href="https://xiaoai.mi.com/">小爱开放平台</a></li>
                            <li><a href="https://b.mi.com/?client_id=180100031058&masid=17409.0358#/">政企服务</a></li>
                            <li><a href="">select Region</a></li>
                        </ul>
                        <ul>
                            <li><a href="">登录</a></li>
                            <li><a href="">注册</a></li>
                            <li><a href="">消息通知</a></li>
                            <li className="shopCart">
                                {/* <img src="" alt="../../resource/img/shopCart.png"/> */}
                                <a href="">购物车</a>
                            </li>
                        </ul>
                    </div>
                </div>

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

                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/SecPage" component={SecPage} />
                        </Switch>
                    </div>
                </Router>
            </div>
            
        )
    }
}