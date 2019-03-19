import React from 'react'
import ReactDOM from 'react-dom'


class App extends React.Component{
    state = {value: ''};
    onInputChange = (event) => {
        this.setState({value : event.target.value});
    };
    onSelectChange = (event) => {
        this.setState({value : event.target.value});
    };
    display = () => {
        //event.preventDefault();
        alert('You\'ve Given Input ' + this.state.value.toUpperCase());
    };

    onInputChange1 = (event) => {
        console.log(event.target.type);
        if (event.target.type === 'radio'){
            alert('Submitted through radio');
        }
        else if(event.target.type === 'checkbox'){
            alert('Submitted through checkbox');
        }
    };

    
    render(){
        return (
            <center>
                <div className="ui segment">
                    <h3>Click On Anything You Want</h3>

                    <div className="ui segment">
                        <form className="ui field" onSubmit={this.display}>
                            <input type="text" onChange={this.onInputChange}/>
                        </form>
                    </div>

                    <div className="ui segment">
                        <form onSubmit={this.display}>
                            <select onChange={this.onSelectChange}>
                                <option>First</option>
                                <option>Second</option>
                                <option>Third</option>
                            </select>
                            <input type="submit"/>
                        </form>
                    </div> 

                    <div className="ui segment">
                            <input type="radio" name="one" onChange={this.onInputChange1}/>Type 1<br/>
                            <input type="radio" name="one" onChange={this.onInputChange1}/>Type 2<br/>
                    </div>

                    <div className="ui segment">
                        <input type="checkbox" value={this.state.value} onChange={this.onInputChange1}/>one<br/>
                        <input type="checkbox" value={this.state.value} onChange={this.onInputChange1}/>Two<br/>
                        <input type="checkbox" value={this.state.value} onChange={this.onInputChange1}/>Three<br/>
                    </div>
                    
                </div>
            </center>
        );
    };
};

ReactDOM.render( <App />, document.querySelector('#root'));