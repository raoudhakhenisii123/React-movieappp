import React from 'react'
import Rating from './Ratingminimum'

const RatingFilter = ({onChange, count}) => (
    <div className="rating-filter">
        <span className="rating-filter-text">Minimum rating</span><br/>
        <Rating
            count={count}
            onchangeRating={(newRating) =>{
                onChange(newRating)
            }} />
      </div>
)

export default RatingFilter