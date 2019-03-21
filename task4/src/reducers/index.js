import { combineReducers } from 'redux'
import { reducer as reducer2} from 'redux-form'

const reducer1 = (state=[],action) => {
    switch(action.type){
        case 'TITLE':
            return [...state,action.payload];
        case 'DESCRIPTION':
            return [...state,action.payload];
        default:
            return state;
    }
};

export default combineReducers({
    form1: reducer1,
    form2: reducer2
});