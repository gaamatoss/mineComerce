import React from "react";
import { Panel, Placeholder, InputNumber } from 'rsuite';
import { BsTrash } from 'react-icons/bs'
import './cart.css'

export default function CartItem() {
    return (
        <Panel bordered header="Spider-Man">
            <div className="item__config">
                <InputNumber defaultValue={1} max={10} min={1} />
                <button><BsTrash size="20px" color="red" /></button>
            </div>
        </Panel>
    )
}