import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard(props){
    return (
        <div style={{boxSizing:'border-box', marginBottom:'20px', overflow:'hidden'}}>
           <Link to={`/products//${props.product.id}`}>
            
                <div
                   style={{'backgroundImage': `url('${props.product.avatar}')`,
                   width: '98%', height: '450px', backgroundSize:'cover',backgroundRepeat:'no-repeat'

                     }} 
                   >
                  {props.product.name}
                  {props.product.price}
               </div>


           </Link>
           <div style={{padding:'20px'}}>
               <h3 style={{fontWeight:'bold', fontSize:'40px', marginBottom:'20px'}}>
               <Link to={`/products//${props.product.id}`}>
                  {props.product.name}
                </Link>

               </h3>
               <div style={{fontWeight:'bold', marginBottom:'20px', fontSize:'20px'}}>
                    $ { props.product.price}
               </div>
               <div style={{marginBottom:'20px'}}>
                   {props.product.createdAt}
               </div>
               <Link to={`/products/${props.product.id}`}
               style={{backgroundColor:'blue', fontWeight:'500',color:'white', padding:'10px', display:'flex', justifyContent:'center'}}
               >
                View
               </Link>

           </div>
        </div>
    )
}
export default ProductCard
