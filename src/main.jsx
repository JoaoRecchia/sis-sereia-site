// src/main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Produtos from "./pages/Produtos.jsx";
import ProdutoCategoria from "./pages/ProdutoCategoria.jsx"; // << nova
import Sobre from "./pages/Sobre.jsx";
import Contato from "./pages/Contato.jsx";

import "./styles/theme.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "produtos", element: <Produtos /> },
      { path: "produtos/:categoria", element: <ProdutoCategoria /> }, // << AQUI
      { path: "sobre", element: <Sobre /> },
      { path: "contato", element: <Contato /> },
      // (opcional) 404 amigável:
      { path: "*", element: <div className="container section"><h2>Página não encontrada</h2></div> }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
