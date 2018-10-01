import React from 'react';
import {Layout,Breadcrumb,Icon} from 'antd';
const {Content} = Layout;
import Barcode from './barcode';
import OrderRequirement from './order_requirement';
import MeetingBroadcast from './meeting_broadcast';
import {BrowserRouter,Route} from 'react-router-dom';

export default class Pages extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props);
    return (
      <Layout className="content" style={{ padding: '0 24px 24px' }}>
        <Content  style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
          <div style={{padding:"0 0 20px"}}>
            <Breadcrumb>
              <Breadcrumb.Item href="">
                <Icon type="home" />
              </Breadcrumb.Item>
              <Breadcrumb.Item href="">
                <Icon type={this.props.location.state.type} />
                <span>{this.props.location.state.label}</span>
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <Route exact path="/p/barcode" component={Barcode}></Route>
          <Route exact path="/p/order-requirement" component={OrderRequirement}></Route>
          <Route exact path="/p/meeting-broadcast" component={MeetingBroadcast}></Route>
        </Content>
      </Layout>
    )
  }

}
