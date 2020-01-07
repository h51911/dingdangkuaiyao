import React, { Component } from 'react';
import '../css/ddsc.css';

class Ddsc extends Component {

    constructor(){
        super();
    }

    render() {
        return (
            <>
                <div className="box">
                    <header>
                        <div className="headerb1">
                            <div className="addrbox">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAEWUlEQVRYR8WZacimYxTHf3/bkD3KTvYlFOGDZUpDGjUkJnxglETZZoYQGmNrshtkmZIlESUjRIl8GBMjW9myZecDGowljKP/2/W83e/9PvdzX9c97/u859vz3Oc6539f1znn+p9zi0yJiHWBTYFNgOOA04Cd0u+1k5nVwG/A18CDwLPAL8BKSf/kuFKOUkQcDJwCHA3sCayXsw4wiE+B54EnJS1vWzcQUETsClwLHAFsA/R2os1u/bl37gfgdeASSZ81GegLKB3PQcDDwG6l3lv0PwHOAZZJ+ruuOw5QRGwJzAUuBDaaYDA9c78D9wA3SPqx6mMMoIiYlo7ofGD9SQLTM+v4uh1YKOmP3p+jgCJiLeAs4C5gnUkG0zP/r2MKWCzpP/9ZBXQC8BjgXRqmOI5Ol/T4KKCI2BFYChwwTCQVXx+7pEj6SumoLgcWAC5+UyE+uquBRQa0OfAMcNhUIKn4fBWYbUD7Am8MIava3vcvYIYBuRJf2aZdex6ADfjs7weeApwlJwJzgL2BDapJk2n/FgNaAfiuyhWDcem/GVgiyb9HJSKcuWcAjktfPVn3ZTLwlgH9Cmyciwb4E5jnnZHkYBwnlZp2Y2IDueZXGZAvPhfFXHnX5aG+M/XFaadeAabnGvaxdwF0gaQ7c5xEhCv/khzdpNMJ0A6SvslxEhHbAt/m6Cad8A45O0oCbztJ3+U4iYitge9zdKuAHJglxGsyj2x1lyx702UiM6hfAo4s2KGRLHPW7F+wyNzlPOChHmVoyDDXIvMdNwW58oEBuabcmrsCmMzCeIUB7Q68X3jTG5TbnXeAR4Dn0tUxCzgVODDtTEmymEEeakBbAC9OIRfqHc7bwPEG5AxbCFw2ROpajxDfFovMiUa2NCIOcSMHbF8QSxOp+hNwrKQVVU79hAnSRHopsPWCpJnWrwLaA3Cr65gapvwMHC7pwzGA0tFdDNw0TDTAVZKu6fmsN4ruWl8GTGtLUrbLO7h0vAfMkvRlEyDzorPd4haSti6ATPQuSqzTWTYi/Xp7z4CccTO6eClY40nIMZI8PxqVpumHj2xZGlAV+MhWNW2eLsn36BhpjJOIODmxvZLLMQeRwcyV9EA/5UGAPP24AzizkHMPAmUy6LZpvqRVRYBSGdgrxdM+Oa+eofMFMFPSR026rakdEa6gjwKbZTgcpOLgnSPp6UFKOYBcCky27i2kKFW/phbzgbubSF1j2vdDHxFuiz3Icptcwr9tznHjEfE8SQ7ogdK6Q73VEbELcB9wVJvR2nNPNTyQ+jxnXTagFOQ7JzLnnj1HHMQeRHlWnSVFgBKo/dIg3E1g03rfU+7dTpL0WhaSpNQFkIPcvGkxsFWDs5VpFu3pfd+BROe0bwhyf1rwpwZX2/qgwkHswbjbpHGD8bbdKt6hqsGIODfxJ2ehxTf4AkmeHXWSNQXkEbJJ3aWpQbgeuK06CC9FtUaAUpBvmED57rtOkj8bdJb/AYGRbDgmI2HBAAAAAElFTkSuQmCC"
                                    alt="" className="addrbox-img1"/>
                                <span className="position_addr">美华北路</span>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAYCAYAAADKx8xXAAABiUlEQVQ4T4WTPyivYRTHP1/UXRSzMuoOtls2JDHcUga3O1hu6Wc0EfmTP7lXhMF665bVYsCmZDMxmPyZkEEGJUqiczt6Xj0e7+/9neWt83w/73nOec5XhDCzeuBB0kuWK/rKD81sDRgCroFeSUeVYJlZE3AWCW+BdkknhRXNrAG4AGoi4RXQJsnzuZFddRhYSRTnAb7JI9/A0OcE8CcRHQMdku5S+B0M8BQwn4gOgG5Jj3H+AxjgGWA2gXeBHknPWf4TGOA5YDqBN4Gfkl49nwsG+DcwmcDrwIAkKwsGeAEYT+BVSSOFYICXgZEINuBrpYpVwAbwI6naXAn8Cwwm0D9JpaLhLAJjCbQF9LmDyj3HKLCUQPvAd0lPuc9hZiXArxj/9BDolHSfuwBm1heGUR1VOw3L7nZ7j3jJu4Ad4Et07vZqlXSZu+Rm1gLsAbWRwCu4J73ip8j86D18i069F+/J87mRgX6VxqDwqfn0fIplIwN/hUm6bfolbRdBH57DzOqAl9Sw5X7wH4K8iWJdBexdAAAAAElFTkSuQmCC"
                                    alt="" className="addrbox-img1"/>
                            </div>
                            <div className="search">
                                <input type="text" className="search-input1" placeholder="搜索"/>
                                <img className="search-img1"
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAACOElEQVRIS83Wv28TMRQH8O9zfnRJ06GZkGBh4KfEwl+AxNAJENChRWJBiqpcQs6liNEjovSuhIuqSCxIlKEVokwMSGxsLEj8HBhgYEqHXLO0ufihE00jaHpx0iTixjvbH9vv+fkIHZ5KpZKo13cuC0GXmHEewJHdZr+I8F5rfpVKJTey2WyjU/+od/TvR8fxrjDzIhGOR3VkxnciWpDSetkLugcqpUQ6nblPhDvMTET4yCyexOPNN7FY7Gc4aLPZPBYEsYtE+hYzzhIRM+Oh71fvKaW0CbwHOo73AOAFZt4RQsharbpy0CDh5CYmMnNaa4eIkgAtSmndNQbDbSTCC611Qwiasu38W5POrrtyQevGayFEghlXTbaXdhPkSxgzIrJs2yqbYK02ruvlmNkLY5pKJU91SyRaWnp8nQhrYcxqtc1zprFogX+2d/JDGFNmTM/P59cjs9R1vWfMPAuIopS5R72srtXWccq3Ab1MRKu2bd2IBB3H+wrwiXiczxQKhc/9gKVS6XQQ0CeAvklpnewG+gCPj42J8VwuV+8HLJfLqe1tvQXQlpRW+r8DR7ulI0+akR+LkR/8MKP+Lm2JKdueG15pax/ewxRv/ADwzvc3byqlAqP7sP/ricOr6ygAAdCa71dno9BDX8AAXwMw015VNLoPDDv28ouhlIqn05lVgKdN0I5gr+WtF3QgYDhBU3RgoCk6UNAEHTjYDR0KeDCK50MD96McCEEzQwXb6ORTIbBRLObXfwMOWbgMaYofjQAAAABJRU5ErkJggg=="
                                    alt=""/>
                            </div>
                        </div>
                    </header>
                    <main>
            <div className="lunbo"></div>
            <div className="main1">
                <div className="advicebox">
                    <img src="https://img.ddky.com/c/cms/temp/20190911/1568195178317_270_252.jpg" alt=""/>
                    <img src="https://img.ddky.com/c/cms/temp/20190911/1568195199372_270_252.jpg" alt=""/>
                    <img src="https://img.ddky.com/c/cms/temp/20191228/1577520817744_270_252.jpg" alt=""/>
                    <img src="https://img.ddky.com/c/cms/temp/20190911/1568195093878_270_252.jpg" alt=""/>
                </div>
                <div className="advicebox">
                    <img src="https://img.ddky.com/c/cms/temp/20191231/1577792150154_270_252.jpg" alt=""/>
                    <img src="https://img.ddky.com/c/cms/temp/20191108/1573178662412_270_252.jpg" alt=""/>
                    <img src="https://img.ddky.com/c/cms/temp/20200106/1578276528091_270_252.jpg" alt=""/>
                    <img src="https://img.ddky.com/c/cms/temp/20200106/1578276530105_270_252.jpg" alt=""/>
                </div>
            </div>

            <div className="main2">
                <div className="main2-1">
                    <img src="https://img.ddky.com/c/cms/temp/20191112/1573524106331_216_252.jpg" alt=""/>
                    <img src="https://img.ddky.com/c/cms/temp/20191123/1574501760060_216_252.jpg" alt=""/>
                    <img src="https://img.ddky.com/c/cms/temp/20191011/1570775807773_216_252.jpg" alt=""/>
                    <img src="https://img.ddky.com/c/cms/temp/20191011/1570775822234_216_252.jpg" alt=""/>
                    <img src="https://img.ddky.com/c/cms/temp/20191011/1570792013133_216_252.jpg" alt=""/>
                    <img src="https://img.ddky.com/c/cms/temp/20190628/1561687452768_216_252.jpg" alt=""/>
                    <img src="https://img.ddky.com/c/cms/temp/20190628/1561691530711_216_252.jpg" alt=""/>
                    <img src="https://img.ddky.com/c/cms/temp/20190813/1565680344127_216_252.jpg" alt=""/>
                    <img src="https://img.ddky.com/c/cms/temp/20191011/1570775840587_216_252.jpg" alt=""/>
                    <img src="https://img.ddky.com/c/cms/temp/20191011/1570792032169_216_252.jpg" alt=""/>
                    <img src="https://img.ddky.com/c/cms/temp/20191011/1570775847004_216_252.jpg" alt=""/>
                    <img src="https://img.ddky.com/c/cms/temp/20190813/1565680307399_216_252.jpg" alt=""/>
                    <img src="https://img.ddky.com/c/cms/temp/20191011/1570792021422_216_252.jpg" alt=""/>
                    <img src="https://img.ddky.com/c/cms/temp/20190628/1561687568434_216_252.jpg" alt=""/>
                </div>
            </div>

            <div className="main3">
                <div>
                    <div className="main3-1">
                        <div className="timer">
                            <div className="countdown">
                                <p className="timermiaosha">秒杀</p>
                                <span>23</span> 时
                                <span>22</span> 分
                                <span>43</span> 秒
                            </div>
                        </div>
                        <div className="main3-1a">
                            <div className="main3-1a1">
                                <img src="https://imgq.ddky.com/c/product/549239/big/z_1.jpg?t=1569223203556&watermark%2F1%2Fimage%2FaHR0cHM6Ly9pbWdxLmRka3kuY29tL2Mvd2F0ZXJQaWMvMTA4MC5wbmc%3D%2Fdissolve%2F80%2Fgravity%2FCenter%2Fdx%2F0%2Fdy%2F0%7CimageMogr2%2Fauto-orient%2Fthumbnail%2F240x240%21%2Fquality%2F100"
                                    alt=""/>
                                <p className="main3-1a1m">医用外科口罩</p>
                                <p className="xianjia">
                                    <span>￥</span> 9.90
                                </p>
                                <p className="yuanjia">
                                    <span>￥</span> 9.90
                                </p>
                            </div>
                            <div className="main3-1a1">
                                <img src="https://imgq.ddky.com/c/product/328315/big/z_1.jpg?t=1532401082578&watermark%2F1%2Fimage%2FaHR0cHM6Ly9pbWdxLmRka3kuY29tL2Mvd2F0ZXJQaWMvMTA4MC5wbmc%3D%2Fdissolve%2F80%2Fgravity%2FCenter%2Fdx%2F0%2Fdy%2F0%7CimageMogr2%2Fauto-orient%2Fthumbnail%2F240x240%21%2Fquality%2F100"
                                    alt=""/>
                                <p className="main3-1a1m">医用外科口罩</p>
                                <p className="xianjia">
                                    <span>￥</span> 9.90
                                </p>
                                <p className="yuanjia">
                                    <span>￥</span> 9.90
                                </p>
                            </div>
                            <div className="main3-1a1">
                                <img src="https://imgq.ddky.com/c/product/551362/big/z_1.jpg?t=1576750504914&watermark%2F1%2Fimage%2FaHR0cHM6Ly9pbWdxLmRka3kuY29tL2Mvd2F0ZXJQaWMvMTA4MC5wbmc%3D%2Fdissolve%2F80%2Fgravity%2FCenter%2Fdx%2F0%2Fdy%2F0%7CimageMogr2%2Fauto-orient%2Fthumbnail%2F240x240%21%2Fquality%2F100"
                                    alt=""/>
                                <p className="main3-1a1m">医用外科口罩</p>
                                <p className="xianjia">
                                    <span>￥</span> 9.90
                                </p>
                                <p className="yuanjia">
                                    <span>￥</span> 9.90
                                </p>
                            </div>
                            <div className="main3-1a1">
                                <img src="https://imgq.ddky.com/c/product/108272/big/z_1.jpg?t=999999&watermark%2F1%2Fimage%2FaHR0cHM6Ly9pbWdxLmRka3kuY29tL2Mvd2F0ZXJQaWMvMTA4MC5wbmc%3D%2Fdissolve%2F80%2Fgravity%2FCenter%2Fdx%2F0%2Fdy%2F0%7CimageMogr2%2Fauto-orient%2Fthumbnail%2F240x240%21%2Fquality%2F100"
                                    alt=""/>
                                <p className="main3-1a1m">医用外科口罩</p>
                                <p className="xianjia">
                                    <span>￥</span> 9.90
                                </p>
                                <p className="yuanjia">
                                    <span>￥</span> 9.90
                                </p>
                            </div>
                            <div className="main3-1a1">
                                <img src="https://imgq.ddky.com/c/product/551362/big/z_1.jpg?t=1576750504914&watermark%2F1%2Fimage%2FaHR0cHM6Ly9pbWdxLmRka3kuY29tL2Mvd2F0ZXJQaWMvMTA4MC5wbmc%3D%2Fdissolve%2F80%2Fgravity%2FCenter%2Fdx%2F0%2Fdy%2F0%7CimageMogr2%2Fauto-orient%2Fthumbnail%2F240x240%21%2Fquality%2F100"
                                    alt=""/>
                                <p className="main3-1a1m">医用外科口罩</p>
                                <p className="xianjia">
                                    <span>￥</span> 9.90
                                </p>
                                <p className="yuanjia">
                                    <span>￥</span> 9.90
                                </p>
                            </div>
                            <div className="main3-1a1">
                                <img src="https://imgq.ddky.com/c/product/551362/big/z_1.jpg?t=1576750504914&watermark%2F1%2Fimage%2FaHR0cHM6Ly9pbWdxLmRka3kuY29tL2Mvd2F0ZXJQaWMvMTA4MC5wbmc%3D%2Fdissolve%2F80%2Fgravity%2FCenter%2Fdx%2F0%2Fdy%2F0%7CimageMogr2%2Fauto-orient%2Fthumbnail%2F240x240%21%2Fquality%2F100"
                                    alt=""/>
                                <p className="main3-1a1m">医用外科口罩</p>
                                <p className="xianjia">
                                    <span>￥</span> 9.90
                                </p>
                                <p className="yuanjia">
                                    <span>￥</span> 9.90
                                </p>
                            </div>
                            <div className="main3-1a1">
                                <img src="https://imgq.ddky.com/c/product/551362/big/z_1.jpg?t=1576750504914&watermark%2F1%2Fimage%2FaHR0cHM6Ly9pbWdxLmRka3kuY29tL2Mvd2F0ZXJQaWMvMTA4MC5wbmc%3D%2Fdissolve%2F80%2Fgravity%2FCenter%2Fdx%2F0%2Fdy%2F0%7CimageMogr2%2Fauto-orient%2Fthumbnail%2F240x240%21%2Fquality%2F100"
                                    alt=""/>
                                <p className="main3-1a1m">医用外科口罩</p>
                                <p className="xianjia">
                                    <span>￥</span> 9.90
                                </p>
                                <p className="yuanjia">
                                    <span>￥</span> 9.90
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="main3-2">
                        <div className="z1y2">
                            <img src="https://img.ddky.com/c/cms/temp/20200103/1578029615534_540_504.jpg" alt="" className="z1y2-1"/>
                            <img src="https://img.ddky.com/c/cms/temp/20200106/1578275079470_540_252.jpg" alt="" className="z1y2-2"/>
                            <img src="https://img.ddky.com/c/cms/temp/20191112/1573524587074_540_252.jpg" alt="" className="z1y2-2 z1y2-3"/>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="main3-3">
                        <p className="pinpaititle">品牌专区</p>
                        <div className="main3-3-1">
                            <img src="https://img.ddky.com/c/cms/temp/20200103/1578019740252_1080_345.jpg" alt=""/>
                        </div>
                        <div className="main3-3-2">
                            <div className="brandCard">
                                <img src="https://imgq.ddky.com/c/product/518990/big/z_1.jpg?t=1576751171395&watermark%2F1%2Fimage%2FaHR0cHM6Ly9pbWdxLmRka3kuY29tL2Mvd2F0ZXJQaWMvMTA4MC5wbmc%3D%2Fdissolve%2F80%2Fgravity%2FCenter%2Fdx%2F0%2Fdy%2F0%7CimageMogr2%2Fauto-orient%2Fthumbnail%2F240x240%21%2Fquality%2F100" alt=""/>
                                <p className="brandName">[康维他]麦卢卡花蜂蜜(UMF5+)</p>
                                <p className="xianjia">
                                    <span>￥</span> 219.00
                                </p>
                            </div>
                            <div className="brandCard">
                                <img src="https://imgq.ddky.com/c/product/518990/big/z_1.jpg?t=1576751171395&watermark%2F1%2Fimage%2FaHR0cHM6Ly9pbWdxLmRka3kuY29tL2Mvd2F0ZXJQaWMvMTA4MC5wbmc%3D%2Fdissolve%2F80%2Fgravity%2FCenter%2Fdx%2F0%2Fdy%2F0%7CimageMogr2%2Fauto-orient%2Fthumbnail%2F240x240%21%2Fquality%2F100"
                                    alt=""/>
                                <p className="brandName">[康维他]麦卢卡花蜂蜜(UMF5+)</p>
                                <p className="xianjia">
                                    <span>￥</span> 219.00
                                </p>
                            </div>
                            <div className="brandCard">
                                <img src="https://imgq.ddky.com/c/product/518990/big/z_1.jpg?t=1576751171395&watermark%2F1%2Fimage%2FaHR0cHM6Ly9pbWdxLmRka3kuY29tL2Mvd2F0ZXJQaWMvMTA4MC5wbmc%3D%2Fdissolve%2F80%2Fgravity%2FCenter%2Fdx%2F0%2Fdy%2F0%7CimageMogr2%2Fauto-orient%2Fthumbnail%2F240x240%21%2Fquality%2F100"
                                    alt=""/>
                                <p className="brandName">[康维他]麦卢卡花蜂蜜(UMF5+)</p>
                                <p className="xianjia">
                                    <span>￥</span> 219.00
                                </p>
                            </div>
                            <div className="brandCard">
                                <img src="https://imgq.ddky.com/c/product/518990/big/z_1.jpg?t=1576751171395&watermark%2F1%2Fimage%2FaHR0cHM6Ly9pbWdxLmRka3kuY29tL2Mvd2F0ZXJQaWMvMTA4MC5wbmc%3D%2Fdissolve%2F80%2Fgravity%2FCenter%2Fdx%2F0%2Fdy%2F0%7CimageMogr2%2Fauto-orient%2Fthumbnail%2F240x240%21%2Fquality%2F100"
                                    alt=""/>
                                <p className="brandName">[康维他]麦卢卡花蜂蜜(UMF5+)</p>
                                <p className="xianjia">
                                    <span>￥</span> 219.00
                                </p>
                            </div>
                            <div className="brandCard">
                                <img src="https://imgq.ddky.com/c/product/518990/big/z_1.jpg?t=1576751171395&watermark%2F1%2Fimage%2FaHR0cHM6Ly9pbWdxLmRka3kuY29tL2Mvd2F0ZXJQaWMvMTA4MC5wbmc%3D%2Fdissolve%2F80%2Fgravity%2FCenter%2Fdx%2F0%2Fdy%2F0%7CimageMogr2%2Fauto-orient%2Fthumbnail%2F240x240%21%2Fquality%2F100"
                                    alt=""/>
                                <p className="brandName">[康维他]麦卢卡花蜂蜜(UMF5+)</p>
                                <p className="xianjia">
                                    <span>￥</span> 219.00
                                </p>
                            </div>
                            <div className="brandCard">
                                <img src="https://imgq.ddky.com/c/product/518990/big/z_1.jpg?t=1576751171395&watermark%2F1%2Fimage%2FaHR0cHM6Ly9pbWdxLmRka3kuY29tL2Mvd2F0ZXJQaWMvMTA4MC5wbmc%3D%2Fdissolve%2F80%2Fgravity%2FCenter%2Fdx%2F0%2Fdy%2F0%7CimageMogr2%2Fauto-orient%2Fthumbnail%2F240x240%21%2Fquality%2F100"
                                    alt=""/>
                                <p className="brandName">[康维他]麦卢卡花蜂蜜(UMF5+)</p>
                                <p className="xianjia">
                                    <span>￥</span> 219.00
                                </p>
                            </div>
                            <div className="brandCard">
                                <img src="https://imgq.ddky.com/c/product/518990/big/z_1.jpg?t=1576751171395&watermark%2F1%2Fimage%2FaHR0cHM6Ly9pbWdxLmRka3kuY29tL2Mvd2F0ZXJQaWMvMTA4MC5wbmc%3D%2Fdissolve%2F80%2Fgravity%2FCenter%2Fdx%2F0%2Fdy%2F0%7CimageMogr2%2Fauto-orient%2Fthumbnail%2F240x240%21%2Fquality%2F100"
                                    alt=""/>
                                <p className="brandName">[康维他]麦卢卡花蜂蜜(UMF5+)</p>
                                <p className="xianjia">
                                    <span>￥</span> 219.00
                                </p>
                            </div>
                            <div className="brandCard">
                                <img src="https://imgq.ddky.com/c/product/518990/big/z_1.jpg?t=1576751171395&watermark%2F1%2Fimage%2FaHR0cHM6Ly9pbWdxLmRka3kuY29tL2Mvd2F0ZXJQaWMvMTA4MC5wbmc%3D%2Fdissolve%2F80%2Fgravity%2FCenter%2Fdx%2F0%2Fdy%2F0%7CimageMogr2%2Fauto-orient%2Fthumbnail%2F240x240%21%2Fquality%2F100"
                                    alt=""/>
                                <p className="brandName">[康维他]麦卢卡花蜂蜜(UMF5+)</p>
                                <p className="xianjia">
                                    <span>￥</span> 219.00
                                </p>
                            </div>
                            <div className="brandCard">
                                <img src="https://imgq.ddky.com/c/product/518990/big/z_1.jpg?t=1576751171395&watermark%2F1%2Fimage%2FaHR0cHM6Ly9pbWdxLmRka3kuY29tL2Mvd2F0ZXJQaWMvMTA4MC5wbmc%3D%2Fdissolve%2F80%2Fgravity%2FCenter%2Fdx%2F0%2Fdy%2F0%7CimageMogr2%2Fauto-orient%2Fthumbnail%2F240x240%21%2Fquality%2F100"
                                    alt=""/>
                                <p className="brandName">[康维他]麦卢卡花蜂蜜(UMF5+)</p>
                                <p className="xianjia">
                                    <span>￥</span> 219.00
                                </p>
                            </div>
                            <div className="brandCard">
                                <img src="https://imgq.ddky.com/c/product/518990/big/z_1.jpg?t=1576751171395&watermark%2F1%2Fimage%2FaHR0cHM6Ly9pbWdxLmRka3kuY29tL2Mvd2F0ZXJQaWMvMTA4MC5wbmc%3D%2Fdissolve%2F80%2Fgravity%2FCenter%2Fdx%2F0%2Fdy%2F0%7CimageMogr2%2Fauto-orient%2Fthumbnail%2F240x240%21%2Fquality%2F100"
                                    alt=""/>
                                <p className="brandName">[康维他]麦卢卡花蜂蜜(UMF5+)</p>
                                <p className="xianjia">
                                    <span>￥</span> 219.00
                                </p>
                            </div>
                            <div className="brandCard">
                                <img src="https://imgq.ddky.com/c/product/518990/big/z_1.jpg?t=1576751171395&watermark%2F1%2Fimage%2FaHR0cHM6Ly9pbWdxLmRka3kuY29tL2Mvd2F0ZXJQaWMvMTA4MC5wbmc%3D%2Fdissolve%2F80%2Fgravity%2FCenter%2Fdx%2F0%2Fdy%2F0%7CimageMogr2%2Fauto-orient%2Fthumbnail%2F240x240%21%2Fquality%2F100"
                                    alt=""/>
                                <p className="brandName">[康维他]麦卢卡花蜂蜜(UMF5+)</p>
                                <p className="xianjia">
                                    <span>￥</span> 219.00
                                </p>
                            </div>
                            <div className="brandCard">
                                <img src="https://imgq.ddky.com/c/product/518990/big/z_1.jpg?t=1576751171395&watermark%2F1%2Fimage%2FaHR0cHM6Ly9pbWdxLmRka3kuY29tL2Mvd2F0ZXJQaWMvMTA4MC5wbmc%3D%2Fdissolve%2F80%2Fgravity%2FCenter%2Fdx%2F0%2Fdy%2F0%7CimageMogr2%2Fauto-orient%2Fthumbnail%2F240x240%21%2Fquality%2F100"
                                    alt=""/>
                                <p className="brandName">[康维他]麦卢卡花蜂蜜(UMF5+)</p>
                                <p className="xianjia">
                                    <span>￥</span> 219.00
                                </p>
                            </div>
                            <div className="brandCard">
                                <img src="https://imgq.ddky.com/c/product/518990/big/z_1.jpg?t=1576751171395&watermark%2F1%2Fimage%2FaHR0cHM6Ly9pbWdxLmRka3kuY29tL2Mvd2F0ZXJQaWMvMTA4MC5wbmc%3D%2Fdissolve%2F80%2Fgravity%2FCenter%2Fdx%2F0%2Fdy%2F0%7CimageMogr2%2Fauto-orient%2Fthumbnail%2F240x240%21%2Fquality%2F100"
                                    alt=""/>
                                <p className="brandName">[康维他]麦卢卡花蜂蜜(UMF5+)</p>
                                <p className="xianjia">
                                    <span>￥</span> 219.00
                                </p>
                            </div>
                            <div className="brandCard">
                                <img src="https://imgq.ddky.com/c/product/518990/big/z_1.jpg?t=1576751171395&watermark%2F1%2Fimage%2FaHR0cHM6Ly9pbWdxLmRka3kuY29tL2Mvd2F0ZXJQaWMvMTA4MC5wbmc%3D%2Fdissolve%2F80%2Fgravity%2FCenter%2Fdx%2F0%2Fdy%2F0%7CimageMogr2%2Fauto-orient%2Fthumbnail%2F240x240%21%2Fquality%2F100"
                                    alt=""/>
                                <p className="brandName">[康维他]麦卢卡花蜂蜜(UMF5+)</p>
                                <p className="xianjia">
                                    <span>￥</span> 219.00
                                </p>
                            </div>
                            <div className="brandCard">
                                <img src="https://imgq.ddky.com/c/product/518990/big/z_1.jpg?t=1576751171395&watermark%2F1%2Fimage%2FaHR0cHM6Ly9pbWdxLmRka3kuY29tL2Mvd2F0ZXJQaWMvMTA4MC5wbmc%3D%2Fdissolve%2F80%2Fgravity%2FCenter%2Fdx%2F0%2Fdy%2F0%7CimageMogr2%2Fauto-orient%2Fthumbnail%2F240x240%21%2Fquality%2F100"
                                    alt=""/>
                                <p className="brandName">[康维他]麦卢卡花蜂蜜(UMF5+)</p>
                                <p className="xianjia">
                                    <span>￥</span> 219.00
                                </p>
                            </div>
                            <div className="brandCard">
                                <img src="https://imgq.ddky.com/c/product/518990/big/z_1.jpg?t=1576751171395&watermark%2F1%2Fimage%2FaHR0cHM6Ly9pbWdxLmRka3kuY29tL2Mvd2F0ZXJQaWMvMTA4MC5wbmc%3D%2Fdissolve%2F80%2Fgravity%2FCenter%2Fdx%2F0%2Fdy%2F0%7CimageMogr2%2Fauto-orient%2Fthumbnail%2F240x240%21%2Fquality%2F100"
                                    alt=""/>
                                <p className="brandName">[康维他]麦卢卡花蜂蜜(UMF5+)</p>
                                <p className="xianjia">
                                    <span>￥</span> 219.00
                                </p>
                            </div>
                            <div className="brandCard">
                                <img src="https://imgq.ddky.com/c/product/518990/big/z_1.jpg?t=1576751171395&watermark%2F1%2Fimage%2FaHR0cHM6Ly9pbWdxLmRka3kuY29tL2Mvd2F0ZXJQaWMvMTA4MC5wbmc%3D%2Fdissolve%2F80%2Fgravity%2FCenter%2Fdx%2F0%2Fdy%2F0%7CimageMogr2%2Fauto-orient%2Fthumbnail%2F240x240%21%2Fquality%2F100"
                                    alt=""/>
                                <p className="brandName">[康维他]麦卢卡花蜂蜜(UMF5+)</p>
                                <p className="xianjia">
                                    <span>￥</span> 219.00
                                </p>
                            </div>
                            <div className="brandCard">
                                <img src="https://imgq.ddky.com/c/product/518990/big/z_1.jpg?t=1576751171395&watermark%2F1%2Fimage%2FaHR0cHM6Ly9pbWdxLmRka3kuY29tL2Mvd2F0ZXJQaWMvMTA4MC5wbmc%3D%2Fdissolve%2F80%2Fgravity%2FCenter%2Fdx%2F0%2Fdy%2F0%7CimageMogr2%2Fauto-orient%2Fthumbnail%2F240x240%21%2Fquality%2F100"
                                    alt=""/>
                                <p className="brandName">[康维他]麦卢卡花蜂蜜(UMF5+)</p>
                                <p className="xianjia">
                                    <span>￥</span> 219.00
                                </p>
                            </div>
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
                            <span>咳喘</span>
                        </li>
                        <li>
                            <span>前列腺</span>
                        </li>
                    </ul>
                </div>
                <div className="imgList">
                    <div className="b2cdrugbox">
                        <div className="imgListBox">
                            <img src="https://img.ddky.com/c/cms/temp/20181026/1540546649281_336_248.jpg" alt="" className="imgPreBox"/>
                            <div className="infoBox">
                                <p className="name">
                                    <span className="sign">1-3天</span> 有求必硬 壮阳舒肝解郁
                                </p>
                                <p className="zhuzhi_info">阳痿组包([仁和]肾宝胶囊+万艾可+[同仁堂]舒肝丸)</p>
                                <div className="prootiomBox">
                                    <span className="promotion">立省125.80元</span>
                                </div>
                                <div className="goods_buyBox">
                                    <div className="aboutLeft f1">
                                        <p className="setmeal fl">￥739.00</p>
                                        <p className="sales fl">￥864.80</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="b2cdrugbox">
                        <div className="imgListBox">
                            <img src="https://img.ddky.com/c/cms/temp/20181026/1540546649281_336_248.jpg" alt="" className="imgPreBox"/>
                            <div className="infoBox">
                                <p className="name">
                                    <span className="sign">1-3天</span> 有求必硬 壮阳舒肝解郁
                                </p>
                                <p className="zhuzhi_info">阳痿组包([仁和]肾宝胶囊+万艾可+[同仁堂]舒肝丸)</p>
                                <div className="prootiomBox">
                                    <span className="promotion">立省125.80元</span>
                                </div>
                                <div className="goods_buyBox">
                                    <div className="aboutLeft f1">
                                        <p className="setmeal fl">￥739.00</p>
                                        <p className="sales fl">￥864.80</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="b2cdrugbox"></div>
                    <div className="b2cdrugbox"></div>
                    <div className="b2cdrugbox"></div>
                    <div className="b2cdrugbox"></div>
                    <div className="b2cdrugbox"></div>
                </div>
            </div>
        </main>
                </div>
            </>
        )
    }
}
export default Ddsc