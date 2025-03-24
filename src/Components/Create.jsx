import React, { use, useState } from 'react'

const Create = () => {

const[name, setName] = useState("")
const[email, setEmail] = useState('')

const handleSubmit = () => {

  axios.post(

    ("https://67e0f06458cc6bf7852377d5.mockapi.io/curd",{
      name: name,
      email:email,
      header,
    })
  )
}
  
  return (
   <>
   <h2>Create</h2>
   <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input 
    type="email"
     className="form-control"
      aria-describedby="emailHelp"
      onChange={(e)=>setEmail(e.target.value)}
      />
   
  </div>
  <div className="mb-3">
    <label for="exampleInputName" className="form-label">Name</label>
    <input type="text" 
    className="form-control" 
    onChange={(e)=>setName(e.target.value)}
    />
  </div>

  
  <div className="mb-3 form-check">
    <input 
    type="checkbox" 
    className="form-check-input" 
    />
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" 
  className="btn btn-primary"
  onClick={handleSubmit}
     >Submit</button>
</form>
   </>
  )
}

export default Create
