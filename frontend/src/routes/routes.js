import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Cadastro, Campanha, Explorar, Home, Login, DetalhesCampanhas, DetalhesCampanhasDoar, Admin, EditarCampanha , Doar} from "../containers";
import { PrivateRoute } from "./PrivateRoute";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/explorar" element={<Explorar />} />
        <Route path="/detalhes-campanhas/:id" element={<DetalhesCampanhasDoar />} />
        <Route path="/detalhes-campanhas/doar/:id" element={<Doar />} />

        <Route path="/detalhes-campanha/:id" element={
          <PrivateRoute>
            <DetalhesCampanhas />
            </PrivateRoute>
        } />


        <Route path="/campanha" element={
          <PrivateRoute>
            <Campanha />
          </PrivateRoute>
        } />
        
        <Route path="/admin/vaquinhas" element={
          <PrivateRoute>
            <Admin />
          </PrivateRoute>
        } />

        <Route path="/admin/editar-campanha/:id" element={
          <PrivateRoute>
            <EditarCampanha />
          </PrivateRoute>
        } />
      </Routes>

    </Router>
  );
}

export default AppRoutes;