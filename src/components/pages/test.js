import React, { useState } from 'react'
import { FacebookShareButton } from "react-share";
import Carousel from "./Carousal"

const Test = () => {
    // const [question, setQuestion] = useState("")
    const [thearray, setTheArray] = useState([]);
    const [inputData, setinputData] = useState({
        fname: '',
        lname: '',
        mobile: ''

    })
    const inputsHandler = (e) => {
        const { name, value } = e.target;
        setinputData((prevquestion) => ({
            ...prevquestion,
            [name]: value,
        }))
    }
    let data = []
    data = thearray
    console.log(data)

    const submit = () => {
        setTheArray(asd => [...asd, inputData]);
    }
    // console.log(thearray);
    data.sort((a, b) => (a.lname > b.lname) ? 1 : -1)
    console.log(data)
    // console.log(thearray);
    var items = [1, 2, 3, 4, 5]

    return (
        <>
            <div className="users">  Hello
                <FacebookShareButton children=" share life ins" url="myins.com" />


            </div>

            <Carousel/>


            <input
                type="text"
                name="fname"
                placeholder="fname"
                value={inputData.fname}
                onChange={inputsHandler}
            />
            <br />
            <br />

            <input
                type="text"
                name="lname"
                placeholder="lname"
                value={inputData.lname}
                onChange={inputsHandler}
            />
            <br />
            <br />
            <input
                type="text"
                name="mobile"
                placeholder="mobile"
                value={inputData.mobile}
                onChange={inputsHandler}
            />
            <br />
            <br />
            <br />

            {/* {theArray.map((d)=>{
                <li>{d.question}</li>
            })} */}

            <button onClick={submit} >Submit Now</button>
            <br></br>
            <table>
                <tr>
                    <th>F Name</th>
                    <th>L Name</th>
                    <th>Mobile</th>
                </tr>
                {data.map((user) => (
                    <tr>
                        <td>{user.fname}</td>
                        <td>{user.lname}</td>
                        <td>{user.mobile}</td>
                    </tr>
                ))}
            </table>


        </>
    );
}

export default Test;
