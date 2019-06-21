import React from 'react';
import './WordList.css'

class WordList extends React.Component{


    render(){
        const words = this.props.words.map((word)=>{
            return <li className="word" key={word.word}>{word.word.toUpperCase()}<div>Syllables:  {word.syllables}</div></li>
        })

        return (
            <section id="wordlist-section">
                <ul>
                    {words}
                </ul>
            </section>
        )
    }
}

export default WordList;