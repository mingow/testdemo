import React from 'react';
import { Calendar, Badge, Layout,Timeline,Tabs ,Breadcrumb,Icon  } from 'antd';
const {Header, Content, Sider, Footer} = Layout;
const TabPane = Tabs.TabPane;

export default class MeetingBroadcast extends React.Component{
  constructor(props){
    super(props);

    this.state={
      data:[
        {
          date:"2018-09-24 08:30",
          title:["厂部会议"]
        },{
          date:"2018-09-24 15:30",
          title:["部门会议"]
        },{
          date:"2018-09-25 18:00",
          title:["工程部会议"]
        },{
          date:"2018-09-26 14:30",
          title:["品质例会","项目跟进会议","效率总结会议"]
        },
      ]
    }
  }

  render(){
    return (
      <Tabs defaultActiveKey="1" type="card" >
        <TabPane tab="总览" key="1" style={{display:"flex"}}>
          <Sider width={300} style={{background: '#fff' }}>
            <Timeline>
              {this.state.data.map((item,i)=>{
                var detail="";
                item.title.map((i)=>{
                  detail+=i+";";
                })
                return (<Timeline.Item key={i} color="green">{item.date}<br/>{detail}</Timeline.Item>)
              })}
            </Timeline>
          </Sider>
          <Content><Calendar /></Content>
        </TabPane>
        <TabPane tab="发起会议" key="2">Content of Tab Pane 2</TabPane>
        <TabPane tab="会议管理" key="3">Content of Tab Pane 3</TabPane>
      </Tabs>
    )
  }
}
