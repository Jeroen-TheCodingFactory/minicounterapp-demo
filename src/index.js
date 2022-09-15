//Importeren React
import React from "react";
// Importeren React DOM
import ReactDOM from "react-dom/client";
// Importeer App
import App from "./App/App";
// Variabele aan die we koppelen aan het html element root
const root = ReactDOM.createRoot(document.getElementById('root'));
// renderen we die variabele
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);