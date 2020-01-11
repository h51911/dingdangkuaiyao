import React,{Component} from "react";
import "../css/reg.css";
import axios from "axios";//引入axios
import num4 from "./suiji.js";//引入4位随机数  只会调用一次
import Qs from "qs";//引入4位随机数  只会调用一次
// import "./jquery.min.js";//引入jq
// import "./jQuery.md5.js";//引入加密
import {withRouter} from "react-router-dom";//获取高阶组件
class Reg extends Component{
    constructor(){//初始化
        super();
        this.state={
            usernamesg:'',//手机号
            auth_codeg:"",//图形验证
            password:"",//密码
            affirmg:"",//确认密码
            graph:"",//随机图形
        }
        this.regBtn1 = this.regBtn1.bind(this);//修正tish指向
        this.regBtn2 = this.regBtn2.bind(this);//修正tish指向
        this.regBtn3 = this.regBtn3.bind(this);//修正tish指向
    }
    
    

    //onChange 手机号 
    regBtn1(ev){
        this.setState({ //覆盖
            usernamesg:ev.target.value,//手机号
        })
    }
    regBtn2(ev){//密码
        this.setState({ //覆盖
            password:ev.target.value,//密码
        })
    }
    
    regBtn3(ev){//确认密码
        this.setState({ //覆盖
            affirmg:ev.target.value,//确认密码
        })

    }
 
    //点击注册、把用户和密码存入数据库
    buttons=()=>{
        let name = this.state.usernamesg;
        let password = this.state.password;
        let affirmgs = this.state.affirmg;
        if(name && password && affirmgs){
      
            let zc=Qs.stringify({name,password})
               axios.post("http://localhost:1911/login/reg",zc).then((data)=>{
         
                   if(data.data.code == 1){
                        this.props.history.push("/login");
                   }
               })
        }else{
            alert("请完善信息")
        }

    }
    //正则
    tel = str=> {
        var reg = /^1[3-9]\d{9}$/;
        return reg.test(str);
    }
    //失去焦点验证用户
    Blur=()=>{
        let usernamesgVal = this.state.usernamesg;//获取手机号的值
        let reg = this.tel(usernamesgVal);
            if(reg){
                if(usernamesgVal){
                    axios.get("http://localhost:1911/login/user",{
                            params: {
                                name: usernamesgVal
                            }
                    })
                    .then((data)=>{
                        if(data.data.code==0){
                            alert("用户已注册")
                            return;
                        }
                    })
                }   
            }else{
                this.setState({
                    usernamesg:'',//清空
                })
            }
    };

    //初始化4位随机数
    componentDidMount(){

        let graph = num4;
        this.setState({
            graph
        })
    }

     //点击换验证码
    Btngraph = ()=>{
        let graph = this.ranNum();
        this.setState({
            graph
        })
    }

    //随机数
    ranNum() {
        var html = '';
        for(var i = 0; i < 4; i++) {
            var num = parseInt(Math.random() * 10);//0.1-9.99 0-9
            html += num;
        }
        return html
    }

    //4位随机数的验证
    Num4 = ()=>{//失去焦点 验证
        let val1 = this.state.auth_codeg * 1;//输入框验证码
        let val2 = this.state.graph * 1;//图形验证码
        if(val1 == val2){
        
        }else{
            alert("验证不正确");
            return;
        }
    }
    //覆盖4位随机验证码
    auth = (ev)=>{
        this.setState({
            auth_codeg:ev.target.value,
        })
    }


    


    //渲染
    render(){
        
        return(
            <section id="register_container">
                {/* 表单 */}
                <form className="input_group">
                    <div className="input_item">
                        <input type="number" className="usernames" placeholder="请输入手机号" 
                        onBlur={this.Blur} value={this.state.usernamesg} onChange={this.regBtn1} />
                    </div>
                    {/* <div className="input_item">
                        <input type="number" className="auth_code" placeholder="请输入图形验证码" />
                        <img src="image/reg-input.png" className="imgs_t"/>
                    </div> */}
                    <div className="input_item">
                        <input type="number" className="auth_code" placeholder="请输入验证码"
                          onBlur={this.Num4} 
                          onChange={this.auth}
                        // value={this.state.auth_codeg}
                        // onChange={this.regBtn}
                        />

                        <span className="input_code" onClick={this.Btngraph}>
                            {this.state.graph}
                        </span>


                    </div>
                    <div className="input_item">
                        <input type="password" className="usernames" placeholder="请输入6~20为密码，由“数字+字母”组成" 
                        value={this.state.password}
                        onChange={this.regBtn2}
                        />
                    </div>
                    <div className="input_item">
                        <input type="password" className="usernames" placeholder="请确认登录密码" affirmg={this.state.affirmg}
                        value={this.state.affirmg}
                        onChange={this.regBtn3}
                        />
                    </div>
                </form>
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
                    <button type="submit" className="submit_btn" onClick={this.buttons}>提交</button>
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
Reg = withRouter(Reg);
export default Reg;