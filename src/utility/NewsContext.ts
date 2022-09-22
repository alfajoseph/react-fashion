import { createContext } from 'react';
import { NewsData } from './NewsData';

export interface IContextProvider {
    newsList: NewsData;
    setNewsList: (arg: NewsData) => void
}

const NewsContext = createContext<IContextProvider>({} as IContextProvider);

export default NewsContext;