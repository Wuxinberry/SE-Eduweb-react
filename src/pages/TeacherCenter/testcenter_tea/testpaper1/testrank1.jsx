import {Table, Space,Layout, Menu, Descriptions,Card,Divider,Button} from 'antd';

import{DesktopOutlined,IdcardOutlined,EditOutlined,ReadOutlined,LeftOutlined,PlayCircleOutlined,BorderOutlined,OrderedListOutlined}from'@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import { Tag,Image } from 'antd';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
  HighlightOutlined,
  BookOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;


const columns = [
    {
      title: '排名',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: '学号',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '分数',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '判断题',
      key: 'tags',
      dataIndex: 'tags',
    },
    {
      title: '选择题',
      key: 'action',
      dataIndex: 'action',
    },
    {
        title: '填空题',
        key: 'a2',
        dataIndex: 'a2',
      },
  ];
  
  const data = [
    {
      key: '1',
      name: '1',
      age: 1001,
      address: '98',
      tags: '20',
      action:'40',
      a2:'38',
    },
    {
        key: '2',
        name: '2',
        age: 1002,
        address: '97',
        tags: '20',
        action:'40',
        a2:'37',
    },
    {
        key: '3',
        name: '3',
        age: 1003,
        address: '96',
        tags: '20',
        action:'40',
        a2:'36',
    },
    {
        key: '4',
        name: '4',
        age: 1004,
        address: '95',
        tags: '20',
        action:'40',
        a2:'35',
    },
    {
        key: '5',
        name: '5',
        age: 1005,
        address: '94',
        tags: '20',
        action:'40',
        a2:'34',
    },
    {
        key: '6',
        name: '6',
        age: 1006,
        address: '93',
        tags: '20',
        action:'40',
        a2:'33',
    },
  ];
  




class introdu extends React.Component {
  state = {
    current:'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };
  render() {
    const { current } = this.state;
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
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="1" icon={<LeftOutlined />}>
            <Link to="/testcenter_tea/testpublish">
              返回题目列表
            </Link>
          </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            <Link to="/testcenter_tea/testpaper1/testintroduce1">
              考试概况
            </Link>
          </Menu.Item>
            <Menu.Item key="3" icon={<EditOutlined />}>
            <Link to="/testcenter_tea/testpaper1/testquestions1">
              题目列表
              </Link>
          </Menu.Item>
            <Menu.Item key="4" icon={<OrderedListOutlined />}>
              排名
          </Menu.Item>
          </Menu>
        </Sider>

        


        <Layout className="site-layout" style={{color:'white', marginLeft: 200 }}>
            
            <div style={{ color:'black', fontSize: '2em', marginLeft: 20 }}>test3</div>
            
            <Divider />
            
            <Table style={{marginLeft: 20,marginRight:20 }} columns={columns} dataSource={data} />
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
        
      </Layout >
    )
  }


}
export default introdu;
