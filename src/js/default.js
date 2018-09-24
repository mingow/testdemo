import React from 'react';
import {Carousel,Layout,Icon} from 'antd';
const {Header, Content, Sider} = Layout;

export default class MainFrame extends React.Component {

  constructor(){
    super();
    this.state = {
      height:'500 px'
    }
  }

  componentWillMount(){
    console.log('ready!!');
    this.setState({height:(document.documentElement.clientHeight-64)+'px'})

  }

  render(){
    console.log(this.state.height);

    return (
      <Layout>
      <div className="defaultHeader" >
        <ul>
          <li><a><ul><li><Icon type="hdd" style={{fontSize: '32px'}} /></li><li>ERP系统</li></ul></a></li>
          <li><a><ul><li><Icon type="global" style={{fontSize: '32px'}} /></li><li>内网导航</li></ul></a></li>
          <li><a><ul><li><Icon type="shopping-cart" style={{fontSize: '32px'}} /></li><li>采购系统</li></ul></a></li>


        </ul>
      </div>
        <Carousel autoplay className="carouselDefault">
          <div><img className="carouselDefault" src="./src/assets/images/bg1.jpg"></img></div>
          <div><img className="carouselDefault" src="./src/assets/images/bg2.jpg"></img></div>
        </Carousel>
      </Layout>

    );
  }
}
