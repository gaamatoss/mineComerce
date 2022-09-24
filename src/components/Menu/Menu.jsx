import React from "react";
import { Nav } from 'rsuite';
import Position from "rsuite/esm/Overlay/Position";
import './menu.css'

export default function Menu({ openCart }) {

    return (
        <div className="menu">
            <Nav>
                <Nav.Item eventKey="store" style={{ marginRight: 5 }}>
                    Store
                </Nav.Item>
                <Nav.Item eventKey="cart" onClick={openCart} ><button style={{ backgroundColor: "transparent" }}>Cart</button></Nav.Item>
            </Nav>
        </div>
    )
}