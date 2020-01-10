import React, { Component } from 'react';
import '../css/ddky.css';
import { Carousel, message } from 'antd';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
class Ddky extends Component {
    state = {
        arrs: [
            {
                imgurl: "/image/1556162286832_78_78.jpg",
                name: "感冒发烧",
            },
            {
                imgurl: "/image/1556162353847_78_78.jpg",
                name: "清热解毒",
            },
            {
                imgurl: "/image/1556162136151_78_78.jpg",
                name: "咳嗽用药",
            },
            {
                imgurl: "/image/1556162300107_78_78.jpg",
                name: "皮肤用药",
            },
            {
                imgurl: "/image/1556162343354_78_78.jpg",
                name: "肠胃用药",
            },
            {
                imgurl: "/image/1556162286832_78_78.jpg",
                name: "风湿骨伤",
            },
            {
                imgurl: "/image/1556162313064_78_78.jpg",
                name: "男科用药",
            },
            {
                imgurl: "/image/1556185154329_78_78.jpg",
                name: "三高用药",
            },
            {
                imgurl: "/image/1556162334694_78_78.jpg",
                name: "儿童用药",
            },
            {
                imgurl: "/image/1556162241299_78_78.jpg",
                name: "性福生活",
            },
            {
                imgurl: "/image/1556162324278_78_78.jpg",
                name: "妇科用药",
            },
            {
                imgurl: "/image/1556185136942_78_78.jpg",
                name: "家庭备药",
            },
            {
                imgurl: "/image/1556162109462_78_78.jpg",
                name: "眼科用药",
            },
            {
                imgurl: "/image/1556162166106_78_78.jpg",
                name: "耳鼻喉药",
            },
            {
                imgurl: "/image/1556161906864_78_78.jpg",
                name: "养生花茶",
            },
            {
                imgurl: "/image/1556161758589_78_78.jpg",
                name: "美颜瘦身",
            },
            {
                imgurl: "/image/1556185185194_78_78.jpg",
                name: "滋补调养",
            },
            {
                imgurl: "/image/1556161735470_78_78.jpg",
                name: "维矿补益",
            },
            {
                imgurl: "/image/1556185169764_78_78.jpg",
                name: "医疗器械",
            },
            {
                imgurl: "/image/1556161929329_78_78.jpg",
                name: "个人护理",
            }
        ],
        ganmao: [],
        zirun: [],
        nanxing: [],
        qingqu: [],
        nvxing: [],
        gud: false,
        yanse1: false,
        yanse2: false,
        yanse3: false,
        yanse4: false,
        yanse5: false
    }
    dianji = (item) => {
        this.props.history.push('/ddkypct/' + item)
    }
    async componentDidMount() {
        var { data } = await axios.get("http://localhost:1911/login/ddgm");
        this.setState({
            ganmao: data
        })
        var { data } = await axios.get("http://localhost:1911/login/ddzr");
        this.setState({
            zirun: data
        })
        var { data } = await axios.get("http://localhost:1911/login/ddnx");
        this.setState({
            nanxing: data
        })
        var { data } = await axios.get("http://localhost:1911/login/ddqq");
        this.setState({
            qingqu: data
        })
        var { data } = await axios.get("http://localhost:1911/login/ddnxs");
        this.setState({
            nvxing: data
        })
    }
    gundong = (ev) => {
        if (ev.target.scrollTop > 0) {
            if (ev.target.scrollTop + this.tou.offsetHeight + this.tou1.offsetHeight + this.tou3.offsetHeight > this.title.offsetTop) {
                this.setState({
                    gud: true
                })
            } else {
                this.setState({
                    gud: false
                })
            }

            if (ev.target.scrollTop + this.tou.offsetHeight + this.tou1.offsetHeight + this.tou3.offsetHeight >= this.title1.offsetTop) {
                this.tou1.scrollTo(0, 0);
                this.setState({
                    yanse1: true,
                    yanse2: false,
                    yanse3: false,
                    yanse4: false,
                    yanse5: false,
                })
            }
            if (ev.target.scrollTop >= this.title2.offsetTop) {
                this.tou1.scrollTo(40, 0);
                this.setState({
                    yanse1: false,
                    yanse2: true,
                    yanse3: false,
                    yanse4: false,
                    yanse5: false
                })
            }
            if (ev.target.scrollTop >= this.title3.offsetTop) {
                this.tou1.scrollTo(100, 0);
                this.setState({
                    yanse1: false,
                    yanse2: false,
                    yanse3: true,
                    yanse4: false,
                    yanse5: false
                })

            }
            if (ev.target.scrollTop >= this.title4.offsetTop) {
                this.setState({
                    yanse1: false,
                    yanse3: false,
                    yanse2: false,
                    yanse4: true,
                    yanse5: false
                })

            }
            if (ev.target.scrollTop >= this.title5.offsetTop) {
                this.setState({
                    yanse1: false,
                    yanse3: false,
                    yanse4: false,
                    yanse2: false,
                    yanse5: true
                })

            }
        }
    }
    tiaolie = () => {
        if (this.val.value.trim()) {
            this.props.history.push('/ddkypct/' + this.val.value.trim());
        }
    }
    tiaoyue = (ev) => {
        this.tou1.scrollTo(ev.target.offsetLeft / 5, 0)
        if (ev.target.innerText == '感冒发烧') {

            this.nav.scrollTo(0, this.title1.offsetTop)
        }
        if (ev.target.innerText == '滋润保健') {

            this.nav.scrollTo(0, this.title2.offsetTop)
        }
        if (ev.target.innerText == '男性健康') {

            this.nav.scrollTo(0, this.title3.offsetTop)
        }
        if (ev.target.innerText == '情趣计生') {

            this.nav.scrollTo(0, this.title4.offsetTop)
        } if (ev.target.innerText == '女性健康') {

            this.nav.scrollTo(0, this.title5.offsetTop)
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
        console.log(this.props)
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
    }
    componentWillUnmount() {
        console.log(this.nav.scrollTop)
    }
    render() {
        return (
            <>
                <div className='zong' onScroll={this.gundong} >
                    <div className="head" ref={(ele) => this.tou3 = ele}>
                        <div className='headtop'>
                            <div className='addrBox2'>
                                <img src="/image/AYGRbDgmI2HBAAAAAElFTkSuQmCC.png" />
                                <span>美华北路<img src="/image/23EewAomlKKx5LcX8AAAAAElFTkSuQmCC.png" className='diandian' /></span>
                                <span className='ycss' onClick={this.tiaolie}>搜索</span>
                            </div>
                        </div>
                    </div>
                    <div className='nav' ref={(ele) => this.nav = ele}>
                        <div className='guding' ref={(ele) => this.tou = ele}>
                            <div className='searchBox2'>
                                <input type='text' placeholder="搜索药品、症状、品牌" ref={(ele) => this.val = ele} /><span><img src='/image/ricOr6ygAAdCa71dno9BDX8AAXwMw015VNLoPDDv28ouhlIqn05lVgKdN0I5gr_WtF3QgYDhBU3RgoCk6UNAEHTjYDR0KeDCK50M.png' /></span>
                            </div>
                            <div className='hotsearch'>
                                <ul>
                                    <li>感冒</li>
                                    <li>咳嗽</li>
                                    <li>长白人参</li>
                                    <li>发烧</li>
                                    <li>口罩</li>
                                    <li>避孕</li>
                                    <li>便秘</li>
                                </ul>
                            </div>
                        </div>
                        <ul className='drugList'>
                            {this.state.arrs.map((item, inx) => {
                                return <li key={inx}><img src={item.imgurl} onClick={this.dianji.bind(null, item.name.slice(0, 2))} /><p>{item.name}</p></li>
                            })}

                        </ul>
                        <ul className='priceBox' >
                            <li><img src='/image/4Ad5jeNWsQGYdef_n8ARG6cBSWdxWIAAAAASUVORK5CYII_.png' />附近药店</li>
                            <li><img src='/image/4Ad5jeNWsQGYdef_n8ARG6cBSWdxWIAAAAASUVORK5CYII_.png' />28分钟快送</li>
                            <li><img src='/image/4Ad5jeNWsQGYdef_n8ARG6cBSWdxWIAAAAASUVORK5CYII_.png' />24小时服务</li>
                            <li><img src='/image/4Ad5jeNWsQGYdef_n8ARG6cBSWdxWIAAAAASUVORK5CYII_.png' />满38免费送</li>
                        </ul>
                        <div className='carousel'>
                            <Carousel autoplay>
                                <div>
                                    <img src='/image/1577673306372_720_230.jpg' />
                                </div>
                                <div>
                                    <img src='/image/1577673580515_720_230.jpg' />
                                </div>
                                <div>
                                    <img src='/image/1577674064246_720_230.jpg' />
                                </div>
                                <div>
                                    <img src='/image/1577770495595_720_230.jpg' />
                                </div>
                                <div>
                                    <img src='/image/1577929417533_720_230.jpg' />
                                </div>
                            </Carousel>
                        </div>
                        <div className='headline'>
                            <div className='toutiao'>
                                <img src='/image/toutiao50.png' />
                                <p>武汉不明原因肺炎,已排除SARS等病原,注意这些,做好防范</p>
                                <span>|更多</span>
                            </div>
                        </div>
                        <div className='cuxiao'>
                            <h2>促销专区</h2>
                            <div>
                                <img src='/image/1578041168801_375_168.jpg' />
                                <img src='/image/1578041171369_375_168.jpg' />
                            </div>
                        </div>
                        <div className='gonggao'>
                            <div><img src='/image/gg.png' /></div>
                            <div className='lunbotu'>
                                <Carousel effect="fade" autoplay>
                                    <div>
                                        <h3>路店为您提供24小时快送配送服务</h3>
                                    </div>
                                    <div>
                                        <h3>《互联网药店信息服务资格证书》</h3>
                                    </div>
                                    <div>
                                        <h3>医疗器械:(京)-网城平台备字(2018)第00006号</h3>
                                    </div>
                                    <div>
                                        <h3>合作药店叮当智慧药房(广州)有限公司广州越秀东川</h3>
                                    </div>
                                </Carousel>
                            </div>
                        </div>
                        <div className='haohuo'>
                            <h2>叮当好货</h2>
                        </div>
                        <div className='dblb' style={this.state.gud ? { position: 'fixed', top: '2.5rem', zIndex: '101' } : {}} ref={(ele) => this.tou1 = ele}>
                            <ul>
                                <li onClick={this.tiaoyue} style={this.state.yanse1 ? { fontWeight: '900' } : { fontWeight: 'normal' }}>感冒发烧</li>
                                <li onClick={this.tiaoyue} style={this.state.yanse2 ? { fontWeight: '900' } : { fontWeight: 'normal' }}>滋润保健</li>
                                <li onClick={this.tiaoyue} style={this.state.yanse3 ? { fontWeight: '900' } : { fontWeight: 'normal' }}>男性健康</li>
                                <li onClick={this.tiaoyue} style={this.state.yanse4 ? { fontWeight: '900' } : { fontWeight: 'normal' }}>情趣计生</li>
                                <li onClick={this.tiaoyue} style={this.state.yanse5 ? { fontWeight: '900' } : { fontWeight: 'normal' }}>女性健康</li>
                            </ul>
                        </div>
                        <div className='tupian' ref={(ele) => this.title = ele}>
                            <img src='/image/1577166928105_750_308.jpg' />
                        </div>
                        <div className='ganmao' ref={(ele) => this.title1 = ele}>
                            {this.state.ganmao.map((item, inx) => {
                                return (
                                    <div className='goodss' key={inx} onClick={this.tiaozhuan.bind(null, item)}>
                                        <div className='goods'>
                                            <img src={item.imgurl} />
                                        </div>
                                        <div className='goods_list'>
                                            <p className='one'><span className='one_biaoqian'>28分钟</span>{item.name}</p>
                                            <p className='tow'>
                                                {item.shop}
                                            </p>
                                            <p className='pages'>
                                                <span>满68减28</span>
                                                <span>1元换购</span>

                                            </p>
                                            <div className='down'>
                                                <span className='spec'>￥42.80</span><del>￥49.40</del>
                                                <img src='/image/y6fDS4_Tp588PcLqdUFOb62QAAAAASUVORK5CYII_.png' onClick={this.gouwu.bind(null, item)} />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className='zirun' ref={(ele) => this.title2 = ele}>
                            {this.state.zirun.map((item, inx) => {
                                return (
                                    <div className='goodss' key={inx} onClick={this.tiaozhuan.bind(null, item)} >
                                        <div className='goods'>
                                            <img src={item.imgurl} />
                                        </div>
                                        <div className='goods_list'>
                                            <p className='one'><span className='one_biaoqian'>28分钟</span>{item.name}</p>
                                            <p className='tow'>
                                                {item.shop}
                                            </p>
                                            <p className='pages'>
                                                <span>满68减28</span>
                                                <span>1元换购</span>

                                            </p>
                                            <div className='down'>
                                                <span className='spec'>￥42.80</span><del>￥49.40</del>
                                                <img src='/image/y6fDS4_Tp588PcLqdUFOb62QAAAAASUVORK5CYII_.png' onClick={this.gouwu.bind(null, item)} />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className='nanxing' ref={(ele) => this.title3 = ele}>
                            {this.state.nanxing.map((item, inx) => {
                                return (
                                    <div className='goodss' key={inx} onClick={this.tiaozhuan.bind(null, item)}>
                                        <div className='goods'>
                                            <img src={item.imgurl} />
                                        </div>
                                        <div className='goods_list'>
                                            <p className='one'><span className='one_biaoqian'>28分钟</span>{item.name}</p>
                                            <p className='tow'>
                                                {item.shop}
                                            </p>
                                            <p className='pages'>
                                                <span>满68减28</span>
                                                <span>1元换购</span>

                                            </p>
                                            <div className='down'>
                                                <span className='spec'>￥42.80</span><del>￥49.40</del>
                                                <img src='/image/y6fDS4_Tp588PcLqdUFOb62QAAAAASUVORK5CYII_.png' onClick={this.gouwu.bind(null, item)} />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className='qingqu' ref={(ele) => this.title4 = ele}>
                            {this.state.qingqu.map((item, inx) => {
                                return (
                                    <div className='goodss' key={inx} onClick={this.tiaozhuan.bind(null, item)}>
                                        <div className='goods'>
                                            <img src={item.imgurl} />
                                        </div>
                                        <div className='goods_list'>
                                            <p className='one'><span className='one_biaoqian'>28分钟</span>{item.name}</p>
                                            <p className='tow'>
                                                {item.shop}
                                            </p>
                                            <p className='pages'>
                                                <span>满68减28</span>
                                                <span>1元换购</span>

                                            </p>
                                            <div className='down'>
                                                <span className='spec'>￥42.80</span><del>￥49.40</del>
                                                <img src='/image/y6fDS4_Tp588PcLqdUFOb62QAAAAASUVORK5CYII_.png' onClick={this.gouwu.bind(null, item)} />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className='nvxing' ref={(ele) => this.title5 = ele}  >
                            {this.state.nvxing.map((item, inx) => {
                                return (
                                    <div className='goodss' key={inx} onClick={this.tiaozhuan.bind(null, item)}>
                                        <div className='goods'>
                                            <img src={item.imgurl} />
                                        </div>
                                        <div className='goods_list'>
                                            <p className='one'><span className='one_biaoqian'>28分钟</span>{item.name}</p>
                                            <p className='tow'>
                                                {item.shop}
                                            </p>
                                            <p className='pages'>
                                                <span>满68减28</span>
                                                <span>1元换购</span>

                                            </p>
                                            <div className='down'>
                                                <span className='spec'>￥42.80</span><del>￥49.40</del>
                                                <img src='/image/y6fDS4_Tp588PcLqdUFOb62QAAAAASUVORK5CYII_.png' onClick={this.gouwu.bind(null, item)} />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
const mapStateToProps = state => ({
    state
})
Ddky = connect(mapStateToProps)(Ddky);
Ddky = withRouter(Ddky);
export default Ddky;