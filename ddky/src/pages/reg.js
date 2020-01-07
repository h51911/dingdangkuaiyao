import React,{Component} from "react";
import "../css/reg.css";

class Reg extends Component{
    constructor(){//初始化
        super();
    }
    //渲染
    render(){
        return(
            <section id="register_container">
                {/* 表单 */}
                <form className="input_group">
                    <div className="input_item">
                        <input type="number" className="usernames" placeholder="请输入手机号" />
                    </div>
                    <div className="input_item">
                        <input type="number" className="auth_code" placeholder="请输入图形验证码" />
                        <img src="image/reg-input.png" className="imgs_t"/>
                    </div>
                    <div className="input_item">
                        <input type="number" className="auth_code" placeholder="请输入验证码" />
                        <span className="input_code">
                            获取验证码
                        </span>
                    </div>
                    <div className="input_item">
                        <input type="number" className="usernames" placeholder="请输入6~20为密码，由“数字+字母”组成" />
                    </div>
                    <div className="input_item">
                        <input type="number" className="usernames" placeholder="请确认登录密码" />
                    </div>
                </form>
                {/* 阅读 */}
                <div className="agreement">
                    <img src="image/icon_search.png" className="agreeimg1"/>
                    <p className="agreeimg2">
                    我已认真阅读，理解并同意 
                        <a href="javascript:;" className="agreeimg3">
                        《叮当快药用户协议》
                        </a>
                        <a href="javascript:;" className="agreeimg3">
                        《叮当快药用户协议》
                        </a>
                    </p>
                </div>
                {/* 按钮 */}
                <div className="btn_group">
                    <button type="submit" className="submit_btn">提交</button>
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

            </section>
        )
    }
}

export default Reg;