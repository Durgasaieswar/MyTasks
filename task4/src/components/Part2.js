import React from 'react'
import Button from './button.js'

const Part2 = ({show, onDelete, onEdit}) => {
    return show.map((item,index) => {

        if(item !== undefined){
            return(
               <div className="ui segment">
                   <h5>Title:</h5>{item.title}
                   <h5>Description:</h5>{item.description}
                   <Button 
                   id={index} 
                   title={item.title} 
                   desc={item.description} 
                   onDelete={onDelete}
                   onEdit={onEdit}/>
               </div>
           );
       }
       return (
            <div className="ui message">
                <p>Currently,there is no ToDo's in your List</p>
            </div>
        );
    });
}

export default Part2;