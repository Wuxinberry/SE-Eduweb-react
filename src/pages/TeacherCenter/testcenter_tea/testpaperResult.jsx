import { Layout, Menu, Descriptions,Card,Badge} from 'antd';

import{DeleteOutlined,DiffOutlined,CloseSquareOutlined,CheckSquareOutlined,DesktopOutlined,IdcardOutlined,ReadOutlined,MailOutlined,SettingOutlined,PlayCircleOutlined,BorderOutlined}from'@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import { Button,Tag,Image,Checkbox } from 'antd';
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
function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}
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
      </Layout >
    )
  }
}
export default StudentCenter;