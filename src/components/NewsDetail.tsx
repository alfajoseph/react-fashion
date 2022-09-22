import * as React from "react";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NewsContext from "../utility/NewsContext";

const NewsDetail = () => {
    let navigate = useNavigate();
    const { newsList } = useContext(NewsContext);

    useEffect(() => {
        if (Object.keys(newsList ?? {}).length === 0) {
            navigate("/");
        }
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <article>
                        <img src={newsList.urlToImage} className="img-fluid mb-5" alt="Responsive image" />
                        <h3><a href={newsList.url} className="m-2 text-danger">{newsList.title}</a></h3>
                        <p className="text-secondary">{new Date(newsList.publishedAt).toDateString()}</p>
                        <figure className="text-end">
                            <blockquote className="blockquote">
                                <p>{newsList.description}</p>
                            </blockquote>
                            {newsList?.source?.id && newsList?.source?.name ? <figcaption className="blockquote-footer">
                                Someone working {newsList.source.id} in <cite title="Source Title">{newsList.source.name}</cite>
                            </figcaption> : null}
                        </figure>
                        <p>{newsList.content}</p>
                    </article>
                </div>
            </div>
        </div>
    )
}

export default NewsDetail;