import React, { useState } from 'react';



const Additem =(props)=>{
        let [getData,setData] = useState({
                title : "",
                content : ""
        })

        const getValue =(e)=>{
                let {name,value} = e.target
                setData((oldData)=>{
                        return {
                                ...oldData,
                                [name] : value
                        }
                })
        }
        const Add =()=>{
                props.toGet(getData)
        }

        return (
                <>
                <div className="container">
                        <div className="row">
                                <div className="col-4 offset-4">
                                        <input name="title" className="form-control" onChange={getValue} placeholder="Enter Your Title" autoComplete="off"></input>
                                        <textarea name="content" className="form-control" onChange={getValue} cols="5" rows="5" placeholder="Enter Your text"></textarea>
                                        <button className="btn btn-success btn-block" onClick={Add}>ADD ITEM</button>
                                </div>
                        </div>
                </div>
              
                </>
        )
}

export default Additem;