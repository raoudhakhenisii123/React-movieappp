import { ADD_MOVIE , DELETE_MOVIE ,EDIT_MOVIE,  FILTER } from "./types"

export const addMovie = (movie) => {
    return {
        type : ADD_MOVIE,
        payload : movie
    }
}
export const deleteMovie = (id) => {
    return {
        type : DELETE_MOVIE,
        payload : id
    }
}
export const edit_movie=(movie , id)=>{
    return{
        type: EDIT_MOVIE,
        payload: {movie , id}
    }
}
export const filter=(data)=>{
    return{
        type: FILTER,
        payload: data
    
    
    }
    

}