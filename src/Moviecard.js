import React from 'react'
import Rating from './Ratingminimum'
import {deleteMovie} from './actions/MovieActions'
import {connect } from 'react-redux'
import EditModal from './EditModal'

class Moviecard extends React.Component {
    state={}
    delete = (id) => {
        this.props.delete(id)
    }
    render(){
    return (
        <div className='movie-card'>
            <div className='movie-rating'>
                <Rating count={this.props.movie.rating} />
            </div>
            <div className='movie-img'>
                <img src={this.props.movie.image} alt="" />
            </div>

            <div className='movie-description'>{this.props.movie.title}--{this.props.movie.year}</div>
            <button onClick={()=>this.delete(this.props.movie.id)}>delete</button>
            <EditModal movie={this.props.movie} />

        </div>)
    }
}
const mapDispatchToProps = dispatch => {
    return {
      delete : id => dispatch(deleteMovie(id))
    }
  }
export default connect(null , mapDispatchToProps)(Moviecard)