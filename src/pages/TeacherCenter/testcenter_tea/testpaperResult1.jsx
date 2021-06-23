//import { Layout, Menu, Descriptions } from 'antd';
//import React from 'react';
import ReactDOM from 'react-dom';
import React, { Component } from 'react';

import { Radio,Space,Row,Col,Layout, Menu, Descriptions,Card,Divider,Button,InputNumber} from 'antd';
import {Checkbox, Tag,Image,Form,Input } from 'antd';
import{UnorderedListOutlined,CopyOutlined,DiffOutlined,DeleteOutlined,FontColorsOutlined,CloseSquareOutlined,DesktopOutlined,IdcardOutlined,EditOutlined,ReadOutlined,LeftOutlined,PlayCircleOutlined,BorderOutlined,OrderedListOutlined}from'@ant-design/icons';

import { render } from 'react-dom';

import { Link } from 'react-router-dom'
//import { Image } from 'antd';
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
function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

function onChange_2(value) {
  console.log('changed', value);
}



class testpaperResult1 extends React.Component {
  state = {
    current:'mail',
    value: 0,
  };

  handleClick = a => {
    console.log('click ', a);
    this.setState({ current: a.key });
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
        </Layout>

        

        <Layout className="site-layout" style={{color:'white', marginLeft: 200 }}>
            
           {/*<div style={{ color:'black', fontSize: '2.0em', marginLeft: 20 }}>test2</div>*/}
           <div style={{color:'black',fontSize: '2.0em',marginLeft: 20}}>请输入试卷名称</div>
           <Input  style={{ marginLeft: 20,marginRight:50 }} placeholder="请输入试卷名称" />
            <Divider />
            <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" style={{color:'black', marginLeft: 20,marginRight:20 }}>
              <Menu.Item key="mail" icon={<CloseSquareOutlined />}>
                判断题
              </Menu.Item>
              <Menu.Item key="app"  icon={<FontColorsOutlined />}>
              
                选择题
                
              </Menu.Item>
              
              <a style={{marginLeft:500}}> <Button type="primary" ghost><DiffOutlined />添加题目</Button>&nbsp; <Button danger><DeleteOutlined />删除</Button></a>
            </Menu>
            <br></br>
            <Card  style={{ marginRight: 40,marginLeft: 40 }}>
            <Row>
              <Col span={18}><div style={{ color:'black', fontSize: '1.2em'}}><Checkbox onChange={onChange}></Checkbox> 1.1 An approximation scheme that runs in O(n2/ϵ) for any fixed ϵ&gt;0 is a fully polynomial-time approximation scheme.</div></Col>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;分数：<Col span={2}><div style={{ color:'black', fontSize: '1.0em',marginLeft:20}}>
              <InputNumber min={1} max={100} defaultValue={2} onChange={onChange_2} /></div></Col>
              <Col span={4}><div style={{ color:'black', fontSize: '1.0em',marginLeft:780}}><Button danger><DeleteOutlined />删除</Button></div></Col>
            </Row>
            <br></br>
            <Radio.Group >
              <Space direction="vertical">
                <Radio value={1}>A</Radio>
                <Radio value={2}>B</Radio>
                <Radio value={3}>C</Radio>
                <Radio value={4}>D</Radio>
              </Space>
            </Radio.Group>


            </Card>
            <br></br>

            
            <br></br>
            <div style={{fontSize:'2.0em',textAlign:'center'}}>
            <Button>生成试卷</Button>
           
           </div>
            

            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>

    </Layout>
    );
  }
    

}
export default testpaperResult1;