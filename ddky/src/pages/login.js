import React,{Component} from "react";//库
import "../css/login.css";//引入css
class Login extends Component{
    constructor(){//初始化
        super();

    }
    render(){
        return(
            <div className="header_content">
                <div className="login_header">
                    <a>快速登录</a>
                    <a>密码登录</a>
                </div>
                
                <div className="login_box">
                    <div className="input_group">
                        <div className="input_item">
                            <input type="number" placeholder="请输入手机号" className="ipt" />
                        </div>
                        <div className="input_item">
                            <input type="number" placeholder="请输入图形验证码" className="ipt" />
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
                            <img src="image/icon_search.png" className="agreeimg1"/>
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
            
                <div className="login_box fls" >
                    <div className="input_group">
                        <div className="input_item">
                            <input type="number" placeholder="请输入手机号" className="ipt" />
                        </div>
                        <div className="input_item">
                            <input type="number" placeholder="请输入密码" className="ipt" />
                        </div>
                           {/* 阅读 */}
                        <div className="agreement">
                            <img src="image/icon_search.png" className="agreeimg1"/>
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
                            <p className="footer_register">
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
export default Login;