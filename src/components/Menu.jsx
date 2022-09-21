import React from "react";
import { Nav } from 'rsuite';

export default function Menu() {
    return (
        <div className="w-full h-8 bg-violet-500">
            <Nav>
                <Nav.Item>Home</Nav.Item>
                <Nav.Item>News</Nav.Item>
                <Nav.Item>Solutions</Nav.Item>
                <Nav.Item>Products</Nav.Item>
                <Nav.Item>About</Nav.Item>
            </Nav>
        </div>
    )
}