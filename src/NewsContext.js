import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
    const [localdata, setData] = useState();
    const [sportsdata, setSportsData] = useState();
    const [buisnessdata, setBusinessData] = useState();
    const [entertainmentdata, setEntertainmentData] = useState();
    const [technologydata, setTechnologyData] = useState();
    const [politicsdata, setPoliticsData] = useState();
    const apiKey = process.env.REACT_APP_API_KEY;

    const [locationDetails, setDetails] = useState(null);
    let config = {
        mode:"cors",
        headers:{
          "Content-Type":"application/x-www-form-urlencoded"
        }
      }
    useEffect(() => {
        fetch(
            "https://geolocation-db.com/json/"
        )
        .then(response => response.json())
        .then((data) => {
            setDetails(data)
        });
    }, []);
    let country_code = locationDetails ? locationDetails.country_code : 'in';
    //local region news
    useEffect(() => {
        axios
        .get(
            `https://newsapi.org/v2/top-headlines?country=${country_code}&apiKey=${apiKey}`,config
        )
        .then((response) => setData(response.data))
        .catch((error) => console.log(error));
    }, []);

    //for sports
    useEffect(() => {
        axios
        .get(
            `https://newsapi.org/v2/top-headlines?country=${country_code}&category=sports&apiKey=${apiKey}`,config
        )
        .then((response) => setSportsData(response.data))
        .catch((error) => console.log(error));
    }, []);

    //for business
    useEffect(() => {
        axios
        .get(
            `https://newsapi.org/v2/top-headlines?country=${country_code}&category=business&apiKey=${apiKey}`,config
        )
        .then((response) => setBusinessData(response.data))
        .catch((error) => console.log(error));
    }, []);
    //for entertainment
    useEffect(() => {
        axios
        .get(
            `https://newsapi.org/v2/top-headlines?country=${country_code}&category=entertainment&apiKey=${apiKey}`,config
        )
        .then((response) => setEntertainmentData(response.data))
        .catch((error) => console.log(error));
    }, []);
    //for technology
    useEffect(() => {
        axios
        .get(
            `https://newsapi.org/v2/top-headlines?country=${country_code}&category=technology&apiKey=${apiKey}`,config
        )
        .then((response) => setTechnologyData(response.data))
        .catch((error) => console.log(error));
    }, []);
    //for technology
    useEffect(() => {
        axios
        .get(
            `https://newsapi.org/v2/top-headlines?country=${country_code}&category=politics&apiKey=${apiKey}`,config
        )
        .then((response) => setPoliticsData(response.data))
        .catch((error) => console.log(error));
    }, []);
    var all_news = {};
    if(localdata && sportsdata && buisnessdata && technologydata && entertainmentdata && politicsdata){
        all_news = {
            localData:localdata,
            sportsData:sportsdata,
            businessData:buisnessdata,
            entertainmentData:entertainmentdata,
            setTechnologyData:technologydata,
            politicsdata:politicsdata
        }
    }
        
    return (
        <>
        {all_news ?
            <NewsContext.Provider value={{ all_news }} >
            {props.children}
            </NewsContext.Provider>
            
            : "Loading"
        }
        
        </>
    );
};