import * as React from "react";
import { NewsContextProvider } from "./components/context/NewsContext";
import PageRoutes from "./routes/PageRoutes";

const App = () => {
    return (
        <NewsContextProvider>
            <PageRoutes />
        </NewsContextProvider>
    );
}

export default App;