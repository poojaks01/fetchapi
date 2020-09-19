import React from 'react'
import HelloWorld from '../Components/HelloWorld'

function Home(){
    return(
        <div>
            <h1 style={{fontWeight:"bold"}}>this is the Home page</h1>

             <HelloWorld name="jarod" />
        </div>
    )
}
export default Home