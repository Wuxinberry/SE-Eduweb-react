import React from 'react';
import testintroduce from './testpaper/testintroduce'
import testquestions from './testpaper/testquestions'
import testrank from './testpaper/testrank'
import {BrowserRouter,HashRouter,Route,Router,Link} from 'react-router-dom'
class testpaper extends React.Component{
  render(){
    return (
      <HashRouter >
        <div>
      <Route exact path="/testcenter_stu/testpaper" component={testintroduce} />
      <Route path="/testcenter_stu/testpaper/testquestions" component={testquestions} />
      <Route path="/testcenter_stu/testpaper/testintroduce" component={testintroduce} />
      <Route path="/testcenter_stu/testpaper/testrank" component={testrank} />
      </div>
      </HashRouter>
    )
  }
}

export default testpaper
