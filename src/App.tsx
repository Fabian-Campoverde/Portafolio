
// import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import { RoutesWithNotFound, Home } from './componentes'
import  Hero  from './componentes/Content/Hero'
import  Acerca  from './componentes/Content/Acerca'
import  Proyectos  from './componentes/Content/Proyectos'
import  Contacto from './componentes/Content/Contacto'

function App() {
  

  return (
   <BrowserRouter>
   <Home>
    <RoutesWithNotFound>
        
        <Route path="/" element={<Hero />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/contacto" element={<Contacto />} />
        
        
    
    </RoutesWithNotFound>
    </Home>
    </BrowserRouter>
  )
}

export default App
