import React from "react";
import './card.css'
import { Panel } from 'rsuite';
import { BsFillCartPlusFill } from 'react-icons/bs'

export default function Card({ addToCard }) {
    return (
        <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
            <img src="https://pbs.twimg.com/profile_images/1553942611030953986/3bduP-xR_400x400.jpg" height="240" />
            <Panel header="Spider-Man">
                <button onClick={addToCard}><BsFillCartPlusFill size='25px' /></button>
            </Panel>
        </Panel>
    )
}