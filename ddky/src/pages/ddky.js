import React, { Component } from 'react';
import '../css/ddky.css';
import { Carousel } from 'antd';
class Ddky extends Component {
    render() {
        return (
            <>
                <div className='zong'>
                    <div className="head">
                        <div className='headtop'>
                            <div className='addrBox2'>
                                <img src="/image/AYGRbDgmI2HBAAAAAElFTkSuQmCC.png" />
                                <span>美华北路<img src="/image/23EewAomlKKx5LcX8AAAAAElFTkSuQmCC.png" className='diandian' /></span>
                                <span className='ycss'><img src='/image/l9BoolbJJnIIVmiSWnnPknKvjTUd7D2XTQ6iVSBoyC3uZafluRf1Lk70bjdXRKSI8gGUJ5L7i_53DD8qd_6qAAAAABJRU5ErkJgg.png' /></span>
                            </div>
                        </div>
                    </div>
                    <div className='nav'>
                        <div className='guding'>
                            <div className='searchBox2'>
                                <input type='text' placeholder="搜索药品、症状、品牌" /><span><img src='/image/ricOr6ygAAdCa71dno9BDX8AAXwMw015VNLoPDDv28ouhlIqn05lVgKdN0I5gr_WtF3QgYDhBU3RgoCk6UNAEHTjYDR0KeDCK50M.png' /></span>
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
                            <li>
                                <img src='/image/1556162658298_78_78.jpg' />
                                <p>感冒用药</p></li>
                            <li>
                                <img src='/image/1556162334694_78_78.jpg' />
                                <p>儿童用药</p></li>
                            <li>
                                <img src='/image/1556162286832_78_78.jpg' /><p>风湿骨伤</p></li>
                            <li><img src='/image/1556162241299_78_78.jpg' /><p>两性健康</p></li>
                            <li><img src='/image/1556185154329_78_78.jpg' /><p>三高用药</p></li>
                            <li><img src='/image/1556161735470_78_78.jpg' /><p>其他用药</p></li>
                            <li><img src='/image/1556185185194_78_78.jpg' /><p>名贵滋补</p></li>
                            <li><img src='/image/1556161906864_78_78.jpg' /><p>药食同源</p></li>
                            <li><img src='/image/1556162343354_78_78.jpg' /><p>营养食品</p></li>
                            <li><img src='/image/1556161758589_78_78.jpg' /><p>成人用品</p></li>
                            <li><img src='/image/1556162300107_78_78.jpg' /><p>彩妆个护</p></li>
                            <li><img src='/image/1556162353847_78_78.jpg' /><p>婴幼用品</p></li>
                        </ul>
                        <ul className='priceBox'>
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
                        <div className='dblb'>
                            <ul>
                                <li>感冒发烧</li>
                                <li>滋润保健</li>
                                <li>男性健康</li>
                                <li>情趣计生</li>
                                <li>女性健康</li>
                            </ul>
                        </div>
                        <div className='tupian'>
                            <img src='/image/1577166928105_750_308.jpg' />
                        </div>
                        <div className='goodss'>
                            <div className='goods'>
                                <img src='/image/1556161758589_78_78.jpg' />
                            </div>
                            <div className='goods_list'>
                                <p className='one'><span className='one_biaoqian'>28分钟</span>物理退热，有效降温</p>
                                <p className='tow'>
                                    [小林冰宝贴]医用退热贴(成人用)6片(50mmx130mmx2片x3袋)(成人用)
                                </p>
                                <p className='pages'>
                                    <span>满68减28</span>
                                    <span>1元换购</span>

                                </p>
                                <div className='down'>
                                    <span className='spec'>￥42.80</span><del>￥49.40</del>
                                    <img src='/image/y6fDS4_Tp588PcLqdUFOb62QAAAAASUVORK5CYII_.png' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
export default Ddky