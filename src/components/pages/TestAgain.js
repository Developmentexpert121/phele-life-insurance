import React, {useState} from 'react'

const Testa = () =>{
   const [formData, setFormData] = useState({
       name :'',
       email :'',
       address : ''
   })

   const InputHandler = (e) => {
    setFormData()
   }

    return (
        <div>
            <input
                type="text" 
                name ="name"
                placeholder = "Enter Name"
                
            />
            <input
                type="text" 
                name ="email"
                placeholder = "Enter email"
                
            />
            <input
                type="text" 
                name ="address"
                placeholder = "Enter address"
                
            />
        </div>
    );
}

export default Testa