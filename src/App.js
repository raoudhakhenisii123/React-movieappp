import React, {Component} from 'react';
import Filtername from './Filtername';
import Rating from './Ratingminimum';
import './App.css';
import MovieList from './MovieList';
import RatingFilter from './RatinfFilter'

class App extends Component {
  constructor(props){
super(props);
this.state={
mininumrating:'1',
movies:[
  { id: 'Manhatten', title:'Manhatten Lockdown',rating:'2', image:'http://fr.web.img6.acsta.net/c_215_290/pictures/19/11/15/16/51/0654190.jpg' , year:'2020'},
 {id: 'Midway', title:'Midway', rating:'5',  image:'http://fr.web.img2.acsta.net/c_215_290/pictures/19/10/11/14/04/1892294.jpg', year:'2019'},
],
keyword:'',
newmovie:{id:Math.random(),
  title:'Gemini Man',
   image:'http://fr.web.img3.acsta.net/c_215_290/pictures/19/09/06/09/24/1577721.jpg', 
   year:'2019'}
}}
AddnewMovie=newmovie=>{
  
  this.setState({movies: this.state.movies.concat(newmovie)
  })

}
  
render() {
  return (
    <div className="App">
      <header className="App-header">
        <Filtername value={this.state.keyword} onChange={(newtitlefiliter)=>{
          this.setState({keyword:newtitlefiliter})
        }}/>
        
        <RatingFilter
            count={this.state.minRatingFilter}
            onChange={(newRating) => {
              this.setState({
                minRatingFilter: newRating
              })
            }} />

      </header>
      <main className='movie-main-app'>
        <MovieList movies= {this.state.movies.filter(el=>el.rating>=this.state.mininumrating 
  && el.title.toLowerCase().includes(this.state.keyword.toLowerCase().trim()))}
    onaddmovie= {newmovie => this.AddnewMovie(newmovie)}/>
      </main>
    </div>
  );
}}

export default App;
