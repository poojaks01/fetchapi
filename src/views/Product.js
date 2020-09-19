import React, {useState, useEffect}from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Loader from '../Components/loader'
function Product(){
   const {id} = useParams()
  
   const url = `https://5f65b8b643662800168e6e3e.mockapi.io/api/v1/products/${id}`
    
    const [product, setProduct]  = useState({
        loading: false,
        data: null,
        error: false
    })

    let content = null

    useEffect(() => {
        setProduct({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url)
           .then(response => {
               setProduct({
                   loading: false,
                   data: response.data,
                   error: false
               })
           })
           .catch(error => {
               setProduct({
                   loading:false,
                   data: null,
                   error: true
               })
           })
    }, [url])

    if(product.error){
        content = <p>
            There was an error please refresh or try again later.
        </p>
    }

    if (product.loading){
        content = <Loader></Loader>
    }
    if (product.data){
         
        content =
        <div>
           <h1>{product.data.name}</h1>
           <div>
           <img
               src={product.data.avatar}
               alt={product.data.name}
               />
           </div>
           <div>
               $ {product.data.price}
           </div>
           <div>
               {product.data.createdAt}
           </div>
           
        </div>
       
    }
    return(
        <div>
           {content}
           <div>
<h1>this is product page</h1>
</div>
        </div>
    )
   
}
export default Product 