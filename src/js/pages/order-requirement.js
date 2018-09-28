import React from 'react';
import {Layout,Steps,Icon,Input} from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const Step = Steps.Step;

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
      current:0
    }
  }

  render(){
    return (
      <Content style={{display:"flex",flexDirection: "column",alignItems:"center"}}>
        <Steps current={this.state.current}>
          {this.state.steps.map((item,i)=>(
            <Step key={i} title={item.title} icon={<Icon type={item.icon} />}  />
          ))}
        </Steps>
        <Content className="list" style={{padding:"40px 0",display:"flex",width:600,justifyContent: "space-around",flexDirection: "column"}}>
          <div><Input size="large" placeholder="请输入特制单号" /></div>
          <div><p>支持模糊查找，可省略字母</p></div>
        </Content>

      </Content>
    )
  }
}
