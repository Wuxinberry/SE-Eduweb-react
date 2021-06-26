import React from 'react';
import onlinetest from './testcenter_stu/onlinetest';
import testpaper from './testcenter_stu/testpaper';
import {BrowserRouter,HashRouter,Route,Router,Link} from 'react-router-dom'
class testcenter extends React.Component{
  render(){
    return (
      <HashRouter >
        <div>
      <Route exact path="/testcenter_stu" component={onlinetest} />
      <Route path="/testcenter_stu/testpaper/:eid" component={testpaper} />
      </div>
      </HashRouter>
    )
  }
}

export default testcenter
