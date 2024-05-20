import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { ToastContainer , toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Create =()=>{

    const [data, setData]= useState({
        title:'',
        author:'',
        body:''
    })

    const handlChange=(e)=>{
        const {name, value} = e.target;
        setData((prev)=>{
            return{...prev, [name]: value}
    
        })

    }


    const handleSubmit=(e)=>{
      e.preventDefault()
      axios.post('http://localhost:4000/blogs',data)
      .then(res =>{
        toast.success('new blog added successfully',{
          position: toast.POSITION.TOP_RIGHT,
          autoClose:3000,
         
        })
      })
  
      .catch(err =>{
        toast.error('An error Occured while adding blog',{
          position:toast.POSITION.TOP_RIGHT,
          autoClose:3000,
         
        })
      })
  
    };
  

return (
<div onSubmit={handleSubmit}>


    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title:</Form.Label>
        <Form.Control name="title" type="text" onChange={handlChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Author:</Form.Label>
        <Form.Control name="author" type="text"  onChange={handlChange}  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Body</Form.Label>
        <Form.Control as="textarea" name="body" type="text"  onChange={handlChange}  />
      </Form.Group>

      <Button variant="primary" type="submit">save blog</Button>

      <ToastContainer/>
      <p>{data.title}</p>
    <p>{data.author}</p>
    <p>{data.body}</p>
    </Form>
 







</div>


)



};

export default Create;