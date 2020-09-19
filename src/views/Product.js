import React, {useState, useEffect}from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function Product(){
   // const {id} = useParams()
  
   const url = 'https://5f65b8b643662800168e6e3e.mockapi.io/api/v1/products/3'
    
    const [product, setProduct]  = useState(null)

    let content = null

    useEffect(() => {
        axios.get(url)
           .then(response => {
               setProduct(response.data)
           })
    }, [url])
    if (product){
         
        content =
        <div>
           <h1>{product.name}</h1>
           <div>
           <img
               src={product.avatar}
               alt={product.name}
               />
           </div>
           <div>
               $ {product.price}
           </div>
           <div>
               {product.createdAt}
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