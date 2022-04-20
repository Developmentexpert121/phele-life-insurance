import React, {useState} from 'react'
import AdminHeader from '../layout/Header'
import { Container, Row, Col } from 'react-bootstrap'
const AdminLibrary = () => {
    const [formData, setFormData] = useState({
        slug: '',
        title: '',
        description :''
    })

    const InputHandler = (e) =>{
        const {name, value} = e.target;
        setFormData((prevdata) => ({
            ...prevdata,
            [e.target.name] : e.target.value
        }))
    }

    const submit = (e) =>{
        e.preventDefault()
        const data = {slug: formData.slug, title: formData.title, description: formData.description}
     
        fetch(`http://localhost:4000/library/library`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
    }

    return (
        <>
            <AdminHeader />
            <div className='content-here'>
                <Container>
                    <Row>
                        <Col xs={12} md={6} lg={6}>
                            <h3>Add Insurance Library</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <form onSubmit={submit}>
                                <Row>
                                    <Col xs={12} md={6} lg={6}>
                                        <div>
                                            <label>Slug</label>
                                            <input
                                                type="text"
                                                name='slug'
                                                className='form-control'
                                                placeholder='Enter Slug. Ex: This-is-title'
                                                onChange={InputHandler}
                                                value={setFormData.slug}
                                            />
                                        </div>
                                    </Col>
                                    <Col xs={12} md={6} lg={6}>
                                        <div>
                                            <label>Title</label>
                                            <input
                                                type="text"
                                                name='title'
                                                className='form-control'
                                                placeholder='Enter Title'
                                                onChange={InputHandler}
                                                value={setFormData.title}
                                            />
                                        </div>
                                    </Col>
                                    <Col xs={12} md={12} lg={12}>
                                        <div>
                                            <label>Title</label>
                                            <textarea 
                                                name='description'
                                                rows={3}
                                                className="form-control"
                                                placeholder='Enter Description'
                                                onChange={InputHandler}
                                                value={setFormData.description}
                                            />
                                        </div>
                                    </Col>
                                    <Col xs={12} md={6} lg={6}>
                                    </Col>
                                </Row>
                                <Col>
                                    <button className='btn btn-primary ' >Submit</button>
                                </Col>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}


export default AdminLibrary