import React from 'react';
<<<<<<< HEAD
// import Tabbar from './Component/Tabbar/index'
import Input from './Component/Input/index'
import 'antd-mobile/dist/antd-mobile.css'
import './App.css'

import {connect} from 'react-redux';//引入connect,创建容器组件
class App extends React.Component{
  state={
    isfixed:''
  }
  render(){
    return(
      <div >
        {
          this.props.isShow?
          <Input myclass={this.state.isfixed?'fixed':'unfixed'} ></Input>
          :null
        } 
        {
         this.props.children
        }
        
      </div>
    )
  }
 componentDidMount(){
  window.onscroll=()=>{
    if(document.documentElement.scrollTop>0){
        this.setState({
          isfixed:true
        })
        
    }
    else{
      this.setState({
        isfixed:false
      })
    }
}
 }
}
const mapStateToProps = (state) =>{//state为完整的store大对象
  // console.log(state)
  return{
    isShow:state.isShow//此时App上就有了isShow属性
  }
}
const mapDispatchToProps = {
  // return{

  // }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)//App为UI组件，自身不需要有属性，容器组件给他传，connect为容器组件
=======
// import logo from './logo.svg';
import './App.css';
import Headerdfq from './Components/Headerdfq'
import Footerdfq from "./Components/Footerdfq";
import {connect} from 'react-redux'
class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      // refreshing: false,
      // down: true,
      // height:document.documentElement.clientHeight,
      // productdfqList: [],
      // productdfqList2: [],
      // babylist: [],
      isceiling: null,
    };
  }

  render () {
    return <div>
        {
          this.props.isShow?
          <Headerdfq scl={this.state.isceiling}/>
          :null
        }
        {
         this.props.children
         }
         {
            this.props.isShow? 
            <Footerdfq/>
            :null
         }
         
    </div>
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll);
  }
  handleScroll= ()=>{
    // console.log(window.scrollY)
    this.setState({
      isceiling: window.scrollY
    })
    // console.log(this.state.isceiling)
  }
}

const mapStateToProps = (state)=>{
  // console.log(state);
  return {
    isShow:state.isShow,
  }
}

const mapDispatchToProps = {
  // 
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
>>>>>>> dongfuqing
