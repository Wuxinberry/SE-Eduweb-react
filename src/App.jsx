import React from 'react';
import Login from './pages/Login/Login'
import StudentCenter from './pages/StudentCenter/StudentCenter'
import TeacherCenter from './pages/TeacherCenter/TeacherCenter'
import testcenter_stu from './pages/StudentCenter/testcenter'
import testcenter_tea from './pages/TeacherCenter/testcenter'
import {BrowserRouter,HashRouter,Route,Router,Link} from 'react-router-dom'
class App extends React.Component{
  render(){
    return (
      <HashRouter >
      <div>
       
        <Route exact path="/" component={StudentCenter} />
        <Route path="/TeacherCenter" component={TeacherCenter} />
        <Route path="/StudentCenter" component={StudentCenter} />
        <Route path="/testcenter_stu" component={testcenter_stu} />
        <Route path="/testcenter_tea" component={testcenter_tea} />
      </div>
      </HashRouter>
    )
  }
}

export default App
