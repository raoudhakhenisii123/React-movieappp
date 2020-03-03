import React from 'react';


const Rating=({count, onchangeRating=()=>{}})=>{

    let starhtml=[]

 for (let i=0;i<5;i++){
 if(i<count){
starhtml.push(<span onClick={()=>onchangeRating(i+1)} key={i}>★</span>)

}
else 
      {starhtml.push(<span onClick={()=>onchangeRating(i+1)} key={i}>☆</span>)}

 }

 return starhtml
}

export default Rating