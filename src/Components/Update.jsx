import React from 'react'
import  {useState, useEffect} from 'react'
import  {useNavigate} from "react-router-dom"
import axios from "axios";
import { Link } from 'react-router-dom';

const Update = () => {

  const [id , setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  useEffect(() =>{

    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  },[]);
 
const handleUpdate = (e) => {

    e.preventDefault();  
    console.log("Id...",id)
   axios.put(`https://67e0f06458cc6bf7852377d5.mockapi.io/curd/${id}`,
{
   name:  name,
   email: email,
   }) 
   .then(() =>{
    navigate("/read");
  });
};

  return (
    <>
    <h2>Update</h2>
       <form>
  <div className="mb-3">
  
   
  </div>
  <div className="mb-3">
    <label
     className="form-label">Name</label>
    <input type="text" 
    className="form-control" 
    value={name}
    onChange={(e)=>setName(e.target.value)}

    />
  </div>

  <label 

  className="form-label">Email address</label>
    <input 
    type="email"
     className="form-control"
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      />
  
  
  <button type="submit" 
  className="btn btn-primary mx-2"
  onClick={handleUpdate}
     >Update </button>

<Link to ="/read">
<button className="btn btn-secondary  mx-2" >Back</button>
</Link>

</form>
    </>
  )
}

export default Update
