import React from "react"

export default function Card(props){
    var status;
    if(props.item.openSpots ===0){
        status = "SOLD OUT"
    }
    else if(props.item.openSpots){
        status = props.item.location.toUpperCase()
    }
 return(   
    <div className="card">
        { status && <div className="status"> {status} </div>}
        <img src={`./images/${props.item.coverImg}`} className="cover--img"/>
        <div className="card--info">
            <img src="./images/star.png" className="star--img"/>
           {props.item.stats.rating}
           <span className="review">
            ({props.item.stats.reviewCount})
            .USA
            </span>
        </div>
        <p className="tittle">{props.item.title}</p>
        <p><span className="price">From ${props.item.price}</span>/person</p>
    </div>
 )
}