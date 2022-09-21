import axios from 'axios';

export const baseUrl = 'https://newsapi.org/v2/top-headlines?country=de';
// export const apiKey = 'f9c83c3aa91e4c44aa2f0368f34dda0f';
// export const apiKey = 'b20b7e5037a84696a2754381f8a717b1';
export const apiKey = '1223';

export const getTopNews = async () => {
    const result = await axios
        .get(`${baseUrl + `&apiKey=` + apiKey + `&pageSize=6`}`);
    return result.data;
};

export const getNews = async (category) => {
    const result = await axios
        .get(`${baseUrl + `&category=` + category + `&apiKey=` + apiKey + `&pageSize=3`}`);
    return result.data;
};

export const getNewsWithPagination = async (category, page) => {
    const result = await axios
        .get(`${baseUrl + `&category=` + category + `&apiKey=` + apiKey + `&page=` + page}`);
    return result.data;
};