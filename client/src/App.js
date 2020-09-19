import React,{ Component } from 'react';
import './App.css'
import Navbar from "./components/navbar";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Stalls from './components/stalls'
// import MyMap from "./components/map";
import Stall from "./components/stall";
// import axios from "axios";


class App extends Component{
    // componentDidMount() {
    //     axios.get('http://localhost:5000/stalls',
    //         { headers: {'Access-Control-Allow-Origin': "*"}})
    //         .then(res=> console.log(res)).catch(err=> console.log(err))
    // }
  render(){
      return (
          <Router>
              <Navbar/>
              {/*<div className='container'>*/}
              {/*    <MyMap/>*/}
              {/*</div>*/}

              <Route exact path="/stalls" component={Stalls}/>
              <Route exact path='/stalls/:id' component={Stall}/>
          </Router>

    )
  }
}

export default App;
