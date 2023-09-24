import {Component} from "react"

import Welcome from "./components/Welcome/index" 

import "./App.css";

class App extends Component
{
  state={isLoggedIn:true}
  btnAuth=()=>{
    const {isLoggedIn}=this.state;
    if(isLoggedIn) {
      return <button className="button">Logout</button>;
    }
    return <button className="button">Login</button>
  }
  render() {
    return(
      <div className="container">
        <Welcome greeting="Hello" name="User"/>
        {this.btnAuth()}
      </div>
    );
  }
}
export default App;
