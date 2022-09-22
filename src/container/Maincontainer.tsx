import * as React from "react";
import { useReducer } from "react";
import Header from "../components/Header";
import NewsContext, { IContextProvider } from "../utility/NewsContext";
import { NewsReducer } from "../utility/NewsReducer";

const MainContainer = ({ children }) => {

    const [newsList, setNewsList] = useReducer(NewsReducer, JSON.parse(localStorage.getItem('news')) ?? {});
    const newsContextProvidervalue: IContextProvider = { newsList, setNewsList };

    return (
        <NewsContext.Provider value={newsContextProvidervalue}>
            <Header></Header>
            {children}
        </NewsContext.Provider>
    );
}

export default MainContainer;