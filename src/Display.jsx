import React, { useState } from 'react';
import Additem from './Additem';
import Card from './Card';

const Display =()=>{

let [getArry,setArry] = useState([])

const toSet =(note)=>{
 setArry((oldArry)=>{
         return [...oldArry,note]
 } )
}

const RemoveDataFromArry =(id)=>{
  setArry((oldData)=>{
          oldData.filter((el, index)=>{
                  return id !== index
          })
  })
}
console.log(getArry);
        return (
                <>
                <Additem toGet={toSet}></Additem>
               <div className="container">
                       <div className="row">
                               {getArry?.map((element,index)=>{
                                       return <Card title={element.title} content={element.content} id={index} key={index} RemoveData={RemoveDataFromArry}></Card>
                               })}
                       </div>
               </div>
                </>
        )
}

export default Display;