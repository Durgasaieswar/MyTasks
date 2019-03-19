import React from 'react'
import ListDetail from './ListDetail'

const Part2 = ({ pass,onDelete,onEdit }) => {
   return pass.map((item) => {
        return (
            <div className="row">
                    <ListDetail key={item} Each={item} onSelect={onDelete} onSelecti={onEdit} />
            </div>
        );
       
            
   });
   //return <div>{allValues}</div>;
};

export default Part2;