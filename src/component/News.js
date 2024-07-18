import React, { Component } from 'react'
import Newsitems from './Newsitems';
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
export default class News extends Component {
capitalizeFirstLetter=(string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
}
    constructor(props){
        super(props);
        this.state={
            articles: [],
            loding: false,
            //totalResults:this.totalResults,
            page: 1,
            totalResults:0
            
        }
        document.title=`NewsMonkey-${this.capitalizeFirstLetter(this.props.catagory)}`;
        console.log(this.state);
    }
    async updatefun(){
     this.props.setProgress(10);
     let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.catagory}&apiKey=${this.props.apikey} &page=${this.state.page}}&pageSize=${this.props.pagesize}`;
        this.setState({loding: true});
        let data=await fetch(url);
        let parcedata= await data.json();
        this.setState({articles: parcedata.articles ,
                       totalResults:parcedata.totalResults,
                      loding: false });
        console.log(parcedata);
      this.props.setProgress(100);
    }
     async componentDidMount(){
        this.updatefun();
    }
    // chnext=async ()=>{
    //  this.setState({page:this.state.page+1});
    //  this.updatefun();
    // }
  
    // chpre=async ()=>{
  
    //   this.setState({page:this.state.page-1});
    //   this.updatefun(); 
    // }
    fetchMoreData = async () => {
      // a fake async api call like which sends
      // 20 more records in 1.5 secs
      this.setState({page:this.state.page+1})
      let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.catagory}&apiKey=1c9f62f3363f45f3abf3c9370fa20f2d&page=${this.state.page}}&pageSize=${this.props.pagesize}`;
      
      let data=await fetch(url);
      let parcedata= await data.json();
      this.setState({articles: this.state.articles.concat(parcedata.articles) ,
                     totalResults:parcedata.totalResults,
                     });
      console.log(parcedata);
    };

  render() {
    return (
      <>
      <div>
        <h1 className="text-center">NewsMonkey-top {this.capitalizeFirstLetter(this.props.catagory)} Headlines </h1>
        {this.state.loding && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
        >
        <div className="container">
        <div className="row">
        
        
        {console.log(this.state)}
        {/* !this.state.loding && */}
      
       { this.state.articles.map((element)=>{
            return <div className="col-md-3" key={element.url}>
              <Newsitems title={element.title === '[Removed]' || element.title === 'null' ?  "Title" : element.title} 
              description ={element.description ?  'Description is now not avalable': element.description} 
              imageurl={element.urlToImage ?  element.urlToImage : 'https://cdn.benzinga.com/files/images/story/2024/07/01/SK-hynix-TSMC-2024-Tech-Symposium-03.png?width=1200&height=800&fit=crop'} 
              url={element.url} aurther={element.author ? element.author : 'Unknown'} date={element.publishedAt} sourse={element.source.name}/>
            </div>          
        })}
        </div>
        </div>
        </InfiniteScroll>
        
      </div>
      {/* <div className="container d-flex justify-content-between">
      <button type="button" disabled={this.state.page<=1} className="btn btn-primary" onClick={this.chpre}>Previous</button>
      <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalResults/20)} className="btn btn-primary" onClick={this.chnext}>Next </button>
      </div> */}
      
      </>
    )
  }
}
