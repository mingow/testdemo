
import React from 'react';
import { Table, Divider, Tag,Row,Card } from 'antd';

export default class BarcodeTable extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      columns: [{
        title: '条码',
        dataIndex: 'val',
        key: 'val',
        render: text => <a href="javascript:;">{text}</a>,
      }, {
        title: '类型',
        dataIndex: 'type',
        key: 'type',
      }, {
        title: '结果',
        dataIndex: 'result',
        key: 'result',
      }],
      data:[]
    }
  }

  componentWillUpdate(nextProps, nextState){
    // this.setState({data:nextProps.data})

  }

  render() {
    return (
      <Row type="flex" justify="center" align="top" style={{ padding: '0 24px 24px' }}>
        <Card title="记录" style={{ width: 600,}} bodyStyle={{margin:0,padding:1}}>
          <Table columns={this.state.columns} dataSource={this.props.data}   />
        </Card>
      </Row>

    )
  }

}
