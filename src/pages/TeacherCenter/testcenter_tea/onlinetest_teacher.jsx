import { Input, Select, Layout, Menu, Descriptions, Button, Modal, Table } from 'antd';
import { UnorderedListOutlined,CopyOutlined,LeftOutlined,DesktopOutlined, IdcardOutlined, 
          ReadOutlined, MailOutlined, SettingOutlined, 
          PlayCircleOutlined,BorderOutlined } from '@ant-design/icons';
import React from 'react';
import { Tabs } from 'antd';
import { Link } from 'react-router-dom'
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router'
import { Image } from 'antd';
import { Card } from 'antd';
// import  "./QB_content.css";
// import axios from 'axios';
//import {createXHR} from "../../js/xhr.js"

import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  HighlightOutlined,
  BookOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { TabPane } = Tabs;
const { Search } = Input;
const columns = [
  {
    title: "Subject",
    width: "11%",
    dataIndex: "subject",
 //   render: (text) => <a href="#">{text}</a>
  },
  {
    title: "type",
    width: "4%",
    dataIndex: "type"
  },
  {
    title: "stem",
    dataIndex: "stem",
    width: "35%",
    onCell: ()=>{
      return  {
        style: {
          maxWidth: 260, overflow: 'hidden', 
          whiteSpace: 'nowrap', textOverflow: 'ellipsis', cursor: 'pointer',
          WordBreak: 'keep-all'
        }
      }
    },
    render: (text)=>{
      let snArray = [];
      snArray = text.toString().split(".");
      let result = null;
      let br = <br></br>;
      for(let i = 0; i < snArray.length; i++ ) {
        if ( i==0 ) {
          result = snArray[i];
        } else {
          result = <span>{result}{br}{snArray[i]}</span>;
        }
      }
      return <div placement="topLeft" title={text}>{result}</div>
    }
  },
  {
    title: "choice",
    dataIndex: "choice",
    onCell: ()=>{
      return  {
        style: {
          maxWidth: 260, overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', cursor: 'pointer'
        }
      }
    },
    render: (text, record)=>{
      let br=<br></br>;
      let result=null;
      let snArray = [];
      snArray = text;
      for(let i = 0; i < snArray.length; i++ ) {
        if ( i == 0 ) {
          result = snArray[i];
        } else {
          result = <span >{result}{br}{snArray[i]}</span>;
        }
      }
      return <div placement="topLeft" title={text}>{result}</div>;
    }
  },
  {
    title: "answer",
    dataIndex: "answer",
    width: "3%",
    onCell: ()=>{
      return  {
        style: {
          color: "red"
        }
      }
    },
  },
  {
    title: "else",
    dataIndex: "else",
    render:(text, record)=>{
      let snArray = [];
      let result = null;
      let br = <br></br>;
      snArray = text;
      for ( let i = 0; i < text.length; i++ ) {
        if ( i==0 ) {
          result = snArray[i];
        } else {
          result = <span>{result}{br}{snArray[i]}</span>;
        }
      }
      return <div>{result}</div>;
    }
  }
];

const data = [
  {
    key: "1",
    subject: "高级数据结构",
    type: "选择",
    choice: [
      "A. Upon the termination of the algorithm, the algorithm returns a cut (A,B) so that 2.5w(A,B)≥w(A∗ ,B∗ ), where (A∗ ,B∗ ) is an optimal partition.",
      "B. When there are many candidate jobs that can be moved to reduce the absolute difference, if we always move the job j with maximum t j , then the local search terminates in at most n moves.",
      "C. The local search algorithm always returns an optimal solution.",
      "D. The local search algorithm always returns a local solution with 1/2 T​1 ≤T2 ≤ 2T1."
    ] ,
    stem: "Max-cut problem: Given an undirected graph G=(V,E) with positive integer edge weights we, find a node partition (A,B) such that w(A,B), the total weight of edges crossing the cut, is maximized. Let us define S′ be the neighbor of S such that S′ can be obtained from S by moving one node from A to B, or one from B to A. We only choose a node which, when flipped, increases the cut value by at least w(A,B)/∣V∣. Then which of the following is true?",
    answer:"B",
    else: [
      "分值：5分",
      "出题人：叶德仕"
    ]
  },
  {
    key: "2",
    subject: "高级数据结构",
    type: "选择",
    stem: "London No. 1 Lake Park",
    choice: "hello",
    else: [
      "else"
    ]
  },
  {
    key: "3",
    subject: "高级数据结构",
    type: "选择",
    stem: "Sidney No. 1 Lake Park",
    choice: "hello",
    else: []
  },
  {
    key: "4",
    subject: "高级数据结构",
    type: "选择",
    stem: "Sidney No. 1 Lake Park",
    choice: "hello",
    else: []
  }
];
function callback(key) {
    console.log(key);
}

 function search() {
//   let xh = createXHR();
//   let url="testing.php?hel=helloWorld";
//   xh.open("GET", url, true);
// //	xh.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
//   xh.send("hel=helloword");
//   xh.responseType = "text";
//   xh.onreadystatechange=function() {
//       if (xh.readyState==4) {
//         if(xh.status==200||xh.status==0) {
//           alert(xh.responseText);
//         }
//     }
//   }
}
// function search(){
//   axios.request({
//       url:'http://localhost:3000/src/pages/TeacherCenter/testing.php',
//       method:'get',
//       // baseURL:'http://localhost:8008'
//  }).then(
//     res => {
//       console.log("get res:",res);
//       var str=JSON.stringify(res);
//       document.getElementById("testing").innerHTML = str;
//    },error => {
//       console.log("get request failed:",error);
//       document.getElementById("testing").innerHTML = error;
//    }
//  );
// }

class TeacherCenter extends React.Component {
  state = {
    selectedRowKeys: []
  };
  selectRow = (record) => {
    const selectedRowKeys = [...this.state.selectedRowKeys];
    if (selectedRowKeys.indexOf(record.key) >= 0) {
      selectedRowKeys.splice(selectedRowKeys.indexOf(record.key), 1);
    } else {
      selectedRowKeys.push(record.key);
    }
    this.setState({ selectedRowKeys });
  };
  onSelectedRowKeysChange = (selectedRowKeys) => {
    this.setState({ selectedRowKeys });
  };
  
  QBContent = () =>{
      <Tabs defaultActiveKey="1" onChange={callback}>
      <TabPane tab="Tab 1" key="1">
        Content of Tab Pane 1
      </TabPane>
      <TabPane tab="Tab 2" key="2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="Tab 3" key="3">
        Content of Tab Pane 3
      </TabPane>
      </Tabs>
  };
  
  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
        selectedRowKeys,
        onChange: this.onSelectedRowKeysChange
      };
    return (
      
      <Layout>
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['3']}>
            <Menu.Item key="1" icon={<LeftOutlined />}>
            <Link to="/TeacherCenter">
              返回
            </Link>
          </Menu.Item>
            <Menu.Item key="2" icon={<CopyOutlined />}>
            <Link to="/testcenter_tea">
              试卷管理
            </Link>
          </Menu.Item>
            <Menu.Item key="3" icon={<UnorderedListOutlined />}>
            <Link to="/testcenter_tea/quesmanager">
              题库管理
            </Link>
          </Menu.Item>

          </Menu>
        </Sider>

        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Header className="site-layout-background" style={{ padding: 0 }} >
            <span style={{ color: '#fff', fontSize: '1.4em', marginLeft: 20 }}>题库管理</span>
          </Header>
          
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          
            <div>
              <Tabs defaultActiveKey="1" onChange={callback}>
                  <TabPane tab="题库管理" key="1" id="QB_view">
                    <div style={{margin:'0 0 15px 0'}}>
                        <Search onSearch={search} name="subject" enterButton style={{ margin: '0 30px 0 0', width: '30%'}}></Search>
                        <Button type="primary" style={{margin: '0 30px 0 0'}}><Link to="/testcenter_tea/testpaperResult">生成试卷</Link></Button>
                        <Button type="primary" style={{margin: '0 30px 0 0'}}>自动生成试卷</Button>
                        <Button type="primary" style={{margin: '0 30px 0 0'}}>添加题目</Button>
                        <Button type="primary" style={{margin: '0 30px 0 0'}} danger>删除</Button>
                    </div>
                    <div id="testing"></div>
                    <div id="QB_content">
                      <Table rowSelection={rowSelection} columns={columns} dataSource={data}
                        onRow={(record) => ({
                          onClick: () => {
                            this.selectRow(record);}
                        })}>
                      </Table>
                    </div>
                  </TabPane>
                  <TabPane tab="试卷管理" key="2">
                    Content of Tab Pane 2
                  </TabPane>
                  <TabPane tab="考试管理" key="3">
                    Content of Tab Pane 3
                  </TabPane>
              </Tabs>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>EMS ©2021 Created by SE Group 4</Footer>
        </Layout>
      </Layout >
    )
  }
}

export default TeacherCenter;
