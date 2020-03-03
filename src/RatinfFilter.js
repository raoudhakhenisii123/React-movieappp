import React, {Component} from 'react'
// import Rating from './Ratingminimum';
import StarRatingComponent from 'react-star-rating-component'
import {connect}  from 'react-redux';
import {filter} from './actions/MovieActions'

class RatingFilter extends Component{
constructor(props){
super(props)
this.state={
rating:5
}
}

onStarClick=(nextValue, prevValue, name)=> {
 this.setState({rating: nextValue} ,()=>this.props.filterfun(this.state)
    );
  }
 
render(){
    return(
    <div className="rating-filter">
        <span className="rating-filter-text">Minimum rating</span><br/>
        {/* <Rating
            count={count}
            value={this.state.rating}
            onchangeRating={(newRating) =>{
                onChange(newRating)
            }} /> */}
            <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={this.state.rating}
          onStarClick={this.onStarClick.bind(this)}
        />
      </div>
)
        }}
// const mapStateToProps=state=>{
//     return{
//         count: state.minRatingfilter
//     }
// }

const mapDispatchToProps=dispatch=>{
    return{
        filterfun: newtitlefilter=>{
            dispatch(filter( newtitlefilter))}}}
     

const RatingFilterContainer= connect(null, mapDispatchToProps) (RatingFilter)
export default RatingFilterContainer