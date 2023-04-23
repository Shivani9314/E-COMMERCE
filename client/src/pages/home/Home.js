import React from "react";
import Category from "../../component/category/Category";
import Hero from "../../component/hero/Hero";
import Product from "../../component/product/Product";
import "./Home.scss";

function Home() {
    return (
        <div className="Home">
            <Hero />
            <section className="collection container">
                <div className="info">
                    <h2 className="heading">Shop By Categories</h2>
                    <p className="subheading">
                        Shop from the best, our Film and TV Posters Collection.
                    </p>
                </div>
                <div className="content">
                    <Category />
                    <Category />
                    <Category />
                </div>
            </section>

            <section className="collection container">
                <div className="info">
                    <h2 className="heading">Our Top Picks</h2>
                    <p className="subheading">
                        All New Designs, Same Old Details.
                    </p>
                </div>
                <div className="content">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </section>
        </div>
    );
}

export default Home;