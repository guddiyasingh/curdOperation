import React, { use, useState } from 'react'
import  {useNavigate} from "react-router-dom"
import axios from "axios";


const Create = () => {
const[name, setName] = useState("");
const[email, setEmail] = useState('');
const history = useNavigate();

const header = {"Access-control-Allow-Origin": "*"};


const handleSubmit = (e) => {

  e.preventDefault();
console.log("clicked");
  axios
  .post("https://67e0f06458cc6bf7852377d5.mockapi.io/curd",{
      name:  name,
      email: email,
      header ,
    })

     .then(() => {
      history("/read");
     });
    };
  return (
   <>
   <div className='d-flex justify-content-between m-2'>
   <h2>Create</h2>
   <button className='btn btn-primary'>show Data</button>
   </div>
   <form>
  <div className="mb-3">
  
   
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputName" className="form-label">Name</label>
    <input type="text" 
    className="form-control" 
    onChange={(e)=>setName(e.target.value)}
    />
  </div>

  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input 
    type="email"
     className="form-control"
      aria-describedby="emailHelp"
      onChange={(e)=>setEmail(e.target.value)}
      />
  
  
  <button type="submit" 
  className="btn btn-primary"
  onClick={handleSubmit}
     >Submit</button>
</form>
   </>
  )
}

export default Create
