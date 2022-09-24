import React from "react";
import './card.css'
import { Panel } from 'rsuite';
import { BsFillCartPlusFill } from 'react-icons/bs'

export default function Card({ addToCard, name, thumb }) {
    return (
        <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240, marginRight: 50, marginBottom: 25 }}>
            <img src={thumb} height="240" />
            <Panel header={name}>
                <button onClick={addToCard}><BsFillCartPlusFill size='25px' /></button>
            </Panel>
        </Panel>
    )
}