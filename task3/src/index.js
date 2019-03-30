import React from 'react'
import ReactDOM from 'react-dom'
import api from './api'
import News from './news'

class App extends React.Component{
    state={ term: null, news: [], selectTerm:'', newsOnSelect:[]};
    change = (event) => {
        event.preventDefault();
        this.setState({term: event.target.value});
    };

    onCallApi = (event) => {
        event.preventDefault();
        this.onSelect();
    };

    onSelect = async() => {
        const list= await api.get("/sources");
        //console.log(list);
        this.setState({news : list.data.sources});
        //console.log(this.state.news);
    };
    onChange = (event) => {
        event.preventDefault();
        this.setState({selectTerm: event.target.value});
        
    };

    onRequestTwo =(event)=>{
        event.preventDefault();
        this.display(this.state.selectTerm);
    };

    display= async(term)=>{
        const list= await api.get("/everything",{params:{q: term}});
        this.setState({newsOnSelect: list.data.articles});
    };

    render(){
        return(
            <div>
                <center>
                    <h2>Click On Get News</h2>
                        <form onSubmit={this.onCallApi}>
                            <input type="submit" value="Get News"/>
                        </form>
                        <form onSubmit={this.onRequestTwo}>
                            <select onChange={this.onChange}>
                                    {this.state.news.map((item,index) => {
                                        return <option key={index}>{item.name}</option>
                                    })}
                            </select>
                            <input type="submit"/>
                        </form>
                </center>
                    <News list={this.state.newsOnSelect} term={this.state.selectTerm}/>
                      
            </div>
        );
    }
}
ReactDOM.render(<App />, document.querySelector("#root"))