import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import _ from 'lodash'


/*const initialState = () => {
    return{
        ToDoList: []
    }
}*/

const reducer1 = (state=[],action) => {
    switch(action.type){
        case 'AddToDo':
            return [...state,{title:action.payload,description:action.payload1}];
        case 'DeleteToDo':
            return state.filter((item,index) => index !== action.id);
        case 'EditToDo' :
            state.splice(action.id,1,action.payload);
            return state;
        case 'SearchToDo':
            //console.log(action.payload,"from reducer")
            return _.filter(state, item => item.title.includes(action.payload));
        default:
            return state;
    }
};

export default combineReducers({
    form1: reducer1,
    form: formReducer
});