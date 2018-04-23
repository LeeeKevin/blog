import React,{ Component } from "react";
import {Link} from 'react-router-dom';

import './style/style.css';

export default class Home extends Component{
  constructor(){
    super()
  }
  render(){
    return (
      <div>
        <div className="header">
          <div className="main">
            <span className="logo">
              <Link to="/"><img src="//o4j806krb.qnssl.com/public/images/cnodejs_light.svg" alt="cnode社区-草榴"/></Link>
            </span>
            <span className="search">
              <input type="text" />
              <i class="iconfont iconpic">&#xe619;</i>
            </span>
            <ul className="nav">
              <li>
                <a>首页</a>
              </li>
              <li>
                <a>新手入门</a>
              </li>
              <li>
                <a>API</a>
              </li>
              <li>
                <a>关于</a>
              </li>
              <li>
                <a>注册</a>
              </li>
              <li>
                <a>登录</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="content">
          <div className="main">
            <div className="card">
              <div className="title">
                <ul>
                  <li><a className="current">全部</a></li>
                  <li><a>精华</a></li>
                  <li><a>分享</a></li>
                  <li><a>问答</a></li>
                  <li><a>招聘</a></li>
                  <li><a>客户端测试</a></li>
                </ul>
              </div>
              <div className="list">

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}