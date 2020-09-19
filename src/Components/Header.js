import React from 'react'
import Navigation from './Navigation'
function Header(){
    return (
        <header className="app-header">
           <span className="header">
             AppName
           </span>
            
            <Navigation />
        </header>
    )
}
export default Header