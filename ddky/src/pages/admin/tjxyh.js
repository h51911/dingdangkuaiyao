import React from "react"; //引入库
import ReactDOM from "react-dom";//引入dom功能
import "../../css/an.css";
import { Form, Input, Button,message} from 'antd';
import "../../css/清除默认样式.css";
import axios from 'axios';
//后台登录页面

import Qs from "qs";

class Tjxyh extends React.Component {
    constructor(){
        super();
        this.state={
            name:'',
            password:''
        }
    }
   yhmb=(ev)=>{
        this.setState({

            name:ev.target.value
        })

   }
   mmb=(ev)=>{
        this.setState({
            password:ev.target.value
        })

   }
   tianjia=()=>{

        let name=this.state.name;
        let password = this.state.password;
      
        if(name && password){
            let zc=Qs.stringify({name,password})
               axios.post("http://localhost:1911/login/reg",zc).then((data)=>{
                   console.log(data);
                   if(data.data.code == 1){
                        message.success('添加成功');
                   }
               })
        }else{
            message.error('请完善添加信息');
        }
    
   }
    render() {

        return (
            <div className="breadcrumb">
                <div className="homes">
                    <a href="" className="pagest">主页</a>
                </div>

                <div className="mains">
                    <div className="guan">添加新用户</div>
                    <div className="widget-title">
                        <em>添加新用户</em>
                    </div>

                        <div className="controls">
                            <Form id="ant-f">
                                <Form.Item label="用户名">
                                    <Input placeholder="请输入用户名" value={this.state.name} onChange={this.yhmb}/>
                                </Form.Item>
                                <Form.Item label="密码" >
                                    <Input placeholder="请输入密码" value={this.state.password} onChange={this.mmb}/>
                                </Form.Item>
                                
                                <Form.Item>
                                    <Button type="primary" onClick={this.tianjia}>添加</Button>
                                </Form.Item>
                            </Form>
                        </div>
                </div>

            </div>
        )   
    }

}
 
export default Tjxyh;