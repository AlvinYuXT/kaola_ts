import { applyMiddleware, createStore, Store } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/index'

// Note: this API requires redux@>=3.1.0

const initialState = {
    goods: []
}

const store: Store<any> = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
)

export default store
