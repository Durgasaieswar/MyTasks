import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';

import { AddToDo,DeleteToDo,EditToDo } from '../actions'
import Part2 from './Part2'



class App extends React.Component{
    state={title:'',description:''};

    renderInput = ({label}) => {
        return (
            <div>
                <div>
                    <label>{label}</label>
                </div>
                <input 
                type="text" 
                onChange={this.onChangeInput}  //onChange is not firing, if I assign value property 
                className="ui field"
                autoComplete="off"
                />
            </div>
        ); 
            
    };

    renderInput1 = ({label}) => {
        return (
            <div>
                <div>
                    <label>{label}</label>
                </div>
                <input 
                type="text" 
                onChange={this.onChangeInput1} 
                className="ui field"
                autoComplete="off"
                />
            </div>
        ); 
            
    };

    onChangeInput = (event) => {
        this.setState({title: event.target.value});
    };

    onChangeInput1 = (event) => {
        this.setState({description: event.target.value});
    };
    
    onSubmit = (event)=>{
        event.preventDefault();
        //this.setState({id: this.state.id + 1});
        this.props.AddToDo({title: this.state.title, description:this.state.description});
        this.setState({title: '',description: ''});
        
    };
    onDelete = (props) => {
        console.log(props,"index")
        this.props.DeleteToDo(props);
        //this.setState({id: props})
    }
    onEdit = (props) => {
        console.log(props)
        this.props.EditToDo(props);   //I need to change
        
    }
   
    render(){
        return (
            <div className="ui container">
                <div className="ui segment">
                    <div className="ui segment">
                        <form className="ui form" onSubmit={this.onSubmit}>
                            <Field name="title" component={this.renderInput} label="Title"/>
                            <Field name="description" component={this.renderInput1} label="Description"/>
                            <button className="ui primary button">Submit</button>
                        </form>
                    </div>
                    <Part2  show={this.props.form1} onDelete={this.onDelete} onEdit={this.onEdit}/>
                </div>
            </div>
        );
    }
}

const combined = reduxForm({
    form: 'ToDoForm' 
})(App);

const mapStateToProps = (state) => {
    console.log(state.form1,"from mapStateToProps")
    return state;   
}

export default connect(mapStateToProps,{AddToDo,DeleteToDo,EditToDo})(combined);