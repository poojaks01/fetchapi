import React, {useState, useEffect}from 'react'
import axios from 'axios'
import Loader from '../Components/loader'
import ProductCard from '../Components/ProductCard'
function Home(){
  
   const url = `https://5f65b8b643662800168e6e3e.mockapi.io/api/v1/products/`
    
    const [products, setProducts]  = useState({
        loading: false,
        data: null,
        error: false
    })
    useEffect(() => {
        setProducts({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url)
           .then(response => {
               setProducts({
                   loading: false,
                   data: response.data,
                   error: false
               })
           })
           .catch(error => {
               setProducts({
                   loading:false,
                   data: null,
                   error: true
               })
           })
    }, [url])


    let content= null

    if(products.error){
        content = <p>
            There was an error please refresh or try again later.
        </p>
    }

    if (products.loading){
        content = <Loader></Loader>
    }

    if (products.data){
         
        content =
        products.data.map((product) => 
        <div key={product.id}>
            <ProductCard
              product = {product}
             />
        </div>
        
        )
           
           
        
    }

    return(
        <div>
            <h1 style={{fontWeight:"bold"}}>
                Best Sellers
            </h1>

             {content}
        </div>
    )
}
export default Home