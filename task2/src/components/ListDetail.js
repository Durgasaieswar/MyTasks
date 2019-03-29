import React from 'react'
class subPart2 extends React.Component {
    render(){
        return(
            <div className="active teal item">
                <b>{this.props.Each}</b>
                <div className="ui label">
                    <button onClick={() => this.onSelecti(this.props.Each)}><i className="pencil alternate icon"></i></button>
                    <button onClick={() => this.props.onSelect(this.props.Each)}><i className="trash alternate icon"></i></button>
                </div>
            </div>
        );    
    }
};

export default subPart2;