import React from 'react'
import { Menu, Icon, Button } from 'antd';
import {Link} from 'react-router-dom';

const SubMenu = Menu.SubMenu;

export default class Navi extends React.Component {

  constructor(){
    super();
    this.state = {
      collapsed: false,
      items:[
        {
          key:1,
          type:"barcode",
          link:"/barcode",
          label:"条码查重"
        },
        {
          key:2,
          type:"audit",
          link:"/order-requirement",
          label:"特制单制作要求"
        },
        {
          key:3,
          type:"calendar",
          link:"/meeting-broadcast",
          label:"会议通知"
        }
      ],
      currentKey:0
    }
  }

  componentWillMount(){
    window.addEventListener('load',this.handleRoute.bind(this));
    window.addEventListener('hashchange',this.handleRoute.bind(this));

  }

  handleRoute(){
    var route = window.location.pathname.substring(1).split("/")[0];

    if(route){
      var arr = this.state.items.filter((item)=>{
        if(item.link=="/"+route){return true;}
        return false;
      });

      if(arr.length){
        console.log(arr[0].key);
        this.setState({currentKey:arr[0].key});
      }
    }
  }

  render(){
    return (
      <div className="fullHeight">
        <Menu
          selectedKeys={[this.state.currentKey.toString()]}
          mode="horizontal"
          theme="dark"
          style={{ lineHeight: '64px' }} onClick={this.handleRoute.bind(this)}
        >
          {this.state.items.map((item,i)=>(
            <Menu.Item key={item.key}>
              <Icon type={item.type} />
              <span className="ant-menu-item" style={{display:"inline-block",padding:'0'}}><Link to={item.link}>{item.label}</Link></span>
            </Menu.Item>
          ))}
        </Menu>
      </div>
    )
  }

}
