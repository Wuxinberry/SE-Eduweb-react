import { Layout, Menu, Descriptions,Card,Badge} from 'antd';

import{DesktopOutlined,IdcardOutlined,ReadOutlined,MailOutlined,SettingOutlined,PlayCircleOutlined,BorderOutlined}from'@ant-design/icons';
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

class StudentCenter extends React.Component {
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
            <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="/StudentCenter">
              个人中心
            </Link>
          </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              课程资源
          </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              选课中心
          </Menu.Item>
            <Menu.Item key="4" icon={<HighlightOutlined />}>
              在线测验
          </Menu.Item>
            <Menu.Item key="5" icon={<BarChartOutlined />}>
              成绩查询
          </Menu.Item>
            <Menu.Item key="6" icon={<BookOutlined />}>
              作业提交
          </Menu.Item>
            <Menu.Item key="7" icon={<TeamOutlined />}>
              相关申请
          </Menu.Item>

          </Menu>
        </Sider>

        


        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Header className="site-layout-background" style={{ padding: 0 }} >
            <span style={{ color: '#fff', fontSize: '1.4em', marginLeft: 20 }}>我的考试</span>
          </Header>
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
              <Menu.Item key="mail" icon={<AppstoreOutlined />}>
                所有考试
              </Menu.Item>
              <Menu.Item key="app"  icon={<PlayCircleOutlined />}>
              <Badge dot size="default">
                正在进行的考试
                </Badge>
              </Menu.Item>
              <Menu.Item key="alipay" icon={<BorderOutlined />}>
                已经截止的考试
              </Menu.Item>
            </Menu>
            <div className="site-layout-background" style={{ padding: 24, textAlign: 'left' }}>

            <Card title={<div><DesktopOutlined />  <Link to="/testcenter_stu/testpaper">test 1</Link></div>} extra={<div><Tag color="blue">已开放</Tag></div>} style={{ marginRight: 20,marginLeft: 20 }}>
              <div class='row1'><div>结束时间：7月1日 23：00</div> <div style={{ textAlign:'right'}}><ReadOutlined /> ZJU   &nbsp;&nbsp;&nbsp; <IdcardOutlined />  教师123</div></div>
              
            </Card>
            <br></br>
            <Card title={<div><DesktopOutlined />  <Link to="/testcenter_stu/testpaper">test 2</Link></div>} extra={<div><Tag color="orange">未开放</Tag></div>} style={{ marginRight: 20,marginLeft: 20 }}>
              <div class='row1'><div>结束时间：8月1日 23：00</div> <div style={{ textAlign:'right'}}><ReadOutlined /> ZJU   &nbsp;&nbsp;&nbsp; <IdcardOutlined />  教师123</div></div>
              
            </Card>
            <br></br>
            <Card title={<div><DesktopOutlined />  <Link to="/testcenter_stu/testpaper">test 3</Link></div>} extra={<div><Tag color="grey">已截止</Tag></div>} style={{ marginRight: 20,marginLeft: 20 }}>
              <div class='row1'><div>结束时间：7月1日 23：00</div> <div style={{ textAlign:'right'}}><ReadOutlined /> ZJU   &nbsp;&nbsp;&nbsp; <IdcardOutlined />  教师123</div></div>
              
            </Card>

            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout >
    )
  }


}
export default StudentCenter;
