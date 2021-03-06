import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from 'redux-thunk';
import { IngredientReducer, loginReducer } from "../reducers/reducers";

const composeEnhancers = (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    ingredient: IngredientReducer,
    login: loginReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
)
export const guardarLocalStorage = (state) => {
    const ingredientState = JSON.stringify(state)
    localStorage.setItem('risoto', ingredientState)
}