import React from 'react'

class Part1 extends React.Component{
    state={term: ''};

    componentWillReceiveProps(props){
        this.setState({term: props})
    }
    
    onInputChange = (event) => {
        this.setState({term : event.target.value});
        //console.log(this.state.term);
    };

    display= (event) => {
        event.preventDefault();
        this.props.onAdd(this.state.term);
        this.setState({ term: ''});
    };
    
    render(){
        return(
            <div>
                <form  onSubmit={this.display}>
                    <div className="ui input">
                            <input type="text" value={this.state.term} onChange={this.onInputChange} />
                            <button  className="ui primary button">Add To-Do</button>
                    </div>
                </form>   
            </div>
        );
    };
};


export default Part1;