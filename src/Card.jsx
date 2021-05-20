import React from 'react';


const Card =(props)=>{

        const Remove=()=>{
                props.RemoveData(props.id)
        }
        return (
                <>
                <div className="col-3">
                        <div className="card">
                                <h5>{props.title}</h5>
                                <p><i>{props.content}</i></p>
                                <button className="btn btn-warning" onClick={Remove}>Remove Item</button>
                        </div>
                </div>
                </>
        )
}

export default Card;