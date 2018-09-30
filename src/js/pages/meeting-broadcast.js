import React from 'react';
import { Calendar, Badge, Layout,Timeline } from 'antd';
const {Header, Content, Sider, Footer} = Layout;

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
      <div style={{display:"flex"}}>
        <Sider width={300} style={{background: '#fff' }}>
          <Timeline>
            {this.state.data.map((item)=>{
              var detail="";
              item.title.map((i)=>{
                detail+=i+";";
              })
              return (<Timeline.Item color="green">{item.date}<br/>{detail}</Timeline.Item>)
            })}
          </Timeline>
        </Sider>
        <Content><Calendar /></Content>
      </div>

    )
  }
}
