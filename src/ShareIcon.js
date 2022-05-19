import React, { useState, useRef } from 'react'
import { Button, Overlay } from 'react-bootstrap';
import { FiShare2 } from "react-icons/fi";
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaReddit } from "react-icons/fa";
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, RedditShareButton } from "react-share";

export default function ShareIcon(props) {

    const [show, setShow] = useState(false);
    const target = useRef(null);

    return (
        <>
            <Button variant="light" ref={target} onClick={() => setShow(!show)}>
                <FiShare2 />
            </Button>

            <Overlay target={target.current} show={show} placement="right">
                {({ placement, arrowProps, show: _show, popper, ...props }) => (
                    <div
                        {...props}
                        style={{
                            position: 'absolute',
                            backgroundColor: 'white',
                            padding: '2px 10px',
                            color: 'black',
                            borderRadius: 1,
                            ...props.style,
                        }} >
                        <FacebookShareButton quote={props.title} children={props.desc} url="https://sabsepehlelifeinsurance.com/" >
                            <FaFacebook style={{ color: "#4267B2", margin: "0 2px" }} onClick={() => console.log('Running Facebook')} />
                        </FacebookShareButton>
                        <TwitterShareButton title={props.title} children={props.desc} url="https://sabsepehlelifeinsurance.com/">
                            <FaTwitter style={{ color: "rgb(0, 172, 237)", margin: "0 2px" }} onClick={() => console.log('Running twitter ')} />
                        </TwitterShareButton>
                        <RedditShareButton title = {props.title} children={props.desc} url="https://sabsepehlelifeinsurance.com/">
                            <FaReddit style={{ color: "#FF4500", margin: "0 2px" }} onClick={() => console.log('Running Insta')} />
                        </RedditShareButton>
                        <WhatsappShareButton title = {props.title} children={props.desc} url="https://sabsepehlelifeinsurance.com/">
                            <FaWhatsapp style={{ color: "#128c7e", margin: "0 2px" }} onClick={() => console.log('Running Whatsapp')} />
                        </WhatsappShareButton>
                    </div>
                )}
            </Overlay>
        </>
    )
}

