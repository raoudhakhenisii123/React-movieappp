import { v4 as uuidv4 } from 'uuid';
import { ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE, FILTER} from '../actions/types';
const initialState = [
    {
        id: uuidv4(),
        title: 'Manhatten Lockdown',
        rating: 2,
        image: 'http://fr.web.img6.acsta.net/c_215_290/pictures/19/11/15/16/51/0654190.jpg',
        year: 2020
    },
    {
        id: uuidv4(),
        title: 'Midway',
        rating: 5,
        image: 'http://fr.web.img2.acsta.net/c_215_290/pictures/19/10/11/14/04/1892294.jpg',
        year: 2019
    },
    {
        id: uuidv4(),
        title: 'Gemini Man',
        rating: 3,
        image: 'http://fr.web.img3.acsta.net/c_215_290/pictures/19/09/06/09/24/1577721.jpg',
        year: 2019
    }
]
const MovieReducer = (state = {movies : initialState , filtering:{keyword : "" , rating : 1}} , action) => {
    console.log(action.payload)
    switch (action.type) {
        case ADD_MOVIE:
             return {...state , movies : state.concat(action.payload)};
        case DELETE_MOVIE: 
            return {...state , movies : state.filter(el => el.id !== action.payload)};
        case EDIT_MOVIE:
            return {...state , movies : state.map (el => el.id===action.payload.id ? action.payload.movie : el)};
        case FILTER:
            return {...state, filtering:{
                keyword:action.payload.keyword,
                rating:action.payload.rating
            }}
        default:
            return state;
    }
}

export default MovieReducer;