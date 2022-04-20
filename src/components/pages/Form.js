import React, {useState} from 'react'
import Header from './../common/Header';
    const Form = () => {
        const [question, setQuestion] = useState("")

            const aa = (e) =>{
                const {name, value} = e.target;
                setQuestion((prevquestion) =>({
                    ...prevquestion,
                    [name] : value,
                }))
            }



        const [answer, setAnswer] = useState("")
        const submit = (e) => {
            e.preventDefault()
            fetch(`http://localhost:4000/faqs/question`, {
              method: "POST",
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ question, answer}),
            })
          }

          

    return(
        <>
        <Header />
        <form onSubmit={submit}>
             <input   
            type="text" 
            name="question" 
            placeholder="Question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            />
            <br/>
            <br/>

            <input 
            type="text" 
            name="answer" 
            placeholder="Answer" 
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            />
            <br/>
            <br/>
            <br/>

            <button >Submit Now</button>
            </form>
        </>
    );
}

export default Form;
