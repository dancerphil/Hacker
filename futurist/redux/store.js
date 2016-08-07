import {createStore} from 'redux'
import myApp from './reducer'
let store = createStore(myApp);
export default store;