import { Input, Select, Layout, Menu, Descriptions, Button, Modal, Table } from 'antd';
import { UnorderedListOutlined,CopyOutlined,LeftOutlined,DesktopOutlined, IdcardOutlined, 
          ReadOutlined, MailOutlined, SettingOutlined, 
          PlayCircleOutlined,BorderOutlined } from '@ant-design/icons';
import React from 'react';
import { Tabs ,Radio} from 'antd';
import { Link } from 'react-router-dom'
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router'
import { Image } from 'antd';
import { Card } from 'antd';
import onlinetest_teacher from './onlinetest_teacher'


const { Header, Content, Footer, Sider } = Layout;


function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}
const { TextArea } = Input;

class TeacherCenter extends React.Component {
  state = {
    current:'mail',
    content:'1+1=2',
    
    answer:'T',
    
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };
  handleContent = e =>{
    this.setState({
        content:e.target.value
    })
}
  

// handleanswer = e =>{
    
//     console.log('radio checked ', e);
//     this.setState({ answer: e.checked });
// }
handleanswer = e=> {
    console.log('radio checked:' + e.target.value);
    this.setState({
      answer: e.target.value
    });
  }

  render() {
    const { current } = this.state;
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
         <div className="logo" >
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
          </div>
        </Sider>
      </Layout>
      <Layout>
      <div style={{color:'black',fontSize: '2.0em',marginLeft: 200}}>判断题编辑</div>
      <Content >
      
     <div style={{ marginLeft: 250 }}>请输入题目内容
         {/* 题目 */}
         
     <TextArea rows={9} type="text" value={this.state.content} onChange={this.handleContent}/>
     </div>
     
     
     
     <div style={{ marginLeft:  250 }}>请选择正确选项<br></br>
      <Radio.Group onChange={this.handleanswer} value={this.state.answer} >
        <Radio value="T">T</Radio>
        <Radio value="F">F</Radio>
        
      </Radio.Group>
      
    </div>;
     </Content>
     <div style={{fontSize:'2.0em',textAlign:'center'}}>
            <Button>保存</Button>
            <Button >返回</Button>
           </div>
     </Layout>
     <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
     </Layout> 
    
    )


        }
    }
    export default TeacherCenter;