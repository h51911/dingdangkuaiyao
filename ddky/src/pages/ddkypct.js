import React, { Component } from "react";//引入库
import "../css/pct.css";//引入css
import axios from 'axios';
class Pct extends Component {
    // 初始化
    state = {
        arr: [],
        xiaolu: false,
        show: false,
        shuju: this.props.match.params.name
    }

    async componentDidMount() {
        let aa = this.props.match.params
        let { data } = await axios.get('http://localhost:1911/login/ddky', {
            params: aa
        })
        this.setState({
            arr: data,
            xiaolu: true,
            show: data.length > 0 ? true : false
        })
    }
    gaishu = (ev) => {
        this.setState({
            shuju: ev.target.value
        })
    }
    // 渲染
    render() {
        return (
            <>
                <div className='xiaolu' style={this.state.xiaolu ? { display: 'none' } : { display: 'block' }}><img src='/image/timg.gif' /></div>
                <div className='xixi' style={this.state.show ? { display: 'none' } : { display: 'block' }}>没有找到该商品</div>
                <section id="Pct">
                    {/* 头部 */}

                    <header className="header_cl">
                        <div className="home">
                            <img src="image/pct1.png" className="pct1" />
                        </div>
                        <div className="headerLeft ">
                            <img src="image/icon_search.png" className="serch" />
                            <input type="text" placeholder="搜索药品、症状、品牌" className="ipt1" value={this.state.shuju} onChange={this.gaishu} />
                            <div className="qiehuan">
                                <img src="image/pct2.png" className="imgqq" />
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


                                {

                                    this.state.arr.map((item, idx) => (

                                        <dl className="cl" key={idx}>
                                            <dt className="fl">
                                                <img src={item.imgurl} className="z_img" />
                                            </dt>
                                            <dd className="goodsInfo_fr">
                                                <h3 className="h3">
                                                    <span className="sign">28分钟</span>
                                                    {item.name}
                                                </h3>
                                                <p className="zhuzhi_info">
                                                    {item.shop}
                                                </p>
                                                <p className="other2">
                                                    {item.liang}
                                                </p>
                                                <div className="goods_buyBox">
                                                    <div className="aboutLeft">
                                                        <p className="setmeal">
                                                            {item.price}
                                                        </p>
                                                        <p className="sales">
                                                            {item.setmeal}
                                                        </p>
                                                    </div>
                                                    < img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACfUExURUxpcexLS+xFRelFRelFRP9VVetGRulFROpFRelFROlFRP9MTOpFRepFROlFROtHROlFROlFRfBLS+pFRP9VVelFRP///+1nZvzr6+1qafzp6fWurulKSfCCgfrV1f319f79/fGLiupQT+tcW/jHx+tVVPnMzO93dvvd3e5vb/vh4Pa6ufzm5uxhYPSgoPe/vv3y8vSnpvOamf74+PKTkmBE4BQAAAAVdFJOUwAbN8v5A2bmXvbsCnzb8k6vjxG3CVdyowAAAAHXSURBVHjapdZpd6owEAbg1AWEKqvvtIrsouCu7f//be255jbBRDken8/MSTITZsIUU9cPJ/ZgYE9C352yDsHIsyCxvFHA7nsfO1A443emNzRMaJnGkGm89XFX/40peiYeMHvsxsjCQ9bo5nt0akX0LHSyetJ5TaCb+XfyYR/AkbI6xkP9/9k18GtFRNkaDxm8vtcNFeWKVh2butZ8DC6mFFjOVZuowD9j9itwwJVEZZGSDl/aCdolSClG8aHKifaiGB7+JHSAVkY8HR5jU6lmES2hsycqefWmzIWQ0w4Kng3OZT6EhrIFNM6UgPNZCKEg+oDGkiJwIZtAcqIYGp+Ug5swG+hKUyUtbLMBJFvaQrWWjjZoB1wogepCNUSAreRPcZTWtdnkpkIVJEU5W8eHjHKIQ4eQLDJqUOWXc3RcJbtTRlfJAiKtPmQ7ylGTkM7r1fFbqqbPXKVE+XIbHb7zdbOvoHD55VOvn4pfPua10/QVzxRiS95tD1vUpLFpdbPAgaSK6rkiAucErSbQbSy3GW49P8WQRF9JedNmmAHJhiiF0BCJn8EQrfJuwEwK6A91zbjZfcaQnNOkEs34uXb/7EB5bWR1D8XXxm73YH/y6fDS4+Tp588PcLqdUFOb62QAAAAASUVORK5CYII="
                                                        className="cars" />
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
                                                        {item.smallimgs}
                                                    </span>
                                                </div>

                                            </dd>
                                        </dl>

                                    ))

                                }
                            </div>
                        </div>

                    </main>

                </section>
            </>
        )
    }

}

export default Pct;


