import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './js/layout.js';
import {BrowserRouter,Route} from 'react-router-dom';
import {LocaleProvider} from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN'


class App extends React.Component {

  handleWindowHeight(){
    var height = 768;
    var clientW = document.documentElement.clientWidth;
    var calcHeight = clientW/4*3;
    height=height>document.documentElement.clientHeight-64?document.documentElement.clientHeight-64:height;
    document.styleSheets[0].addRule('.carouselDefault', 'height:'+height+'px');
    document.styleSheets[0].addRule('.carouselDefault', 'width:'+(document.documentElement.clientWidth)+'px');
  }

  componentWillMount(){
    //为首页跑马灯设置高度
    window.addEventListener('resize',this.handleWindowHeight);
    this.handleWindowHeight();
  }

  componentWillUnmount(){
    window.removeEventListener('resize',this.handleWindowHeight);
  }

  render() {
    return (
      <LocaleProvider locale={zh_CN} className="App">
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </LocaleProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
