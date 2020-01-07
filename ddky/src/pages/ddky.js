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
                                <span>美华北路<img src="/image/23EewAomlKKx5LcX8AAAAAElFTkSuQmCC.png" /></span>
                            </div>
                        </div>
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
                    <div className='nav'>
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
                    </div>
                    <div>
                        <Carousel autoplay>
                            <div>
                                <h3>1</h3>
                            </div>
                            <div>
                                <h3>2</h3>
                            </div>
                            <div>
                                <h3>3</h3>
                            </div>
                            <div>
                                <h3>4</h3>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </>
        )
    }
}
export default Ddky