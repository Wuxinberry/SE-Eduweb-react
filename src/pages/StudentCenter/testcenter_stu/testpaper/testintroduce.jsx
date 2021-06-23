import { Layout, Menu, Descriptions,Card,Divider,Button} from 'antd';

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
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['2']}>
            <Menu.Item key="1" icon={<LeftOutlined />}>
            <Link to="/testcenter_stu">
              返回题目列表
            </Link>
          </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            <Link to="/testcenter_stu/testpaper/testintroduce">
              考试概况
            </Link>
          </Menu.Item>
            <Menu.Item key="3" icon={<EditOutlined />}>
            <Link to="/testcenter_stu/testpaper/testquestions">
              题目列表
              </Link>
          </Menu.Item>
            <Menu.Item key="4" icon={<OrderedListOutlined />}>
            <Link to="/testcenter_stu/testpaper/testrank">
              排名
              </Link>
          </Menu.Item>
          </Menu>
        </Sider>

        


        <Layout className="site-layout" style={{color:'white', marginLeft: 200 }}>
            
            <div style={{ color:'black', fontSize: '2em', marginLeft: 20 }}>test3</div>
            
            <Divider />
            
                <Content>
                <div style={{ color:'black', fontSize: '1.4em', marginLeft: 20 }}>基本信息</div>
                <br></br>
                <div style={{ color:'black', fontSize: '1.0em', marginLeft: 20 }}>开始时间：2021/5/1 00:00:00</div>
                <br></br>
                <div style={{ color:'black', fontSize: '1.0em', marginLeft: 20 }}>结束时间：2021/6/1 23:59:59</div>
                <br></br>
                <div style={{ color:'black', fontSize: '1.0em', marginLeft: 20 }}>答题时长：— — &nbsp;&nbsp;&nbsp;  — —</div>
                </Content>
                <br></br>
            <Card title={<div><div><Tag color="grey">已截止</Tag></div><div style={{fontSize:'1.5em',textAlign:'center'}}>得分</div></div>} style={{ marginRight: 40,marginLeft: 40 }}>
               <div style={{fontSize:'2.0em',textAlign:'center'}}>98</div>
               <div style={{fontSize:'2.0em',textAlign:'center'}}>
                <Button type="primary" ghost>
                        <Link to="/testcenter_stu/testpaper/testquestions">查看题目列表</Link>
                </Button>
               </div>
              
            </Card>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
        
      </Layout >
    )
  }


}
export default introdu;
