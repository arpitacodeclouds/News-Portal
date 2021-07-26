import React, { useState, useEffect } from "react";
import { NewsContextProvider } from "../../NewsContext";
import NewsFeed from "./NewsFeed";

const PointUserLocation = ({parentCallback,category}) => {
    const [details, setDetails] = useState(null);
    useEffect(() => {
        fetch(
            "https://geolocation-db.com/json/"
        )
            .then(response => response.json())
            .then((data) => {
                parentCallback(data)
                setDetails(data)
            });
    }, []);

    return (
        <>
            <NewsContextProvider>
                <NewsFeed loactionDetails={details} category = {category}/>
            </NewsContextProvider>
        </>
    );
};

export default PointUserLocation;