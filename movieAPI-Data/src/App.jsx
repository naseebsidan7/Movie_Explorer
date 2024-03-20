 import React from 'react'
import SearchMovie from './Components/Search/SearchMovie'
import Navbar from './Components/navbar/Navbar'
import Footer from './Components/Footer/Footer'

 const App = () => {
   return(
    <div >
       <Navbar/>
      <SearchMovie/>
   

      <Footer/>
    </div>
   )
 }
 
 export default App