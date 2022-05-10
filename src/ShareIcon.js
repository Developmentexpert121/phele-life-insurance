import React, { useState, useRef } from 'react'
import { Button, Overlay } from 'react-bootstrap';
import { FiShare2 } from "react-icons/fi";
import { FaFacebook, FaTwitter, FaInstagram,FaWhatsapp } from "react-icons/fa";

export default function ShareIcon() {

    const [show, setShow] = useState(false);
    const target = useRef(null);

    return (
        <>
            <Button variant="light" ref={target} onClick={() => setShow(!show)}>
                <FiShare2/>
            </Button>
            
            <Overlay target={target.current} show={show} placement="right">
                {({ placement, arrowProps, show: _show, popper, ...props }) => (
                    <div
                        {...props}
                        style={{
                            position: 'absolute',
                            backgroundColor: 'white',
                            padding: '2px 10px',
                            // margin: '0px 5px',
                            color: 'black',
                            borderRadius: 1,
                            ...props.style,
                        }}
                    >
                        <FaFacebook onClick={()=> console.log('Running Facebook') }/>
                        <FaTwitter onClick={()=> console.log('Running twitter ') }/>
                        <FaInstagram onClick={()=> console.log('Running Insta') }/>
                        <FaWhatsapp onClick={()=> console.log('Running Whatsapp') }/>
                    </div>
                )}
            </Overlay>
        </>
    )
}

