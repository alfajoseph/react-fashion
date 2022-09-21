import * as React from "react";

const NewsDetail = (props) => {
    console.log(props);
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>Ethereum's 'Merge' Is a Big Deal for Crypto—and the Planet</h1>
                    <img src="https://media.wired.com/photos/62fe63bcfd602ff2f11e6fbf/191:100/w_1280,c_limit/Ethereum-Ditches-Crypto-Business-1036181110.jpg" className="img-fluid" alt="Responsive image" />
                    <article>
                        <h2>Google Chrome</h2>
                        <p>Google Chrome is a web browser developed by Google, released in 2008. Chrome is the world's most popular web browser today!</p>
                    </article>
                </div>
            </div>
        </div>
    )
}

export default NewsDetail;