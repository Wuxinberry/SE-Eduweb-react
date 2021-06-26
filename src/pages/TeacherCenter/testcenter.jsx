import React from 'react';
import testipublish from './testcenter_tea/testpublish';
import quesmanager from './testcenter_tea/onlinetest_teacher';
import testpaper1 from './testcenter_tea/testpaper1';
import testpaperresult from './testcenter_tea/testpaperResult1';
import {BrowserRouter,HashRouter,Route,Router,Link} from 'react-router-dom'
import addchoose from './testcenter_tea/choice';
import addjudge from './testcenter_tea/judge';
import testexam from './testcenter_tea/testexam'
class testpaper extends React.Component{
  render(){
    return (
      <HashRouter >
        <div>
      <Route exact path="/testcenter_tea" component={testipublish} />
      <Route path="/testcenter_tea/testpublish" component={testipublish} />
      <Route path="/testcenter_tea/quesmanager" component={quesmanager} />
      <Route path="/testcenter_tea/testpaper1/:pid" component={testpaper1} />
      <Route path="/testcenter_tea/testpaperResult" component={testpaperresult} />
      <Route path="/testcenter_tea/addchoose" component={addchoose} />
      <Route path="/testcenter_tea/addjudge" component={addjudge} />
      <Route path="/testcenter_tea/testexam" component={testexam} />
      </div>
      </HashRouter>
    )
  }
}

export default testpaper
