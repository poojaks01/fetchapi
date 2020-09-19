import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import CounterExample from './Components/CounterExample'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './views/Home'
import About from './views/About'
import Product from './views/Product'

function App() {
  return (
    <div>
     
          
         <Router>
            <Header />
               <div style={{padding:"20px"}}>
                  <Switch>
                     <Route exact path="/">
                       <Home />
                     </Route>
                     <Route path="/about">
                        <About />
                     </Route>
                     <Route path="/products/:1d">
                        <Product />
                     </Route>

                     
                   </Switch>
               </div>

            
      

           
           <Footer />
         </Router>


      
    </div>
  );
}

export default App;
