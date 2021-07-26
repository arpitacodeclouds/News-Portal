import React, { useState, useEffect } from 'react';
import countries from "../../countries.json";
import axios from "axios";
  
function GlobalNews(loactionDetails) {
    const [globalData, setSportsData] = useState(null);
    let [countryDetail, setCountry] = useState('');
    let changeCountries = (e) => {
        console.log(e.target.value)
        setCountry(e.target.value);
    }
    let config = {
        mode:"cors",
        headers:{
          "Content-Type":"application/x-www-form-urlencoded"
        }
      }
    const apiKey = process.env.REACT_APP_API_KEY;
    let country_code = countryDetail ? countryDetail : (loactionDetails.locationDetails.country_code ? loactionDetails.locationDetails.country_code : 'in');
    //for sports
    useEffect(() => {
        axios
        .get(
            `https://newsapi.org/v2/top-headlines?country=${country_code}&category=sports&apiKey=${apiKey}`,config
        )
        .then((response) => setSportsData(response.data))
        .catch((error) => console.log(error));
    }, [country_code,apiKey]);
    let sportsNews = globalData &&  globalData.articles ? globalData.articles.filter((item,key)=> key < 10 )  : [];
    
    return (
        
        <div className="content_area">
            
            <div className="main_content_sports floatleft">
                <div className="single_left_coloum_wrapper select">
                    
                    <div className="country-select">
                        <select id="countries" onChange={changeCountries} className="form-control">
                        {countries.map((item, i) => (
                            <option value={item.code} >{item.name}</option>
                        ))}
                        </select>
                    </div>
                    
                    <h2 className="title">world   news</h2>
                    {
                    sportsNews.length > 0 ? sportsNews.map((item, i) => (
                        <div className="single_left_coloum inner floatleft" key={item.url}> <img src={item.urlToImage} alt="" />
                            <h4>{item.title}</h4>
                            <p>{item.content ? item.content : item.description}</p>
                        </div>
                    )) : <div className="error-message">Something went wrong</div>} 
                </div>    
            </div>
        </div> 
    )
}

export default GlobalNews;