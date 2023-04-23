import React, { useState, useEffect } from "react";
import Category from "../../component/category/Category";
import Hero from "../../component/hero/Hero";
import Product from "../../component/product/Product";
import "./Home.scss";
import { axiosClient } from "../../utils/axiosClient";
import { useSelector } from "react-redux";

function Home() {

    
    const categories = useSelector((state) => state.categoryReducer.categories);
    const [topProducts, setTopProducts] = useState(null);

    async function fetchData(){
        const topProductResponse = await axiosClient.get('/products?filters[isTopPick][$eq]=true&populate=image');
        
        setTopProducts(topProductResponse.data.data)
    }

    useEffect(()=>{
         fetchData();
    }, [])


    return (
        <div className="Home">
            <Hero />
            <section className="collection container">
                <div className="info">
                    <h2 className="heading">Shop By Categories</h2>
                    <p className="subheading">
                        Shop from the best, our seed, tools insecticides, pesticides for better farming.
                    </p>
                </div>
                <div className="content">
                    {categories?.map(category => <Category key = {category.id} category = {category} />)}
                </div>
            </section>

            <section className="collection container">
                <div className="info">
                    <h2 className="heading">Our Top Picks</h2>
                    <p className="subheading">
                        All New Collections with Your Old Trust.
                    </p>
                </div>
                <div className="content">
                {topProducts?.map((product) => (
                        <Product key={product.id} product={product} />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Home;