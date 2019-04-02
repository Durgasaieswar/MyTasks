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

export const EditToDo = (props,formValues) => {
    return{
        type: 'EditToDo',
        id: props,
        payload: formValues
        
    };
};