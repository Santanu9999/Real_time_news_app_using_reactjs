import './App.css';

import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
  pagesize=20;
  apikey=process.env.REACT_APP_NEWS_API
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        
      />
          <Routes>
            <Route exect path="/" element={<News setProgress={this.setProgress} apikey={this.apikey}   pagesize={this.pagesize} catagory="general" key='general' />}></Route>
            <Route exect path="/business" element={<News setProgress={this.setProgress} apikey={this.apikey}   pagesize={this.pagesize} catagory="business" key='business' />}></Route>
            <Route exect path="/entertainment" element={<News setProgress={this.setProgress} apikey={this.apikey}   pagesize={this.pagesize} catagory="entertainment" key='entertainment' />}></Route>
            <Route exect path="/health" element={<News setProgress={this.setProgress} apikey={this.apikey}   pagesize={this.pagesize} catagory="health" key='health' />}></Route>
            <Route exect path="/science" element={<News setProgress={this.setProgress} apikey={this.apikey}   pagesize={this.pagesize} catagory="science" key='science' />}></Route>
            <Route exect path="/sports" element={<News setProgress={this.setProgress} apikey={this.apikey}   pagesize={this.pagesize} catagory="sports" key='sports' />}></Route>
            <Route exect path="/technology" element={<News setProgress={this.setProgress} apikey={this.apikey}   pagesize={this.pagesize} catagory="technology" key='technology' />}></Route>
          </Routes>
        </Router>
      </>
    )
  }
}
