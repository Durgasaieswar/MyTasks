import React from 'react'
import ReactDOM from 'react-dom'
import Part1 from './components/Part1'
import Part2 from './components/Part2'


class App extends React.Component{
    constructor(props){
        super(props);
        this.editRef=React.createRef();
        console.log(this.editRef);
    }

    
    displayData = [];
    state={list: this.displayData,currentItem: ''};
    AddInput = (props) => {
            console.log(props);
            this.displayData.push(props);
            this.setState({list: this.displayData});
            console.log(this.state.list);
    };


    onDelete = (pro) => {
        console.log(pro);
        var array = [...this.state.list]; 
        var index = array.indexOf(pro);
        if (index !== -1) {
          array.splice(index, 1);
          console.log(array);
          this.displayData= array;  
          this.setState({list: this.displayData});
        }
    };


    onEdit = (props) => {
        console.log(props);
        var value=`${props}`;
        return(
            <div>
                <input type="text" ref={this.editRef} value={value} />
            </div>
        );
    };
    

    render(){
        return(
            <center>
                <div className="ui container">
                    <div >
                        <Part1 onAdd={this.AddInput} />
                    </div>
                    <div className="ui vertical menu">
                        <Part2 pass={this.state.list} onDelete={this.onDelete} onEdit={this.onEdit}/>
                    </div>
                </div>
            </center>
        );
    };
};



ReactDOM.render(<App />, document.querySelector('#root'));