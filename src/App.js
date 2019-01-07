import React, { Component } from 'react';
import './App.css';
import Title from './Title.js'


class App extends Component {
  constructor(props, {match}){
    super(props);
    this.state={
      text : null,
      isLoading: true,
      error: null,
      show : true,
    }
  }

  showFilm=()=>{
    this.setState({
      show: !this.state.show
    })
  }

  componentDidMount(){
    this.fetchDate();
  }


  fetchDate=()=>{
    fetch('https://ghibliapi.herokuapp.com/films')
    .then(response=> response.json())
    .then(data=>this.setState({
      text: data,
      isLoading: false,
    })) 
    .catch(error=>this.setState({
      isLoading: false,
      text: null, 
      error : error
    }))
  }


  render() {
    const {isLoading, text, error, show} = this.state
    return (
      <div className="App">
        {
          isLoading ? <div id="loader"/> :null
        }
        {
          error? <div> Error </div> :null
        }
        {
          text && show ?(
            this.props.match.params.filmId === "CastleInTheSky" ? (
              <Title title={text[0].title} film={text[0]} key={text[0].key} show={true} />
            ) :  this.props.match.params.filmId === "GraveoftheFireflies" ? (
              <Title title={text[1].title} film={text[1]} key={text[1].key} show={true}/>
            ) : this.props.match.params.filmId === "MyNeighborTotoro" ? (
              <Title title={text[2].title} film={text[2]} key={text[2].key} show={true}/>
            ): this.props.match.params.filmId === "KikisDeliveryService" ? (
              <Title title={text[3].title} film={text[3]} key={text[3].key} show={true}/>
            ): this.props.match.params.filmId === "OnlyYesterday" ? (
              <Title title={text[4].title} film={text[4]} key={text[4].key} show={true}/>
            ): this.props.match.params.filmId === "PorcoRosso" ? (
              <Title title={text[5].title} film={text[5]} key={text[5].key} show={true}/>
            ):this.props.match.params.filmId === "PomPoko" ? (
              <Title title={text[6].title} film={text[6]} key={text[6].key} show={true}/>
            ): null    
          ): null
        }
      </div>
    );
  }
}

export default App;
