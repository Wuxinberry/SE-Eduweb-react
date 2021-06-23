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
            <Link to="/testcenter_tea/testpaper1/testrank1">
              排名
              </Link>
          </Menu.Item>
          </Menu>
        </Sider>

        


        <Layout className="site-layout" style={{color:'white', marginLeft: 200 }}>
            
            <div style={{ color:'black', fontSize: '2em', marginLeft: 20 }}>test2</div>
            
            <Divider />
            
                <Content>
                <div style={{ color:'black', fontSize: '1.4em', marginLeft: 20 }}>基本信息</div>
                <br></br>
                <div style={{ color:'black', fontSize: '1.0em', marginLeft: 20 }}>开始时间：— — &nbsp;&nbsp;&nbsp;  — —</div>
                <br></br>
                <div style={{ color:'black', fontSize: '1.0em', marginLeft: 20 }}>结束时间：— — &nbsp;&nbsp;&nbsp;  — —</div>
                <br></br>
                <div style={{ color:'black', fontSize: '1.0em', marginLeft: 20 }}>答题时长：90分钟</div>
                </Content>
                <br></br>
            <Card title={<div><div><Tag color="orange">未发布</Tag></div></div>} style={{ marginRight: 40,marginLeft: 40 }}>
               
               <div style={{fontSize:'2.0em',textAlign:'center'}}>
                <Button type="primary" ghost>
                        <Link to="/testcenter_tea/testpaper1/testquestions1">编辑题目</Link>
                </Button>
                &nbsp;
                <Button type="primary" ghost>
                        发布考试
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
