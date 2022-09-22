import React from "react";
import { Drawer, Button, Placeholder } from 'rsuite';

export default function Cart({ openCart, setOpenCart }) {

    const [openWithHeader, setOpenWithHeader] = React.useState(false);

    return (
        <div>
            <Drawer open={openWithHeader} onClose={() => setOpenWithHeader(false)}>
                <Drawer.Header>
                    <Drawer.Title>Cart</Drawer.Title>
                    <Drawer.Actions>
                        <Button onClick={() => setOpenWithHeader(false)}>Cancel</Button>
                        <Button onClick={() => setOpenWithHeader(false)} appearance="primary">
                            Payment
                        </Button>
                    </Drawer.Actions>
                </Drawer.Header>
                <Drawer.Body>
                    <Placeholder.Paragraph />
                </Drawer.Body>
            </Drawer>
        </div>
    )
}