import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, RouterProvider,Route } from "react-router";
import Layout from './Components/Layout/Layout.jsx';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import Github from './Components/Github/Github.jsx'
const root = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route path="" element={<Home/>}></Route>
     <Route path="about" element={<About/>}></Route>
        <Route path="contact" element={<Contact/>}></Route>
          <Route path="user/:id" element={<User/>}></Route>
             <Route path="github" element={<Github/>}></Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={root}/>

  </StrictMode>,
)
