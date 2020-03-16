import React, {Component} from 'react'
import {connect} from 'react-redux'
import StarRatingComponent from 'react-star-rating-component'
// import { v4 as uuidv4 } from 'uuid';
class Description extends Component{

constructor(props){
super(props);
this.state={
    movie:{}
}

    }
 componentDidMount(){
this.setState({movie:this.props.movies.filter(el=>this.props.match.params.id===el.id)[0] })
}
render(){
return(
<div className='movie-card'>
    <div className='movie-card-rating'>
    <StarRatingComponent 
          name="rate1" 
          starCount={4}
        //   value={this.state.movie.rating}
        />
          </div>
             <img src={this.state.movie.image} alt="" />
<div className="movie-description">
    {this.state.movie.title} <br/>{this.state.movie.year}

</div>
</div>
)
}
}
const mapStateToProps=state=>{
    return{
    movies: state.MovieReducer}
}
export default connect (mapStateToProps)(Description)