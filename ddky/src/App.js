import React, { Component } from 'react';
import './css/App.css';
import './css/清除默认样式.css';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Ddky from './pages/ddky';
import Ddsc from './pages/ddsc';
import Qdlb from './pages/qdlb';
import Wd from './pages/wd';
import 'antd/dist/antd.css'
import Reg from './pages/reg';
import Pct from './pages/pct';
import Ddscxq from './pages/ddscxq'
import DdkyPct from './pages/ddkypct';
import Houtaihome from './pages/houtaihome';
import Adminlogin from './pages/adminlogin';
import Login from './pages/login';//登录页
import Dp from './pages/dp';//详情页
import Cart from './pages/cart';//购物车页
import { connect } from 'react-redux';
import axios from 'axios';
import { Badge } from "antd"
class App extends Component {
  state = {
    current: "/ddky",
    biaoqian: "cart",
    menu: [{
      name: 'ddky',
      path: '/ddky',
      text: '叮当快药',
      image1: 'image/1.jpg',
      image2: 'image/5.jpg',
      isok: false
    }, {
      name: 'ddsc',
      path: '/ddsc',
      text: '叮当商城',
      image1: 'image/2.jpg',
      image2: 'image/6.jpg',
      isok: false
    }, {
      name: 'cart',
      path: '/cart',
      text: '清单列表',
      image1: 'image/3.jpg',
      image2: 'image/7.jpg',
      isok: false
    }, {
      name: 'wd',
      path: '/wd',
      text: '我的',
      image1: 'image/4.jpg',
      image2: 'image/8.jpg',
      isok: false
    }]
  }
  async componentDidMount() {
    let aa = this.state.menu.map(item => {
      if (item.path === this.props.location.pathname) {
        item.isok = true;
      }
      return item;
    })
    this.setState({
      menu: aa
    });
    let action = {
      type: "dlzt",
      payload: (document.cookie).slice(6)
    }
    this.props.dispatch(action);
    let { data } = await axios.get("http://localhost:1911/login/ddkycart", {
      params: document.cookie.slice(6)
    })
    let actions = {
      type: "shujuku",
      payload: data
    }
    this.props.dispatch(actions);
  }
  qiehuan = (inx, path) => {
    this.props.history.push(path);

    let aa = this.state.menu.map((item, idx) => {
      if (inx === idx) {
        item.isok = true;
      }
      else {
        item.isok = false;
      }
      return item;
    })
    this.setState({
      menu: aa
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location.pathname != this.props.location.pathname) {
      let aa = this.state.menu.map(item => {
        if (item.path === this.props.location.pathname) {
          item.isok = true;
        } else {
          item.isok = false;
        }
        return item;
      })

      this.setState({
        menu: aa
      })
    }
  }

  render() {
    return (
      <>
        <div className="zong">
          <div className='module'>
            <Switch>
              <Route path='/ddky' component={Ddky} />
              <Route path='/ddsc' component={Ddsc} />
              <Route path='/wd' component={Wd} />
              <Route path='/pct' component={Pct} />
              <Route path='/ddkypct/:name' component={DdkyPct} />
              <Route path='/ddscxq' component={Ddscxq} />
              <Route path='/houtaihome' component={Houtaihome} />
              <Route path='/adminlogin' component={Adminlogin} />
              <Route path='/reg' component={Reg} />
              <Route path='/login' component={Login} />
              <Route path='/dp' component={Dp} />
              <Route path='/cart' component={Cart} />
              <Redirect to="/ddky" />
            </Switch>
          </div>
          <div className='bottom' style={this.props.location.pathname == "/dp" ? { display: 'none' } : { display: 'block' }}>

            <ul>
              {this.state.menu.map((item, inx) => {
                return (
                  <li key={item.path} onClick={this.qiehuan.bind(null, inx, item.path)}  >
                    <div className='yingchang'><p><img src={item.isok ? item.image2 : item.image1} /></p><p style={item.isok ? { color: "red" } : { color: " #585858" }}>{item.text}</p></div> <Badge count={this.props.state.arr.length} overflowCount={99} style={this.state.biaoqian == item.name ? { display: "block" } : { display: "none" }} >
                      <a href="#" className="head-example" />
                    </Badge></li>
                )
              })}
            </ul>
          </div>
        </div>
      </>
    )
  }
}
const haha = state => ({
  state
})
App = connect(haha)(App);
App = withRouter(App);
export default App
