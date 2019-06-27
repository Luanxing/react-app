import React from 'react';
// import Tabbar from './Component/Tabbar/index'
import Input from './Component/Input/index'
import 'antd-mobile/dist/antd-mobile.css'
import './App.css'
class App extends React.Component{
  state={
    isfixed:''
  }
  render(){
    return(
      <div >
        {/* <Input style={{position:(this.state.isfixed)?"fixed":""}}></Input> */}
        <Input myclass={this.state.isfixed?'fixed':'unfixed'} ></Input>
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

export default App;
