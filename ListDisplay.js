import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavItem, Table ,ListGroupItem,ListGroup, Card} from 'react-bootstrap';
function ListDisplay() {
    const[email,setEmail]=useState("")
    const[first_name,setFN]=useState("")
    const[last_name,setLN]=useState("")
    const[avatar,setAvatar]=useState("")

    const[data, setData]=useState([]);
    const[data1, setData1]=useState([]);
    const[user, setUser]=useState([]);

    useEffect(()=>{
        fetch("http://localhost:3000/display").then((result)=>{
            result.json().then((resp)=>{
                setData(resp)
            })
        })
    })


    useEffect(()=>{
        fetch("http://localhost:3000/data").then((result)=>{
            result.json().then((resp)=>{
                setData1(resp)
            })
        })
    })



    useEffect(()=>{
        fetch("http://localhost:3000/support").then((result)=>{
            result.json().then((resp)=>{
                setUser(resp)
            })
        })
    })
    
    return (
        <>
        <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Page</th>
            <th>Per Page</th>
            <th>Total</th>
            <th>Total Pages</th>
          </tr>
        
        </thead>
        <tbody>
        {
          data.map((item)=>
          <tr>
          <td>{item.id}</td>
          <td>{item.page}</td>
          <td>{item.per_page}</td>
          <td>{item.total}</td>
          <td>{item.total_pages}</td>
         
        </tr>
          )
          
        }
       
        </tbody>
      </Table>



      
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Avatar</th>
          </tr>
        
        </thead>
        <tbody>
        {
            data1.map((item1)=>
            <tr>
          <td>{item1.id}</td>
          <td>{item1.email}</td>
          <td>{item1.first_name}</td>
          <td>{item1.last_name}</td>
          <td>{item1.avatar}</td>
        </tr>
            )
        }
       
        </tbody>
      </Table>

      <Table  striped bordered hover variant="dark">
  <thead>
  
    <tr>
     
     <th>support</th>
      <th>url</th>
      <th>text</th>
    </tr>
  </thead>
  <tbody>  
        {
          user.map((it)=>
          <tr>
        <td>support :</td>
        <td>{it.url}</td>
        <td>{it.text}</td>
      </tr>
          )
        }
  </tbody>
</Table>
      
            

        </>
    )
}

export default ListDisplay




