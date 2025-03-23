import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Components/Login'; 
import Registro from './Components/Registro';
import Inicio from './Components/Inicio';
import NotFound from "./Components/NotFound";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProtectedRoute from './Components/PrivateRoute';
import Admin from './Components/Admin';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/userlogin" />} />
                <Route path="/userlogin" element={<Login />} />
                <Route path="/Registro" element={<Registro />} />
                
                {/* RUTAS PARA EL ADMINISTRADOR */}
                <Route path="/Admin" element={
                    <ProtectedRoute allowedRoles={['ADMIN']}>
                        <Admin />
                    </ProtectedRoute>
                } />

                {/* RUTAS PARA LOS USUARIOS */}   

                <Route path="/Inicio" element={
                    <ProtectedRoute allowedRoles={['USER']}>
                        <Inicio />
                    </ProtectedRoute>
                } />

                

                {/* RUTA NO ENCONTRADA */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
