import React from 'react'
import { Menu, Icon, Button } from 'antd';
import {Link} from 'react-router-dom';

const SubMenu = Menu.SubMenu;

export default class Navi extends React.Component {

  constructor(){
    super();
    this.state = {
      collapsed: false
    }
  }

  render(){
    return (
      <div className="fullHeight">
        <Menu
          defaultSelectedKeys={['1']}
          mode="horizontal"
          theme="dark"
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">
            <Icon type="code" />
            <span>OA管理</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="barcode" />
            <span className="ant-menu-item" style={{display:"inline-block",padding:'0'}}><Link to='/barcode'>条码查重</Link></span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="chrome" />
            <span className="ant-menu-item" style={{display:"inline-block",padding:'0'}}><a href="./dist/files/browsers/chrome_installer.exe">浏览器升级</a></span>
          </Menu.Item>
        </Menu>
      </div>
    )
  }

}
