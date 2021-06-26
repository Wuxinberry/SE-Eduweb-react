import { Layout, Menu, Descriptions,Card,Badge} from 'antd';

import{CopyOutlined,UnorderedListOutlined,LeftOutlined,DeleteOutlined,DiffOutlined,CloseSquareOutlined,CheckSquareOutlined,DesktopOutlined,IdcardOutlined,ReadOutlined,MailOutlined,SettingOutlined,PlayCircleOutlined,BorderOutlined}from'@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import { Button,Tag, Image, Checkbox, Modal, Form, Input, DatePicker, TimePicker } from 'antd';
import {
  AppstoreOutlined,
} from '@ant-design/icons';
import axios from 'axios';

const { Header, Content, Footer, Sider } = Layout;
function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

// todo listening 定时check
// * 判断考试状态
function exam_state_judge(exam_start_time, exam_end_time) {
  let now = new Date();
  let year=now.getFullYear();  //取得4位数的年份
  let month=now.getMonth()+1;  //取得日期中的月份，其中0表示1月，11表示12月
  let date=now.getDate();      //返回日期月份中的天数（1到31）
  let hour=now.getHours();     //返回日期中的小时数（0到23）
  let minute=now.getMinutes(); //返回日期中的分钟数（0到59）
  let second=now.getSeconds(); //返回日期中的秒数（0到59）
  let crt_timestamp = year+"-"+month+"-"+date+" "+hour+":"+minute+":"+second; 
  let exam_state;
  // judge exam state
  if ( crt_timestamp < exam_start_time ) {
    exam_state = '未发布';
  } else if ( crt_timestamp >= exam_start_time && crt_timestamp <= exam_end_time) {
    exam_state = '进行中';
  } else if ( crt_timestamp > exam_end_time ) {
    exam_state = '已结束';
  }

   return exam_state;
}


class StudentCenter extends React.Component {
  state = {
    current:'mail',
    visible: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  hideModal = () => {
    this.setState({
      visible: false,
    });
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  // * 创建考试
  exam_create=values=> {
    console.log(values);
    let exam_date = values['exam_date'].format('YYYY-MM-DD');
    let exam_start_time=values['exam_time_range'][0].format('HH:mm:ss');
    let exam_end_time = values['exam_time_range'][1].format('HH:mm:ss');
    let paper_id = values['paper_id'];
    let course_id = values['course_id'];
    let teacher_id = values['teacher_id'];
    // 拼接考试时间
    let start_time = exam_date + " " + exam_start_time;
    let end_time = exam_date + " " + exam_end_time;
    let state = exam_state_judge(start_time, end_time);
    // 组合url参数
    let exam_params = paper_id + "/" + course_id + "/" + teacher_id + "/" +
      start_time + "/" + end_time + "/" + state;
    axios.get('http://127.0.0.1:8000/exam/create/'+ exam_params, {
      headers:{'content-type':'application/x-www-form-urlencoded'},
    }).then((res)=>{
      this.setState({
        visible: false,
      });
    }).catch((err)=>{
      alert(err)
    })
  }


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
              <a style={{margin: '0 0 0 40%'}}>
                
                <Button type="primary" onClick={this.showModal}>
                  <DiffOutlined />新建考试<Link to="/testcenter_tea/testpaperResult"></Link>
                  </Button>&nbsp;</a>
                <Modal
                  title="考试信息" visible={this.state.visible}
                  onOk={this.hideModal} onCancel={this.hideModal}
                  footer={null}
                >
                  <Form style={{margin: '0 20% 0 20%'}} onFinish={this.exam_create}>
                    <Form.Item label="试卷编号" style={{margin: '0', width:'100%'}} name="paper_id">
                      <Input placeholder="请输入试卷编号"></Input>
                    </Form.Item><br></br>
                    <Form.Item label="课程编号" style={{margin: '0', width:'100%'}} name="course_id">
                      <Input placeholder="请输入课程编号"></Input>
                    </Form.Item><br></br>
                    <Form.Item label="教师编号" style={{margin: '0', width:'100%'}} name="teacher_id">
                      <Input placeholder="请输入教师编号"></Input>
                    </Form.Item><br></br>
                    <Form.Item label="考试日期" style={{margin: '0', width:'150%'}} name="exam_date">
                      <DatePicker placeholder="请选择考试日期"></DatePicker>
                    </Form.Item><br></br>
                    <Form.Item label="考试时段" style={{margin: '0', width:'100%'}} name="exam_time_range">
                      <TimePicker.RangePicker placeholder="请选择考试时段"></TimePicker.RangePicker>
                    </Form.Item>
                    <Form.Item>
                      <Button htmlType="submit" type='primary' style={{margin: '10% 35% 0 35%'}}>确定</Button>
                    </Form.Item>
                  </Form>
                </Modal>
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
