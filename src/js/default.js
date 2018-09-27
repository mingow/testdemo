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
          <li><a href="http://erpapp.tp-link.net" target="_blank"><ul><li><Icon type="hdd" style={{fontSize: '32px'}} /></li><li>ERP系统</li></ul></a></li>
          <li><a href="http://tp-link.net" target="_blank"><ul><li><Icon type="global" style={{fontSize: '32px'}} /></li><li>内网导航</li></ul></a></li>
          <li><a href="http://poprod.tp-link.net:8000/OA_HTML/AppsLocalLogin.jsp" target="_blank"><ul><li><Icon type="shopping-cart" style={{fontSize: '32px'}} /></li><li>采购系统</li></ul></a></li>
        </ul>
      </div>
        <Carousel autoplay effect="fade" className="carouselDefault carousel">
          <div className="carouselDiv grid3 carouselDefault">
            <img src="./dist/assets/images/chrome-logo.svg" alt="Chrome 是一款快速、安全且免费的网络浏览器。" className="chr-hero__image"/>
            <h1 className="chr-hero__heading">快速浏览</h1>
            <p className="chr-hero__subheading">一款快速、简单且安全的浏览器，适合在所有设备上使用。</p>
            <p className="button js-download chr-hero__download-link show" href="./dist/files/browsers/chrome_installer.exe">点击导航栏按钮下载</p>
            <p>当前版本为67.0.3396.62</p>
          </div>
          <div className="carouselDiv grid4" >
						<div className="column colspan-all carousel-confluence text-center carouselDefault">
							<h1 className="title">知识库</h1>
							<p>与JIRA Software集成，使用户能够直观地在JIRA系统中跟踪问题，在Confluence系统中查看问题所在、产品需求、项目报告以及规划等等。</p>
							<img alt="Confluence and JIRA" src="./dist/assets/images/confluence-overview-jira.png" width="600"/>
            </div>
					</div>
        </Carousel>
      </Layout>

    );
  }
}
