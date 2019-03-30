export const AddToDo = (props) => {
    return{
        type: 'AddToDo',
        payload: props.title,
        payload1: props.description,
    };
};

export const DeleteToDo = (props) => {
    return{
        type: 'DeleteToDo',
        id: props
    };
};

export const EditToDo = (props) => {
    return{
        type: 'EditToDo',
        id: props.id,
        
    };
};