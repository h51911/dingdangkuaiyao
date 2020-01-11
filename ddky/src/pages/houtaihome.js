import React from 'react';
import '../css/houtaihome.css';
import { Collapse } from 'antd';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Yhgl from './admin/yhgl';
import Tjxyh from './admin/tjxyh';
import Xgmm from './admin/xgmm';
import Ddxxb from './admin/ddxxb';
const { Panel } = Collapse;

class Houtaihome extends React.Component {

    state={
        admin:null,
        dt:null
    }

    componentDidMount(){
      

       this.setState({
        admin: localStorage.getItem('adminlogin')

       })
  if(this.state.admin){
           this.setState({
               dt: '登录'
           })
        }else{
            
           this.setState({
               dt: '退出登录'
               
           })
        }
    }
    qiehuan(path){
         this.props.history.push(path);
    }
    tuichu=()=>{
        localStorage.removeItem('adminlogin')
        this.setState({
            admin: null
        });   
        this.props.history.push('/adminlogin')
    }
    render(){
        return (

            <>
                <div className="houtai">
                    <div className="ding">
                        <h1>叮当快药后台管理系统</h1>
                        <div className="dingr">
                            <div className="dingrl">
                                <p>欢迎你,{this.state.admin}</p>
                            </div>
                            <div className="dingrr" onClick={this.tuichu}>
                                <p>{this.state.dt}</p>
                            </div>
                        </div>
                    </div>
                    <div className="maina">
                        <div className="mainal">
                            <Collapse accordion>
                                <Panel header="用户管理" key="1">
                                <p onClick={this.qiehuan.bind(this,'/houtaihome/yhgl')}>用户管理</p>
                                <p onClick={this.qiehuan.bind(this,'/houtaihome/tjxyh')}>添加新用户</p>
                                <p onClick={this.qiehuan.bind(this,'/houtaihome/xgmm')}>修改密码</p>
                                </Panel>
                                <Panel header="商品信息管理" key="2">
                                <p onClick={this.qiehuan.bind(this,'/houtaihome/ddxxb')}>订单信息表</p>
                                </Panel>
                            </Collapse>
                        </div>
                        <div className="mainar">
                            <Switch>
                                <Route path='/houtaihome/yhgl' component={Yhgl} />
                                <Route path='/houtaihome/tjxyh' component={Tjxyh} />
                                <Route path='/houtaihome/xgmm' component={Xgmm} />
                                <Route path='/houtaihome/ddxxb' component={Ddxxb} />
                                <Redirect to="/houtaihome/yhgl" />
                            </Switch>
                        </div>
                    </div>
                </div>
            
            </>
        )


    }
}
Houtaihome = withRouter(Houtaihome);
export default Houtaihome;