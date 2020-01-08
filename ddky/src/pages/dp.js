
import React,{Component} from "react";//引入库
import "../css/清除默认样式.css";//引入base
import "../css/dp.css";//引入css
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Carousel } from 'antd';



//详情页
class Dp extends Component{
    constructor(){//初始化
        super();
    };
    render(){
        return(
            <section id="app_Content">
                {/* 头部 */}
                <header className="topBox">
                    <div className="Header">
                        <ul className="Tabs">
                            <li className="itemSt">商品</li>
                            <li className="itemSt">详情</li>
                            <li className="itemSt">评价</li>
                        </ul>

                        <div className="Navs">
                            <div className="navsIcon">
                                <img src="image/dp1.png"  className="Icont" />
                            </div>
                        </div>
                    </div>
                </header>

               {/* 内容 */}
               <main className="Content">
                    {/* 轮播图 */}
                    <div className="bannerBox">
                        <Carousel autoplay>
                            <div className="Slider">
                                <img src="image/x_1.jpg" className="Wrapper" />
                            </div>
                            <div className="Slider">
                                <img src="image/x_1.jpg" className="Wrapper" />
                            </div>
                        </Carousel>
                    </div>

                    <div className="Ul_all">
                        <h1 className="goods_Name">
                            <span className="sign">28分钟</span>
                            [仁和]六味地黄丸(浓缩丸)    
                        </h1>

                        <div className="Zhuzhi">
                            <p className="zhuzhi_Info">
                            滋阴补肾。用于肾阴亏损，头晕耳鸣，腰膝酸软，骨蒸潮热，盗汗遗精。
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
                                    ¥
                                    <span>13.50</span>
                                </p>
                                <p className="Sales">
                                月售 11918 笔
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
                            <img src="https://img.ddky.com/c/wap/images/ddky2/rightMore.png"  />
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
                        <li className="add_car">
                            加入清单
                        </li>
                   </ul>
               </footer>

            </section>
        )
    }

}

export default Dp;
