import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Headerdfq from './Components/Headerdfq'
import Footerdfq from "./Components/Footerdfq";
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
          <Headerdfq scl={this.state.isceiling}/>
        }
        {
         this.props.children
         }
         {
         <Footerdfq/>
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

export default App;
