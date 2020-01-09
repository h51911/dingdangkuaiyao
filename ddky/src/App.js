import React, { Component } from 'react';
import './css/App.css';
import './css/清除默认样式.css';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Ddky from './pages/ddky';
import Ddsc from './pages/ddsc';
import Qdlb from './pages/qdlb';
import Wd from './pages/wd';
<<<<<<< HEAD
<<<<<<< HEAD
import 'antd/dist/antd.css'
=======
=======
>>>>>>> laoma
import Reg from './pages/reg';
import Pct from './pages/pct';
import DdkyPct from './pages/ddkypct';
import Login from './pages/login';


<<<<<<< HEAD
>>>>>>> 49d9c7c173d0a4379f6ddde344930d793d828711
=======
>>>>>>> laoma
class App extends Component {
  state = {
    current: "/ddky",
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
      name: 'qdlb',
      path: '/qdlb',
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
  componentDidMount() {
    let aa = this.state.menu.map(item => {
      if (item.path === this.props.location.pathname) {
        item.isok = true;
      }
      return item;
    })
    this.setState({
      menu: aa
    })
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
              <Route path='/qdlb' component={Qdlb} />
              <Route path='/wd' component={Wd} />
              <Route path='/pct' component={Pct} />
              <Route path='/ddkypct/:name' component={DdkyPct} />
              <Route path='/reg' component={Reg} />
              <Route path='/login' component={Login} />
              <Redirect to="/ddky" />
            </Switch>
          </div>
          <div className='bottom'
          >
            <ul>
              {this.state.menu.map((item, inx) => {
                return (
                  <li key={item.path} onClick={this.qiehuan.bind(null, inx, item.path)}><div className='yingchang'><p><img src={item.isok ? item.image2 : item.image1} /></p><p style={item.isok ? { color: "red" } : { color: " #585858" }}>{item.text}</p></div></li>
                )
              })}
            </ul>
          </div>
        </div>
      </>
    )
  }
}
App = withRouter(App);
export default App
