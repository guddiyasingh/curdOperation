import React from 'react'

const Update = () => {

  const [id , setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");



  useEffect(() =>{

    setId(localStorage.getItem("id"));
    setId(localStorage.getItem("name"));
    setId(localStorage.getItem("email"));
  })

  return (
    <>
    <h2>Update</h2>
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
//   onClick={handleSubmit}
     >Update </button>
</form>
    </>
  )
}

export default Update
