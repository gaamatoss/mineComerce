import React from "react";
import './card.css'
import { BsFillCartPlusFill } from 'react-icons/bs'

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.path} alt={props.name} />
            <h1>{props.name}</h1>
            <button><BsFillCartPlusFill /></button>
        </div>
    )
}