import React, { Component } from 'react';
import '../wd.css';



class Wd extends Component {
    constructor() {
        super();
        this.setState = {
            //我的订单
            orderFrom: [
                {
                    imgs: "image/fukuan.jpg",
                    text: "待付款",
                }, {
                    imgs: "image/fukuan.jpg",
                    text: "待发货",
                }, {
                    imgs: "image/fukuan.jpg",
                    text: "待收货",
                }, {
                    imgs: "image/fukuan.jpg",
                    text: "待评价",
                }
            ],
            //工具
            tool: [
                {
                    imgs: "image/fukuan.jpg",
                    text: "地址管理",
                }, {
                    imgs: "image/fukuan.jpg",
                    text: "地址管理",
                }, {
                    imgs: "image/fukuan.jpg",
                    text: "地址管理",
                }, {
                    imgs: "image/fukuan.jpg",
                    text: "地址管理",
                }, {
                    imgs: "image/fukuan.jpg",
                    text: "地址管理",
                }, {
                    imgs: "image/fukuan.jpg",
                    text: "地址管理",
                }, {
                    imgs: "image/fukuan.jpg",
                    text: "地址管理",
                }
            ]

        }
    }

    render() {
        return (
            <>
                {/* 我的 */}
                <div className="w_app">

                    {/* 头部 */}
                    <header className="header">
                        <div className="headcont">
                            <img src="image/regLogin.png" className="imgs" />
                            <p className="nologin">
                                <span>注册</span>
                                /
                                <span>登录</span>
                            </p>
                            <div className="membercenterBox">
                                <p className="yaoshi">
                                    药师咨询
                                </p>
                                <img src="image/yonhu.png" className="legImg" />
                            </div>

                        </div>
                        <div className="huiyuan">
                            <img src="image/logins.png" className="logImg" />
                        </div>
                    </header>

                    {/* 内容 */}
                    <div className="mains">
                        <div className="func_container">
                            <div className="func_title">
                                <span className="tit">我的订单</span>
                                <span className="tit2">
                                    查看全部订单
                                    <img src="image/yonhu.png" className="qunImg" />
                                </span>

                            </div>

                            <ul className="func_list">
                                <li className="fl">
                                    <p className="pimg">
                                        <img src="image/daifahuo.jpg" className="huoimg" />
                                    </p>
                                    <p className="daifukuan">
                                        待付款
                                    </p>
                                </li>
                                <li className="fl">
                                    <p className="pimg">
                                        <img src="image/daifahuo.jpg" className="huoimg" />
                                    </p>
                                    <p className="daifukuan">
                                        待付款
                                    </p>
                                </li>
                                <li className="fl">
                                    <p className="pimg">
                                        <img src="image/daifahuo.jpg" className="huoimg" />
                                    </p>
                                    <p className="daifukuan">
                                        待付款
                                    </p>
                                </li>
                                <li className="fl">
                                    <p className="pimg">
                                        <img src="image/daifahuo.jpg" className="huoimg" />
                                    </p>
                                    <p className="daifukuan">
                                        待付款
                                    </p>
                                </li>

                            </ul>
                        </div>

                        <div className="func_container">
                            <div className="func_title">
                                <span className="tit">
                                    常用工具
                                </span>
                            </div>

                            <ul className="func_list">
                                <li className="fl">
                                    <p className="pimg">
                                        <img src="image/dizhiguanli.jpg" className="huoimg" />
                                    </p>
                                    <p className="daifukuan">
                                        待付款
                                    </p>
                                </li>
                                <li className="fl">
                                    <p className="pimg">
                                        <img src="image/dizhiguanli.jpg" className="huoimg" />
                                    </p>
                                    <p className="daifukuan">
                                        待付款
                                    </p>
                                </li>
                                <li className="fl">
                                    <p className="pimg">
                                        <img src="image/dizhiguanli.jpg" className="huoimg" />
                                    </p>
                                    <p className="daifukuan">
                                        待付款
                                    </p>
                                </li>
                                <li className="fl">
                                    <p className="pimg">
                                        <img src="image/dizhiguanli.jpg" className="huoimg" />
                                    </p>
                                    <p className="daifukuan">
                                        待付款
                                    </p>
                                </li>

                            </ul>

                        </div>
                    </div>

                </div>
            </>
        )
    }
}



export default Wd;