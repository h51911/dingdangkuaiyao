import React,{Component} from "react";//引入库
import "../css/pct.css";//引入css
class Pct extends Component{
    // 初始化
    constructor(){  
        super();
    }

    // 渲染
    render(){
        return(
            <section id="Pct">
                {/* 头部 */}
                <header className="header_cl">
                    <div className="home">
                        <img src="image/pct1.png" className="pct1"/>
                    </div>
                    <div className="headerLeft ">
                        <img src="image/icon_search.png" className="serch"/>
                        <input type="text" placeholder="搜索药品、症状、品牌" className="ipt1" />
                        <div className="qiehuan">
                            <img src="image/pct2.png" className="imgqq"/>
                        </div>
                    </div>  
                </header>

                {/* 内容 */}
                <main className="boxs">
                    <div className="navList_in">
                        <ol className="ol">
                            <li className="lio">默认</li>
                            <li className="lio">销量</li>
                            <li className="lio">价格</li>
                        </ol>
                    </div>
                    <div className="item_one">
                        <div className="items_s">
                            <dl className="cl">
                                <dt className="fl">
                                    <img src="image/z_1.jpg" className="z_img"/>
                                </dt>
                                <dd className="goodsInfo_fr">
                                    <h3 className="h3">
                                        <span className="sign">28分钟</span>
                                        [仁和]感冒清热颗粒
                                    </h3>
                                    <p className="zhuzhi_info">
                    疏风散寒，解表清热。用于风寒感冒，头痛发热，恶寒身痛，鼻流清涕，咳嗽咽干。
                                    </p>
                                    <p className="other2">
                                    12gx8袋
                                    </p>
                                    <div className="goods_buyBox">
                                        <div className="aboutLeft">
                                            <p className="setmeal">
                                            ￥9.90
                                            </p>
                                            <p className="sales">
                                            月售11510笔
                                            </p>
                                        </div>
                                        <img src="image/cart4.png" className="cars" />
                                    </div>
                                    <div className="prootiomBox2">
                                        <div className="fls">
                                            <span className="promotion">
                                            满68减18
                                            </span>
                                        </div>
                                        <div className="fls">
                                            <span className="promotion">
                                            满68减18
                                            </span>
                                        </div>
                                        <div className="fls">
                                            <span className="promotion">
                                            满68减18
                                            </span>
                                        </div>
                                    </div>

                                    <div className="shopname">
                                        <span className="ckspsan">
                                        叮当智慧药房（北京）有限公司第四十五店(总部店)
                                        </span>
                                    </div>

                                </dd>
                            </dl>
                        </div>
                    </div>

                </main>

            </section>
        )
    }

}

export default Pct;


