import React from "react";
import { Drawer, Button, Placeholder } from 'rsuite';

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
                    <Placeholder.Paragraph />
                    <Placeholder.Paragraph />
                    <Placeholder.Paragraph />
                    <Placeholder.Paragraph />
                    <Placeholder.Paragraph />
                    <Placeholder.Paragraph />
                </Drawer.Body>
            </Drawer>
        </div>
    )
}