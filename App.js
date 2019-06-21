import React from 'react';
import './App.css';
import SearchForm from './SearchForm/SearchForm';
import WordList from './WordList/WordList';

class App extends React.Component {
    
    constructor(props){
      super(props);
      this.state = {
        words: [],
        error: null
      }
    }

    

    handleFetch = (word, lang) =>{

      try{
          fetch(`https://rhymebrain.com/talk?function=getRhymes&word=${word}&lang=${lang}`)
        .then(response => response.json())
        .then(responseData => this.setState({
          words: responseData,
          error: null
        }))
        }catch(error){
          this.setState({
            error
          })
        }
        console.log(this.state.words)

     }
     

     





    render(){
      
      return (
        <section>
          <SearchForm handleFetch={this.handleFetch}/>
          <WordList words={this.state.words}/>
        </section>
      )
    }
}

export default App;
