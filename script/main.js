'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

class NameForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: ''}

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        this.setState(alert('A name was submitted' + event.target.value));
    }

    render() {
        return(
            <form onSubmit={this.handleChange}>
                <label>
                    Name:
                    <input type={"text"} value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type={"submit"} value={"投稿"}/>
            </form>
        )
    }
}

const element = <NameForm/>;
ReactDOM.render(
    element,
    document.getElementById('root')
);




