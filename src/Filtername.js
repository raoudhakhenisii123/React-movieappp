import React , {Component} from 'react'
import {connect} from 'react-redux'
import {filter} from './actions/MovieActions'


class Filtername extends Component{
constructor(props){
super(props)
this.state={
keyword:""
}
}

handlechange=(e)=>{
this.setState({keyword:e.target.value},() =>this.props.filterfun(this.state))
}
render(){
 return(
        <div className='name-filter'>
            <input type='text' placeholder='Type movie name to search' 
           value ={this.props.value} 
        //    value ={this.filter_name} 
            onChange={this.handlechange}/>
            <input type='button' value='Search' />
        </div>
    )
        
        }}

const mapDispatchToProps= dispatch =>{
    return{
        filterfun: newtitlefilter =>{
            dispatch(filter(newtitlefilter)
                
            )
        }
    }
}

   const FilternameContainer=connect(null, mapDispatchToProps) (Filtername)

export default FilternameContainer;