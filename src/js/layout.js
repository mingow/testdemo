import { Menu, Icon, Layout, Breadcrumb} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const {Header, Content, Sider} = Layout;
import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import MainFrame from './default.js'
import Navi from './navi'

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
        <Header className="header topBar">
          <div className="logo" />
          <Navi />
        </Header>
        <Layout className="body">
          <Route exact path="/" component={MainFrame}></Route>
        </Layout>
      </Layout>

    );
  }

}
