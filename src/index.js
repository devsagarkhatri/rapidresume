import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
<<<<<<< HEAD
=======
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from "./reportWebVitals";
>>>>>>> dca4febb61d442feaf083f60c65c686df2be5673
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ChakraProvider>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </ChakraProvider>
);
