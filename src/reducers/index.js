import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    routing,
    /*form: formReducer.plugin(//TODO
        formReducers //to reset form after completion
    )*/
});

export default rootReducer
