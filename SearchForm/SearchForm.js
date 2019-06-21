import React from 'react';
import './SearchForm.css'

class SearchForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            textValue: '',
            selectValue: 'en',
            sortValue: null
        }
    }

    handleTextValue = (e) =>{
        this.setState({
            textValue: e.target.value
        })
    }

    handleSelect = (e) =>{
        this.setState({
            selectValue: e.target.value
        })
    }


    submit = (e) =>{
        e.preventDefault();
        this.props.handleFetch(this.state.textValue, this.state.selectValue, this.state.sortValue)
    }


    render(){
        return (
            <section id='form-section'>
                <form onSubmit={this.submit}>
                    <fieldset>

                        <label htmlFor='word-search'>Search for Rhyming words:</label>
                        <input id='word-search' type='text' placeholder='Rhyme' onChange={this.handleTextValue} value={this.state.textValue} required/>

                        <label htmlFor='lang-select'>By language:</label>
                        <select id='lang-select' onChange={this.handleSelect} value={this.state.selectValue}>
                            <option value="en">English</option>
                            <option value='es'>Spanish</option>
                        </select>

                        

                        <button type='submit'>Search</button>
                    </fieldset>
                </form>
            </section>
        )
    }
}

export default SearchForm;