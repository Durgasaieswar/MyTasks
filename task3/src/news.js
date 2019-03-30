import React from 'react'
import NewsItem from './NewsItem'


const news = (props) => {
    console.log(props.list);
    const renderNews=props.list.map((item,index) => {
        return <NewsItem key={index} item={item}/>
    })
    if (props.list.length === 0){
        return <div className="ui negative message">No News</div>;
    }
    return(
            <div>
                <h3>Headlines on {props.term}</h3>
                {renderNews}
            </div>
    );
}


export default news;