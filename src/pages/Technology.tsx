import * as React from "react";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsHomeCard from "../components/NewsHomeCard";
import { getNewsWithPagination } from "../services/Api";

const Technology = () => {
    const [news, setNews] = useState([]);
    const [hasMore, sethasMore] = useState(true);
    const [page, setpage] = useState(1);

    useEffect(() => {
        getNewsWithPagination('technology', page).then((data) => {
            data && data.status === 'ok' && setNews([...news, ...data.articles])
            if (data?.article?.length === 0 || data?.article?.length < 20) {
                sethasMore(false);
            }
        });
    }, [page]);

    const fetchData = async () => {
        setpage(page + 1);
    };

    return (
        <div>
            <InfiniteScroll
                dataLength={news.length}
                next={fetchData}
                hasMore={hasMore}
                loader={<h1>Loading .......</h1>}
                endMessage={<h1>Caught up with all technology related news</h1>}
            >
                <div className="container">
                    <div className="row m-2">
                        {news.map((news, index) => {
                            return <NewsHomeCard key={index} news={news} />;
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </div>
    );
}

export default Technology;