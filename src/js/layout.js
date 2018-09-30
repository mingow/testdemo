import { Menu, Icon, Layout, Breadcrumb} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const {Header, Content, Sider, Footer} = Layout;
import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import MainFrame from './default.js'
import Navi from './navi'
import Page from './pages/page-default-layout'

export default class webLayout extends React.Component {

  constructor(){
    super();
    this.state = {
      current: 'mail'
    }
  }


  handleClick(e) {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <Layout>
        <Header className="header topBar" style={{position:"fixed",zIndex:100,width:"100%"}}>
          <div className="logo" />
          <Navi />
        </Header>
        <Layout className="body" style={{marginTop:"64px"}}>
          <Route exact path="/" component={MainFrame}></Route>
          <Route path="/:params" component={Page}></Route>
        </Layout>
        <Footer className="footer">
          <span>美科星科技有限公司|制造处 版权所有 © 2018</span>
        </Footer>
      </Layout>

    );
  }

}
