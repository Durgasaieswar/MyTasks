import React from 'react';


class Button extends React.Component{
    state={delete:true,edit:true}
    onChangeBox = (event) => {
        if(event.target.checked === true){
            this.setState({delete:false})
        }
        else{
            this.setState({delete:true})
        }
      
    };
    onChangeRadio = (event) => {
        if(event.target.checked === true){
            this.setState({edit:false})
        }
        else{
            this.setState({edit:true})
        }
      
    };
    onChangeRadioOff=()=>{
        this.setState({edit:true});
    }
    
    render(){
        return(
            <div className="ui segment">
                    <div className="ui checkbox">
                        <input type="checkbox" name="one" onChange={this.onChangeBox} />
                        <label>Click To Delete</label>
                    </div>
                    <div className="ui radio checkbox">
                        <input type="radio" name="one" onChange={this.onChangeRadio}/>
                        <label>On</label>
                    </div>
                    <div className="ui radio checkbox">
                        <input type="radio" name="one" onChange={this.onChangeRadioOff}/>
                        <label>Off</label>
                    </div>
                    <div className="right floated">
                        <button 
                        className="ui negative button" 
                        disabled={this.state.delete === true ? true: false}
                        onClick={() => this.props.onDelete(this.props.id)}>Delete</button>
                        <button 
                        className="ui primary button"
                        onClick={() => this.props.onEdit(this.props.id)}
                        disabled={this.state.edit === true ? true: false}
                        >Edit</button>
                    </div>
            </div>
        );
    }
}


export default Button;