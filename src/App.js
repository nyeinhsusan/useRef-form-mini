import React, { useRef } from 'react'
import "./App.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
const App = () => {
  const name = useRef('')
  const email = useRef('')
  const message = useRef('')

  const eventFunction = () => {
    const userData ={
      userName: name.current.value,
      userEmail : email.current.value,
        userMessage : message.current.value
    }
    console.log(name);
    console.log(userData);
    name.current.value = ""
    email.current.value = ""
    message.current.value = ""
  }


  return (
    <div className='container'>
      <form className='col-6 border border-primary d-flex flex-column align-items-center'>
        <div className="form-group mb-4 mt-4 col-4">
          <input type='text' ref={name} className='form-control' placeholder="Enter Your Name ...." />
        </div>
        <div className="form-group mb-3 col-4">
          <input type='text' ref={email} className='form-control' placeholder="Enter Your Email ...." />
        </div>
        <div className="form-group mb-3 col-4">
          <input type='text' ref={message} className='form-control' placeholder="Enter Your Message...." />
        </div>
        <div className="form-group mb-4 col-4">
          <button type="button" onClick={eventFunction} className='btn btn-primary d-flex justify-content-center '>Submit</button>
        </div>

      </form>
    </div>
  )
}

export default App
