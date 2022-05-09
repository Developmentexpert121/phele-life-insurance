import React from 'react'
import { Alert } from "react-bootstrap"

export default function AlertBar(props) {
    return (
        <div style={{ height: '60px' }}>
            {props.alertMsg && <Alert variant={props.alertType}>
                <p className="mb-0"> {props.alertMsg} </p>
            </Alert>}
        </div>
    )

}

AlertBar.defaultProps = {
    alertType: "info"
}