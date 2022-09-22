import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./style.scss";
import MainContainer from "./container/Maincontainer";

const root = ReactDOM.createRoot(document.getElementById("app-root") as HTMLElement);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <MainContainer>
                <App />
            </MainContainer>
        </BrowserRouter>
    </React.StrictMode>
);