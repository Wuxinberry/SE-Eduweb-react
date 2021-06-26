import {Table, Button,Row,Col,Layout, Menu, Descriptions,Card,Badge} from 'antd';

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
import axios from 'axios';
import reactDom from 'react-dom';
const { Header, Content, Footer, Sider } = Layout;




// let datasource=[];
// window.onload=function(){
//   let k=0;
//   axios
//     .get('http://127.0.0.1:8000/show_choose_questionbyid/',
//       { 
//         headers:{'content-type':'application/x-www-form-urlencoded'},

//       }
//     ).then((res)=>{
//       console.log(res.data);
//       for(let i=0;i<res.data.length;i++){
//         datasource.push({
//           key:i,
//           id:res.data[i].choose_id,
//           type:'选择',
//           stem:res.data[i].stem,
//           optionA:res.data[i]['optionA'],
//           optionB:res.data[i].optionB,
//           optionC:res.data[i].optionC,
//           optionD:res.data[i].optionD,
//           correct_answer:res.data[i].correct_answer,
//           value:res.data[i].value,
//         })
//         k=i;
//       }
//     })

//     axios
//     .get('http://127.0.0.1:8000/show_judge_questionbyid/',
//       { 
//         headers:{'content-type':'application/x-www-form-urlencoded'},

//       }
//     ).then((res)=>{
//       console.log(res.data);
//       for(let i=0;i<res.data.length;i++){
//         datasource.push({
//           key:i+k+1,
//           id:res.data[i].judge_id,
//           type:'判断',
//           stem:res.data[i].stem,
//           optionA:'/',
//           optionB:'/',
//           optionC:'/',
//           optionD:'/',
//           correct_answer:res.data[i].correct_answer,
//           value:res.data[i].value,

//         })
//       }
//     })  
// }
let datasource=[];

function bac(){
  console.log(123);
  if(datasource.length==0)
  axios
    .get('http://127.0.0.1:8000/examstu/query/3190100666',
      { 
        headers:{'content-type':'application/x-www-form-urlencoded'},

      }
    ).then((res)=>{
      let texamid=res.data;
      for(let i=0;i<=texamid.length-1;i++){
        axios
        .get('http://127.0.0.1:8000/exam/query/'+texamid[i]['exam_id'],
          { 
            headers:{'content-type':'application/x-www-form-urlencoded'},
  
          }
        ).then((res)=>{
          datasource.push({
            tid:i,
            name:res.data[0].exam_id,
            eid:res.data[0].exam_id,
            time:res.data[0].start_time,
            states:res.data[0].state,
            teacher:res.data[0].teacher_id,
            course:res.data[0].course_id
          })
          return 1;
        })
      }
    })
}



class StudentCenter extends React.Component {
  state = {
    current:'mail',
    btnClassName:' ',
    btnClassNameArry: [ ],
    y:bac(),
    columns  :[
      {
        title: '',
        dataIndex: 'tid',
        width:'100%',
        render:text=>
        <Card title={<div><DesktopOutlined />  <Link to={"/testcenter_stu/testpaper/"+datasource[text]['eid']}>{datasource[text]['eid']}</Link></div>} extra={<div><Tag color="blue">{datasource[text]['states']}</Tag></div>} style={{ marginRight: 0,marginLeft: 0 }}>
                  <div class='row1'><div>结束时间：{datasource[text]['time']}</div> <div style={{ textAlign:'right'}}><ReadOutlined /> {datasource[text]['course']}  &nbsp;&nbsp;&nbsp; <IdcardOutlined />{datasource[text]['teacher']}</div></div>
        </Card>
      },
    ],
    testt:1
  };
  constructor(props){
    super(props);
    console.log(this.state.columns);
    console.log(datasource);
    console.log(456);
  }
  handleClick = e => {
    console.log('click ', e);
    console.log(datasource);
    this.setState({ current: e.key });
    this.setState({ testt: 3 });
    this.setState({ columns: this.state.columns });
    console.log(this.state.columns);
  };
  render() {
    const { current } = this.state;
    return (
      <Layout  >
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
            <Table columns={this.state.columns} dataSource={datasource}/>
            {/* <Card title={<div><DesktopOutlined />  <Link to="/testcenter_stu/testpaper">test 1</Link></div>} extra={<div><Tag color="blue">已开放</Tag></div>} style={{ marginRight: 20,marginLeft: 20 }}>
              <div class='row1'><div>结束时间：7月1日 23：00</div> <div style={{ textAlign:'right'}}><ReadOutlined /> ZJU   &nbsp;&nbsp;&nbsp; <IdcardOutlined />  教师123</div></div>
              
            </Card>
            <br></br>
            <Card title={<div><DesktopOutlined />  <Link to="/testcenter_stu/testpaper">test 2</Link></div>} extra={<div><Tag color="orange">未开放</Tag></div>} style={{ marginRight: 20,marginLeft: 20 }}>
              <div class='row1'><div>结束时间：8月1日 23：00</div> <div style={{ textAlign:'right'}}><ReadOutlined /> ZJU   &nbsp;&nbsp;&nbsp; <IdcardOutlined />  教师123</div></div>
              
            </Card>
            <br></br>
            <Card title={<div><DesktopOutlined />  <Link to="/testcenter_stu/testpaper">test 3</Link></div>} extra={<div><Tag color="grey">已截止</Tag></div>} style={{ marginRight: 20,marginLeft: 20 }}>
              <div class='row1'><div>结束时间：7月1日 23：00</div> <div style={{ textAlign:'right'}}><ReadOutlined /> ZJU   &nbsp;&nbsp;&nbsp; <IdcardOutlined />  教师123</div></div>
              
            </Card> */}



            </div>
          

          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
        
      </Layout >
    )
  }


}
export default StudentCenter;
