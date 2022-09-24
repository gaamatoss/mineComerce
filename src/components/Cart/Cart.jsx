import React from "react";
import { Drawer, Button, Placeholder } from 'rsuite';
import CartItem from './CartItem'

export default function Cart({ state, closeCart }) {

    return (
        <div>
            <Drawer open={state} onClose={closeCart} >
                <Drawer.Header>
                    <Drawer.Title>Cart</Drawer.Title>
                    <Drawer.Actions>
                        <Button onClick={closeCart} >Cancel</Button>
                        <Button onClick={closeCart} appearance="primary">
                            Payment
                        </Button>
                    </Drawer.Actions>
                </Drawer.Header>
                <Drawer.Body>
                    <CartItem />
                </Drawer.Body>
            </Drawer>
        </div>
    )
}