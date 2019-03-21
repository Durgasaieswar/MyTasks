import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';

import { title, description } from '../actions'


class App extends React.Component{
      

    renderInput = (props) => {
        return (
            <div>
                <input  {...props.input.onChange}/>     //I am not able to type anything in Input tag
            </div>
        ); 
            
    };
    
    onSubmit = (values)=>{
        console.log(values);
    };
    render(){
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name="title" component={this.renderInput} label="Title"/>
                    <Field name="description" component={this.renderInput} label="Description"/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

const combined = reduxForm({
    form: 'ToDOForm'
})(App);

export default connect(null,{title, description})(combined);
