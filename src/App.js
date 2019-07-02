import React,{Component} from 'react';
import './App.css';
import Navbar from './component/Navbar';

class App extends React.Component {
 render(){
  return (
    
    <div>
      {
       this.props.children 
      }
    
    </div>
  )
}
} 
export default App;
