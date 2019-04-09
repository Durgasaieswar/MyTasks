import React from 'react'
import { Field, reduxForm, initialize } from 'redux-form'
import { connect } from 'react-redux';

import { AddToDo,DeleteToDo,EditToDo,SearchToDo } from '../actions'
import Part2 from './Part2'



class App extends React.Component{
   constructor(props){
       super(props);
       this.state={title: '',description:'',edit: false,id: null}
    
   }
   renderInput = ({input,label}) => {
        return (
            <div>
                <div>
                    <label>{label}</label>
                </div>
                <input 
                type="text" 
                {...input}  
                className="ui field"
                autoComplete="off"
                />
            </div>
        ); 
            
    };
    
    onSubmit = (formValues)=>{
        //console.log(formValues)
        
        if (this.state.edit){
            this.props.EditToDo(this.state.id,formValues)
            this.setState({edit: false});
            this.setState({title: null, description:null})
            this.handleInitialize();
        }
        else{
            this.props.AddToDo(formValues);
            this.handleInitialize();
        }
        
    }

    onDelete = (props) => {
        //console.log(props,"index")
        this.props.DeleteToDo(props);
    }

    onEdit = (props) => {
        console.log(props,"called");
            this.setState({id : props})
            this.props.form1.map((item,index) => {
                if(index === props){
                    this.setState({title: item.title, description: item.description});
                    this.handleInitialize()
                    //console.log(this.state.title,"onedit")
                }
                return null;
            });                            
            this.setState({edit: true});
    }

    handleInitialize = () => {
        var data = {
            title: this.state.title,
            description: this.state.description
        }
        
        this.props.initialize(data);
        //this.setState({title: '',description: ''});
        //console.log(this.state.title,"handleIntitalize")
    }

    search = (event) => {
        if(event.target.value){
            this.props.SearchToDo(event.target.value);
        }
    }
   
    render(){
        return (
            <div className="ui container">
                <div className="ui segment">
                    <div className="ui segment">
                        <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                            <Field name="title" component={this.renderInput} label="Title"/>
                            <Field name="description" component={this.renderInput} label="Description"/>
                            <button className="ui primary button">Submit</button>
                        </form>
                    </div>
                    <input type="text" onChange={this.search}/>
                    <Part2  show={this.props.form1} searched={this.state.search} onDelete={this.onDelete} onEdit={this.onEdit}/>
                </div>
            </div>
        );
    }
}

const combined = reduxForm({
    form: 'ToDoForm',
    initialize
})(App);

const mapStateToProps = (state) => {
    //console.log(state,"from mapStateToProps")
    return state;   
}

export default connect(mapStateToProps,{AddToDo,DeleteToDo,EditToDo,SearchToDo})(combined);