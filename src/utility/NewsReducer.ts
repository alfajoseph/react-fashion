import { NewsData } from "./NewsData";

export const NewsReducer = (state: any, item: NewsData) => {
    switch (item.actionType) {
        case "ADD":
            localStorage.setItem('news', JSON.stringify(item))
            return item;
        default:
            return state;
    }
}