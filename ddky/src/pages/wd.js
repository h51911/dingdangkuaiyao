import React,{Component} from 'react';
import '../css/wd.css';



class Wd extends Component{
        constructor(){
            super();
            this.state = {
                //我的订单
                orderFrom:[
                    {
                        imgs:"image/fukuan.jpg",
                        text:"待付款",
                    }, {
                        imgs:"image/daifahuo.jpg",
                        text:"待发货",
                    }, {
                        imgs:"image/daishouhuo.jpg",
                        text:"待收货",
                    }, {
                        imgs:"image/daipingjia.jpg",
                        text:"待评价",
                    }
                ],
                //工具
                tool:[
                    {
                        imgs:"image/dizhiguanli.jpg",
                        text:"地址管理",
                    }, {
                        imgs:"image/youhuijuan.jpg",
                        text:"优惠券",
                    }, {
                        imgs:"image/wenzhenjilu.jpg",
                        text:"问诊记录",
                    }, {
                        imgs:"image/wenzhangshoucang.jpg",
                        text:"文章收藏",
                    }, {
                        imgs:"image/kehufuwu.jpg",
                        text:"客户服务",
                    }, {
                        imgs:"image/mianliul.jpg",
                        text:"免流量",
                    }, {
                        imgs:"image/chaihongbao.jpg",
                        text:"拆红包",
                    }
            ]

            }
        }

      render(){
        let {orderFrom,tool} = this.state;//解构
        return (
            <>
                {/* 我的 */}
                <div className="w_app">

                    {/* 头部 */}
                    <header className="header">
                        <div className="headcont">
                            <img src="image/regLogin.png" className="imgs"/>
                            <p className="nologin">
                                <span>注册</span>
                                /
                                <span>登录</span>
                            </p>
                            <div className="membercenterBox">
                                <p className="yaoshi">
                                    药师咨询
                                </p>
                                <img src="image/yonhu.png" className="legImg"/>
                            </div>

                        </div>
                        <div className="huiyuan">
                                <img src="image/logins.png" className="logImg"/>
                        </div>
                    </header>

                    {/* 内容 */}
                    <div className="mains">
                        <div className="func_container">
                            <div className="func_title">
                                <span className="tit">我的订单</span>
                                <span className="tit2">
                                    查看全部订单
                                    <img src="image/yonhu.png" className="qunImg"/>
                                </span>
        
                            </div>

                            <ul className="func_list">
                                {
                                    orderFrom.map(function(item,idx){
                                        return(
                                            <li className="fl" key={idx}>
                                            <p className="pimg">
                                                <img src={item.imgs} className="huoimg"/>
                                            </p>
                                            <p className="daifukuan">
                                                {item.text}
                                            </p>
                                        </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>

                        <div className="func_container">
                            <div className="func_title">
                                <span className="tit">
                                    常用工具
                                </span>
                            </div>

                            <ul className="func_list">
                                {
                                    tool.map(function(item,idx){
                                        return(
                                            <li className="fl" key={idx}>
                                            <p className="pimg">
                                                <img src={item.imgs} className="huoimg"/>
                                            </p>
                                            <p className="daifukuan">
                                                {item.text}
                                            </p>
                                        </li>
                                        )
                                    })
                                }
                               
                            </ul>  

                        </div>
                    </div>

                </div>
            </>
        )
    }
}



export default Wd;