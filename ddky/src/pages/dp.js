import React, { Component } from "react";//引入库
import "../css/清除默认样式.css";//引入base
import "../css/dp.css";//引入css
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { connect } from 'react-redux';
import axios from 'axios';
import { message, Icon } from 'antd'

//详情页
class Dp extends Component {
    state = {
        chushishuju: {}


    }




    async componentDidMount() {

        if (this.props.xqysja.xurl) {
            let bb = await this.props.xqysja
            bb = JSON.stringify(bb);
            localStorage.setItem('xqsp', bb)
        }

        console.log(this.props.xqysja);
        let pan = localStorage.getItem('xqsp');
        console.log(pan);
        if (!(pan == '{}')) {
            let shuju = JSON.parse(pan);
            this.setState({

                chushishuju: shuju
            })
        } else {
            let aa = await this.props.xqysja
            aa = JSON.stringify(aa);
            localStorage.setItem('xqsp', aa)
            let shuju = JSON.parse(aa);
            this.setState({

                chushishuju: shuju
            })
        }

        console.log(this.state);
    }

    huitui = () => {

        this.props.history.goBack();
    }
    jiacart = async () => {

        let data = JSON.parse(localStorage.getItem('xqsp'));
        // console.log(data);
        // console.log(this.props);
        if (this.props.zhanghao) {
            let aa = this.props.arr.filter(item => { return item.uid == data.uid });
            // console.log(aa);
            if (aa.length) {
                let { data } = await axios.get('http://localhost:1911/login/ddkyjia', {
                    params: {
                        name: this.props.zhanghao,
                        value: aa[0].num + 1,
                        id: aa[0].uid
                    }
                })

                if (data) {
                    message.success('添加成功');
                }
                let action = {
                    type: "xiugai",
                    payload: {
                        id: aa[0].uid,
                        value: aa[0].num + 1
                    }
                }
                this.props.dispatch(action);
            } else {
                console.log(1)
                let aa = await axios.get('http://localhost:1911/login/ddkyzhen', {
                    params: {
                        usename: this.props.zhanghao,
                        imgurl: data.xurl,
                        uid: data.uid,
                        name: data.xname,
                        shop: data.xtitle,
                        price: data.xjiage,
                        setmeal: data.xxiangliang,
                        liang: data.xliang,
                        num: 1
                    }
                })

                if (aa) {
                    message.success('添加成功');
                    console.log(2);
                    let action = {
                        type: "tianjia",
                        payload: {
                            usename: this.props.zhanghao,
                            imgurl: data.xurl,
                            uid: data.uid,
                            name: data.xname,
                            shop: data.xtitle,
                            price: data.xjiage,
                            setmeal: data.xxiangliang,
                            liang: data.xliang,
                            num: 1
                        }
                    }
                    this.props.dispatch(action);
                }

            }
        } else {
            message.error('请先登录');
        }
    }
    render() {

        let { xjiage, xliang, xname, xtitle, xurl, xxiangliang } = this.state.chushishuju
        return (
            <section id="app_Content">
                {/* 头部 */}
                <header className="topBox">
                    <div className="Header">
                        <div className="houtui" onClick={this.huitui}>
                            <Icon type="left" />
                        </div>
                        <ul className="Tabs">
                            <li className="itemSt">商品</li>
                            <li className="itemSt">详情</li>
                            <li className="itemSt">评价</li>
                        </ul>

                        <div className="Navs">
                            <div className="navsIcon">
                                <img src="image/dp1.png" className="Icont" />
                            </div>
                        </div>
                    </div>
                </header>

                {/* 内容 */}
                <main className="Content">
                    {/* 轮播图 */}
                    <div className="bannerBox">
                        <div className="Slider">
                            <img src={xurl} className="Wrapper" />
                        </div>
                    </div>

                    <div className="Ul_all">
                        <h1 className="goods_Name">
                            <span className="sign">28分钟</span>
                            {xname}
                        </h1>

                        <div className="Zhuzhi">
                            <p className="zhuzhi_Info">
                                {xtitle}
                            </p>
                            <p className="goods_State">
                                图文详情
                            </p>
                        </div>
                        <p className="other">
                            <span>
                                216丸;
                                </span>
                            <span>
                                新老包装随机发货；
                                </span>
                        </p>

                        <div className="Moneybox">
                            <div>
                                <p className="Money">

                                    <span>{xjiage}</span>
                                </p>
                                <p className="Sales">
                                    {xxiangliang}
                                </p>
                            </div>

                        </div>
                    </div>

                    <p className="peisongInfo">
                        <img src="image/logo_20171130.png" className="Fo" />
                        <span>[快药]急送,满￥28免运费,可预约</span>
                    </p>
                    <p className="Foryou">
                        <span className="shopName">本商品由叮当智慧药房（北京）有限公司第四十五店(总部店)为您服务</span>
                        <img src="https://img.ddky.com/c/wap/images/ddky2/clickpoint.png" className="Frs" />
                    </p>

                    <div className="promotionBox">
                        <p className="Fl">促销</p>
                        <ul className="Fl">
                            <li>
                                <span className="Promotion">满减</span>
                                满68减18
                            </li>
                            <li>
                                <span className="Promotion">低价换购</span>
                                购物满28、38、58、68元即可换购商品
                            </li>
                            <li>
                                <span className="Promotion">1元换购</span>
                                买满48元可换购1个，买满95元可换购2个
                            </li>
                        </ul>
                        <img src="https://img.ddky.com/c/wap/images/ddky2/clickpoint.png" className="tSl" id="Kimg" />
                    </div>

                    <div className="Spec">
                        <span className="spec-title">规格：</span>
                        <span className="spec-detail">216丸</span>
                    </div>

                    <div className="Favourable">
                        <p className="fl">
                            好评度
                            <span className="red_col">
                                100%
                            </span>
                        </p>
                        <p className="Comment">
                            <span>3207条评价</span>
                            <img src="https://img.ddky.com/c/wap/images/ddky2/rightMore.png" />
                        </p>
                    </div>
                </main>

                <footer className="footer">
                    <ul className="footerBoxFl">
                        <li className="li2">
                            <img src="https://img.ddky.com/c/wap/images/ddky2/wo.png" />
                            <p>药师指导</p>
                        </li>
                        <li className="goodscar">
                            <img src="https://img.ddky.com/c/wap/images/ddky2/cart2.png" />
                            <p>清单列表</p>
                        </li>
                        <li className="add_car" onClick={this.jiacart.bind(null)}>
                            加入清单
                        </li>
                    </ul>
                </footer>

            </section>
        )
    }

}
const quan = function (state) {

    return state;
}
Dp = connect(quan)(Dp)
export default Dp;
