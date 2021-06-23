import { Layout, Menu, Descriptions,Card,Badge} from 'antd';

import{CopyOutlined,UnorderedListOutlined,LeftOutlined,DeleteOutlined,DiffOutlined,CloseSquareOutlined,CheckSquareOutlined,DesktopOutlined,IdcardOutlined,ReadOutlined,MailOutlined,SettingOutlined,PlayCircleOutlined,BorderOutlined}from'@ant-design/icons';
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
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['2']}>
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
            <span style={{ color: '#fff', fontSize: '1.4em', marginLeft: 20 }}>试题管理</span>
          </Header>
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
              <Menu.Item key="mail" icon={<AppstoreOutlined />}>
                所有考试
              </Menu.Item>
              <Menu.Item key="app"  icon={<CloseSquareOutlined />}>
              
                未发布的考试
                
              </Menu.Item>
              <Menu.Item key="alipay" icon={<CheckSquareOutlined />}>
                已发布的考试
              </Menu.Item>
              <a style={{marginLeft:300}}> <Button type="primary" ghost><DiffOutlined /><Link to="/testcenter_tea/testpaperResult">新建考试</Link></Button>&nbsp; <Button danger><DeleteOutlined />删除</Button></a>
            </Menu>
            <div className="site-layout-background" style={{ padding: 24, textAlign: 'left' }}>

            <Card title={<div><Checkbox onChange={onChange}></Checkbox>&nbsp;<DesktopOutlined />  <Link to="/testcenter_tea/testpaper1">test 1</Link></div>} extra={<div><Tag color="blue">已发布</Tag></div>} style={{marginRight: 20,marginLeft: 20}}>
              <div class='row1'><div>结束时间：7月1日 23：00</div> <div style={{ textAlign:'right'}}><Button type="primary" ghost disabled>发布考试</Button> &nbsp;<Button danger><DeleteOutlined />删除</Button></div></div>
              
            </Card>
            <br></br>
            <Card title={<div><Checkbox onChange={onChange}></Checkbox>&nbsp;<DesktopOutlined />  <Link to="/testcenter_tea/testpaper1">test 2</Link></div>} extra={<div><Tag color="orange">未发布</Tag></div>} style={{ marginRight: 20,marginLeft: 20}}>
              <div class='row1'><div>结束时间：8月1日 23：00</div> <div style={{ textAlign:'right'}}><Button type="primary" ghost>发布考试</Button> &nbsp;<Button danger><DeleteOutlined />删除</Button></div></div>
              
            </Card>
            <br></br>
            <Card title={<div><Checkbox onChange={onChange}></Checkbox>&nbsp;<DesktopOutlined />  <Link to="/testcenter_tea/testpaper1">test 3</Link></div>} extra={<div><Tag color="grey">已结束</Tag></div>} style={{ marginRight: 20,marginLeft: 20}}>
              <div class='row1'><div>结束时间：6月1日 23：00</div> <div style={{ textAlign:'right'}}><Button type="primary" ghost disabled>发布考试</Button> &nbsp;<Button danger><DeleteOutlined />删除</Button></div></div>
              
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
