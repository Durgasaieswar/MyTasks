import React from 'react'
class subPart2 extends React.Component {
    state={editTerm: this.props.Each};
    onEdit = (term) => {
        this.setState({editTerm: <input type="text" value={term} />})
        console.log(this.state.editTerm)
        return (
            <div>{this.state.editTerm}</div>
        );
    };
    render(){
        return(
            <div className="active teal item">
                <b>{this.props.Each}</b>
                <div className="ui label">
                    <button onClick={() => this.onEdit(this.props.Each)}><i className="pencil alternate icon"></i></button>
                    <button onClick={() => this.props.onSelect(this.props.Each)}><i className="trash alternate icon"></i></button>
                </div>
            </div>
        );    
    }
};

export default subPart2;