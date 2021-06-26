import React from 'react';
import testintroduce from './testpaper/testintroduce'
import testquestions from './testpaper/testquestions'
import testrank from './testpaper/testrank'
import {BrowserRouter,HashRouter,Route,Router,Link} from 'react-router-dom'
import Layout from 'antd/lib/layout/layout';
class testpaper extends React.Component{
  render(){
    return (
      <HashRouter >
        <div>
      <Route exact path={"/testcenter_stu/testpaper/:eid"} component={testintroduce} />
      <Route path="/testcenter_stu/testpaper/testquestions/:eid" component={testquestions} />
      <Route path="/testcenter_stu/testpaper/testintroduce/:eid" component={testintroduce} />
      <Route path="/testcenter_stu/testpaper/testrank/:eid" component={testrank} />
      </div>
      </HashRouter>
    )
  }
}
testpaper.contextTypes = {router:()=> React.PropTypes.func.isRequired };
export default testpaper
