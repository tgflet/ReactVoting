import React, { Component } from 'react';

import './App.css';
class Candidate extends Component{
  vote = (e) =>{
    this.props.onVote(this.props.name);
  }
  render(){
    return(
      <li>
        <div className="candidate">
        <span className="tally">{this.props.popularity}</span> {this.props.name} 
        <button onClick={this.vote}>+</button>
        </div>
      </li>

    );
  }
}
class Roster extends  Component{
  vote = (item) =>{
    this.props.onVote(item);
  }
  
  render(){
    return(
         <ul>
           {this.props.arr.map( (x,index) =>
              <Candidate key={index}
              name={x.name}
              popularity={x.popularity}
              onVote={this.vote}/>
            )}
         </ul> 
    );
  }
}

class App extends Component {
  constructor (props){
    super(props);
    this.state={
      languages: [
        {name: "React", popularity: 0},
        {name: "Angular", popularity: 0},
        {name: "Vue", popularity: 0},
        {name: "Ember",popularity: 0}
      ]
    }
  }
  vote=(x)=>{
    let roster = [...this.state.languages];
    for(let i=0; i<roster.length; i++){
      if(roster[i].name ===x){
        roster[i].popularity++;
      }
    }
    roster.sort(function(a,b){return b.popularity - a.popularity;});
    this.setState({languages: roster});

  }
  render() {
    return (
      <div className="App">
        <h1>Vote Your JS Library!</h1>
        <div className="list">
          <Roster arr={this.state.languages} onVote={this.vote}/>
          
        </div>
      </div>
    );
  }
}

export default App;
