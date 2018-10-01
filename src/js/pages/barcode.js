import React from 'react';
import { Card,Row,Input,Spin,Alert,Checkbox,Table,Col} from 'antd';
import BarcodeTable from '../components/barcode-table'

const CheckboxGroup = Checkbox.Group;

const plainOptions = ['SN', 'MAC', 'IMEI', 'PN'];

export default class Barcode extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      type:['SN'],
      val:'',
      stamp:'',
      alertIndex:0,
      status:'waiting',
      currentNotice:{},
      alertData:[
        {
          type:'info',
          msg:'输入框为空'
        },
        {
          type:'error',
          msg:'条码重复'
        },
        {
          type:'success',
          msg:'条码正常'
        },
        {
          type:'error',
          msg:'条码类型不匹配'
        }
      ],
      reg:{
        MAC:/[A-F\d]{2}:[A-F\d]{2}:[A-F\d]{2}:[A-F\d]{2}:[A-F\d]{2}:[A-F\d]{2}/,
        SN:/^\d{13}$/,
        IMEI:/^\d{15}$/,
        PN:/^\d{10}$/
      },
      log:[],
      cache:{
        MAC:'',
        SN:'',
        IMEI:'',
        PN:''
      }
    }

  }

  onChange(checkedValues){
    this.setState({type:checkedValues});
  }

  typeInfo(){
    const input = this.refs.input.input.value;
    this.setState({
      val:input,
      stamp:new Date().getTime()
    })
  }

  componentWillUpdate(nextProps, nextState){
    if(nextState.stamp!=this.state.stamp){
      this.setState({status:'processing'}); //更改状态，开始处理数据
      var sw=0;
      this.state.type.map((item)=>{
        var reg = this.state.reg[item];
        if(reg.test(nextState.val)){
          var rec = {
            val:nextState.val,
            type:item,
            key:new Date().getTime()
          }
          if(nextState.val==this.state.cache[item]){
            this.setState({alertIndex:1});
            rec.result='异常'
          }else{
            var obj = {};
            obj[item] = nextState.val;
            this.setState({alertIndex:2,cache:Object.assign({},this.state.cache,obj)});
            rec.result='正常'
          }
          var log = this.state.log;
          log.unshift(rec);
          sw=1;
          this.setState({log:log});
        }
      })
      if(sw==0){
        this.setState({alertIndex:3});
      }

      this.refs.input.input.value='';
    }
  }

  render() {
    return (
      <div>
        <Row type="flex" justify="center" align="top">
          <Col span={12}>
            <Row type="flex" justify="center" align="top" style={{padding: '0 24px 24px'}}>
              <Card title="设置" style={{ width: 600 }}>
                <CheckboxGroup options={plainOptions} defaultValue={['SN']} onChange={this.onChange.bind(this)}/>
              </Card>
            </Row>
            <Row type="flex" justify="center" align="top" style={{padding: '0 24px 24px'}}>
              <Card title="条码查重" style={{ width: 600 ,padding: '0 24px 24px'}}>
                <Input size="large" placeholder="扫描条码，扫描枪开启默认回车" ref="input" onPressEnter={this.typeInfo.bind(this)} />
              </Card>
            </Row>
            <Row type="flex" justify="center" align="top" style={{padding: '0 24px 24px'}}>

                <Alert
                  message="扫描结果"
                  description={this.state.val+'|'+this.state.alertData[this.state.alertIndex].msg}
                  type={this.state.alertData[this.state.alertIndex].type}
                  style={{ width: "100%"}}
                  className='alert'
                />
              
            </Row>
          </Col>
          <Col span={12}>
            <BarcodeTable data={this.state.log} />
          </Col>
        </Row>
      </div>
    )
  }
}
