import React from 'react'
import NewsItem from './NewsItem'


const news = (props) => {
    console.log(props.list);
    const renderNews=props.list.map((item,index) => {
        return <NewsItem news={item} key={index}/>
    })
    if (props.list.length === 0 ) {
        return <div className="ui negative message">No News on {props.term}</div>;
    }
    else{
        return <div>{renderNews}</div>;
    }
}

export default news;