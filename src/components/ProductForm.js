import React, { useState } from 'react';
import '../estilos/EstiloForm.css';
import axios from 'axios';

const ProductForm = (props) => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescripcion]= useState("");
    
    
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product/add', {
            title,
            price,
            description
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }
    return (
        <div>
            
            <form onSubmit={onSubmitHandler}> 
            <h1>Product Manager</h1>
                <p>
                    <label>Title: </label>
                    <input type="text" value={title} onChange={(e) =>setTitle(e.target.value)}/>
                </p>
                <p>
                    <label>Price: </label>
                    <input type="text" value={price} onChange={(e) =>setPrice(e.target.value)}/>
                </p>

                <p>
                    <label>Description: </label>
                    <input type="text" value={description} onChange={(e) =>setDescripcion(e.target.value)}/>
                </p>
                <button type="submit">Create</button>
                
            </form>

        </div>
    )
}
export default ProductForm
