import axios from 'axios'
import React , {useState, useEffect} from 'react'


const Read = () => {

const [data ,setData] = useState()

function getData() {

  axios.get("https://67e0f06458cc6bf7852377d5.mockapi.io/curd")
       .then((res) => {
         console.log(res.data);
         setData(res.data)
        })
}
useEffect(() =>{
  getData();
},[data] );

  return (
    <>
    <h2>Read Operation</h2>
     <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  {   

   data.map((eachData) => {
    return (
      <>
       <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Name</td>
      <td>@Email</td>
      <td><button className='btn-success'>Edit</button></td>
      <td ><button className='btn-danger'>Delete</button></td>
    </tr>
   </tbody>
      </>
    )
   })
 
   
   }
</table>
    </>
  )
}

export default Read
