import React, { useState, useEffect } from 'react';
// import axios from "axios";
// import Header from "../../components/Header/Header";
// import Footer from "../../components/Footer/Footer";
import GlobalNews from "../GlobalNews/GlobalNews";

import  couuntries from "../../countries.json";

function News(props) {
    const news = props.newsData  && props.newsData.articles ? props.newsData.articles : []
    const category = props.category;
    
    return (
        <>
        {
            category !== "world-news" ? 
            <div className="content_area">
                <div className="main_content_sports floatleft">
                    <div className="single_left_coloum_wrapper">
                        <h2 className="title">{props.category.replace('-', ' ')}</h2>
                        {
                        news.length > 0 ? news.map((item, i) => (
                            <div className="single_left_coloum inner floatleft" key={item.url}> <img src={item.urlToImage} alt="" />
                                <h4>{item.title}</h4>
                                <p>{item.content ? item.content : item.description}</p>
                            </div>
                        )) : <div className="error-message">Something went wrong</div>} 
                    </div>    
                </div>
            </div> :
            <GlobalNews locationDetails={props.loactionDetails} />
        }
        
        </>  
    )
}

export default News;