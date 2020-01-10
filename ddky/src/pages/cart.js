import React, { Component } from "react";//引入库
import { Steps, Divider, List, Col, Row, InputNumber, Icon, Tooltip, Button } from 'antd'
import "../css/cart.css"
//购物车
class Cart extends Component {
    state = {
        arr: [{
            "_id": "5e148047185699958f8cf9bc",
            "type": "感冒",
            "imgurl": "https://img.ddky.com/c/product/500616/small/z_1.jpg?t=1540436466927",
            "uid": 1,
            "name": "[仁和可立克]复方氨酚烷胺胶囊",
            "shop": "适用于缓解普通感冒及流行性感冒引起的发热、头痛、四肢酸痛、打喷嚏、流鼻涕、鼻塞、咽痛等症状，也可用于流行性感冒的预防和治疗。",
            "price": "￥22.00",
            "setmeal": "月售29386笔",
            "skulayer": "1元换购",
            "smallimgs": "叮当智慧药房（广州）有限公司广州越秀东川路店",
            "liang": "12粒x2板"
        }, {
            "_id": "5e148047185699958f8cf9bc",
            "type": "感冒",
            "imgurl": "https://img.ddky.com/c/product/500616/small/z_1.jpg?t=1540436466927",
            "uid": 1,
            "name": "[仁和可立克]复方氨酚烷胺胶囊",
            "shop": "适用于缓解普通感冒及流行性感冒引起的发热、头痛、四肢酸痛、打喷嚏、流鼻涕、鼻塞、咽痛等症状，也可用于流行性感冒的预防和治疗。",
            "price": "￥22.00",
            "setmeal": "月售29386笔",
            "skulayer": "1元换购",
            "smallimgs": "叮当智慧药房（广州）有限公司广州越秀东川路店",
            "liang": "12粒x2板"
        }, {
            "_id": "5e148047185699958f8cf9bc",
            "type": "感冒",
            "imgurl": "https://img.ddky.com/c/product/500616/small/z_1.jpg?t=1540436466927",
            "uid": 1,
            "name": "[仁和可立克]复方氨酚烷胺胶囊",
            "shop": "适用于缓解普通感冒及流行性感冒引起的发热、头痛、四肢酸痛、打喷嚏、流鼻涕、鼻塞、咽痛等症状，也可用于流行性感冒的预防和治疗。",
            "price": "￥22.00",
            "setmeal": "月售29386笔",
            "skulayer": "1元换购",
            "smallimgs": "叮当智慧药房（广州）有限公司广州越秀东川路店",
            "liang": "12粒x2板"
        }, {
            "_id": "5e148047185699958f8cf9bc",
            "type": "感冒",
            "imgurl": "https://img.ddky.com/c/product/500616/small/z_1.jpg?t=1540436466927",
            "uid": 1,
            "name": "[仁和可立克]复方氨酚烷胺胶囊",
            "shop": "适用于缓解普通感冒及流行性感冒引起的发热、头痛、四肢酸痛、打喷嚏、流鼻涕、鼻塞、咽痛等症状，也可用于流行性感冒的预防和治疗。",
            "price": "￥22.00",
            "setmeal": "月售29386笔",
            "skulayer": "1元换购",
            "smallimgs": "叮当智慧药房（广州）有限公司广州越秀东川路店",
            "liang": "12粒x2板"
        }]
    }

    render() {
        return (
            <div className="pd">
                <Steps current={0} size="small">
                    <Steps.Step title="购物车" description="Shopping cart" />
                    <Steps.Step title="结算" description="go to pay" />
                    <Steps.Step title="支付成功" description="Payment Success" />
                </Steps>
                <Divider />

                <List
                    itemLayout="horizontal"
                    dataSource={this.state.arr}
                    renderItem={item => (
                        <List.Item
                            actions={[
                                <Tooltip title="删除商品">
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
                                        max={10}
                                        value={2}
                                        // onChange={changeQty.bind(this,item.goods_id)}
                                        // onChange={changeQtyAsync.bind(this, item.goods_id)}
                                        style={{ width: 50, marginLeft: 5 }}
                                    />
                                </div>}
                            />
                        </List.Item>
                    )}
                />
                <Divider />
                <Row>
                    <Col span={8}>
                        <Button type="danger" icon="delete" className="qingkong" >清空购物车</Button>
                    </Col>
                    <Col span={16} style={{ textAlign: 'right' }}>
                        <Button type="primary" shape="round" size='large' className='zongjia'>
                            总价：10000000
                        </Button>
                        <Button type="primary" size="large" className='jiesuan'>结算</Button>
                    </Col>
                </Row>
            </div>
        )
    }

}

export default Cart;