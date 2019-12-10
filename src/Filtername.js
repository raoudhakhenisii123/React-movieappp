import React, { Component } from 'react'

const Filtername=({value='', onChange=()=>{}})=>{
        return (<div className='name-filter'>
            <input type='text' placeholder='Type movie name to search' value ={value} onChange={(event)=>{onChange(event.target.value)}}/>
            <input type='button' value='Search' />
        </div>)
    }


export default Filtername