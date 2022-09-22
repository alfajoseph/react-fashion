import * as React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import NewsContext from "../utility/NewsContext";

const NewsHomeCard = ({ news: { title, urlToImage, url, source, description, content, publishedAt } }, key) => {
    let navigate = useNavigate();
    const { newsList, setNewsList } = useContext(NewsContext);
    const getNews = () => {
        let actionType = 'ADD';
        setNewsList({ title, urlToImage, url, source, description, publishedAt, content, actionType });
        navigate("/news");
    }
    return (
        <div key={key} className="col-md-6 col-lg-4 d-flex align-items-stretch">
            <div className="card-box">
                <div className="card-thumbnail">
                    <img src={urlToImage} className="img-fluid" alt="" />
                </div>
                <h3><a href={url} className="mt-2 text-danger">{title}</a></h3>
                <blockquote className="lead">
                    <p>{description}</p>
                </blockquote>
                <p className="text-secondary">{source.name}</p>
                <p className="text-secondary">{new Date(publishedAt).toDateString()}</p>
                <a href="#" className="btn btn-sm btn-danger float-right" onClick={getNews}>Read more</a>
            </div>
        </div>
    )
}

export default NewsHomeCard;