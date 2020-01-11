import React,{Component} from 'react';
import {withRouter} from "react-router-dom";//获取高阶组件
import '../css/wd.css';
import {connect} from 'react-redux'
// import axios from "axios";//引入axios
// import Qs from "qs";//引入4位随机数  只会调用一次

class Wd extends Component{
        constructor(){
            super();
            this.state = {
                cookits : "",//cookie
                mySpan:"none",//span节点,
                exit:"",
                nobl:"",
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

            this.btns = this.btns.bind(this);//修正bts的this指向
        };
    
    //点击进行跳转
    btns(){
        localStorage.setItem('tologin','/wd');
        this.props.history.push("./login")
    };
      
    //获取cookie
    getCookie = (key)=>{
        //传键名，返回对应键值 
        var str = document.cookie;
        var arr = str.split('; ');
        for (var ele of arr) {
            var arr2 = ele.split('=');
            if (key == arr2[0]) {
                return arr2[1];
            }
        }
    }

    componentDidMount(){
         this.setState({
                mySpan:"block",
                nobl:"none"

       })
        let token  = localStorage.getItem("authorization");
        if(token){
            //获取cookie
            let getCookieWd = this.getCookie("names");
            if(getCookieWd){
                this.setState({
                    cookits:getCookieWd,
                    mySpan:"none",
                    nobl:"block"
                });
            }else{
                this.setState({
                    exit:"btnspan",
                    nobl:"none",
                })
            }
        }   
    }
       //设置cookie
    setCookie = (key, val, iDay)=>{
        //key键名,val键值,iDay失效时间
        var str = key + '=' + val + ';path=/';
        if (iDay) {
            var date = new Date();
            date.setDate(date.getDate() + iDay);
            str += ';expires=' + date;//如果有这个参数就设置失效时间
        }
        document.cookie = str;
    }
   
    removeCookie = (key)=>{
        this.setCookie(key, '', -1);
    }
   //点击
   btnspan=()=>{
        let action = {
            type: 'dlzt',
            payload: ''
        }
        this.props.dispatch(action);

       this.setState({
                mySpan:"block",
                nobl:"none",
cookits:null
       })
        this.removeCookie("names");
        
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
                                    <em className="spanto" 
                                    onClick={this.btns} 
                                    style={{display:this.state.mySpan}}>
                                        <span>注册</span>
                                        /
                                        <span>登录</span>
                                    </em>
                                    <span >
                                        {this.state.cookits}
                                   
                                        <em onClick={this.btnspan} 
                                        className="exit"
                                            style={{display:this.state.nobl}}>
                                           <br/> 退出
                                        </em>
                                    </span>
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
Wd = connect()(Wd)
Wd = withRouter(Wd);

export default Wd;