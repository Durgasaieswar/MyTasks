import React from 'react'

const NewsItem = (props) => {
    return (
        <div className="ui info message">
                <div className="header">{props.news.title}</div>
                <div className="list">{props.news.description}</div>
        </div>
    );
};
export default NewsItem;