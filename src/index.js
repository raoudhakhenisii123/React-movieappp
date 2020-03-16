import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MovieApp from './MovieApp';
import {Provider} from 'react-redux';
import store from './store';
import {BrowserRouter, Route} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Description from './Description';

const App=()=>(
    <Provider store={store}>
        <BrowserRouter>
        {/* <MovieApp/> */}
        <Route exact path="/" component={MovieApp}/>
        <Route path="/desription/:id" component={Description}/>
        </BrowserRouter>
    </Provider>

)


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
