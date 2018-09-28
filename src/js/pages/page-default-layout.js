import React from 'react';
import {Layout} from 'antd';
const {Content} = Layout;
import Barcode from './barcode';
import OrderRequirement from './order-requirement';
import {BrowserRouter,Route} from 'react-router-dom';

export default class Pages extends React.Component {

  render(){
    return (
      <Layout className="content" style={{ padding: '0 24px 24px' }}>
        <Content  style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
          <Route exact path="/barcode" component={Barcode}></Route>
          <Route exact path="/order-requirement" component={OrderRequirement}></Route>
        </Content>
      </Layout>
    )
  }

}
