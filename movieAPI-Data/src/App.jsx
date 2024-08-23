 import React,{useState} from 'react'
 
import Navbar from './Components/navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './page/Home/Home'
import SearchMovie from './page/Search/SearchMovie'

import { QueryClient, QueryClientProvider } from 'react-query'
   
     const queryClient = new QueryClient()

 const App = () => {


   return(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter >
        <Navbar   />
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/movieDetails/:id'  element={ <SearchMovie/>}/>
            </Routes>
        <Footer/>
      </BrowserRouter>
    </QueryClientProvider>
   )
 }
 
 export default App