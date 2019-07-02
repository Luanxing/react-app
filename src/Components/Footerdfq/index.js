import React from "react";
// import { Route,Redirect,Switch } from "react-router-dom";

import css from "./index.module.scss";
import "../../iconfont/font_1040995_r82qy65tzlr/iconfont.css";

class Footerdfq extends React.Component{
  render () {
    return <div>
        <div className={css.footerDh}>
          <a className={css.footerDh1}>400&nbsp;-&nbsp;664&nbsp;-&nbsp;6698</a>
          <nav className={css.footerDh2}>
            <a className={css.footerDh21}>首页</a>
            <a className={css.footerDh21}>客户端</a>
            <a className={css.footerDh21}>登录</a>
            <a className={css.footerDh211}>注册</a>
          </nav>
          <p className={css.footerDh3}>浙ICP备16004860号-1</p>
        </div>
    </div>
  }
}

export default Footerdfq;