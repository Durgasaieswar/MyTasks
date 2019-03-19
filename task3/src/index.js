import React from 'react'
import ReactDOM from 'react-dom'
import api from './api'
import News from './news'

class App extends React.Component{
    state={ term: null, news: []};
    change = (event) => {
        event.preventDefault();
        this.setState({term: event.target.value});
        if (this.state.term){
            this.onSelect(this.state.term);
            console.log(this.state.term);
        }
    };

    onSelect = async(term) => {
        const list= await api.get("/everything",{params:{q: term}});
        this.setState({news : list.data.articles});
        //console.log(this.state.news);
    }

    render(){
        return(
            <div>
                <h2>DropDown List to Get News</h2>
                    <select name="select" onChange={this.change}>
                        <option value="">Please Select An Option</option>
                        <option value="codeBrahma">codeBrahma</option>
                        <option value="Banglore">Banglore</option>
                        <option value="IndianPremierLeague">IndianPremierLeague</option>
                        <option value="LokSabhaElections">LokSabha Elections</option>
                    </select>
                <h3>Headlines on {this.state.term}</h3>
                <News list={this.state.news} term={this.state.term} />
                    
               
            </div>
        );
    }
}
ReactDOM.render(<App />, document.querySelector("#root"))