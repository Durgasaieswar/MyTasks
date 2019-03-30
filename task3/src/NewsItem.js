import React from 'react'

const NewsItem = (props) => {
    return (
        <div className="ui info message">
                <div className="header">{props.item.title}</div>
                <div className="description">{props.item.description}</div>
        </div>
    );
};
export default NewsItem;