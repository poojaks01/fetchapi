import React from 'react'
import {Link} from "react-router-dom";
function NavigationMenu(props){
    return(
            <div>
                       <div style={{fontWeight:"bold", padding:"-20px",fontSize:"30px"}}>
                            <ul>
                              <li style={{listStyle:"none"} }>the menu</li>
                           </ul>
                       </div>
                       <ul>
                           <li style={{ listStyle:"none"}}>
                             <Link to="/" style={{color:"blue", fontWeight:"500",position:'relative', left:"-40px", fontSize:"20px", padding:"20px", borderTop:"1px solid lightgrey", borderBottom:"1px solid lightgrey", display:"block"}}
                               onClick={props.closeMenu}
                             >
                             Home
                             
                             </Link>
                           </li>

                          <li style={{ listStyle:"none"}}>
                             <Link to="/about" style={{color:"blue", fontWeight:"500",position:'relative', left:"-40px", fontSize:"20px", padding:"20px", borderTop:"1px solid lightgrey", borderBottom:"1px solid lightgrey", display:"block"}}
                               onClick={props.closeMenu}
                             >
                             About
                             </Link>
                          </li>
                          <li style={{ listStyle:"none"}}>
                             <Link to="/products/:id" style={{color:"blue", fontWeight:"500",position:'relative', left:"-40px", fontSize:"20px", padding:"20px", borderTop:"1px solid lightgrey", borderBottom:"1px solid lightgrey", display:"block"}}
                               onClick={props.closeMenu}
                             >
                             Product
                             </Link>
                          </li>



                       </ul>
            </div>
    )
}
export default NavigationMenu