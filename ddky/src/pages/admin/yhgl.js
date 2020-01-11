import React from 'react';
import '../../css/yhgl.css'
import axios from 'axios';
import {
    Table
} from 'antd';
import Item from 'antd/lib/list/Item';



// const data = [];
// for (let i = 0; i < 20; i++) {
//     data.push({
//         key: i,
//         name: `Edward King ${i}`,
//         age: 32,
//         address: `London, Park Lane no. ${i}`,
//     });
// }

class Yhgl extends React.Component {
    state = {
        selectedRowKeys: [], // Check here to configure the default column,
        data:[],
        columns :[{
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Password',
        dataIndex: 'age',
    },
    {
        title: 'Delect',
        dataIndex: 'address',
        render: () => <a onClick={this.shan}>删除</a>
    },
]
    };

    onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({
            selectedRowKeys
        });
    };
    shan=(ev)=>{
        // console.log(e);
        let xb = ev.target.parentNode.parentNode.dataset.rowKey;
        console.log(xb)
        axios.get("http://localhost:1911/login/shanchuyh", {
            params: {
                name: this.state.data[xb].name
            }
        })
        // let data=(this.state.data).splice(xb,1);
        // console.log(data);
        let data= this.state.data.filter((item,index)=>{
        return item.key!=xb
        })

        console.log(data)
        this.setState({
            data
        });

        
    }

async componentDidMount(){

    let {
        data
    } = await axios.get("http://localhost:1911/login/songsuoyou");

// console.log(data.length);
let aa=[]
    for (let i = 0; i <data.length; i++) {
            aa.push({
                key: i,
                name: data[i].name,
                age: data[i].password,
                address: `删除`,
            });
        }
// console.log(aa);

    this.setState({
        data:aa

    })
    console.log(this.state.data);
}
    render() {
        const {
            selectedRowKeys
        } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
            hideDefaultSelections: true,
            selections: [{
                    key: 'all-data',
                    text: 'Select All Data',
                    onSelect: () => {
                        this.setState({
                            selectedRowKeys: [...Array(46).keys()], // 0...45
                        });
                    },
                },
                {
                    key: 'odd',
                    text: 'Select Odd Row',
                    onSelect: changableRowKeys => {
                        let newSelectedRowKeys = [];
                        newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                            if (index % 2 !== 0) {
                                return false;
                            }
                            return true;
                        });
                        this.setState({
                            selectedRowKeys: newSelectedRowKeys
                        });
                    },
                },
                {
                    key: 'even',
                    text: 'Select Even Row',
                    onSelect: changableRowKeys => {
                        let newSelectedRowKeys = [];
                        newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                            if (index % 2 !== 0) {
                                return true;
                            }
                            return false;
                        });
                        this.setState({
                            selectedRowKeys: newSelectedRowKeys
                        });
                    },
                },
            ],
        };
        return (
            <>
                {/* <p className="biaoti">用户管理</p> */}
                <Table rowSelection={rowSelection} columns={this.state.columns} dataSource={this.state.data}/>
            </>
        )
    }
}


export default Yhgl;