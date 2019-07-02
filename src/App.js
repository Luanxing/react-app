import React from 'react';
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
