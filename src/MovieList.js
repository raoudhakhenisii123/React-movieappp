import React, { Component } from 'react'
import Moviecard from './Moviecard'
import { connect } from 'react-redux'


class MovieList extends Component {
   constructor(props) {
      super(props);
      this.state = {}
   }

   render() {

      return (
         <div className='movie-List'>
            {this.props.data.movies
               .filter(
                  el => el.title.toUpperCase().includes(this.props.data.filtering.keyword.toUpperCase().trim()))
                  //   &&  el.rating >= this.props.data.filtering.rating )
               .map(el => <Moviecard key={el.id} movie={el} />)
               }
         </div>
      )
         }}
      // const mapStateToProps = state => {
      //    return {

      //       movies: state.movies.filter(el =>
      //           el.rating >= state.minRatingfilter)
      //          && el.title.toLowerCase().includes(state.filtername.toLowerCase().trim()))
 
const mapStateToProps = state => {
   return {
      data: state.MovieReducer
   }
}
const MovieListContainer = connect(mapStateToProps)(MovieList)
export default MovieListContainer