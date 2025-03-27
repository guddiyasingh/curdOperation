import axios from 'axios'
import React , {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';


const Read = () => {

const [data ,setData] = useState([]);
const [tabledark , setTableDark] = useState('')

function getData() {

  axios.get("https://67e0f06458cc6bf7852377d5.mockapi.io/curd")
       .then((res) => {
         console.log(res.data);
         setData(res.data)
        });
}

function handleDelete(id) {
  axios.delete(`https://67e0f06458cc6bf7852377d5.mockapi.io/curd/${id}`

  ).then(() =>{
    getData()
  })
}

const setToLocalStorage = (id, name, email) => {

    localStorage.setItem("id",id)
    localStorage.setItem("name",name)
    localStorage.setItem("email",email)
   
}
useEffect(() =>{
  getData();
},[]);

  return (
    <>
<div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" 
  role="switch" id="flexSwitchCheckDefault"
  onClick={() =>{
if(tabledark === "table-dark") setTableDark("");
else setTableDark("table-dark");

  }}
  />
</div>


    <div className='d-flex justify-content-between m-2'>
      <h2>Read Operation</h2>
      <Link to="/">
      <button className='btn btn-secondary'>create</button>
      </Link>
      </div>
     <table className={`table ${tabledark}`}>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>

       <tbody>
       {data.map((eachData, index) => (
      <tr key={eachData.id}>  
        <th scope="row">{index + 1}</th>
        <td>{eachData.name}</td>
        <td>{eachData.email}</td>
        <td>

          <Link to="/update">
          <button className="btn-success"
          onClick={()=> setToLocalStorage(
            eachData.id,
            eachData.name,
            eachData.email

          )}
          
          >Edit</button>
          </Link>
         
          </td>
        <td>
          <button className="btn-danger" 
        onClick={()=>handleDelete(eachData.id)}
        >

        Delete{""}
        </button>
        </td>
      </tr>
    ))}
      
   </tbody>
      
</table>
    </>
  )
}

export default Read
