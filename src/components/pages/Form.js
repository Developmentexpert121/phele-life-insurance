import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Header from './../common/Header';
import { VscAdd, VscChromeMinimize } from "react-icons/vsc"
const Form = () => {
    const itemList = [
        {
            "ItemName": "A",
            "Quantity": 5,
            'id': 1
        },
        {
            'ItemName': "B",
            "Quantity": 5,
            "id": 2
        },
        {
            "ItemName": "C",
            "Quantity": 5,
            'id': 3
        },
    ]
    const [items, setItems] = useState(itemList)
    const [newList, setNewlist] = useState({
        1: {
            "ItemName": "A",
            "Quantity": 0
        },
        2: {
            "ItemName": "B",
            "Quantity": 0
        },
        3: {
            "ItemName": "C",
            "Quantity": 0
        }
    }
    )

    const addItem = (i) => {
        console.log("item index ", setNewlist.i.Quantity);
        
        

    }
    const subItem = (i) => {
        console.log("item index ", i);
    }


    return (
        <>
            <Header />
            <Container>
                <Row>
                    <Col>Item Name</Col>
                    <Col> Quantity </Col>
                </Row>
                {items.map((item, index) =>

                    <Row key={index}>
                        <Col>
                            <div>
                                <h6> <VscAdd onClick={() => addItem(item.id)} /> {item.ItemName} < VscChromeMinimize onClick={() => subItem(item.id)} /></h6 >
                            </div>
                        </Col>
                        <Col>{item.Quantity}</Col>
                    </Row>



                )}
            </Container>
        </>
    );
}

export default Form;
