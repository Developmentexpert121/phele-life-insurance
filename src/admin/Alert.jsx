import React from 'react'
import { Alert } from "react-bootstrap"

export default function AlertBar(props) {
    return (
        <Alert variant="success">
            <p className="mb-0"> {props.alertMsg} </p>
        </Alert>
    )
}
