import React,{Component} from "react";//库
import "../css/login.css";//引入css
import {withRouter} from "react-router-dom";//获取高阶组件
import axios from "axios";//引入axios
import Qs from "qs";
class Login extends Component{
    constructor(){//初始化
        super();

        this.state = {
            users:"",
            pws:"",
        }

        this.btns = this.btns.bind(this);//修正this指向
    }
    
    btns(){
        this.props.history.push("./reg");
    }
    phone = (ev)=>{
        this.setState({
            users:ev.target.value,
        })
    }
    pw = (ev) => {
        this.setState({
            pws:ev.target.value,
        })
    }
    //点击登录
    LoginBtn = ()=>{
        let name = this.state.users;//用户
        let password = this.state.pws;//密码
        let keep = 1;//由于没有七天免登录 只有默认60*60秒免登录
        if(name && password){
            console.log(name,password);
            let zc=Qs.stringify({name,password,keep})
               axios.post("http://localhost:1911/login/logins",zc).then((data)=>{
                   if(data.data.code == 1){
                        if(data.data.authorization){
                            //获取跳转的路径
                            let url = localStorage.getItem("name");
                            if(url){
                                //把这个证书存进去
                                localStorage.setItem('authorization',data.data.authorization);
                                this.setCookie("names",name)
                                this.props.history.push(url);
                            }else{
                                //把这个证书存进去
                                localStorage.setItem('authorization',data.data.authorization);
                                this.setCookie("names",name)
                                this.props.history.push("/wd");
                            }
                        }
                    }  
                   
               })
        }else{
            alert("请完善信息")
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
   

    render(){
        return(
            <div className="header_content">
                <div className="login_header">
                <a>密码登录</a>
                    <a>快速登录</a>
                  
                </div>
                
                <div className="login_box fls" >
                    <div className="input_group">
                        <div className="input_item">
                            <input type="number" placeholder="请输入手机号" className="ipt" 
                            />
                        </div>
                        <div className="input_item">
                            <input type="number" placeholder="请输入图形验证码" className="ipt" 
                            
                            
                            />
                            <img src="image/icon-font.png" className="ig" /> 
                        </div>
                        <div className="input_item">
                            <input type="number" placeholder="验证码" className="ipt" />
                           <span className="input_code">
                               获取验证码
                           </span>
                        </div>

                           {/* 阅读 */}
                        <div className="agreement">
                            <img src="image/oval_active.png" className="agreeimg1"/>
                            <p className="agreeimg2">
                            我已认真阅读，理解并同意 
                                <a  className="agreeimg3">
                                《叮当快药用户协议》
                                </a>
                                <a  className="agreeimg3">
                                《叮当快药用户协议》
                                </a>
                            </p>
                        </div>

                        {/* 按钮 */}
                        <div className="btn_group">
                            <button type="submit" className="submit_btn">登录</button>
                        </div>
                        <div className="footer_group">
                            <p>

                            </p>
                            <p className="voice_verify">
                                <span className="verify_code">收不到验证码？请使用 </span>
                                <span className="verify_voice">
                            免费语音获取
                                </span>
                            </p>
                        </div>

                    </div>
                </div>
            
                <div className="login_box " >
                    <div className="input_group">
                        <div className="input_item">
                            <input type="number" placeholder="请输入手机号" className="ipt"
                            onChange={this.phone} value={this.state.users} />
                        </div>
                        <div className="input_item">
                            <input type="number" placeholder="请输入密码" className="ipt" 
                            
                            onChange={this.pw} value={this.state.pws}/>
                        </div>
                           {/* 阅读 */}
                        <div className="agreement">
                            <img src="image/oval_active.png" className="agreeimg1"/>
                            <p className="agreeimg2">
                            我已认真阅读，理解并同意 
                                <a  className="agreeimg3">
                                《叮当快药用户协议》
                                </a>
                                <a  className="agreeimg3">
                                《叮当快药用户协议》
                                </a>
                            </p>
                        </div>

                        {/* 按钮 */}
                        <div className="btn_group" onClick={this.LoginBtn}>
                            <button type="submit" className="submit_btn">登录</button>
                        </div>
                        <div className="footer_group">
                            <p className="footer_register" onClick={this.btns}>
                                注册
                            </p>
                            <p className="voice_verify">
                               <a className="a1">
                                   忘记密码？
                               </a>
                            </p>
                        </div>

                    </div>
                </div>
            
            
            </div>
        )
    }
}

Login = withRouter(Login);
export default Login;