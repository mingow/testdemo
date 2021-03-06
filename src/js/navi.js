import React from 'react'
import { Menu, Icon, Button , Form, Input} from 'antd';
import {Link} from 'react-router-dom';

const SubMenu = Menu.SubMenu;
const FormItem = Form.Item;



export default class Navi extends React.Component {

  constructor(){
    super();
    this.state = {
      collapsed: false,
      items:[
        {
          key:1,
          pathname:"/p/barcode",
          state:{
            type:"barcode",
            label:"条码查重",
          }
        },
        {
          key:2,
          pathname:"/p/order-requirement",
          state:{
            type:"audit",
            label:"特制单制作要求",
          }
        },
        {
          key:3,
          pathname:"/p/meeting-broadcast",
          state:{
            type:"calendar",
            label:"会议通知",
          }
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
    var route = window.location.pathname;

    if(route){
      var arr = this.state.items.filter((item)=>{
        if(item.pathname==route){return true;}
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
              <Icon type={item.state.type} />
              <span className={this.state.currentKey==i+1?"ant-menu-item menu-span":"ant-menu-item"} style={{display:"inline-block",padding:'0'}}><Link to={item}>{item.state.label}</Link></span>
            </Menu.Item>
          ))}
          <Menu.Item key={0} style={{float:"right"}}>username</Menu.Item>

        </Menu>
      </div>
    )
  }
}
