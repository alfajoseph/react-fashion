import * as React from "react";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import NewsHomeCard from "../components/NewsHomeCard";
import { getNews, getTopNews } from "../services/Api";

interface NewsData {
    author: any;
    content: string;
    description: string;
    publishedAt: string;
    source: any;
    title: string;
    url: string;
    urlToImage: string;
}

const Home = () => {
    const [topNewsData, setTopNewsData] = useState<NewsData[]>([]);
    const [businessData, setBusinessData] = useState<NewsData[]>([]);
    const [entertainmentData, setEntertainmentData] = useState<NewsData[]>([]);
    const [healthData, setHealthData] = useState<NewsData[]>([]);
    const [scienceData, setScienceData] = useState<NewsData[]>([]);
    const [sportsData, setSportsData] = useState<NewsData[]>([]);
    const [technologyData, setTechnologyData] = useState<NewsData[]>([]);

    useEffect(() => {
        getTopNews().then(data => data && data.status === 'ok' && setTopNewsData(data.articles));
        getNews('business').then(data => data && data.status === 'ok' && setBusinessData(data.articles));
        getNews('entertainment').then(data => data && data.status === 'ok' && setEntertainmentData(data.articles));
        getNews('health').then(data => data && data.status === 'ok' && setHealthData(data.articles));
        getNews('science').then(data => data && data.status === 'ok' && setScienceData(data.articles));
        getNews('sports').then(data => data && data.status === 'ok' && setSportsData(data.articles));
        getNews('technology').then(data => data && data.status === 'ok' && setTechnologyData(data.articles));
    }, []);

    return (
        <div>
            <Header />
            <div className="container">
                <div className="row mb-5">
                    <div className="col-12">
                        <h2 className="mt-4 mb-4">Headlines</h2>
                    </div>
                    <div id="carouselExampleInterval" className="carousel carousel-dark slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {topNewsData.map((NewsData, index): any => {
                                return (
                                    (<div key={index} className="carousel-item active" data-bs-interval="2000">
                                        <img src={NewsData.urlToImage} className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>{NewsData.title}</h5>
                                        </div>
                                    </div>)
                                );
                            })}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row mb-5">
                    <div className="col-12">
                        <h2 className="mt-4 mb-4">Business</h2>
                    </div>
                    {businessData.map((NewsData, index): any => {
                        return (
                            <NewsHomeCard key={index} news={NewsData} />
                        );
                    })}
                    <div className="col text-center">
                        <a className="btn btn-lg btn-outline-danger" href="business" role="button">Load More Business News</a>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-12">
                        <h2 className="mt-4 mb-4">Entertainment</h2>
                    </div>
                    {entertainmentData.map((NewsData, index): any => {
                        return (
                            <NewsHomeCard key={index} news={NewsData} />
                        );
                    })}
                    <div className="col text-center">
                        <a className="btn btn-lg btn-outline-danger" href="entertainment" role="button">Load More Entertainment News</a>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-12">
                        <h2 className="mt-4 mb-4">Health</h2>
                    </div>
                    {healthData.slice(0, 6).map((NewsData, index): any => {
                        return (
                            <NewsHomeCard key={index} news={NewsData} />
                        );
                    })}
                    <div className="col text-center">
                        <a className="btn btn-lg btn-outline-danger" href="health" role="button">Load More Health News</a>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-12">
                        <h2 className="mt-4 mb-4">Science</h2>
                    </div>
                    {scienceData.slice(0, 6).map((NewsData, index): any => {
                        return (
                            <NewsHomeCard key={index} news={NewsData} />
                        );
                    })}
                    <div className="col text-center">
                        <a className="btn btn-lg btn-outline-danger" href="science" role="button">Load More Science News</a>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-12">
                        <h2 className="mt-4 mb-4">Sports</h2>
                    </div>
                    {sportsData.slice(0, 6).map((NewsData, index): any => {
                        return (
                            <NewsHomeCard key={index} news={NewsData} />
                        );
                    })}
                    <div className="col text-center">
                        <a className="btn btn-lg btn-outline-danger" href="sports" role="button">Load More Sports News</a>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-12">
                        <h2 className="mt-4 mb-4">Technology</h2>
                    </div>
                    {technologyData.slice(0, 6).map((NewsData, index): any => {
                        return (
                            <NewsHomeCard key={index} news={NewsData} />
                        );
                    })}
                    <div className="col text-center">
                        <a className="btn btn-lg btn-outline-danger" href="technology" role="button">Load More Technology News</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;