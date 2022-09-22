import React from "react";
import { Nav } from 'rsuite';
import './menu.css'
import { AiOutlineShoppingCart } from 'react-icons/ai'

export default function Menu(props) {

    return (
        <div className="menu">
            <Nav>
                <Nav.Item eventKey="store" style={{ marginRight: 5 }}>
                    Store
                </Nav.Item>
                <Nav.Item eventKey="cart" ><button onClick={props.setOpenCart} style={{ backgroundColor: "transparent" }}><AiOutlineShoppingCart size='20px' /></button></Nav.Item>
            </Nav>
        </div>
    )
}