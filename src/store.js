import {createStore} from 'redux'
import rootReducer from './reducers'
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store;
// import ratingFilterReducer from './reducers/ratingfilter';
// import filterNameReducer from './reducers/filtername';
// import moviesReducer from './reducers/movies';


// const ratingFilterReducer=(state=0, action)=>{
//     if(action.type==='SET_RATING_FILTER'){
//         return action.rating
//     }
//     return state

// }
// const filterNameReducer=(state='', action)=>{
//     if(action.type==='SET_FILTER_NAME')
//     {
//         return action.title
//     }
//     return state
// }

// const moviesReducer=(state=[], action)=>{
//     if(action.type==='ADD_MOVIE'){
//         return state.concat(action.movie)
//     }
    
//     if(action.type==='EDIT_MOVIES') {
//         return state.map(m=>{
//             if(m.id===action.id){
//                 return action.movie
//             }
//             return m
//         })
//     }
    
//     if (action.type==='DELETE_MOVIE'){
//         return state.filter(m=>{
//             if(m.id===action.id){
//                 return false
//             }
//             return true
//         })
//     }
//     return state
//     }



// const store=createStore(combineReducers({
//     movies:moviesReducer,
//     filtername:filterNameReducer,
//    minRatingfilter:ratingFilterReducer
// }))
// console.log(store.getState())
// store.dispatch({
//     type:'ADD_MOVIE',
//     movies:{
//         id:'ffffdfd',
//         title:'titanic',
//         // rating:2,
//         year:2000
//     }
// })
// console.log(store.getState())

// store.dispatch({
//     type:'SET_FILTER_NAME',
//     title: 'test'
// })

// const Manhatten={
//  id: 'Manhatten',
//  title: 'Manhatten Lockdown',
// //   rating: 2, 
//   image: 'http://fr.web.img6.acsta.net/c_215_290/pictures/19/11/15/16/51/0654190.jpg',
//    year: 2020 }
// const Midway={
//  id: 'Midway', 
// title: 'Midway',
// // rating: 5,
// image: 'http://fr.web.img2.acsta.net/c_215_290/pictures/19/10/11/14/04/1892294.jpg', 
//  year: 2019 }
// const GeminiMan = {
//    id: 'GeminiMan',
//   title: 'Gemini Man',
//   rating:3,
//   image: 'http://fr.web.img3.acsta.net/c_215_290/pictures/19/09/06/09/24/1577721.jpg',
//    year: 2019
//       }      


// store.dispatch({
//     type:'ADD_MOVIE',
//     movies:Manhatten
// })


// store.dispatch({
//     type:'ADD_MOVIE',
//     movies:Midway
// })

// store.dispatch({
//     type:'ADD_MOVIE',
//     movies:GeminiMan
// })



