import React, { Component } from 'react';
import '../css/ddsc.css';
import { Carousel, message, Button } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';
import { connect } from 'react-redux';

let daojishi = null;
class Ddsc extends Component {

    state = {
        data: {

        },
        daojishi: 0,
        tishi: true

    }



    async componentDidMount() {
        let date = new Date();

        let shi = (date.getHours()) * 60 * 60;
        let fen = (date.getMinutes()) * 60;
        let miao = date.getSeconds();
        daojishi = shi + fen + miao;

        // this.setState({
        //    daojishi

        // })
        // console.log(this.state.daojishi)
        let { data } = await axios.get("http://localhost:1911/login/scsuoyou");
        //    console.log(data[0])
        this.setState({
            data: data[0]

        })


        let guanbi = setInterval(() => {
            daojishi--;
            let daojishi1 = daojishi;
            let shi = this.PrefixZero((Math.floor(daojishi1 / 3600)), 2);
            let fen = this.PrefixZero((Math.floor((daojishi1 - (shi * 3600)) / 60)), 2);
            let miao = this.PrefixZero(((daojishi1 - ((shi * 3600) + (fen * 60)))), 2);

            if (document.getElementById('shi')) {
                document.getElementById('shi').innerHTML = shi
                document.getElementById('fen').innerHTML = fen
                document.getElementById('miao').innerHTML = miao

            } else {
                clearInterval(guanbi)
            }

        }, 1000);

    }
    xqy = (item) => {
        let action = {
            type: 'xqysj',
            payload: item
        }
        this.props.dispatch(action);
        let aa = "/dp"
        this.props.history.push(aa);

    }

    houtai = () => {

        this.props.history.push('/adminlogin')
    }
    warning = () => {
        // console.log('点');
        if (this.state.tishi) {
            message.info('暂未开放噢')
            // console.log('neng')
        }
    }
    miaosha() {
        message.info('还没到时间')
    }
    PrefixZero(num, n) {
        return ((Array(n).join(0) + num).slice(-n));
    }
    render() {

        let { miaosha, pinpaizhuanqu, indexlb } = this.state.data;
        //    let {daojishi}= this.state;
        //    let daojishi1=daojishi;
        //    let shi = this.PrefixZero((Math.floor(daojishi1 / 3600)), 2);
        //     let fen = this.PrefixZero((Math.floor((daojishi1 - (shi * 3600)) / 60)), 2);
        //    let miao = this.PrefixZero(((daojishi1 - ((shi * 3600) + (fen * 60)))), 2);

        let { history } = this.props;
        return (
            <>
                <div className="box">
                    <header>
                        <div className="headerb1">
                            <div className="addrbox">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAEWUlEQVRYR8WZacimYxTHf3/bkD3KTvYlFOGDZUpDGjUkJnxglETZZoYQGmNrshtkmZIlESUjRIl8GBMjW9myZecDGowljKP/2/W83e/9PvdzX9c97/u859vz3Oc6539f1znn+p9zi0yJiHWBTYFNgOOA04Cd0u+1k5nVwG/A18CDwLPAL8BKSf/kuFKOUkQcDJwCHA3sCayXsw4wiE+B54EnJS1vWzcQUETsClwLHAFsA/R2os1u/bl37gfgdeASSZ81GegLKB3PQcDDwG6l3lv0PwHOAZZJ+ruuOw5QRGwJzAUuBDaaYDA9c78D9wA3SPqx6mMMoIiYlo7ofGD9SQLTM+v4uh1YKOmP3p+jgCJiLeAs4C5gnUkG0zP/r2MKWCzpP/9ZBXQC8BjgXRqmOI5Ol/T4KKCI2BFYChwwTCQVXx+7pEj6SumoLgcWAC5+UyE+uquBRQa0OfAMcNhUIKn4fBWYbUD7Am8MIava3vcvYIYBuRJf2aZdex6ADfjs7weeApwlJwJzgL2BDapJk2n/FgNaAfiuyhWDcem/GVgiyb9HJSKcuWcAjktfPVn3ZTLwlgH9Cmyciwb4E5jnnZHkYBwnlZp2Y2IDueZXGZAvPhfFXHnX5aG+M/XFaadeAabnGvaxdwF0gaQ7c5xEhCv/khzdpNMJ0A6SvslxEhHbAt/m6Cad8A45O0oCbztJ3+U4iYitge9zdKuAHJglxGsyj2x1lyx702UiM6hfAo4s2KGRLHPW7F+wyNzlPOChHmVoyDDXIvMdNwW58oEBuabcmrsCmMzCeIUB7Q68X3jTG5TbnXeAR4Dn0tUxCzgVODDtTEmymEEeakBbAC9OIRfqHc7bwPEG5AxbCFw2ROpajxDfFovMiUa2NCIOcSMHbF8QSxOp+hNwrKQVVU79hAnSRHopsPWCpJnWrwLaA3Cr65gapvwMHC7pwzGA0tFdDNw0TDTAVZKu6fmsN4ruWl8GTGtLUrbLO7h0vAfMkvRlEyDzorPd4haSti6ATPQuSqzTWTYi/Xp7z4CccTO6eClY40nIMZI8PxqVpumHj2xZGlAV+MhWNW2eLsn36BhpjJOIODmxvZLLMQeRwcyV9EA/5UGAPP24AzizkHMPAmUy6LZpvqRVRYBSGdgrxdM+Oa+eofMFMFPSR026rakdEa6gjwKbZTgcpOLgnSPp6UFKOYBcCky27i2kKFW/phbzgbubSF1j2vdDHxFuiz3Icptcwr9tznHjEfE8SQ7ogdK6Q73VEbELcB9wVJvR2nNPNTyQ+jxnXTagFOQ7JzLnnj1HHMQeRHlWnSVFgBKo/dIg3E1g03rfU+7dTpL0WhaSpNQFkIPcvGkxsFWDs5VpFu3pfd+BROe0bwhyf1rwpwZX2/qgwkHswbjbpHGD8bbdKt6hqsGIODfxJ2ehxTf4AkmeHXWSNQXkEbJJ3aWpQbgeuK06CC9FtUaAUpBvmED57rtOkj8bdJb/AYGRbDgmI2HBAAAAAElFTkSuQmCC"
                                    alt="" className="addrbox-img1" />
                                <span className="position_addr">美华北路</span>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAYCAYAAADKx8xXAAABiUlEQVQ4T4WTPyivYRTHP1/UXRSzMuoOtls2JDHcUga3O1hu6Wc0EfmTP7lXhMF665bVYsCmZDMxmPyZkEEGJUqiczt6Xj0e7+/9neWt83w/73nOec5XhDCzeuBB0kuWK/rKD81sDRgCroFeSUeVYJlZE3AWCW+BdkknhRXNrAG4AGoi4RXQJsnzuZFddRhYSRTnAb7JI9/A0OcE8CcRHQMdku5S+B0M8BQwn4gOgG5Jj3H+AxjgGWA2gXeBHknPWf4TGOA5YDqBN4Gfkl49nwsG+DcwmcDrwIAkKwsGeAEYT+BVSSOFYICXgZEINuBrpYpVwAbwI6naXAn8Cwwm0D9JpaLhLAJjCbQF9LmDyj3HKLCUQPvAd0lPuc9hZiXArxj/9BDolHSfuwBm1heGUR1VOw3L7nZ7j3jJu4Ad4Et07vZqlXSZu+Rm1gLsAbWRwCu4J73ip8j86D18i069F+/J87mRgX6VxqDwqfn0fIplIwN/hUm6bfolbRdBH57DzOqAl9Sw5X7wH4K8iWJdBexdAAAAAElFTkSuQmCC"
                                    alt="" className="addrbox-img1" />
                            </div>
                            <div className="search">
                                <input type="text" className="search-input1" placeholder="搜索" />
                                <img className="search-img1"
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAACOElEQVRIS83Wv28TMRQH8O9zfnRJ06GZkGBh4KfEwl+AxNAJENChRWJBiqpcQs6liNEjovSuhIuqSCxIlKEVokwMSGxsLEj8HBhgYEqHXLO0ufihE00jaHpx0iTixjvbH9vv+fkIHZ5KpZKo13cuC0GXmHEewJHdZr+I8F5rfpVKJTey2WyjU/+od/TvR8fxrjDzIhGOR3VkxnciWpDSetkLugcqpUQ6nblPhDvMTET4yCyexOPNN7FY7Gc4aLPZPBYEsYtE+hYzzhIRM+Oh71fvKaW0CbwHOo73AOAFZt4RQsharbpy0CDh5CYmMnNaa4eIkgAtSmndNQbDbSTCC611Qwiasu38W5POrrtyQevGayFEghlXTbaXdhPkSxgzIrJs2yqbYK02ruvlmNkLY5pKJU91SyRaWnp8nQhrYcxqtc1zprFogX+2d/JDGFNmTM/P59cjs9R1vWfMPAuIopS5R72srtXWccq3Ab1MRKu2bd2IBB3H+wrwiXiczxQKhc/9gKVS6XQQ0CeAvklpnewG+gCPj42J8VwuV+8HLJfLqe1tvQXQlpRW+r8DR7ulI0+akR+LkR/8MKP+Lm2JKdueG15pax/ewxRv/ADwzvc3byqlAqP7sP/ricOr6ygAAdCa71dno9BDX8AAXwMw015VNLoPDDv28ouhlIqn05lVgKdN0I5gr+WtF3QgYDhBU3RgoCk6UNAEHTjYDR0KeDCK50MD96McCEEzQwXb6ORTIbBRLObXfwMOWbgMaYofjQAAAABJRU5ErkJggg=="
                                    alt="" onClick={() => {
                                        history.push('/ddscxq/')
                                    }} />
                            </div>
                        </div>
                    </header>
                    <main className="main0">
                        <div className="lunbo">
                            <Carousel autoplay>
                                <div>
                                    <img src="https://img.ddky.com/c/cms/temp/20191225/1577271987660_1080_345.jpg" />
                                </div>
                                <div>
                                    <img src="https://img.ddky.com/c/cms/temp/20200106/1578276582900_1080_345.jpg" />
                                </div>
                                <div>
                                    <img src="https://img.ddky.com/c/cms/temp/20191225/1577244371624_1080_345.jpg" />
                                </div>
                                <div>
                                    <img src="https://img.ddky.com/c/cms/temp/20200103/1578028253658_1080_345.jpg" />
                                </div>
                                <div>
                                    <img src="https://img.ddky.com/c/cms/temp/20200103/1578020897997_1080_345.jpg" />
                                </div>
                                <div>
                                    <img src="https://img.ddky.com/c/cms/temp/20200102/1577959295113_1080_345.jpg" />
                                </div>
                                <div>
                                    <img src="https://img.ddky.com/c/cms/temp/20191227/1577423237571_1080_345.jpg" />
                                </div>
                                <div>
                                    <img src="https://img.ddky.com/c/cms/temp/20191231/1577781337023_1080_345.jpg" />
                                </div>
                            </Carousel>



                        </div>
                        <div className="main1">
                            <div className="advicebox">
                                <img src="https://img.ddky.com/c/cms/temp/20190911/1568195178317_270_252.jpg" alt="" onClick={this.warning} />
                                <img src="https://img.ddky.com/c/cms/temp/20190911/1568195199372_270_252.jpg" alt="" onClick={this.warning} />
                                <img src="https://img.ddky.com/c/cms/temp/20191228/1577520817744_270_252.jpg" alt="" onClick={this.warning} />
                                <img src="https://img.ddky.com/c/cms/temp/20190911/1568195093878_270_252.jpg" alt="" onClick={this.warning} />
                            </div>
                            <div className="advicebox">
                                <img src="https://img.ddky.com/c/cms/temp/20191231/1577792150154_270_252.jpg" alt="" onClick={this.warning} />
                                <img src="https://img.ddky.com/c/cms/temp/20191108/1573178662412_270_252.jpg" alt="" onClick={this.warning} />
                                <img src="https://img.ddky.com/c/cms/temp/20200106/1578276528091_270_252.jpg" alt="" onClick={this.warning} />
                                <img src="https://img.ddky.com/c/cms/temp/20200106/1578276530105_270_252.jpg" alt="" onClick={this.warning} />
                            </div>
                        </div>

                        <div className="main2">
                            <div className="main2-1">
                                <img src="https://img.ddky.com/c/cms/temp/20191112/1573524106331_216_252.jpg" alt="" onClick={() => {
                                    history.push('/ddscxq/')
                                }} />
                                <img src="https://img.ddky.com/c/cms/temp/20191123/1574501760060_216_252.jpg" alt="" onClick={() => {
                                    history.push('/ddscxq/')
                                }} />
                                <img src="https://img.ddky.com/c/cms/temp/20191011/1570775807773_216_252.jpg" alt="" onClick={() => {
                                    history.push('/ddscxq/')
                                }} />
                                <img src="https://img.ddky.com/c/cms/temp/20191011/1570775822234_216_252.jpg" alt="" onClick={() => {
                                    history.push('/ddscxq/')
                                }} />
                                <img src="https://img.ddky.com/c/cms/temp/20191011/1570792013133_216_252.jpg" alt="" onClick={() => {
                                    history.push('/ddscxq/')
                                }} />
                                <img src="https://img.ddky.com/c/cms/temp/20190628/1561687452768_216_252.jpg" alt="" onClick={() => {
                                    history.push('/ddscxq/')
                                }} />
                                <img src="https://img.ddky.com/c/cms/temp/20190628/1561691530711_216_252.jpg" alt="" onClick={() => {
                                    history.push('/ddscxq/')
                                }} />
                                <img src="https://img.ddky.com/c/cms/temp/20190813/1565680344127_216_252.jpg" alt="" onClick={() => {
                                    history.push('/ddscxq/')
                                }} />
                                <img src="https://img.ddky.com/c/cms/temp/20191011/1570775840587_216_252.jpg" alt="" onClick={() => {
                                    history.push('/ddscxq/')
                                }} />
                                <img src="https://img.ddky.com/c/cms/temp/20191011/1570792032169_216_252.jpg" alt="" onClick={() => {
                                    history.push('/ddscxq/')
                                }} />
                                <img src="https://img.ddky.com/c/cms/temp/20191011/1570775847004_216_252.jpg" alt="" onClick={() => {
                                    history.push('/ddscxq/')
                                }} />
                                <img src="https://img.ddky.com/c/cms/temp/20190813/1565680307399_216_252.jpg" alt="" onClick={() => {
                                    history.push('/ddscxq/')
                                }} />
                                <img src="https://img.ddky.com/c/cms/temp/20191011/1570792021422_216_252.jpg" alt="" onClick={() => {
                                    history.push('/ddscxq/')
                                }} />
                                <img src="https://img.ddky.com/c/cms/temp/20190628/1561687568434_216_252.jpg" alt="" onClick={() => {
                                    history.push('/ddscxq/')
                                }} />
                            </div>
                        </div>

                        <div className="main3">
                            <div>
                                <div className="main3-1">
                                    <div className="timer">
                                        <div className="countdown">
                                            <p className="timermiaosha" onClick={this.houtai}>秒杀</p>


                                            {/* {
                                    
                                     daojishi
                                    
                                } */}
                                            <span id='shi'></span> 时
                            <span id='fen'></span> 分
                            <span id='miao'></span> 秒
                            </div>
                                    </div>
                                    <div className="main3-1a">
                                        {
                                            miaosha ? miaosha.map((item, idx) => (
                                                <div className="main3-1a1" key={idx} onClick={this.miaosha}>
                                                    <img src={item.miaoshaurl}
                                                        alt="" />
                                                    <p className="main3-1a1m">{item.miaoshabiaoti}</p>
                                                    <p className="xianjia">
                                                        <span>￥</span> {item.miaoshaxianjia}
                                                    </p>
                                                    <p className="yuanjia">
                                                        <span>￥</span> {item.miaoshayuanjia}
                                                    </p>
                                                </div>
                                            )) : ''
                                        }
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="main3-2">
                                    <div className="z1y2">
                                        <img src="https://img.ddky.com/c/cms/temp/20200103/1578029615534_540_504.jpg" alt="" className="z1y2-1" />
                                        <img src="https://img.ddky.com/c/cms/temp/20200106/1578275079470_540_252.jpg" alt="" className="z1y2-2" />
                                        <img src="https://img.ddky.com/c/cms/temp/20191112/1573524587074_540_252.jpg" alt="" className="z1y2-2 z1y2-3" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="main3-3">
                                    <p className="pinpaititle">品牌专区</p>
                                    <div className="main3-3-1">
                                        <img src="https://img.ddky.com/c/cms/temp/20200103/1578019740252_1080_345.jpg" alt="" />
                                    </div>
                                    <div className="main3-3-2">


                                        {
                                            pinpaizhuanqu ? pinpaizhuanqu.map((item, idx) => (
                                                <div className="brandCard" key={idx}>
                                                    <img src={item.ppzqurl} alt="" />
                                                    <p className="brandName">{item.ppzqbiaoti}</p>
                                                    <p className="xianjia">
                                                        <span>￥</span> {item.ppzqjiage}
                                                    </p>
                                                </div>
                                            )) : ''
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="main4">
                            <div className="ulDad">
                                <ul className="ulDadul">
                                    <li>
                                        <span className="active">男性健康</span>
                                    </li>
                                    <li>
                                        <span>热销推荐</span>
                                    </li>
                                    <li>
                                        <span>情趣用品</span>
                                    </li>
                                    <li>
                                        <span>营养保健</span>
                                    </li>
                                    <li>
                                        <span>避孕验孕</span>
                                    </li>
                                    <li>
                                        <span>慢病调理</span>
                                    </li>
                                    <li>
                                        <span>儿童健康</span>
                                    </li>
                                    <li>
                                        <span>咳喘</span>
                                    </li>
                                    <li>
                                        <span>前列腺</span>
                                    </li>
                                </ul>

                            </div>
                            <div className="imgList">

                                <div className="nxjk">
                                    {


                                        // nxjkjuan: "立省44.40元"
                                        // nxjkname: "滋阴补肾益精 阴阳同补治疗肾虚"
                                        // nxjktitle: "肾阴亏组包"
                                        // nxjkurl: "https://img.ddky.com/c/cms/temp/20180116/1516086634926_336_248.jpg"
                                        // nxjkxianjia: "￥207.00"
                                        // nxjkyuanjia: "￥251.40"


                                        // console.log(indexlb[0])
                                        indexlb ? indexlb[0].map((item, idx) => (

                                            <div className="b2cdrugbox" key={idx} onClick={this.xqy.bind(this, {
                                                xurl: item.nxjkurl,
                                                xname: item.nxjkname,
                                                xtitle: item.nxjktitle,
                                                xliang: '6g×10袋',
                                                xjiage: item.nxjkxianjia,
                                                xxiangliang: '月销2253',
                                                uid: item.uid
                                            })}>
                                                <div className="imgListBox">
                                                    <img src={item.nxjkurl} alt="" className="imgPreBox" />
                                                    <div className="infoBox">
                                                        <p className="name">
                                                            <span className="sign">1-3天</span> {item.nxjkname}
                                                        </p>
                                                        <p className="zhuzhi_info">{item.nxjktitle}</p>
                                                        <div className="prootiomBox">
                                                            <span className="promotion">{item.nxjkjuan}</span>
                                                        </div>
                                                        <div className="goods_buyBox">
                                                            <div className="aboutLeft f1">
                                                                <p className="setmeal fl">{item.nxjkxianjia}</p>
                                                                <p className="sales fl">{item.nxjkyuanjia}</p>
                                                            </div>
                                                            <div className="addCarbox">
                                                                < img className="addCarImg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACfUExURUxpcexLS+xFRelFRelFRP9VVetGRulFROpFRelFROlFRP9MTOpFRepFROlFROtHROlFROlFRfBLS+pFRP9VVelFRP///+1nZvzr6+1qafzp6fWurulKSfCCgfrV1f319f79/fGLiupQT+tcW/jHx+tVVPnMzO93dvvd3e5vb/vh4Pa6ufzm5uxhYPSgoPe/vv3y8vSnpvOamf74+PKTkmBE4BQAAAAVdFJOUwAbN8v5A2bmXvbsCnzb8k6vjxG3CVdyowAAAAHXSURBVHjapdZpd6owEAbg1AWEKqvvtIrsouCu7f//be255jbBRDken8/MSTITZsIUU9cPJ/ZgYE9C352yDsHIsyCxvFHA7nsfO1A443emNzRMaJnGkGm89XFX/40peiYeMHvsxsjCQ9bo5nt0akX0LHSyetJ5TaCb+XfyYR/AkbI6xkP9/9k18GtFRNkaDxm8vtcNFeWKVh2butZ8DC6mFFjOVZuowD9j9itwwJVEZZGSDl/aCdolSClG8aHKifaiGB7+JHSAVkY8HR5jU6lmES2hsycqefWmzIWQ0w4Kng3OZT6EhrIFNM6UgPNZCKEg+oDGkiJwIZtAcqIYGp+Ug5swG+hKUyUtbLMBJFvaQrWWjjZoB1wogepCNUSAreRPcZTWtdnkpkIVJEU5W8eHjHKIQ4eQLDJqUOWXc3RcJbtTRlfJAiKtPmQ7ylGTkM7r1fFbqqbPXKVE+XIbHb7zdbOvoHD55VOvn4pfPua10/QVzxRiS95tD1vUpLFpdbPAgaSK6rkiAucErSbQbSy3GW49P8WQRF9JedNmmAHJhiiF0BCJn8EQrfJuwEwK6A91zbjZfcaQnNOkEs34uXb/7EB5bWR1D8XXxm73YH/y6fDS4+Tp588PcLqdUFOb62QAAAAASUVORK5CYII=" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        )) : ''

                                    }
                                </div>

                                <div className="rxtj">
                                    {
                                        indexlb ? indexlb[1].map((item, idx) => (
                                            <div className="b2cdrugbox" key={idx} onClick={this.xqy.bind(this, {
                                                xurl: item.rxtjurl,
                                                xname: item.rxtjname,
                                                xtitle: item.rxtjtitle,
                                                xliang: '6g×10袋',
                                                xjiage: item.rxtjxianjia,
                                                xxiangliang: '月销2253',
                                                uid: item.uid,
                                                
                                            })}>
                                                <div className="imgListBox">

                                                    <img src={item.rxtjurl} alt="" className="imgPreBox" />
                                                    <div className="infoBox">
                                                        <p className="name">

                                                            <span className="sign">1-3天</span> {item.rxtjname}
                                                        </p>

                                                        <p className="zhuzhi_info">{item.rxtjtitle}</p>
                                                        <div className="prootiomBox">

                                                            <span className="promotion">{item.rxtjjuan}</span>
                                                        </div>
                                                        <div className="goods_buyBox">
                                                            <div className="aboutLeft f1">

                                                                <p className="setmeal fl">{item.rxtjxianjia}</p>
                                                                <p className="sales fl">{item.rxtjyuanjia}</p>
                                                            </div>
                                                            <div className="addCarbox">
                                                                < img className="addCarImg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACfUExURUxpcexLS+xFRelFRelFRP9VVetGRulFROpFRelFROlFRP9MTOpFRepFROlFROtHROlFROlFRfBLS+pFRP9VVelFRP///+1nZvzr6+1qafzp6fWurulKSfCCgfrV1f319f79/fGLiupQT+tcW/jHx+tVVPnMzO93dvvd3e5vb/vh4Pa6ufzm5uxhYPSgoPe/vv3y8vSnpvOamf74+PKTkmBE4BQAAAAVdFJOUwAbN8v5A2bmXvbsCnzb8k6vjxG3CVdyowAAAAHXSURBVHjapdZpd6owEAbg1AWEKqvvtIrsouCu7f//be255jbBRDken8/MSTITZsIUU9cPJ/ZgYE9C352yDsHIsyCxvFHA7nsfO1A443emNzRMaJnGkGm89XFX/40peiYeMHvsxsjCQ9bo5nt0akX0LHSyetJ5TaCb+XfyYR/AkbI6xkP9/9k18GtFRNkaDxm8vtcNFeWKVh2butZ8DC6mFFjOVZuowD9j9itwwJVEZZGSDl/aCdolSClG8aHKifaiGB7+JHSAVkY8HR5jU6lmES2hsycqefWmzIWQ0w4Kng3OZT6EhrIFNM6UgPNZCKEg+oDGkiJwIZtAcqIYGp+Ug5swG+hKUyUtbLMBJFvaQrWWjjZoB1wogepCNUSAreRPcZTWtdnkpkIVJEU5W8eHjHKIQ4eQLDJqUOWXc3RcJbtTRlfJAiKtPmQ7ylGTkM7r1fFbqqbPXKVE+XIbHb7zdbOvoHD55VOvn4pfPua10/QVzxRiS95tD1vUpLFpdbPAgaSK6rkiAucErSbQbSy3GW49P8WQRF9JedNmmAHJhiiF0BCJn8EQrfJuwEwK6A91zbjZfcaQnNOkEs34uXb/7EB5bWR1D8XXxm73YH/y6fDS4+Tp588PcLqdUFOb62QAAAAASUVORK5CYII=" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        )) : ''
                                    }
                                </div>
                                <div className="qqyp">
                                    {
                                        indexlb ? indexlb[2].map((item, idx) => (
                                            <div className="b2cdrugbox" key={idx} onClick={this.xqy.bind(this, {
                                                xurl: item.qqypurl,
                                                xname: item.qqypname,
                                                xtitle: item.qqyptitle,
                                                xliang: '6g×10袋',
                                                xjiage: item.qqypxianjia,
                                                xxiangliang: '月销2253',
                                                uid: item.uid
                                            })}>
                                                <div className="imgListBox">

                                                    <img src={item.qqypurl} alt="" className="imgPreBox" />
                                                    <div className="infoBox">
                                                        <p className="name">

                                                            <span className="sign">1-3天</span> {item.qqypname}
                                                        </p>

                                                        <p className="zhuzhi_info">{item.qqyptitle}</p>
                                                        <div className="prootiomBox">

                                                            <span className="promotion">{item.qqypjuan}</span>
                                                        </div>
                                                        <div className="goods_buyBox">
                                                            <div className="aboutLeft f1">

                                                                <p className="setmeal fl">{item.qqypxianjia}</p>
                                                                <p className="sales fl">{item.qqypyuanjia}</p>
                                                            </div>
                                                            <div className="addCarbox">
                                                                < img className="addCarImg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACfUExURUxpcexLS+xFRelFRelFRP9VVetGRulFROpFRelFROlFRP9MTOpFRepFROlFROtHROlFROlFRfBLS+pFRP9VVelFRP///+1nZvzr6+1qafzp6fWurulKSfCCgfrV1f319f79/fGLiupQT+tcW/jHx+tVVPnMzO93dvvd3e5vb/vh4Pa6ufzm5uxhYPSgoPe/vv3y8vSnpvOamf74+PKTkmBE4BQAAAAVdFJOUwAbN8v5A2bmXvbsCnzb8k6vjxG3CVdyowAAAAHXSURBVHjapdZpd6owEAbg1AWEKqvvtIrsouCu7f//be255jbBRDken8/MSTITZsIUU9cPJ/ZgYE9C352yDsHIsyCxvFHA7nsfO1A443emNzRMaJnGkGm89XFX/40peiYeMHvsxsjCQ9bo5nt0akX0LHSyetJ5TaCb+XfyYR/AkbI6xkP9/9k18GtFRNkaDxm8vtcNFeWKVh2butZ8DC6mFFjOVZuowD9j9itwwJVEZZGSDl/aCdolSClG8aHKifaiGB7+JHSAVkY8HR5jU6lmES2hsycqefWmzIWQ0w4Kng3OZT6EhrIFNM6UgPNZCKEg+oDGkiJwIZtAcqIYGp+Ug5swG+hKUyUtbLMBJFvaQrWWjjZoB1wogepCNUSAreRPcZTWtdnkpkIVJEU5W8eHjHKIQ4eQLDJqUOWXc3RcJbtTRlfJAiKtPmQ7ylGTkM7r1fFbqqbPXKVE+XIbHb7zdbOvoHD55VOvn4pfPua10/QVzxRiS95tD1vUpLFpdbPAgaSK6rkiAucErSbQbSy3GW49P8WQRF9JedNmmAHJhiiF0BCJn8EQrfJuwEwK6A91zbjZfcaQnNOkEs34uXb/7EB5bWR1D8XXxm73YH/y6fDS4+Tp588PcLqdUFOb62QAAAAASUVORK5CYII=" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        )) : ''
                                    }
                                </div>
                                <div className="yybj">
                                    {
                                        indexlb ? indexlb[3].map((item, idx) => (
                                            <div className="b2cdrugbox" key={idx} onClick={this.xqy.bind(this, {
                                                xurl: item.yybjurl,
                                                xname: item.yybjname,
                                                xtitle: item.yybjtitle,
                                                xliang: '6g×10袋',
                                                xjiage: item.yybjxianjia,
                                                xxiangliang: '月销2253',
                                                uid: item.uid
                                            })}>
                                                <div className="imgListBox">

                                                    <img src={item.yybjurl} alt="" className="imgPreBox" />
                                                    <div className="infoBox">
                                                        <p className="name">

                                                            <span className="sign">1-3天</span> {item.yybjname}
                                                        </p>

                                                        <p className="zhuzhi_info">{item.yybjtitle}</p>
                                                        <div className="prootiomBox">

                                                            <span className="promotion">{item.yybjjuan}</span>
                                                        </div>
                                                        <div className="goods_buyBox">
                                                            <div className="aboutLeft f1">

                                                                <p className="setmeal fl">{item.yybjxianjia}</p>
                                                                <p className="sales fl">{item.yybjyuanjia}</p>
                                                            </div>
                                                            <div className="addCarbox">
                                                                < img className="addCarImg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACfUExURUxpcexLS+xFRelFRelFRP9VVetGRulFROpFRelFROlFRP9MTOpFRepFROlFROtHROlFROlFRfBLS+pFRP9VVelFRP///+1nZvzr6+1qafzp6fWurulKSfCCgfrV1f319f79/fGLiupQT+tcW/jHx+tVVPnMzO93dvvd3e5vb/vh4Pa6ufzm5uxhYPSgoPe/vv3y8vSnpvOamf74+PKTkmBE4BQAAAAVdFJOUwAbN8v5A2bmXvbsCnzb8k6vjxG3CVdyowAAAAHXSURBVHjapdZpd6owEAbg1AWEKqvvtIrsouCu7f//be255jbBRDken8/MSTITZsIUU9cPJ/ZgYE9C352yDsHIsyCxvFHA7nsfO1A443emNzRMaJnGkGm89XFX/40peiYeMHvsxsjCQ9bo5nt0akX0LHSyetJ5TaCb+XfyYR/AkbI6xkP9/9k18GtFRNkaDxm8vtcNFeWKVh2butZ8DC6mFFjOVZuowD9j9itwwJVEZZGSDl/aCdolSClG8aHKifaiGB7+JHSAVkY8HR5jU6lmES2hsycqefWmzIWQ0w4Kng3OZT6EhrIFNM6UgPNZCKEg+oDGkiJwIZtAcqIYGp+Ug5swG+hKUyUtbLMBJFvaQrWWjjZoB1wogepCNUSAreRPcZTWtdnkpkIVJEU5W8eHjHKIQ4eQLDJqUOWXc3RcJbtTRlfJAiKtPmQ7ylGTkM7r1fFbqqbPXKVE+XIbHb7zdbOvoHD55VOvn4pfPua10/QVzxRiS95tD1vUpLFpdbPAgaSK6rkiAucErSbQbSy3GW49P8WQRF9JedNmmAHJhiiF0BCJn8EQrfJuwEwK6A91zbjZfcaQnNOkEs34uXb/7EB5bWR1D8XXxm73YH/y6fDS4+Tp588PcLqdUFOb62QAAAAASUVORK5CYII=" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        )) : ''
                                    }
                                </div>
                                <div className="byyy">
                                    {
                                        indexlb ? indexlb[4].map((item, idx) => (
                                            <div className="b2cdrugbox" key={idx} onClick={this.xqy.bind(this, {
                                                xurl: item.byyyurl,
                                                xname: item.byyyname,
                                                xtitle: item.byyytitle,
                                                xliang: '6g×10袋',
                                                xjiage: item.byyyxianjia,
                                                xxiangliang: '月销2253',
                                                uid: item.uid
                                            })}>
                                                <div className="imgListBox">

                                                    <img src={item.byyyurl} alt="" className="imgPreBox" />
                                                    <div className="infoBox">
                                                        <p className="name">

                                                            <span className="sign">1-3天</span> {item.byyyname}
                                                        </p>

                                                        <p className="zhuzhi_info">{item.byyytitle}</p>
                                                        <div className="prootiomBox">

                                                            <span className="promotion">{item.byyyjuan}</span>
                                                        </div>
                                                        <div className="goods_buyBox">
                                                            <div className="aboutLeft f1">

                                                                <p className="setmeal fl">{item.byyyxianjia}</p>
                                                                <p className="sales fl">{item.byyyuanjia}</p>
                                                            </div>
                                                            <div className="addCarbox">
                                                                < img className="addCarImg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACfUExURUxpcexLS+xFRelFRelFRP9VVetGRulFROpFRelFROlFRP9MTOpFRepFROlFROtHROlFROlFRfBLS+pFRP9VVelFRP///+1nZvzr6+1qafzp6fWurulKSfCCgfrV1f319f79/fGLiupQT+tcW/jHx+tVVPnMzO93dvvd3e5vb/vh4Pa6ufzm5uxhYPSgoPe/vv3y8vSnpvOamf74+PKTkmBE4BQAAAAVdFJOUwAbN8v5A2bmXvbsCnzb8k6vjxG3CVdyowAAAAHXSURBVHjapdZpd6owEAbg1AWEKqvvtIrsouCu7f//be255jbBRDken8/MSTITZsIUU9cPJ/ZgYE9C352yDsHIsyCxvFHA7nsfO1A443emNzRMaJnGkGm89XFX/40peiYeMHvsxsjCQ9bo5nt0akX0LHSyetJ5TaCb+XfyYR/AkbI6xkP9/9k18GtFRNkaDxm8vtcNFeWKVh2butZ8DC6mFFjOVZuowD9j9itwwJVEZZGSDl/aCdolSClG8aHKifaiGB7+JHSAVkY8HR5jU6lmES2hsycqefWmzIWQ0w4Kng3OZT6EhrIFNM6UgPNZCKEg+oDGkiJwIZtAcqIYGp+Ug5swG+hKUyUtbLMBJFvaQrWWjjZoB1wogepCNUSAreRPcZTWtdnkpkIVJEU5W8eHjHKIQ4eQLDJqUOWXc3RcJbtTRlfJAiKtPmQ7ylGTkM7r1fFbqqbPXKVE+XIbHb7zdbOvoHD55VOvn4pfPua10/QVzxRiS95tD1vUpLFpdbPAgaSK6rkiAucErSbQbSy3GW49P8WQRF9JedNmmAHJhiiF0BCJn8EQrfJuwEwK6A91zbjZfcaQnNOkEs34uXb/7EB5bWR1D8XXxm73YH/y6fDS4+Tp588PcLqdUFOb62QAAAAASUVORK5CYII=" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        )) : ''
                                    }
                                </div>
                                <div className="mbtl">
                                    {
                                        indexlb ? indexlb[5].map((item, idx) => (
                                            <div className="b2cdrugbox" key={idx} onClick={this.xqy.bind(this, {
                                                xurl: item.mbtlurl,
                                                xname: item.mbtlname,
                                                xtitle: item.mbtltitle,
                                                xliang: '6g×10袋',
                                                xjiage: item.mbtlxianjia,
                                                xxiangliang: '月销2253',
                                                uid: item.uid
                                            })}>
                                                <div className="imgListBox">

                                                    <img src={item.mbtlurl} alt="" className="imgPreBox" />
                                                    <div className="infoBox">
                                                        <p className="name">

                                                            <span className="sign">1-3天</span> {item.mbtlname}
                                                        </p>

                                                        <p className="zhuzhi_info">{item.mbtltitle}</p>
                                                        <div className="prootiomBox">

                                                            <span className="promotion">{item.mbtljuan}</span>
                                                        </div>
                                                        <div className="goods_buyBox">
                                                            <div className="aboutLeft f1">

                                                                <p className="setmeal fl">{item.mbtlxianjia}</p>
                                                                <p className="sales fl">{item.mbtlyuanjia}</p>
                                                            </div>
                                                            <div className="addCarbox">
                                                                < img className="addCarImg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACfUExURUxpcexLS+xFRelFRelFRP9VVetGRulFROpFRelFROlFRP9MTOpFRepFROlFROtHROlFROlFRfBLS+pFRP9VVelFRP///+1nZvzr6+1qafzp6fWurulKSfCCgfrV1f319f79/fGLiupQT+tcW/jHx+tVVPnMzO93dvvd3e5vb/vh4Pa6ufzm5uxhYPSgoPe/vv3y8vSnpvOamf74+PKTkmBE4BQAAAAVdFJOUwAbN8v5A2bmXvbsCnzb8k6vjxG3CVdyowAAAAHXSURBVHjapdZpd6owEAbg1AWEKqvvtIrsouCu7f//be255jbBRDken8/MSTITZsIUU9cPJ/ZgYE9C352yDsHIsyCxvFHA7nsfO1A443emNzRMaJnGkGm89XFX/40peiYeMHvsxsjCQ9bo5nt0akX0LHSyetJ5TaCb+XfyYR/AkbI6xkP9/9k18GtFRNkaDxm8vtcNFeWKVh2butZ8DC6mFFjOVZuowD9j9itwwJVEZZGSDl/aCdolSClG8aHKifaiGB7+JHSAVkY8HR5jU6lmES2hsycqefWmzIWQ0w4Kng3OZT6EhrIFNM6UgPNZCKEg+oDGkiJwIZtAcqIYGp+Ug5swG+hKUyUtbLMBJFvaQrWWjjZoB1wogepCNUSAreRPcZTWtdnkpkIVJEU5W8eHjHKIQ4eQLDJqUOWXc3RcJbtTRlfJAiKtPmQ7ylGTkM7r1fFbqqbPXKVE+XIbHb7zdbOvoHD55VOvn4pfPua10/QVzxRiS95tD1vUpLFpdbPAgaSK6rkiAucErSbQbSy3GW49P8WQRF9JedNmmAHJhiiF0BCJn8EQrfJuwEwK6A91zbjZfcaQnNOkEs34uXb/7EB5bWR1D8XXxm73YH/y6fDS4+Tp588PcLqdUFOb62QAAAAASUVORK5CYII=" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        )) : ''
                                    }
                                </div>
                                <div className="etjk">
                                    {
                                        indexlb ? indexlb[6].map((item, idx) => (
                                            <div className="b2cdrugbox" key={idx} onClick={this.xqy.bind(this, {
                                                xurl: item.etjkurl,
                                                xname: item.etjkname,
                                                xtitle: item.etjktitle,
                                                xliang: '6g×10袋',
                                                xjiage: item.etjkxianjia,
                                                xxiangliang: '月销2253',
                                                uid: item.uid
                                            })}>
                                                <div className="imgListBox">

                                                    <img src={item.etjkurl} alt="" className="imgPreBox" />
                                                    <div className="infoBox">
                                                        <p className="name">

                                                            <span className="sign">1-3天</span> {item.etjname}
                                                        </p>

                                                        <p className="zhuzhi_info">{item.etjtitle}</p>
                                                        <div className="prootiomBox">

                                                            <span className="promotion">{item.etjjuan}</span>
                                                        </div>
                                                        <div className="goods_buyBox">
                                                            <div className="aboutLeft f1">

                                                                <p className="setmeal fl">{item.etjxianjia}</p>
                                                                <p className="sales fl">{item.etjyuanjia}</p>
                                                            </div>
                                                            <div className="addCarbox">
                                                                < img className="addCarImg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACfUExURUxpcexLS+xFRelFRelFRP9VVetGRulFROpFRelFROlFRP9MTOpFRepFROlFROtHROlFROlFRfBLS+pFRP9VVelFRP///+1nZvzr6+1qafzp6fWurulKSfCCgfrV1f319f79/fGLiupQT+tcW/jHx+tVVPnMzO93dvvd3e5vb/vh4Pa6ufzm5uxhYPSgoPe/vv3y8vSnpvOamf74+PKTkmBE4BQAAAAVdFJOUwAbN8v5A2bmXvbsCnzb8k6vjxG3CVdyowAAAAHXSURBVHjapdZpd6owEAbg1AWEKqvvtIrsouCu7f//be255jbBRDken8/MSTITZsIUU9cPJ/ZgYE9C352yDsHIsyCxvFHA7nsfO1A443emNzRMaJnGkGm89XFX/40peiYeMHvsxsjCQ9bo5nt0akX0LHSyetJ5TaCb+XfyYR/AkbI6xkP9/9k18GtFRNkaDxm8vtcNFeWKVh2butZ8DC6mFFjOVZuowD9j9itwwJVEZZGSDl/aCdolSClG8aHKifaiGB7+JHSAVkY8HR5jU6lmES2hsycqefWmzIWQ0w4Kng3OZT6EhrIFNM6UgPNZCKEg+oDGkiJwIZtAcqIYGp+Ug5swG+hKUyUtbLMBJFvaQrWWjjZoB1wogepCNUSAreRPcZTWtdnkpkIVJEU5W8eHjHKIQ4eQLDJqUOWXc3RcJbtTRlfJAiKtPmQ7ylGTkM7r1fFbqqbPXKVE+XIbHb7zdbOvoHD55VOvn4pfPua10/QVzxRiS95tD1vUpLFpdbPAgaSK6rkiAucErSbQbSy3GW49P8WQRF9JedNmmAHJhiiF0BCJn8EQrfJuwEwK6A91zbjZfcaQnNOkEs34uXb/7EB5bWR1D8XXxm73YH/y6fDS4+Tp588PcLqdUFOb62QAAAAASUVORK5CYII=" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        )) : ''
                                    }
                                </div>
                                <div className="hc">
                                    {
                                        indexlb ? indexlb[7].map((item, idx) => (
                                            <div className="b2cdrugbox" key={idx} onClick={this.xqy.bind(this, {
                                                xurl: item.hcurl,
                                                xname: item.hcname,
                                                xtitle: item.hctitle,
                                                xliang: '6g×10袋',
                                                xjiage: item.hcxianjia,
                                                xxiangliang: '月销2253',
                                                uid: item.uid
                                            })}>
                                                <div className="imgListBox">

                                                    <img src={item.hcurl} alt="" className="imgPreBox" />
                                                    <div className="infoBox">
                                                        <p className="name">

                                                            <span className="sign">1-3天</span> {item.hcname}
                                                        </p>

                                                        <p className="zhuzhi_info">{item.hctitle}</p>
                                                        <div className="prootiomBox">

                                                            <span className="promotion">{item.hcjuan}</span>
                                                        </div>
                                                        <div className="goods_buyBox">
                                                            <div className="aboutLeft f1">

                                                                <p className="setmeal fl">{item.hcxianjia}</p>
                                                                <p className="sales fl">{item.hcyuanjia}</p>
                                                            </div>
                                                            <div className="addCarbox">
                                                                < img className="addCarImg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACfUExURUxpcexLS+xFRelFRelFRP9VVetGRulFROpFRelFROlFRP9MTOpFRepFROlFROtHROlFROlFRfBLS+pFRP9VVelFRP///+1nZvzr6+1qafzp6fWurulKSfCCgfrV1f319f79/fGLiupQT+tcW/jHx+tVVPnMzO93dvvd3e5vb/vh4Pa6ufzm5uxhYPSgoPe/vv3y8vSnpvOamf74+PKTkmBE4BQAAAAVdFJOUwAbN8v5A2bmXvbsCnzb8k6vjxG3CVdyowAAAAHXSURBVHjapdZpd6owEAbg1AWEKqvvtIrsouCu7f//be255jbBRDken8/MSTITZsIUU9cPJ/ZgYE9C352yDsHIsyCxvFHA7nsfO1A443emNzRMaJnGkGm89XFX/40peiYeMHvsxsjCQ9bo5nt0akX0LHSyetJ5TaCb+XfyYR/AkbI6xkP9/9k18GtFRNkaDxm8vtcNFeWKVh2butZ8DC6mFFjOVZuowD9j9itwwJVEZZGSDl/aCdolSClG8aHKifaiGB7+JHSAVkY8HR5jU6lmES2hsycqefWmzIWQ0w4Kng3OZT6EhrIFNM6UgPNZCKEg+oDGkiJwIZtAcqIYGp+Ug5swG+hKUyUtbLMBJFvaQrWWjjZoB1wogepCNUSAreRPcZTWtdnkpkIVJEU5W8eHjHKIQ4eQLDJqUOWXc3RcJbtTRlfJAiKtPmQ7ylGTkM7r1fFbqqbPXKVE+XIbHb7zdbOvoHD55VOvn4pfPua10/QVzxRiS95tD1vUpLFpdbPAgaSK6rkiAucErSbQbSy3GW49P8WQRF9JedNmmAHJhiiF0BCJn8EQrfJuwEwK6A91zbjZfcaQnNOkEs34uXb/7EB5bWR1D8XXxm73YH/y6fDS4+Tp588PcLqdUFOb62QAAAAASUVORK5CYII=" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        )) : ''
                                    }
                                </div>
                                <div className="qlx">
                                    {
                                        indexlb ? indexlb[8].map((item, idx) => (
                                            <div className="b2cdrugbox" key={idx} onClick={this.xqy.bind(this, {
                                                xurl: item.qlxurl,
                                                xname: item.qlxname,
                                                xtitle: item.qlxtitle,
                                                xliang: '6g×10袋',
                                                xjiage: item.qlxxianjia,
                                                xxiangliang: '月销2253',
                                                uid: item.uid
                                            })}>
                                                <div className="imgListBox">

                                                    <img src={item.qlxurl} alt="" className="imgPreBox" />
                                                    <div className="infoBox">
                                                        <p className="name">

                                                            <span className="sign">1-3天</span> {item.qlxname}
                                                        </p>

                                                        <p className="zhuzhi_info">{item.qlxtitle}</p>
                                                        <div className="prootiomBox">

                                                            <span className="promotion">{item.qlxjuan}</span>
                                                        </div>
                                                        <div className="goods_buyBox">
                                                            <div className="aboutLeft f1">

                                                                <p className="setmeal fl">{item.qlxxianjia}</p>
                                                                <p className="sales fl">{item.qlxyuanjia}</p>
                                                            </div>
                                                            <div className="addCarbox">
                                                                < img className="addCarImg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACfUExURUxpcexLS+xFRelFRelFRP9VVetGRulFROpFRelFROlFRP9MTOpFRepFROlFROtHROlFROlFRfBLS+pFRP9VVelFRP///+1nZvzr6+1qafzp6fWurulKSfCCgfrV1f319f79/fGLiupQT+tcW/jHx+tVVPnMzO93dvvd3e5vb/vh4Pa6ufzm5uxhYPSgoPe/vv3y8vSnpvOamf74+PKTkmBE4BQAAAAVdFJOUwAbN8v5A2bmXvbsCnzb8k6vjxG3CVdyowAAAAHXSURBVHjapdZpd6owEAbg1AWEKqvvtIrsouCu7f//be255jbBRDken8/MSTITZsIUU9cPJ/ZgYE9C352yDsHIsyCxvFHA7nsfO1A443emNzRMaJnGkGm89XFX/40peiYeMHvsxsjCQ9bo5nt0akX0LHSyetJ5TaCb+XfyYR/AkbI6xkP9/9k18GtFRNkaDxm8vtcNFeWKVh2butZ8DC6mFFjOVZuowD9j9itwwJVEZZGSDl/aCdolSClG8aHKifaiGB7+JHSAVkY8HR5jU6lmES2hsycqefWmzIWQ0w4Kng3OZT6EhrIFNM6UgPNZCKEg+oDGkiJwIZtAcqIYGp+Ug5swG+hKUyUtbLMBJFvaQrWWjjZoB1wogepCNUSAreRPcZTWtdnkpkIVJEU5W8eHjHKIQ4eQLDJqUOWXc3RcJbtTRlfJAiKtPmQ7ylGTkM7r1fFbqqbPXKVE+XIbHb7zdbOvoHD55VOvn4pfPua10/QVzxRiS95tD1vUpLFpdbPAgaSK6rkiAucErSbQbSy3GW49P8WQRF9JedNmmAHJhiiF0BCJn8EQrfJuwEwK6A91zbjZfcaQnNOkEs34uXb/7EB5bWR1D8XXxm73YH/y6fDS4+Tp588PcLqdUFOb62QAAAAASUVORK5CYII=" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        )) : ''
                                    }
                                </div>

                            </div>
                        </div>
                    </main>
                </div>

            </>
        )
    }
}
const quan = function (state) {

    return state;
}
Ddsc = connect(quan)(Ddsc)

export default Ddsc