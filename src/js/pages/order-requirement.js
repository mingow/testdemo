import React from 'react';
import {Layout,Steps,Icon,Input,message,Button,Table,Breadcrumb} from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const Step = Steps.Step;
const Search = Input.Search;

export default class OrderRequirement extends React.Component {
  constructor(props){
    super(props);
    this.state={
      steps:[
        {
          title:"检索特制单",
          icon:"search"
        },{
          title:"下载制作要求",
          icon:"download"
        },{
          title:"上传数据",
          icon:"cloud-upload"
        }
      ],
      current:0,
      columns:[
        { title: '特制单号', dataIndex: 'id', key: 'id' },
        { title: '数量', dataIndex: 'mount', key: 'mount' },
        { title: '出货日期', dataIndex: 'deadline', key: 'deadline' },
        { title: '状态', dataIndex: 'status', key: 'status' }
      ],
      data:[
        {
          id:'IM180603',
          mount:11800,
          deadline:'2018/9/27',
          status:'未完成'
        }
      ]
    }
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  orderQuery(val){
    message.error('输入的工单号未找到', 10);
  }

  expandedRowRender(){
    const columns = [
      { title: '文档', dataIndex: 'name', key: 'name' },
      {title:'类型',dataIndex:'type',key:'type'},
      { title: '上传时间', dataIndex: 'date', key: 'date' },
      { title: '操作', key: 'state', render: () => <Button>下载</Button> }
    ];

    const data = [];
    for (let i = 0; i < 3; ++i) {
      data.push({
        key: i,
        date: '2014-12-24 23:12:00',
        name: 'This is production name',
        type: '特制单',
      });
    }
    return (
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
      />
    );
  }

  render(){

    return (
      <Content style={{display:"flex",flexDirection: "column",alignItems:"center"}}>
        <Content style={{display:"block",width:"100%",padding:"10px"}}>
          <Breadcrumb>
            <Breadcrumb.Item href="">
              <Icon type="home" />
            </Breadcrumb.Item>
            <Breadcrumb.Item href="">
              <Icon type="audit" />
              <span>特制单制作要求</span>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Content>

        <Steps current={this.state.current}>
          {this.state.steps.map((item,i)=>(
            <Step key={i} title={item.title} icon={<Icon type={item.icon} />}  />
          ))}
        </Steps>
        <Content>
          <Button type="primary" onClick={() => this.next()}>Next</Button>
          <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>Previous</Button>
        </Content>
        <Content className="list" style={this.state.current==0?{display:"flex"}:{display:"none"}}>
          <div><Search addonBefore="IM" size="large" placeholder="请输入特制单号" enterButton onSearch={this.orderQuery.bind(this)} /></div>
          <div><p>支持模糊查找，可省略字母</p></div>
        </Content>

        <Content className="list" style={this.state.current==1?{display:"flex"}:{display:"none"}}>
          <Table bordered style={{width:"100%"}} size="small" columns={this.state.columns} expandedRowRender={this.expandedRowRender.bind(this)} dataSource={this.state.data} />
        </Content>

        <Content className="list" style={this.state.current==2?{display:"flex"}:{display:"none"}}>
          <div><Search addonBefore="IM" size="large" placeholder="请输入特制单号" enterButton onSearch={this.orderQuery.bind(this)} /></div>
          <div><p>支持模糊查找，可省略字母</p></div>
        </Content>

      </Content>
    )
  }
}
