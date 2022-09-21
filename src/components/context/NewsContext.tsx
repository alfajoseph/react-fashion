import * as React from "react";
import { createContext, useState } from "react";

export type FullNews = {
    author: any;
    content: string;
    description: string;
    publishedAt: string;
    source: any;
    title: string;
    url: string;
    urlToImage: string;
}

type NewsContextType = {
    news: FullNews | null
    setNews: React.Dispatch<React.SetStateAction<FullNews | null>>
}

type NewsContextProviderProps = {
    children: React.ReactNode
}

export const NewsContext = createContext<NewsContextType | null>(null)

export const NewsContextProvider = ({ children }: NewsContextProviderProps) => {
    const [news, setNews] = useState<FullNews | null>(null)
    return (
        <NewsContext.Provider value={{ news, setNews }}>
            {children}
        </NewsContext.Provider>
    )
}