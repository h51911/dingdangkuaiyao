import React, { Component } from "react";//引入库
import { Steps, Divider, List, Col, Row, InputNumber, Icon, Tooltip, Button, message, Modal } from 'antd'
import "../css/cart.css";
import { connect } from 'react-redux';//购物车
import axios from 'axios';
const { confirm } = Modal;
class Cart extends Component {
    state = {
        num: 0
    }
    componentWillMount() {
        if (this.props.state.zhanghao) {
        } else {
            localStorage.setItem('tologin','/cart');
            this.props.history.push('/login')
        }

    }
    changeQty = async (id, value) => {
        let { data } = await axios.get("http://localhost:1911/login/ddkyjia", {
            params: {
                id,
                value,
                name: this.props.state.zhanghao
            }
        })
        if (data) {
            let action = {
                type: 'xiugai',
                payload: {
                    id,
                    value
                }
            }
            // console.log(this.props)
            this.props.dispatch(action)
        }
    }
    fanhuis = () => {
        this.props.history.goBack()
    }
    shanchu = async (item) => {
        let { data } = await axios.get("http://localhost:1911/login/ddkyrem", {
            params: {
                name: item.usename,
                uid: item.uid
            }
        })
        if (data) {
            message.success('删除成功');
            let action = {
                type: 'shanchu',
                payload: {
                    uid: item.uid
                }
            }
            // console.log(this.props)
            this.props.dispatch(action)
        }
    }
    qingkong = (item) => {
        confirm({
            title: '你确定要清空购物车吗?',
            okText: "确定",
            cancelText: "取消",
            content: 'Are you sure you want to empty your shopping cart?',
            item,
            async  onOk() {
                let { data } = await axios.get("http://localhost:1911/login/ddkyqk", {
                    params: {
                        name: item.state.zhanghao
                    }
                })
                if (data.n) {
                    message.success('已清空购物车');
                    let action = {
                        type: "qingkong"
                    }
                    item.dispatch(action)
                } else {

                }

            },
            onCancel() {
                console.log('取消');
            },
        });
    }
    render() {
        return (
            <>
                <div className="fanhui">
                    <p onClick={this.fanhuis}>&lt;</p>
                    <h2>购物车({this.props.state.arr.length})</h2>
                </div>
                <div className="pd">
                    <Steps current={this.props.state.arr.length ? 1 : 0} size="small">
                        <Steps.Step title="购物车" description="Shopping cart" />
                        <Steps.Step title="结算" description="go to pay" />
                        <Steps.Step title="支付成功" description="Payment Success" />
                    </Steps>
                    <Divider />

                    <List
                        itemLayout="horizontal"
                        dataSource={this.props.state.arr}
                        renderItem={item => (
                            <List.Item
                                actions={[
                                    <Tooltip title="删除商品" onClick={this.shanchu.bind(null, item)}>
                                        <Icon type="close" style={{ color: '#f00' }} />
                                    </Tooltip>
                                ]}
                            >
                                <List.Item.Meta
                                    avatar={<img src={item.imgurl} style={{ width: 100 }} />}
                                    title={item.name}
                                    description={<div className="price">
                                        <p className='shenlie'>{item.shop}</p>
                                        <span>{item.liang}</span>
                                        <span style={{ marginRight: 5 }}>{item.price}</span>
                                        &times;
                            <InputNumber
                                            size="small"
                                            min={1}
                                            value={item.num}
                                            onChange={this.changeQty.bind(this, item.uid)}
                                            style={{ width: 50, marginLeft: 5 }}
                                        />
                                        <span style={{ marginRight: 5 }}>=￥{(item.price.slice(1) * item.num).toFixed(2)}</span>
                                    </div>}
                                />
                            </List.Item>
                        )}
                    />
                    <Divider />
                    <Row>
                        <Col span={8}>
                            <Button type="danger" icon="delete" className="qingkong" onClick={this.qingkong.bind(null, this.props)} >清空购物车</Button>
                        </Col>
                        <Col span={16} style={{ textAlign: 'right' }}>
                            <Button type="primary" shape="round" size='large' className='zongjia'>
                                总价：￥
                            {(this.props.state.arr.length ? this.props.state.arr.reduce((pro, item) => { return pro += item.price.slice(1) * item.num }, 0) : 0).toFixed(2)}
                            </Button>
                            <Button type="primary" size="large" className='jiesuan'>结算</Button>
                        </Col>
                    </Row>
                </div>
            </>
        )
    }

}
const haha = state => ({
    state,
})
Cart = connect(haha)(Cart);
export default Cart;