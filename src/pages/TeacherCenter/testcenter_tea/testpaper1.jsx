import React from 'react';
import testintroduce1 from './testpaper1/testintroduce1'
import testquestions1 from './testpaper1/testquestions1'
import testrank1 from './testpaper1/testrank1'
import {BrowserRouter,HashRouter,Route,Router,Link} from 'react-router-dom'
class testpaper extends React.Component{
  render(){
    return (
      <HashRouter >
        <div>
      <Route exact path="/testcenter_tea/testpaper1/:pid" component={testintroduce1} />
      <Route path="/testcenter_tea/testpaper1/testquestions1/:pid" component={testquestions1} />
      <Route path="/testcenter_tea/testpaper1/testintroduce1/:pid" component={testintroduce1} />
      <Route path="/testcenter_tea/testpaper1/testrank1/:pid" component={testrank1} />
      </div>
      </HashRouter>
    )
  }
}

export default testpaper
