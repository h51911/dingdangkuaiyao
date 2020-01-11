import React, { Component } from "react";//引入库
import "../css/pct.css";//引入css
import axios from 'axios';
import { Button, message } from "antd";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
class Pct extends Component {
    // 初始化
    state = {
        arr: [],
        arr1: [],
        arr2: [],
        xiaolu: false,
        show: true,
        shuju: this.props.match.params.name,
        xianshi: false
    }

    async componentDidMount() {
        let aa = this.props.match.params;
        let { data } = await axios.get('http://localhost:1911/login/ddky', {
            params: aa
        })
        let data1 = await axios.get('http://localhost:1911/login/ddks', {
            params: aa
        })
        let data2 = await axios.get('http://localhost:1911/login/ddks', {
            params: aa
        })

        this.setState({
            arr: data,
            arr1: data1.data,
            arr2: data2.data,
            xiaolu: true,
            show: data.length || data1.data.length || data2.data.length2 > 0 ? true : false
        })
    }
    gotu = () => {
        this.props.history.push('/home')
    }
    gaishu = (ev) => {
        this.setState({
            shuju: ev.target.value
        })
    }
    handleScrollTop = () => {
        let aa = setInterval(() => {
            this.title.scrollTo(0, this.title.scrollTop / 5)
            if (this.title.scrollTop <= 0) {
                clearInterval(aa)
            }
        }, 200);
    }
    haha = () => {
        if (this.title.scrollTop > this.box.offsetHeight) {
            this.setState({
                xianshi: true
            })
        }
        else {
            this.setState({
                xianshi: false
            })
        }
    }
    tiaozhuan = (item) => {
        let action = {
            type: 'xqysj',
            payload: {
                xurl: item.imgurl,
                xname: item.name,
                xtitle: item.shop,
                xliang: item.liang,
                xjiage: item.price,
                xxiangliang: item.setmeal,
                uid: item.uid
            }
        }
        this.props.dispatch(action);
        this.props.history.push("/dp");
    }
    gouwu = async (items, ev) => {
        ev.stopPropagation();

        if (this.props.state.zhanghao) {
            let aa = this.props.state.arr.filter(item => { return item.uid == items.uid });
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
                let aa = await axios.get('http://localhost:1911/login/ddkyzhen', {
                    params: {
                        usename: this.props.state.zhanghao,
                        imgurl: items.imgurl,
                        uid: items.uid,
                        name: items.name,
                        shop: items.shop,
                        price: items.price,
                        setmeal: items.setmeal,
                        liang: items.liang,
                        num: 1
                    }
                })

                if (aa) {
                    message.success('添加成功');
                    let action = {
                        type: "tianjia",
                        payload: {
                            usename: this.props.state.zhanghao,
                            imgurl: items.imgurl,
                            uid: items.uid,
                            name: items.name,
                            shop: items.shop,
                            price: items.price,
                            setmeal: items.setmeal,
                            liang: items.liang,
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
    // 渲染
    render() {
        let { arr, arr1, arr2 } = this.state;
        const { size } = this.state;
        return (
            <>
                <Button type="primary" shape="circle" icon="up" size={size} onClick={this.handleScrollTop} style={this.state.xianshi ? { display: 'block' } : { display: 'none' }} className='huidao' />
                <div className='xiaolu' style={this.state.xiaolu ? { display: 'none' } : { display: 'block' }}><img src='/image/timg.gif' /></div>
                <div className='xixi' style={this.state.show ? { display: 'none' } : { display: 'block' }}>没有找到该商品</div>
                <section id="Pct" >
                    {/* 头部 */}

                    <header className="header_cl">
                        <div className="home">
                            <img src="image/pct1.png" className="pct1" onClick={this.gotu} />
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
                    <main className="boxs" ref={(ele) => this.box = ele} onScroll={this.haha} >
                        <div className='buyiy'>
                            <ol className="ol">
                                <li className="lio">默认</li>
                                <li className="lio">销量</li>
                                <li className="lio">价格</li>
                            </ol>
                        </div>
                        <div className="item_one">
                            <div className="items_s" ref={(ele) => this.title = ele}>


                                {
                                    arr.map((item, idx) => (
                                        <dl className="cl" key={idx} onClick={this.tiaozhuan.bind(null, item)}>
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
                                                    < img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACfUExURUxpcexLS+xFRelFRelFRP9VVetGRulFROpFRelFROlFRP9MTOpFRepFROlFROtHROlFROlFRfBLS+pFRP9VVelFRP///+1nZvzr6+1qafzp6fWurulKSfCCgfrV1f319f79/fGLiupQT+tcW/jHx+tVVPnMzO93dvvd3e5vb/vh4Pa6ufzm5uxhYPSgoPe/vv3y8vSnpvOamf74+PKTkmBE4BQAAAAVdFJOUwAbN8v5A2bmXvbsCnzb8k6vjxG3CVdyowAAAAHXSURBVHjapdZpd6owEAbg1AWEKqvvtIrsouCu7f//be255jbBRDken8/MSTITZsIUU9cPJ/ZgYE9C352yDsHIsyCxvFHA7nsfO1A443emNzRMaJnGkGm89XFX/40peiYeMHvsxsjCQ9bo5nt0akX0LHSyetJ5TaCb+XfyYR/AkbI6xkP9/9k18GtFRNkaDxm8vtcNFeWKVh2butZ8DC6mFFjOVZuowD9j9itwwJVEZZGSDl/aCdolSClG8aHKifaiGB7+JHSAVkY8HR5jU6lmES2hsycqefWmzIWQ0w4Kng3OZT6EhrIFNM6UgPNZCKEg+oDGkiJwIZtAcqIYGp+Ug5swG+hKUyUtbLMBJFvaQrWWjjZoB1wogepCNUSAreRPcZTWtdnkpkIVJEU5W8eHjHKIQ4eQLDJqUOWXc3RcJbtTRlfJAiKtPmQ7ylGTkM7r1fFbqqbPXKVE+XIbHb7zdbOvoHD55VOvn4pfPua10/QVzxRiS95tD1vUpLFpdbPAgaSK6rkiAucErSbQbSy3GW49P8WQRF9JedNmmAHJhiiF0BCJn8EQrfJuwEwK6A91zbjZfcaQnNOkEs34uXb/7EB5bWR1D8XXxm73YH/y6fDS4+Tp588PcLqdUFOb62QAAAAASUVORK5CYII=" onClick={this.gouwu.bind(null, item)}
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

                                }  {
                                    arr1.map((item, idx) => (
                                        <dl className="cl" key={idx} onClick={this.tiaozhuan.bind(null, item)}>
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
                                                        className="cars" onClick={this.gouwu.bind(null, item)} />
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

                                }  {
                                    arr2.map((item, idx) => (
                                        <dl className="cl" key={idx} onClick={this.tiaozhuan.bind(null, item)}>
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
                                                        className="cars" onClick={this.gouwu.bind(null, item)} />
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
const mapStateToProps = state => ({
    state
})
Pct = connect(mapStateToProps)(Pct);
Pct = withRouter(Pct);
export default Pct;


