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
   login = async () => {
        let name = this.state.users; //用户
        let password = this.state.pws; //密码

        if (name && password) {
            let zc=Qs.stringify({name,password})
           let {data}= await axios.post("http://localhost:1911/login/adminlogin",zc)
     
           if(data[0]){
               message.success('登录成功');
               localStorage.setItem('adminlogin',name)
               this.props.history.push('/houtaihome');
           }else{

             message.error('账号或密码错误');
           }
        }else{
            message.error('请完善登录信息');

        }
   }
   userss=(ev)=>{
    this.setState({

        users:ev.target.value
    })
   }
    
pwss = (ev) => {
    this.setState({

        pws: ev.target.value
    })
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
                            placeholder = "Username"
                            value = {
                                this.state.users
                            } onChange={this.userss}
                            />
              
                        </Form.Item>
                        <Form.Item>
                            <Input
                            type="password"
                            placeholder = "Password"
                            value = {
                                this.state.pws
                            }
                            onChange = {
                                this.pwss
                            }
                            />
                
                        </Form.Item>
                        <Button type="text" className="login-form-button indexts" onClick={this.login}>
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