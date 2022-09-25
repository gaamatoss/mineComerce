import React from "react";
import './card.css'
import { Panel } from 'rsuite';

export default function Card({ addToCard, name, thumb }) {
    return (
        <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240, marginRight: 50, marginBottom: 25 }}>
            <img src={thumb} height="240" width="240" />
            <Panel header={name} style={{ backgroundColor: '#f8f8f8' }}>
                <div style={{ display: 'flex', justifyContent: "space-between", alignItems: 'center' }}>
                    <p>$ 9.99</p>
                    <button onClick={addToCard} className="btn__add">Add</button>
                </div>
            </Panel>
        </Panel>
    )
}