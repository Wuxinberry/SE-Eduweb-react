import { Radio,Space,Row,Col,Layout, Menu, Descriptions,Card,Divider,Button} from 'antd';

import{FontColorsOutlined,CloseSquareOutlined,DesktopOutlined,IdcardOutlined,EditOutlined,ReadOutlined,LeftOutlined,PlayCircleOutlined,BorderOutlined,OrderedListOutlined}from'@ant-design/icons';
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
    value: 0,
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };


 

  onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };


  render() {
    const { current } = this.state;
    const { value } = this.state;
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
              题目列表
          </Menu.Item>
            <Menu.Item key="4" icon={<OrderedListOutlined />}>
            <Link to="/testcenter_stu/testpaper/testrank">
              排名
              </Link>
          </Menu.Item>
          </Menu>
        </Sider>

        


        <Layout className="site-layout" style={{color:'white', marginLeft: 200 }}>
            
            <div style={{ color:'black', fontSize: '2.0em', marginLeft: 20 }}>test3</div>
            <Divider />
            <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" style={{color:'black', marginLeft: 20,marginRight:20 }}>
              <Menu.Item key="mail" icon={<CloseSquareOutlined />}>
                判断题
              </Menu.Item>
              <Menu.Item key="app"  icon={<FontColorsOutlined />}>
              
                选择题
                
              </Menu.Item>
              <Menu.Item key="alipay" icon={<EditOutlined />}>
                填空题
              </Menu.Item>
            </Menu>
            <br></br>
            <Card  style={{ marginRight: 40,marginLeft: 40 }}>
            <Row>
              <Col span={18}><div style={{ color:'black', fontSize: '1.2em'}}>1.1 An approximation scheme that runs in O(n2/ϵ) for any fixed ϵ&gt;0 is a fully polynomial-time approximation scheme.</div></Col>
              <Col span={2}><div style={{ color:'black', fontSize: '1.0em',marginLeft:20}}>(2分)</div></Col>
              <Col span={4}><div style={{ color:'black', fontSize: '1.0em',marginLeft:20}}><ReadOutlined /> ZJU<div></div><IdcardOutlined />  教师123</div></Col>
            </Row>
            <br></br>
            <Radio.Group onChange={this.onChange} value={2}>
              <Space direction="vertical">
                <Radio value={1}>A</Radio>
                <Radio value={2}>B</Radio>
                <Radio value={3}>C</Radio>
                <Radio value={4}>D</Radio>
              </Space>
            </Radio.Group>


            </Card>
            <br></br>

            <Card  style={{ marginRight: 40,marginLeft: 40 }}>
            <Row>
              <Col span={18}><div style={{ color:'black', fontSize: '1.2em'}}>1.2 An approximation scheme that runs in O(n2/ϵ) for any fixed ϵ&gt;0 is a fully polynomial-time approximation scheme.</div></Col>
              <Col span={2}><div style={{ color:'black', fontSize: '1.0em',marginLeft:20}}>(2分)</div></Col>
              <Col span={4}><div style={{ color:'black', fontSize: '1.0em',marginLeft:20}}><ReadOutlined /> ZJU<div></div><IdcardOutlined />  教师123</div></Col>
            </Row>
            <br></br>
            <Radio.Group onChange={this.onChange} value={1}>
              <Space direction="vertical">
                <Radio value={1}>A</Radio>
                <Radio value={2}>B</Radio>
                <Radio value={3}>C</Radio>
                <Radio value={4}>D</Radio>
              </Space>
            </Radio.Group>


            </Card>
            <br></br>


            <Card  style={{ marginRight: 40,marginLeft: 40 }}>
            <Row>
              <Col span={18}><div style={{ color:'black', fontSize: '1.2em'}}>1.3 An approximation scheme that runs in O(n2/ϵ) for any fixed ϵ&gt;0 is a fully polynomial-time approximation scheme.</div></Col>
              <Col span={2}><div style={{ color:'black', fontSize: '1.0em',marginLeft:20}}>(2分)</div></Col>
              <Col span={4}><div style={{ color:'black', fontSize: '1.0em',marginLeft:20}}><ReadOutlined /> ZJU<div></div><IdcardOutlined />  教师123</div></Col>
            </Row>
            <br></br>
            <Radio.Group onChange={this.onChange} value={value}>
              <Space direction="vertical">
                <Radio value={1}>A</Radio>
                <Radio value={2}>B</Radio>
                <Radio value={3}>C</Radio>
                <Radio value={4}>D</Radio>
              </Space>
            </Radio.Group>


            </Card>
            <br></br>


            <Card  style={{ marginRight: 40,marginLeft: 40 }}>
            <Row>
              <Col span={18}><div style={{ color:'black', fontSize: '1.2em'}}>1.4 An approximation scheme that runs in O(n2/ϵ) for any fixed ϵ&gt;0 is a fully polynomial-time approximation scheme.</div></Col>
              <Col span={2}><div style={{ color:'black', fontSize: '1.0em',marginLeft:20}}>(2分)</div></Col>
              <Col span={4}><div style={{ color:'black', fontSize: '1.0em',marginLeft:20}}><ReadOutlined /> ZJU<div></div><IdcardOutlined />  教师123</div></Col>
            </Row>
            <br></br>
            <Radio.Group onChange={this.onChange} value={value}>
              <Space direction="vertical">
                <Radio value={1}>A</Radio>
                <Radio value={2}>B</Radio>
                <Radio value={3}>C</Radio>
                <Radio value={4}>D</Radio>
              </Space>
            </Radio.Group>


            </Card>


            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
        
      </Layout >
    )
  }


}
export default StudentCenter;
