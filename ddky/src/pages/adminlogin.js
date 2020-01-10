import React from "react"; //引入库
import ReactDOM from "react-dom";//引入dom功能
import { Form, Icon, Input, Button, Checkbox,message } from 'antd';
import "../css/adminlogin.css";
import axios from "axios"; //引入axios
import Qs from "qs";

//后台登录页面

class Adminlogin extends React.Component{
    constructor(){
        super();
        this.state = {
            users:"",
            pws:"",
        }
    }
   login=()=>{
        let name = this.state.users; //用户
        let password = this.state.pws; //密码

        if (name && password) {
            let zc=Qs.stringify({name,password})
            axios.post("http://localhost:1911/login/adminlogin", zc)
        }else{
            message.error('请完善登录信息');

        }
   }
    

    render() {
       
        return (
            <>
            <div className="loginBg">
                    <div className="Longbox">   
                        <h2>叮当快药后台登录页面</h2>
                        <Form  className="login-form">
                        <Form.Item>
                            <Input
                            placeholder="Username"
                            />
              
                        </Form.Item>
                        <Form.Item>
                            <Input
                            type="password"
                            placeholder="Password"
                            />
                
                        </Form.Item>
                        <Button type="primary" className="login-form-button indexts" onClick={this.login}>
                        登录
                        </Button>
                        <Button type="password" className="login-form-button indexs" >
                        忘记密码？
                        </Button>
                            </Form>

                    </div>
            </div>
           
        
            </>
        )   
    }

}
 
export default Adminlogin;